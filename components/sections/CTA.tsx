"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { MotionDiv } from "@/components/MotionWrapper";

interface CTAProps {
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function CTA({
  title = "Prêt à concrétiser votre projet ?",
  description = "Discutons de vos besoins et construisons ensemble la solution logicielle qui fera la différence pour votre entreprise.",
  primaryText = "Demander un devis gratuit",
  primaryHref = "/contact",
  secondaryText = "En savoir plus",
  secondaryHref = "/apropos",
}: CTAProps) {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
      {/* Background gradients — reduced on mobile for perf */}
      <div className="absolute inset-0 bg-gradient-to-br from-altevo-yellow/5 via-transparent to-altevo-orange/5 pointer-events-none" />
      <div className="hidden md:block absolute top-1/2 left-0 w-64 h-64 bg-altevo-yellow/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
      <div className="hidden md:block absolute top-1/2 right-0 w-64 h-64 bg-altevo-orange/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative">
        <MotionDiv className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-altevo-yellow/20 to-altevo-orange/20 mb-5 md:mb-6">
            <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-altevo-yellow" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text-fire">{title.split(" ").slice(-1)}</span>
          </h2>

          <p className="text-zinc-400 text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href={primaryHref}
              className="magnetic-btn inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-xl bg-gradient-to-r from-altevo-yellow to-altevo-orange text-altevo-black font-bold text-sm md:text-lg hover:shadow-xl hover:shadow-altevo-yellow/25 transition-all duration-300"
            >
              {primaryText}
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-xl border border-altevo-dark-accent text-white font-semibold text-sm md:text-lg hover:bg-white/5 hover:border-altevo-yellow/30 transition-all duration-300"
            >
              {secondaryText}
            </Link>
          </div>

          <p className="mt-6 md:mt-8 text-xs md:text-sm text-zinc-600 font-mono">
            Réponse sous 24h &middot; Devis gratuit &middot; Sans engagement
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
