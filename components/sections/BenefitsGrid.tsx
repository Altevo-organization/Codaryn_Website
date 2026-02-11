"use client";

import { Shield, Zap, Users, HeartHandshake, Code2, Layers } from "lucide-react";
import { StaggerContainer, StaggerItem, MotionDiv } from "@/components/MotionWrapper";

const benefits = [
  { icon: Shield, title: "Code livré", description: "Vous êtes propriétaire du code source. Pas d'enfermement propriétaire." },
  { icon: Zap, title: "Performance first", description: "Applications optimisées pour la vitesse et la scalabilité." },
  { icon: Users, title: "Accompagnement", description: "Formation, documentation et support inclus dans chaque projet." },
  { icon: HeartHandshake, title: "Engagement qualité", description: "Tests automatisés, revue de code et bonnes pratiques OWASP." },
  { icon: Code2, title: "Technologies modernes", description: "React, Next.js, Node.js, PostgreSQL — stack éprouvée et maintenable." },
  { icon: Layers, title: "Architecture évolutive", description: "Conçu pour grandir avec votre entreprise sans tout refaire." },
];

export function BenefitsGrid() {
  return (
    <div>
      <MotionDiv className="text-center mb-8 md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
          Pourquoi choisir <span className="gradient-text-fire">Altévo</span>
        </h2>
      </MotionDiv>

      {/* Mobile: 2-col compact bento grid */}
      <div className="md:hidden grid grid-cols-2 gap-3 mb-6">
        {benefits.map((benefit, i) => (
          <div key={i} className="glass-card rounded-xl p-4">
            <benefit.icon className="w-5 h-5 text-altevo-yellow mb-2" />
            <h3 className="text-white font-semibold text-xs mb-1">{benefit.title}</h3>
            <p className="text-zinc-500 text-[10px] leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Desktop: 3-col stagger grid (unchanged) */}
      <StaggerContainer className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {benefits.map((benefit, i) => (
          <StaggerItem key={i}>
            <div className="glass-card rounded-xl p-5 h-full">
              <benefit.icon className="w-6 h-6 text-altevo-yellow mb-3" />
              <h3 className="text-white font-semibold text-sm mb-1">{benefit.title}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{benefit.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
