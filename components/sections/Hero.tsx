"use client";

import Link from "next/link";
import { ArrowRight, Code2, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
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
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-altevo-violet/10 border border-altevo-violet/20 text-altevo-violet-light text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-altevo-violet opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-altevo-violet-light"></span>
              </span>
              Développement logiciel sur mesure
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">Des logiciels</span>
            <br />
            <span className="gradient-text">à votre image</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Nous concevons et déployons des solutions logicielles sur mesure
            pour les entreprises : PGI, ERP, applications web et mobiles,
            intégrations et automatisations.
          </motion.p>

          {/* Highlights */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-altevo-dark-light/50 border border-altevo-dark-accent/50 text-slate-300"
              >
                <item.icon className="w-4 h-4 text-altevo-violet-light" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="xl">
              <Link href="/contact" className="gap-2">
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/realisations">Voir nos réalisations</Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-10 border-t border-altevo-dark-accent/30"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-altevo-violet-light" />
                <span>Suivi & maintenance inclus</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-altevo-violet-light" />
                <span>Code source livré</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-altevo-violet-light" />
                <span>Réponse sous 24h</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-slate-500" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
