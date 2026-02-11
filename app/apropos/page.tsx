import type { Metadata } from "next";
import { Code2, Shield, Zap, Users, Heart, Globe } from "lucide-react";

import { generateMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CTA } from "@/components/sections/CTA";
import { MotionDiv } from "@/components/MotionWrapper";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export const metadata: Metadata = generateMetadata({
  title: "À propos",
  description: "Découvrez Altévo, créateur de logiciels sur mesure. Notre mission, nos valeurs et notre approche pour accompagner les entreprises dans leur transformation numérique.",
  path: "/apropos",
});

const values = [
  { icon: Code2, title: "Excellence technique", description: "Technologies modernes, code propre, tests automatisés et bonnes pratiques de l'industrie." },
  { icon: Shield, title: "Sécurité & Confiance", description: "Protection des données, conformité RGPD et transparence dans chaque interaction." },
  { icon: Users, title: "Proximité client", description: "Écoute active, communication régulière et implication dans la réussite de vos projets." },
  { icon: Zap, title: "Performance", description: "Applications optimisées, temps de réponse rapides et infrastructure scalable." },
  { icon: Heart, title: "Passion", description: "Chaque projet est une opportunité de créer quelque chose d'exceptionnel." },
  { icon: Globe, title: "Accessibilité", description: "Solutions accessibles à tous, respectant les standards WCAG et les meilleures pratiques UX." },
];

export default function AProposPage() {
  return (
    <>
      <section className="pt-24 pb-12 md:pt-40 md:pb-20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <PageHero
            badge="À propos"
            title="Créateurs de logiciels"
            highlightedWord="sur mesure"
            description="Altévo conçoit et déploie des solutions logicielles performantes pour les entreprises qui veulent se démarquer."
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <MotionDiv>
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Notre mission</h2>
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                  Altévo est né de la conviction que chaque entreprise mérite des outils numériques
                  à la hauteur de ses ambitions. Trop souvent, les solutions génériques ne répondent
                  pas aux besoins spécifiques des métiers.
                </p>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                  Notre approche : comprendre en profondeur vos processus, concevoir une architecture
                  solide, et développer des logiciels qui s&apos;adaptent à vous — pas l&apos;inverse.
                </p>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  Du PGI sur mesure à l&apos;application mobile, en passant par les plateformes SaaS
                  et les intégrations API, nous couvrons l&apos;ensemble du spectre du développement logiciel.
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-24 bg-altevo-dark-light/20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
              Nos <span className="gradient-text-fire">valeurs</span>
            </h2>
          </MotionDiv>

          {/* Mobile: 2-col compact grid */}
          <div className="md:hidden grid grid-cols-2 gap-3 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <div key={i} className="glass-card rounded-xl p-4">
                <value.icon className="w-5 h-5 text-altevo-yellow mb-2" />
                <h3 className="text-white font-semibold text-xs mb-1">{value.title}</h3>
                <p className="text-zinc-500 text-[10px] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Desktop: 3-col stagger grid (unchanged) */}
          <StaggerContainer className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <StaggerItem key={i}>
                <div className="glass-card rounded-xl p-5 h-full">
                  <value.icon className="w-6 h-6 text-altevo-yellow mb-3" />
                  <h3 className="text-white font-semibold text-sm mb-1">{value.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <MotionDiv>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">
                Notre <span className="gradient-text-fire">approche</span>
              </h2>
              <div className="space-y-3 md:space-y-6">
                {[
                  { num: "01", title: "Écoute et analyse", desc: "Nous commençons toujours par comprendre votre métier, vos workflows et vos contraintes avant de proposer une solution." },
                  { num: "02", title: "Architecture robuste", desc: "Choix technologiques éprouvés, architecture évolutive et documentation complète pour garantir la pérennité." },
                  { num: "03", title: "Développement agile", desc: "Itérations courtes, livraisons régulières et feedback continu pour un résultat qui correspond exactement à vos attentes." },
                  { num: "04", title: "Qualité sans compromis", desc: "Tests automatisés, revue de code, audit de sécurité — nous ne livrons que du code dont nous sommes fiers." },
                ].map((step) => (
                  <div key={step.num} className="glass-card rounded-xl p-4 md:p-5 flex gap-3 md:gap-4">
                    <span className="text-xl md:text-2xl font-bold text-altevo-yellow/30 font-mono shrink-0">{step.num}</span>
                    <div>
                      <h3 className="text-white font-semibold text-xs md:text-sm mb-0.5 md:mb-1">{step.title}</h3>
                      <p className="text-zinc-400 text-[11px] md:text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <CTA
        title="Travaillons ensemble ?"
        description="Discutons de vos projets et voyons comment Altévo peut vous accompagner dans votre transformation numérique."
      />
    </>
  );
}
