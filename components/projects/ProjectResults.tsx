"use client";

import { TrendingUp, Quote } from "lucide-react";
import type { Project } from "@/lib/projects";
import { StaggerContainer, StaggerItem, MotionDiv } from "@/components/MotionWrapper";

export function ProjectResults({ project }: { project: Project }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Résultats <span className="gradient-text-fire">concrets</span>
          </h2>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {project.results.map((result, i) => (
              <StaggerItem key={i}>
                <div className="glass-card rounded-xl p-5 text-center">
                  <TrendingUp className="w-5 h-5 text-altevo-yellow mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text-fire mb-1">{result.metric}</div>
                  <div className="text-zinc-400 text-xs">{result.description}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {project.testimonial && (
            <MotionDiv delay={0.3}>
              <div className="glass-card rounded-2xl p-8 relative">
                <Quote className="w-10 h-10 text-altevo-yellow/15 absolute top-6 left-6" />
                <blockquote className="text-zinc-200 text-lg leading-relaxed mb-6 relative z-10 italic pl-2">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-altevo-yellow to-altevo-orange flex items-center justify-center text-altevo-black font-bold text-sm">
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{project.testimonial.author}</div>
                    <div className="text-zinc-500 text-xs">{project.testimonial.position}</div>
                  </div>
                </div>
              </div>
            </MotionDiv>
          )}
        </div>
      </div>
    </section>
  );
}
