"use client";

import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { Project } from "@/lib/projects";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export function ProjectChallenges({ project }: { project: Project }) {
  return (
    <section className="py-16 md:py-24 bg-altevo-dark-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Défis <span className="gradient-text-fire">techniques</span>
          </h2>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.challenges.map((challenge, i) => (
              <StaggerItem key={i}>
                <div className="glass-card rounded-xl p-5 h-full">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-altevo-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle className="w-4 h-4 text-altevo-orange" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{challenge.title}</h3>
                      <p className="text-zinc-400 text-xs leading-relaxed">{challenge.description}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Architecture */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-white mb-6">Architecture technique</h3>
            <div className="glass-card rounded-xl p-6">
              <ul className="space-y-3">
                {project.architecture.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-altevo-yellow mt-0.5 shrink-0" />
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
