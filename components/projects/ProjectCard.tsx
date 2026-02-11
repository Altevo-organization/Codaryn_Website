"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { Project } from "@/lib/projects";

function getIcon(iconName: string) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const Icon = icons[iconName];
  return Icon || LucideIcons.Folder;
}

export function ProjectCard({ project }: { project: Project }) {
  const Icon = getIcon(project.iconName);
  const hasDemoUrl = !!project.demoUrl;

  return (
    <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
      <Link href={`/realisations/${project.slug}`} className="block group">
        <div className={`h-44 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} relative overflow-hidden flex items-center justify-center`}>
          <div className="absolute inset-0 bg-black/30" />
          <Icon className="w-14 h-14 text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute bottom-3 left-3 flex gap-1.5">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-sm text-white/90 text-[10px] font-mono">
                {tag}
              </span>
            ))}
          </div>
          <div className="absolute bottom-3 right-3 flex gap-1.5">
            <span className="px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-sm text-white/90 text-[10px] font-mono">
              {project.year}
            </span>
          </div>
        </div>

        <div className="p-6 pb-0">
          <span className="text-altevo-yellow text-xs font-mono uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-altevo-yellow transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-chip text-[10px]">{tech}</span>
            ))}
            {project.technologies.length > 4 && (
              <span className="tech-chip text-[10px]">+{project.technologies.length - 4}</span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {project.results.slice(0, 2).map((result, i) => (
              <div key={i} className="text-center p-2 rounded-lg bg-white/[0.03]">
                <div className="text-altevo-yellow font-bold text-sm">{result.metric}</div>
                <div className="text-zinc-500 text-[10px]">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </Link>

      <div className="px-6 pb-6 mt-auto flex gap-3">
        <Link
          href={`/realisations/${project.slug}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-altevo-yellow/10 to-altevo-orange/10 border border-altevo-yellow/20 text-altevo-yellow text-sm font-medium hover:from-altevo-yellow/20 hover:to-altevo-orange/20 transition-all duration-300"
        >
          Voir le projet <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        {hasDemoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-altevo-yellow/20 text-altevo-yellow text-sm font-medium hover:bg-altevo-yellow/10 transition-all duration-200"
          >
            <ExternalLink className="w-3.5 h-3.5" /> Démo
          </a>
        ) : (
          <Link
            href={`/realisations/${project.slug}/demo`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-white/[0.06] text-zinc-500 text-sm hover:text-white hover:border-zinc-600 transition-all duration-200"
          >
            <ExternalLink className="w-3.5 h-3.5" /> Aperçu
          </Link>
        )}
      </div>
    </div>
  );
}
