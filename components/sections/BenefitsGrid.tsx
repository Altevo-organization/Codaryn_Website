"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/MotionWrapper";

const additionalBenefits = [
  "Technologies modernes et éprouvées",
  "Code source documenté et maintenable",
  "Formation des utilisateurs incluse",
  "Support technique réactif",
  "Conformité RGPD",
  "Sécurité intégrée dès la conception",
];

export function BenefitsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <MotionDiv>
        <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-4 block">
          Pourquoi nous choisir
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Un accompagnement complet à{" "}
          <span className="gradient-text">chaque étape</span>
        </h2>
        <p className="text-slate-400 mb-8">
          Nous ne livrons pas simplement un logiciel : nous vous accompagnons
          de A à Z, de l'analyse de vos besoins jusqu'à la mise en production
          et au-delà. Notre objectif est de vous fournir une solution pérenne
          qui évolue avec votre entreprise.
        </p>
        <Button asChild size="lg">
          <Link href="/contact" className="gap-2">
            Discuter de mon projet
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </MotionDiv>

      <MotionDiv delay={0.2}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {additionalBenefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-altevo-dark-light/50 border border-altevo-dark-accent/50"
            >
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
              <span className="text-sm text-slate-300">{benefit}</span>
            </div>
          ))}
        </div>
      </MotionDiv>
    </div>
  );
}
