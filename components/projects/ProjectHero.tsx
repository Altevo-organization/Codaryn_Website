"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag, ExternalLink } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function getIcon(iconName: string) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const Icon = icons[iconName];
  return Icon || LucideIcons.Folder;
}

export function ProjectHero({ project }: { project: Project }) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = getIcon(project.iconName);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} opacity-5`} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants}>
            <Link href="/realisations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-altevo-yellow text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Retour aux réalisations
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-altevo-yellow text-xs font-mono uppercase tracking-wider">{project.category}</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400 text-xs">{project.sector}</span>
            {project.confidentialityLevel === "anonymized" && (
              <span className="px-2 py-0.5 rounded bg-altevo-orange/10 text-altevo-orange text-[10px] font-mono">Anonymisé</span>
            )}
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-zinc-400 mb-8">
            {project.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <Clock className="w-4 h-4 text-altevo-yellow" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <Calendar className="w-4 h-4 text-altevo-yellow" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <Tag className="w-4 h-4 text-altevo-yellow" />
              <span>{project.tags.join(", ")}</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-altevo-yellow to-altevo-orange text-altevo-black font-semibold text-sm hover:shadow-lg hover:shadow-altevo-yellow/25 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" /> Tester la démo
              </a>
            ) : (
              <Link
                href={`/realisations/${project.slug}/demo`}
                className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-altevo-yellow to-altevo-orange text-altevo-black font-semibold text-sm hover:shadow-lg hover:shadow-altevo-yellow/25 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" /> Voir l&apos;aperçu
              </Link>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-altevo-dark-accent text-white font-medium text-sm hover:bg-white/5 hover:border-altevo-yellow/30 transition-all duration-300"
            >
              Projet similaire ? Demander un devis
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
