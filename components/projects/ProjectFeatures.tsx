"use client";

import * as LucideIcons from "lucide-react";
import type { Project } from "@/lib/projects";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

function getIcon(iconName: string) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const Icon = icons[iconName];
  return Icon || LucideIcons.CircleDot;
}

export function ProjectFeatures({ project }: { project: Project }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-altevo-yellow text-sm font-mono uppercase tracking-wider">Contexte</span>
            <p className="text-zinc-300 mt-3 leading-relaxed">{project.context}</p>
          </div>

          <div className="mb-12">
            <span className="text-altevo-orange text-sm font-mono uppercase tracking-wider">Défi</span>
            <p className="text-zinc-300 mt-3 leading-relaxed">{project.challenge}</p>
          </div>

          <div className="mb-16">
            <span className="text-altevo-red text-sm font-mono uppercase tracking-wider">Solution</span>
            <p className="text-zinc-300 mt-3 leading-relaxed">{project.solution}</p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Fonctionnalités <span className="gradient-text-fire">clés</span>
          </h2>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feature, i) => {
              const Icon = getIcon(feature.iconName);
              return (
                <StaggerItem key={i}>
                  <div className="glass-card rounded-xl p-5 h-full">
                    <div className="w-10 h-10 rounded-lg bg-altevo-yellow/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-altevo-yellow" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
