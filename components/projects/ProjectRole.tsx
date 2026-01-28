"use client";

import { CheckCircle2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import type { Project } from "@/lib/projects";

interface ProjectRoleProps {
  project: Project;
}

export function ProjectRole({ project }: ProjectRoleProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <MotionDiv className="text-center mb-12">
            <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-3 block">
              Notre intervention
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Le role <span className="gradient-text">d&apos;Altevo</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Un accompagnement complet, de la conception a la mise en production
              et au-dela.
            </p>
          </MotionDiv>

          {/* Role list */}
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {project.role.map((roleItem, index) => (
              <StaggerItem key={index}>
                <Card className="border-altevo-dark-accent/50 hover:border-altevo-violet/30 transition-all duration-300 group">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-slate-300">{roleItem}</span>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
