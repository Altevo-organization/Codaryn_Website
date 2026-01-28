"use client";

import { TrendingUp, Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import type { Project } from "@/lib/projects";

interface ProjectResultsProps {
  project: Project;
}

export function ProjectResults({ project }: ProjectResultsProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <MotionDiv className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-3 block">
            Resultats
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Impact <span className="gradient-text">mesurable</span>
          </h2>
          <p className="text-slate-400">
            Des resultats concrets qui temoignent de la valeur apportee par la solution.
          </p>
        </MotionDiv>

        {/* Results grid */}
        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
          staggerDelay={0.1}
        >
          {project.results.map((result, index) => (
            <StaggerItem key={index}>
              <Card className="text-center h-full group hover:border-altevo-violet/30 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center`}
                    >
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div
                    className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} bg-clip-text text-transparent`}
                  >
                    {result.metric}
                  </div>
                  <p className="text-slate-400 text-sm">{result.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Testimonial */}
        {project.testimonial && (
          <MotionDiv delay={0.3}>
            <Card className="max-w-4xl mx-auto border-altevo-violet/20 bg-gradient-to-br from-altevo-dark-light to-altevo-dark">
              <CardContent className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Quote icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center flex-shrink-0`}
                  >
                    <Quote className="w-7 h-7 text-white" />
                  </div>

                  {/* Quote content */}
                  <div>
                    <blockquote className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6 italic">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center`}
                      >
                        <span className="text-white font-semibold">
                          {project.testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          {project.testimonial.author}
                        </div>
                        <div className="text-slate-500 text-sm">
                          {project.testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        )}
      </div>
    </section>
  );
}
