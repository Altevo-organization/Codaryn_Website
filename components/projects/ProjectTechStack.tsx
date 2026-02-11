"use client";

import type { Project } from "@/lib/projects";
import { MotionDiv } from "@/components/MotionWrapper";

export function ProjectTechStack({ project }: { project: Project }) {
  return (
    <section className="py-16 md:py-24 bg-altevo-dark-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Stack <span className="gradient-text-fire">technique</span>
          </h2>

          <MotionDiv>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-chip">{tech}</span>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
