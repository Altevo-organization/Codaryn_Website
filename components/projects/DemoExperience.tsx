"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Play } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function getIcon(name: string) {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const Icon = icons[name];
  return Icon || LucideIcons.CircleDot;
}

export function DemoExperience({ project }: { project: Project }) {
  const [activeStep, setActiveStep] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const steps = project.features.slice(0, 6);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link href={`/realisations/${project.slug}`} className="inline-flex items-center gap-2 text-zinc-400 hover:text-altevo-yellow text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au projet
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-altevo-yellow to-altevo-orange flex items-center justify-center">
              <Play className="w-5 h-5 text-altevo-black" />
            </div>
            <div>
              <span className="text-altevo-yellow text-xs font-mono uppercase tracking-wider">Démo interactive</span>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h1>
            </div>
          </div>
          <p className="text-zinc-400">{project.longDescription}</p>
        </div>

        {/* Demo walkthrough */}
        <div className="max-w-5xl mx-auto">
          {/* Steps navigation */}
          <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeStep === i
                    ? "bg-altevo-yellow text-altevo-black"
                    : i < activeStep
                    ? "bg-altevo-yellow/10 text-altevo-yellow border border-altevo-yellow/20"
                    : "bg-altevo-dark-light text-zinc-500 border border-altevo-dark-accent"
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-[10px] font-mono">
                  {i < activeStep ? <CheckCircle2 className="w-3 h-3" /> : i + 1}
                </span>
                {step.title}
              </button>
            ))}
          </div>

          {/* Active step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-card rounded-2xl overflow-hidden">
                {/* Screenshot placeholder */}
                <div className={`aspect-video bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} relative flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative z-10 text-center">
                    {(() => { const I = getIcon(steps[activeStep].iconName); return <I className="w-16 h-16 text-white/60 mx-auto mb-4" />; })()}
                    <h3 className="text-white text-xl font-bold mb-2">{steps[activeStep].title}</h3>
                    <p className="text-white/70 text-sm max-w-md mx-auto">{steps[activeStep].description}</p>
                    <span className="inline-block mt-4 px-3 py-1 rounded-full bg-white/10 text-white/50 text-xs font-mono">
                      Aperçu — Étape {activeStep + 1}/{steps.length}
                    </span>
                  </div>
                </div>

                {/* Step info */}
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">{steps[activeStep].title}</h3>
                    <p className="text-zinc-400 text-sm">{steps[activeStep].description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="p-2 rounded-lg border border-altevo-dark-accent text-zinc-400 hover:text-white disabled:opacity-30 transition-all"
                      aria-label="Étape précédente"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                      disabled={activeStep === steps.length - 1}
                      className="p-2 rounded-lg border border-altevo-dark-accent text-zinc-400 hover:text-white disabled:opacity-30 transition-all"
                      aria-label="Étape suivante"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Highlights */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.results.map((result, i) => (
              <div key={i} className="glass-card rounded-xl p-4 text-center">
                <div className="text-xl font-bold gradient-text-fire">{result.metric}</div>
                <div className="text-zinc-500 text-xs mt-1">{result.description}</div>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="mt-8 text-center">
            <h3 className="text-white font-semibold mb-4">Technologies utilisées</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-chip">{tech}</span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-white mb-3">Ce projet vous inspire ?</h3>
            <p className="text-zinc-400 mb-6">Discutons de votre besoin et obtenez un devis personnalisé.</p>
            <Link
              href="/contact"
              className="magnetic-btn inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-altevo-yellow to-altevo-orange text-altevo-black font-bold text-lg hover:shadow-xl hover:shadow-altevo-yellow/25 transition-all duration-300"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
