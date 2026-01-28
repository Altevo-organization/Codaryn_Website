"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Building2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/MotionWrapper";
import { DynamicIcon } from "@/lib/icons";
import type { Project } from "@/lib/projects";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-altevo-dark via-altevo-dark/80 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back button */}
        <MotionDiv className="mb-8">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="gap-2 text-slate-400 hover:text-white"
          >
            <Link href="/realisations">
              <ArrowLeft className="w-4 h-4" />
              Retour aux projets
            </Link>
          </Button>
        </MotionDiv>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <MotionDiv delay={0.1}>
            {/* Category & Sector */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span className="text-slate-400 text-sm flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                {project.sector}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-slate-300 mb-6">{project.subtitle}</p>

            {/* Description */}
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {project.longDescription}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-altevo-violet-light" />
                <span>
                  Durée : <strong>{project.duration}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-4 h-4 text-altevo-violet-light" />
                <span>
                  Livraison : <strong>{project.year}</strong>
                </span>
              </div>
            </div>
          </MotionDiv>

          {/* Icon visual */}
          <MotionDiv delay={0.2} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} blur-3xl opacity-20 scale-150`}
              />

              {/* Main icon container */}
              <div
                className={`relative w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center shadow-2xl`}
              >
                {/* Pattern overlay */}
                <div className="absolute inset-0 rounded-3xl opacity-20">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                      backgroundSize: "16px 16px",
                    }}
                  />
                </div>

                <DynamicIcon name={project.iconName} className="w-24 h-24 md:w-32 md:h-32 text-white relative z-10" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-altevo-dark-light border border-altevo-dark-accent/50 flex items-center justify-center shadow-lg">
                <span className="text-lg">
                  {project.sector === "Transport & Logistique" ? "📦" : "🏥"}
                </span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-altevo-dark-light border border-altevo-dark-accent/50 flex items-center justify-center shadow-lg">
                <span className="text-lg">
                  {project.sector === "Transport & Logistique" ? "🚚" : "📱"}
                </span>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
