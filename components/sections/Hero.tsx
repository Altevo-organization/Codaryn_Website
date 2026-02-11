"use client";

import Link from "next/link";
import { ArrowRight, Code2, Shield, Zap, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const highlights = [
  { icon: Code2, text: "Sur mesure" },
  { icon: Shield, text: "Sécurisé" },
  { icon: Zap, text: "Performant" },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative min-h-[100svh] md:min-h-[95vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20 pb-8 md:pb-0">
      {/* Decorative blobs — reduced blur on mobile for perf */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-altevo-yellow/5 blur-[80px] md:blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-altevo-orange/5 blur-[80px] md:blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-altevo-red/3 blur-[80px] md:blur-[150px]" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-altevo-yellow/5 border border-altevo-yellow/15 text-altevo-yellow text-xs md:text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-altevo-yellow opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-altevo-yellow" />
              </span>
              Développement logiciel sur mesure
            </span>
          </motion.div>

          {/* Heading — bigger impact on mobile */}
          <motion.h1
            variants={itemVariants}
            className="text-[2.5rem] leading-[1] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-5 md:mb-6 md:leading-[0.95]"
          >
            <span className="text-white">Créons le logiciel</span>
            <br />
            <span className="gradient-text-fire">qui vous propulse</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-2 md:px-0"
          >
            Solutions logicielles sur mesure pour entreprises ambitieuses.
            PGI, ERP, applications web & mobiles — conçus pour
            la performance et la croissance.
          </motion.p>

          {/* Highlights — horizontal scroll on mobile */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-2 md:gap-3 mb-8 md:mb-10 overflow-x-auto scrollbar-hide px-2 md:px-0"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 rounded-lg bg-altevo-dark-light/50 border border-altevo-dark-accent/50 text-zinc-300 shrink-0"
              >
                <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-altevo-yellow" />
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs — full width on mobile */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2 md:px-0"
          >
            <Link
              href="/contact"
              className="magnetic-btn inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-xl bg-gradient-to-r from-altevo-yellow to-altevo-orange text-altevo-black font-bold text-base md:text-lg hover:shadow-xl hover:shadow-altevo-yellow/25 transition-all duration-300"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-xl border border-altevo-dark-accent text-white font-semibold text-base md:text-lg hover:bg-white/5 hover:border-altevo-yellow/30 transition-all duration-300"
            >
              Voir nos réalisations
            </Link>
          </motion.div>

          {/* Trust indicators — redesigned for mobile */}
          <motion.div
            variants={itemVariants}
            className="mt-10 md:mt-16 pt-8 md:pt-10 border-t border-altevo-dark-accent/30"
          >
            {/* Mobile: bento grid with icons */}
            <div className="grid grid-cols-3 gap-3 md:hidden">
              {[
                { icon: Shield, label: "Suivi inclus", color: "text-altevo-yellow/70" },
                { icon: Code2, label: "Code livré", color: "text-altevo-orange/70" },
                { icon: Flame, label: "Réponse 24h", color: "text-altevo-red/70" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 py-3 px-2 rounded-xl bg-white/[0.02] border border-altevo-dark-accent/20"
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-[11px] text-zinc-500 text-center leading-tight">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Desktop: horizontal */}
            <div className="hidden md:flex flex-wrap justify-center items-center gap-6 md:gap-10 text-zinc-500 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-altevo-yellow/70" />
                <span>Suivi & maintenance inclus</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-altevo-orange/70" />
                <span>Code source livré</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-altevo-red/70" />
                <span>Réponse sous 24h</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on mobile (saves space) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
      >
        <div className="flex flex-col items-center gap-2 text-zinc-600">
          <span className="text-xs uppercase tracking-widest font-mono">Découvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-zinc-700 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-altevo-yellow/60" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
