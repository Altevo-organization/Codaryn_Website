"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
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
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-altevo-violet/10 via-transparent to-altevo-violet-dark/10 pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-altevo-violet/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-altevo-violet-light/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <MotionDiv className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-altevo-violet/20 mb-6">
            <MessageSquare className="w-8 h-8 text-altevo-violet-light" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">{title.split(" ").slice(-1)}</span>
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href={primaryHref} className="gap-2">
                {primaryText}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href={secondaryHref}>{secondaryText}</Link>
            </Button>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-sm text-slate-500">
            Réponse sous 24h • Devis gratuit • Sans engagement
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
