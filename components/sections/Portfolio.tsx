"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/MotionWrapper";
import { ProjectsGrid } from "@/components/projects";

interface PortfolioProps {
  showCTA?: boolean;
  limit?: number;
}

export function Portfolio({ showCTA = true, limit }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionDiv className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-3 block">
            Realisations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Nos projets{" "}
            <span className="gradient-text">recents</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Decouvrez quelques-unes de nos realisations et les resultats obtenus
            pour nos clients.
          </p>
        </MotionDiv>

        {/* Projects Grid */}
        <ProjectsGrid limit={limit} />

        {/* CTA */}
        {showCTA && (
          <MotionDiv delay={0.4} className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/realisations" className="gap-2">
                Voir toutes nos realisations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </MotionDiv>
        )}
      </div>
    </section>
  );
}
