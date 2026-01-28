"use client";

import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects";

interface ProjectsGridProps {
  limit?: number;
}

export function ProjectsGrid({ limit }: ProjectsGridProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {displayedProjects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
