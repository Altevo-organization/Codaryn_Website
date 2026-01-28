"use client";

import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DynamicIcon } from "@/lib/icons";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  const cardContent = (
    <Card className="group cursor-pointer overflow-hidden h-full border-altevo-dark-accent/50 hover:border-altevo-violet/30 transition-all duration-300">
      {/* Header avec gradient et icone */}
      <div
        className={`relative h-48 sm:h-56 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
      >
        {/* Pattern de fond */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-altevo-dark/40" />

        {/* Icone centrale */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div
            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
          >
            <DynamicIcon name={project.iconName} className="w-10 h-10 text-white" />
          </div>
          <span className="text-white/70 text-sm font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
            {project.sector}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-altevo-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-medium flex items-center gap-2 px-4 py-2 rounded-full bg-altevo-violet/80 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            Voir le projet
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Category badge */}
        <span className="text-altevo-violet-light text-sm font-medium">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mt-2 mb-2 group-hover:text-altevo-violet-light transition-colors duration-200">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-slate-500 text-sm mb-3">{project.subtitle}</p>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {project.duration}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {project.year}
          </span>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2.5 py-1 text-xs rounded-md bg-altevo-dark-accent/50 text-slate-300 border border-altevo-dark-accent/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-1 text-xs rounded-md bg-altevo-dark-accent/50 text-slate-400">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (prefersReducedMotion) {
    return (
      <Link href={`/realisations/${project.slug}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link href={`/realisations/${project.slug}`} className="block h-full">
        {cardContent}
      </Link>
    </motion.div>
  );
}
