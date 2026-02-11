/**
 * generate-projects.ts
 *
 * Scans the parent freelance directory for project folders,
 * detects their tech stack from package.json, and outputs
 * a summary JSON that can be used to seed lib/projects.ts.
 *
 * Usage: npx ts-node scripts/generate-projects.ts
 *        or: npx tsx scripts/generate-projects.ts
 *
 * IMPORTANT: This script NEVER reads .env files, secrets,
 * tokens, API keys, or client-specific data. It only reads
 * package.json for dependency detection.
 */

import * as fs from "fs";
import * as path from "path";

interface ScannedProject {
  folderName: string;
  hasPackageJson: boolean;
  dependencies: string[];
  devDependencies: string[];
  detectedStack: string[];
  scripts: string[];
  description: string;
}

const FREELANCE_DIR = path.resolve(__dirname, "../../");
const SKIP_FOLDERS = ["node_modules", ".git", ".next", "dist", "build", ".cache"];
const SENSITIVE_FILES = [".env", ".env.local", ".env.production", "credentials.json", "secrets.json"];

/** Map common npm packages to readable tech names */
const TECH_MAP: Record<string, string> = {
  react: "React",
  "react-native": "React Native",
  next: "Next.js",
  vue: "Vue.js",
  angular: "Angular",
  express: "Express",
  fastify: "Fastify",
  "hapi": "Hapi",
  prisma: "Prisma",
  "@prisma/client": "Prisma",
  sequelize: "Sequelize",
  typeorm: "TypeORM",
  mongoose: "Mongoose",
  postgresql: "PostgreSQL",
  pg: "PostgreSQL",
  mysql2: "MySQL",
  mongodb: "MongoDB",
  redis: "Redis",
  typescript: "TypeScript",
  tailwindcss: "Tailwind CSS",
  "framer-motion": "Framer Motion",
  expo: "Expo",
  docker: "Docker",
  vite: "Vite",
  webpack: "Webpack",
  jest: "Jest",
  vitest: "Vitest",
  zod: "Zod",
  zustand: "Zustand",
  "react-query": "React Query",
  "@tanstack/react-query": "React Query",
  "socket.io": "Socket.io",
  jsonwebtoken: "JWT",
  bcrypt: "bcrypt",
  bcryptjs: "bcrypt",
  stripe: "Stripe",
  "date-fns": "date-fns",
  dayjs: "Day.js",
  "react-hook-form": "React Hook Form",
};

function scanDirectory(dirPath: string): ScannedProject | null {
  const folderName = path.basename(dirPath);

  // Skip hidden folders and known non-project directories
  if (folderName.startsWith(".") || SKIP_FOLDERS.includes(folderName)) {
    return null;
  }

  const packageJsonPath = path.join(dirPath, "package.json");
  if (!fs.existsSync(packageJsonPath)) {
    return null;
  }

  // Check for sensitive files and WARN (never read them)
  const hasSensitiveFiles = SENSITIVE_FILES.filter((f) =>
    fs.existsSync(path.join(dirPath, f))
  );
  if (hasSensitiveFiles.length > 0) {
    console.warn(
      `  [WARN] ${folderName} contains sensitive files: ${hasSensitiveFiles.join(", ")} — SKIPPING these files`
    );
  }

  try {
    const raw = fs.readFileSync(packageJsonPath, "utf-8");
    const pkg = JSON.parse(raw);

    const deps = Object.keys(pkg.dependencies || {});
    const devDeps = Object.keys(pkg.devDependencies || {});
    const allDeps = [...deps, ...devDeps];
    const scripts = Object.keys(pkg.scripts || {});

    // Detect tech stack
    const detectedStack: string[] = [];
    for (const dep of allDeps) {
      const normalized = dep.toLowerCase();
      if (TECH_MAP[normalized] && !detectedStack.includes(TECH_MAP[normalized])) {
        detectedStack.push(TECH_MAP[normalized]);
      }
    }

    // Detect Docker
    if (
      fs.existsSync(path.join(dirPath, "Dockerfile")) ||
      fs.existsSync(path.join(dirPath, "docker-compose.yml")) ||
      fs.existsSync(path.join(dirPath, "docker-compose.yaml"))
    ) {
      if (!detectedStack.includes("Docker")) {
        detectedStack.push("Docker");
      }
    }

    return {
      folderName,
      hasPackageJson: true,
      dependencies: deps,
      devDependencies: devDeps,
      detectedStack,
      scripts,
      description: pkg.description || "",
    };
  } catch (err) {
    console.error(`  [ERROR] Failed to parse ${packageJsonPath}:`, err);
    return null;
  }
}

function main() {
  console.log("=== Altévo Project Scanner ===\n");
  console.log(`Scanning: ${FREELANCE_DIR}\n`);

  if (!fs.existsSync(FREELANCE_DIR)) {
    console.error(`Directory not found: ${FREELANCE_DIR}`);
    process.exit(1);
  }

  const entries = fs.readdirSync(FREELANCE_DIR, { withFileTypes: true });
  const projects: ScannedProject[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const fullPath = path.join(FREELANCE_DIR, entry.name);
    console.log(`Scanning: ${entry.name}...`);

    const project = scanDirectory(fullPath);
    if (project) {
      projects.push(project);
      console.log(`  ✓ Stack: ${project.detectedStack.join(", ")}`);
    } else {
      console.log(`  ✗ Skipped (no package.json or excluded)`);
    }

    // Also check for monorepo sub-packages
    const appsDir = path.join(fullPath, "apps");
    const packagesDir = path.join(fullPath, "packages");
    for (const subDir of [appsDir, packagesDir]) {
      if (fs.existsSync(subDir) && fs.statSync(subDir).isDirectory()) {
        const subEntries = fs.readdirSync(subDir, { withFileTypes: true });
        for (const sub of subEntries) {
          if (!sub.isDirectory()) continue;
          const subProject = scanDirectory(path.join(subDir, sub.name));
          if (subProject) {
            subProject.folderName = `${entry.name}/${path.basename(subDir)}/${sub.name}`;
            console.log(`  ✓ Sub-package: ${subProject.folderName} — ${subProject.detectedStack.join(", ")}`);
          }
        }
      }
    }
  }

  console.log(`\n=== Results: ${projects.length} projects found ===\n`);

  // Output summary
  const output = {
    scannedAt: new Date().toISOString(),
    directory: FREELANCE_DIR,
    projects: projects.map((p) => ({
      folder: p.folderName,
      stack: p.detectedStack,
      scripts: p.scripts,
      description: p.description,
    })),
  };

  const outputPath = path.join(__dirname, "../data/scanned-projects.json");
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), "utf-8");
  console.log(`Output written to: ${outputPath}`);
  console.log("\nDone! Review the output and update lib/projects.ts as needed.");
}

main();
