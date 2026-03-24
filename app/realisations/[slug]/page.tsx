import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { generateMetadata as createMetadata } from "@/lib/seo";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import {
  ProjectHero,
  ProjectFeatures,
  ProjectChallenges,
  ProjectResults,
  ProjectTechStack,
  ProjectRole,
  ProjectCTA,
} from "@/components/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all projects
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each project page
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({
      title: "Projet non trouve",
      description: "Ce projet n'existe pas ou a ete deplace.",
      path: `/realisations/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: `${project.title} - Etude de cas`,
    description: project.description,
    path: `/realisations/${project.slug}`,
    keywords: [
      project.sector.toLowerCase(),
      project.category.toLowerCase(),
      ...project.technologies.slice(0, 5).map((t) => t.toLowerCase()),
      "etude de cas",
      "realisation",
    ],
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <ProjectHero project={project} />

      {/* Features Section */}
      <ProjectFeatures project={project} />

      {/* Challenges Section */}
      <ProjectChallenges project={project} />

      {/* Results Section */}
      <ProjectResults project={project} />

      {/* Tech Stack Section */}
      <ProjectTechStack project={project} />

      {/* Role Section */}
      <ProjectRole project={project} />

      {/* CTA Section */}
      <ProjectCTA project={project} />
    </>
  );
}
