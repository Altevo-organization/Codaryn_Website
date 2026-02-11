"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { projects } from "@/lib/projects";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

interface PortfolioProps {
  limit?: number;
}

function getIcon(iconName: string) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const Icon = icons[iconName];
  return Icon || LucideIcons.Folder;
}

export function Portfolio({ limit }: PortfolioProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-16 md:py-28 relative" id="realisations">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-altevo-yellow text-xs md:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 block font-mono">
            Nos réalisations
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Projets qui{" "}
            <span className="gradient-text-fire">transforment</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto">
            Découvrez nos dernières réalisations et les solutions que nous avons conçues
            pour nos clients.
          </p>
        </div>

        {/* Mobile: Horizontal snap-scroll cards */}
        <div className="md:hidden overflow-hidden -mx-5">
          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-5 scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {displayedProjects.map((project) => {
              const Icon = getIcon(project.iconName);
              const hasDemoUrl = !!project.demoUrl;
              return (
                <div
                  key={project.id}
                  className="snap-start shrink-0 w-[300px]"
                >
                  <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                    <Link href={`/realisations/${project.slug}`} className="block group">
                      {/* Header gradient */}
                      <div className={`h-36 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} relative overflow-hidden flex items-center justify-center`}>
                        <div className="absolute inset-0 bg-black/30" />
                        <Icon className="w-12 h-12 text-white/80 relative z-10" />
                        <div className="absolute bottom-2 right-2 flex gap-1">
                          <span className="px-1.5 py-0.5 rounded bg-black/40 text-white/90 text-[10px] font-mono">
                            {project.year}
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-black/40 text-white/90 text-[10px] font-mono">
                            {project.duration}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 pb-0">
                        <span className="text-altevo-yellow text-[10px] font-mono uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-base font-bold text-white mt-0.5 mb-2 group-hover:text-altevo-yellow transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 text-xs leading-relaxed mb-3 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech chips */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="tech-chip text-[9px] px-2 py-1">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="tech-chip text-[9px] px-2 py-1">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>

                        {/* Results preview */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {project.results.slice(0, 2).map((result, i) => (
                            <div key={i} className="text-center p-1.5 rounded-lg bg-white/[0.03]">
                              <div className="text-altevo-yellow font-bold text-xs">{result.metric}</div>
                              <div className="text-zinc-500 text-[9px]">{result.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Link>

                    {/* Action buttons */}
                    <div className="px-4 pb-4 mt-auto flex gap-2">
                      <Link
                        href={`/realisations/${project.slug}`}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-gradient-to-r from-altevo-yellow/10 to-altevo-orange/10 border border-altevo-yellow/20 text-altevo-yellow text-xs font-medium"
                      >
                        Voir le projet
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                      {hasDemoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-lg border border-altevo-yellow/20 text-altevo-yellow text-xs font-medium"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Démo
                        </a>
                      ) : (
                        <Link
                          href={`/realisations/${project.slug}/demo`}
                          className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-lg border border-white/[0.06] text-zinc-500 text-xs font-medium"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Aperçu
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Right padding spacer so last card isn't clipped */}
            <div className="shrink-0 w-1" aria-hidden="true" />
          </div>
          {/* Scroll progress dots */}
          <div className="flex justify-center gap-1.5 mt-3 px-5">
            {displayedProjects.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-altevo-dark-accent" />
            ))}
          </div>
        </div>

        {/* Desktop: 2-col grid (unchanged) */}
        <StaggerContainer className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedProjects.map((project) => {
            const Icon = getIcon(project.iconName);
            const hasDemoUrl = !!project.demoUrl;
            return (
              <StaggerItem key={project.id}>
                <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                  <Link href={`/realisations/${project.slug}`} className="block group">
                    <div className={`h-48 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} relative overflow-hidden flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-black/30" />
                      <Icon className="w-16 h-16 text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute bottom-3 right-3 flex gap-1.5">
                        <span className="px-2 py-1 rounded-md bg-black/40 text-white/90 text-xs font-mono">
                          {project.year}
                        </span>
                        <span className="px-2 py-1 rounded-md bg-black/40 text-white/90 text-xs font-mono">
                          {project.duration}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 pb-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className="text-altevo-yellow text-xs font-mono uppercase tracking-wider">
                            {project.category}
                          </span>
                          <h3 className="text-xl font-bold text-white mt-1 group-hover:text-altevo-yellow transition-colors duration-200">
                            {project.title}
                          </h3>
                        </div>
                        <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-altevo-yellow group-hover:translate-x-1 transition-all duration-200 shrink-0 mt-1" />
                      </div>

                      <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span key={tech} className="tech-chip text-[10px]">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="tech-chip text-[10px]">
                            +{project.technologies.length - 5}
                          </span>
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
                      Voir le projet
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {hasDemoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg border border-altevo-yellow/20 text-altevo-yellow text-sm font-medium hover:bg-altevo-yellow/10 transition-all duration-200"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Démo
                      </a>
                    ) : (
                      <Link
                        href={`/realisations/${project.slug}/demo`}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg border border-white/[0.06] text-zinc-500 text-sm font-medium hover:text-white hover:border-zinc-600 transition-all duration-200"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Aperçu
                      </Link>
                    )}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {limit && (
          <div className="text-center mt-8 md:mt-12">
            <Link
              href="/realisations"
              className="magnetic-btn inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-lg bg-altevo-yellow/10 border border-altevo-yellow/20 text-altevo-yellow font-medium hover:bg-altevo-yellow/20 transition-all duration-200 text-sm"
            >
              Toutes nos réalisations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
