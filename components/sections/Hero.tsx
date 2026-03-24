"use client";

import Link from "next/link";
import { ArrowRight, Terminal, GitBranch, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const pillars = [
  { icon: Terminal, text: "Architecture sur mesure" },
  { icon: GitBranch, text: "Code livré & documenté" },
  { icon: Layers, text: "Scalable par conception" },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative min-h-[100svh] md:min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-12 md:pb-0">
      {/* Very subtle radial glow behind hero text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[500px] md:w-[900px] h-[500px] md:h-[900px] rounded-full bg-altevo-yellow/[0.04] blur-[100px] md:blur-[180px]" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Studio label */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-altevo-dark-accent/60 border border-altevo-dark-accent text-altevo-gray-light text-xs font-mono tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-altevo-yellow" />
              Studio d'ingénierie logicielle
            </span>
          </motion.div>

          {/* Main heading — large, confident, clean */}
          <motion.h1
            variants={itemVariants}
            className="text-[2.75rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-bold tracking-tight mb-6 md:mb-7"
          >
            <span className="text-white">Logiciel construit</span>
            <br />
            <span className="text-white">avec </span>
            <span className="gradient-text">précision.</span>
          </motion.h1>

          {/* Subtitle — technical, credible */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
          >
            Codaryn est un studio spécialisé dans la conception de systèmes
            logiciels fiables et évolutifs — applications web, mobiles,
            intégrations et infrastructure.
          </motion.p>

          {/* Pillars */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12"
          >
            {pillars.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-altevo-dark-light/60 border border-altevo-dark-accent/60 text-zinc-400"
              >
                <item.icon className="w-3.5 h-3.5 text-altevo-yellow/70" />
                <span className="text-xs md:text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="/contact"
              className="magnetic-btn inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-altevo-yellow text-white font-semibold text-sm md:text-base hover:bg-altevo-yellow-light transition-colors duration-200"
            >
              Démarrer un projet
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-altevo-dark-accent text-zinc-300 font-medium text-sm md:text-base hover:border-altevo-yellow/30 hover:text-white transition-all duration-200"
            >
              Voir nos réalisations
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.div
            variants={itemVariants}
            className="mt-12 md:mt-16 pt-8 border-t border-altevo-dark-accent/30"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-zinc-600 text-xs md:text-sm font-mono">
              <span>Code source livré</span>
              <span className="hidden sm:inline text-altevo-dark-accent">·</span>
              <span>Suivi & maintenance inclus</span>
              <span className="hidden sm:inline text-altevo-dark-accent">·</span>
              <span>Réponse sous 24h</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-transparent via-altevo-yellow/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
