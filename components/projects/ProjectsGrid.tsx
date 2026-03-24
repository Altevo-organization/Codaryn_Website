"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projects, getAllTags } from "@/lib/projects";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { Search } from "lucide-react";

export function ProjectsGrid() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const allTags = getAllTags();

  const filteredProjects = projects.filter((p) => {
    const matchesTag = !activeTag || p.tags.includes(activeTag);
    const matchesSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesTag && matchesSearch;
  });

  return (
    <div>
      {/* Search + Filters */}
      <div className="mb-10 space-y-4">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Rechercher un projet, une techno..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-altevo-dark-light border border-altevo-dark-accent text-white placeholder:text-zinc-600 focus:border-altevo-yellow/30 focus:outline-none focus:ring-1 focus:ring-altevo-yellow/20 transition-all text-sm"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              !activeTag
                ? "bg-altevo-yellow text-altevo-black"
                : "bg-altevo-dark-light text-zinc-400 hover:text-white border border-altevo-dark-accent"
            }`}
          >
            Tous
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTag === tag
                  ? "bg-altevo-yellow text-altevo-black"
                  : "bg-altevo-dark-light text-zinc-400 hover:text-white border border-altevo-dark-accent"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className="text-center py-16">
          <p className="text-zinc-500 text-lg">Aucun projet trouvé.</p>
        </div>
      )}
    </div>
  );
}
