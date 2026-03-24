"use client";

import { Search, Lightbulb, Code2, Rocket, Wrench, Headphones } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

const steps = [
  { icon: Search, title: "Cadrage", description: "Analyse de vos besoins, étude de faisabilité et définition du périmètre fonctionnel.", number: "01" },
  { icon: Lightbulb, title: "Conception", description: "Architecture technique, maquettes UX/UI et validation des choix technologiques.", number: "02" },
  { icon: Code2, title: "Développement", description: "Sprints agiles avec livraisons régulières, tests automatisés et revue de code.", number: "03" },
  { icon: Rocket, title: "Déploiement", description: "Mise en production sécurisée, migration des données et formation des utilisateurs.", number: "04" },
  { icon: Wrench, title: "Maintenance", description: "Suivi des performances, correctifs, évolutions fonctionnelles et support technique.", number: "05" },
  { icon: Headphones, title: "Support", description: "Accompagnement continu, hotline dédiée et SLA adapté à vos contraintes.", number: "06" },
];

export function Process() {
  return (
    <section className="py-16 md:py-28 relative">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-altevo-yellow text-xs md:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 block font-mono">
            Notre méthode
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Un process{" "}
            <span className="gradient-text-fire">éprouvé</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto">
            De la première discussion à la mise en production, chaque étape est structurée
            pour garantir qualité et transparence.
          </p>
        </div>

        {/* Mobile: Bento-style 2-col grid with variable sizes */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-3">
            {steps.map((step, index) => {
              const isWide = index === 0 || index === 3;
              return (
                <div
                  key={step.number}
                  className={`glass-card rounded-2xl p-4 relative overflow-hidden ${
                    isWide ? "col-span-2" : ""
                  }`}
                >
                  <span className="absolute top-2 right-3 text-4xl font-bold text-altevo-dark-accent/30 font-mono select-none">
                    {step.number}
                  </span>
                  <div className={`flex ${isWide ? "items-center" : "flex-col"} gap-3`}>
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-altevo-yellow/20 to-altevo-orange/20 flex items-center justify-center shrink-0">
                      <step.icon className="w-4 h-4 text-altevo-yellow" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-white mb-0.5">{step.title}</h3>
                      <p className={`text-zinc-500 text-xs leading-relaxed ${isWide ? "" : "line-clamp-2"}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop: 3-col grid (unchanged) */}
        <StaggerContainer className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="glass-card rounded-2xl p-6 h-full group relative overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-bold text-altevo-dark-accent/50 font-mono select-none group-hover:text-altevo-yellow/10 transition-colors duration-300">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-altevo-yellow/20 to-altevo-orange/20 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-altevo-yellow" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
