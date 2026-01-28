"use client";

import { Layers, Server, Database, Smartphone } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, SlideLeft, SlideRight } from "@/components/MotionWrapper";
import type { Project } from "@/lib/projects";

interface ProjectTechStackProps {
  project: Project;
}

export function ProjectTechStack({ project }: ProjectTechStackProps) {
  return (
    <section className="py-16 md:py-24 bg-altevo-dark-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Technologies */}
          <SlideLeft>
            <div>
              <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-3 block">
                Stack technique
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Technologies <span className="gradient-text">utilisees</span>
              </h2>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg bg-altevo-dark border border-altevo-dark-accent/50 text-slate-300 hover:border-altevo-violet/30 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </SlideLeft>

          {/* Architecture */}
          <SlideRight>
            <div>
              <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-3 block">
                Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Vue <span className="gradient-text">d&apos;ensemble</span>
              </h2>

              <div className="space-y-3">
                {project.architecture.map((item, index) => {
                  // Determine icon based on content
                  let IconComponent = Layers;
                  if (
                    item.toLowerCase().includes("mobile") ||
                    item.toLowerCase().includes("ios") ||
                    item.toLowerCase().includes("android")
                  ) {
                    IconComponent = Smartphone;
                  } else if (
                    item.toLowerCase().includes("api") ||
                    item.toLowerCase().includes("backend") ||
                    item.toLowerCase().includes("authentification")
                  ) {
                    IconComponent = Server;
                  } else if (
                    item.toLowerCase().includes("base") ||
                    item.toLowerCase().includes("donnée") ||
                    item.toLowerCase().includes("database")
                  ) {
                    IconComponent = Database;
                  }

                  return (
                    <Card
                      key={index}
                      className="border-altevo-dark-accent/50 hover:border-altevo-violet/30 transition-colors duration-300"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center flex-shrink-0`}
                          >
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-slate-300 text-sm">{item}</span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
