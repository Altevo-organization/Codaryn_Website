"use client";

import { AlertTriangle, CheckCircle2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, SlideLeft, SlideRight } from "@/components/MotionWrapper";
import type { Project } from "@/lib/projects";

interface ProjectChallengesProps {
  project: Project;
}

export function ProjectChallenges({ project }: ProjectChallengesProps) {
  return (
    <section className="py-16 md:py-24 bg-altevo-dark-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Context & Challenge */}
          <SlideLeft>
            <div className="space-y-8">
              {/* Context */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <span className="text-xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Contexte</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">{project.context}</p>
              </div>

              {/* Challenge */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Problematique
                  </h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Solution</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </SlideLeft>

          {/* Technical Challenges */}
          <SlideRight>
            <div>
              <MotionDiv className="mb-6">
                <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-2 block">
                  Defis techniques
                </span>
                <h2 className="text-2xl font-bold text-white">
                  Les challenges releves
                </h2>
              </MotionDiv>

              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <Card
                    key={index}
                    className="border-altevo-dark-accent/50 hover:border-altevo-violet/30 transition-colors duration-300"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <span className="text-white text-sm font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">
                            {challenge.title}
                          </h4>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {challenge.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
