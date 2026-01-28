"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv } from "@/components/MotionWrapper";
import type { Project } from "@/lib/projects";

interface ProjectCTAProps {
  project: Project;
}

export function ProjectCTA({ project }: ProjectCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-altevo-dark-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv>
          <Card className="max-w-4xl mx-auto border-altevo-violet/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-altevo-dark via-altevo-dark/90 to-transparent" />

                {/* Content */}
                <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center flex-shrink-0`}
                  >
                    <MessageSquare className="w-10 h-10 text-white" />
                  </div>

                  {/* Text */}
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      Projet similaire ?
                    </h3>
                    <p className="text-slate-400 mb-0 md:mb-0 max-w-xl">
                      Vous avez un besoin dans le secteur{" "}
                      <span className="text-slate-300">{project.sector.toLowerCase()}</span> ?
                      Discutons de votre projet et voyons comment nous pouvons
                      vous accompagner.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                    <Button asChild size="lg" className="gap-2">
                      <Link href="/contact">
                        Parlons-en
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/realisations">Voir d&apos;autres projets</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>
    </section>
  );
}
