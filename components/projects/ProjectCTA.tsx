"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { MotionDiv } from "@/components/MotionWrapper";

export function ProjectCTA({ project }: { project: Project }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Un projet <span className="gradient-text-fire">similaire ?</span>
          </h2>
          <p className="text-zinc-400 mb-8">
            Discutons de vos besoins et voyons comment nous pouvons vous aider.
            Devis gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="magnetic-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-altevo-yellow to-altevo-orange text-altevo-black font-bold hover:shadow-xl hover:shadow-altevo-yellow/25 transition-all duration-300"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-altevo-dark-accent text-white font-semibold hover:bg-white/5 hover:border-altevo-yellow/30 transition-all duration-300"
            >
              Autres réalisations
            </Link>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
