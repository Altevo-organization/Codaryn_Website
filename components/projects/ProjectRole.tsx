"use client";

import { CheckCircle2 } from "lucide-react";
import type { Project } from "@/lib/projects";
import { MotionDiv } from "@/components/MotionWrapper";

export function ProjectRole({ project }: { project: Project }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Notre <span className="gradient-text-fire">rôle</span>
          </h2>

          <MotionDiv>
            <div className="glass-card rounded-xl p-6">
              <ul className="space-y-3">
                {project.role.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-altevo-yellow mt-0.5 shrink-0" />
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
