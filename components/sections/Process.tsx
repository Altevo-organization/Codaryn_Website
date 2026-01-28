"use client";

import {
  Search,
  FileText,
  Code,
  Rocket,
  HeadphonesIcon,
} from "lucide-react";

import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

const steps = [
  {
    icon: Search,
    title: "Découverte",
    description:
      "Nous analysons vos besoins métier, vos processus actuels et vos objectifs. Cette phase d'écoute est essentielle pour concevoir la solution idéale.",
    number: "01",
  },
  {
    icon: FileText,
    title: "Cadrage",
    description:
      "Rédaction du cahier des charges, définition de l'architecture technique, planning prévisionnel et devis détaillé. Tout est clair avant de commencer.",
    number: "02",
  },
  {
    icon: Code,
    title: "Développement",
    description:
      "Conception et développement itératifs avec des points réguliers. Vous suivez l'avancement et validez chaque étape en toute transparence.",
    number: "03",
  },
  {
    icon: Rocket,
    title: "Déploiement",
    description:
      "Mise en production sécurisée, formation des utilisateurs et documentation complète. Votre solution est opérationnelle et performante.",
    number: "04",
  },
  {
    icon: HeadphonesIcon,
    title: "Suivi",
    description:
      "Maintenance corrective et évolutive, support technique réactif, mises à jour régulières. Nous restons à vos côtés pour faire évoluer votre solution.",
    number: "05",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-altevo-violet/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <MotionDiv className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-3 block">
            Notre méthode
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Un processus{" "}
            <span className="gradient-text">transparent et structuré</span>
          </h2>
          <p className="text-slate-400 text-lg">
            De la première discussion à la mise en production, nous vous accompagnons
            à chaque étape avec une méthodologie éprouvée.
          </p>
        </MotionDiv>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-altevo-violet/50 via-altevo-violet-light/30 to-transparent" />

          <StaggerContainer className="space-y-12 lg:space-y-0" staggerDelay={0.15}>
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div
                  className={`lg:flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"
                    }`}
                  >
                    <div
                      className={`inline-flex flex-col ${
                        index % 2 === 0 ? "lg:items-end" : "lg:items-start"
                      }`}
                    >
                      <span className="text-altevo-violet/50 text-5xl font-bold mb-2">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 max-w-md">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon (center on desktop) */}
                  <div className="hidden lg:flex items-center justify-center relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-altevo-dark-light border border-altevo-violet/30 flex items-center justify-center shadow-lg shadow-altevo-violet/10">
                      <step.icon className="w-7 h-7 text-altevo-violet-light" />
                    </div>
                  </div>

                  {/* Mobile icon */}
                  <div className="lg:hidden flex items-center gap-4 mt-4">
                    <div className="w-12 h-12 rounded-xl bg-altevo-dark-light border border-altevo-violet/30 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-altevo-violet-light" />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
