"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { DynamicIcon } from "@/lib/icons";
import type { Project } from "@/lib/projects";

interface ProjectFeaturesProps {
  project: Project;
}

export function ProjectFeatures({ project }: ProjectFeaturesProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <MotionDiv className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-3 block">
            Fonctionnalites
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Les fonctionnalites <span className="gradient-text">cles</span>
          </h2>
          <p className="text-slate-400">
            Un ensemble de fonctionnalites pensees pour repondre aux besoins metier
            specifiques du projet.
          </p>
        </MotionDiv>

        {/* Features grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {project.features.map((feature, index) => {
            return (
              <StaggerItem key={index}>
                <Card className="h-full group hover:border-altevo-violet/30 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <DynamicIcon name={feature.iconName} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
