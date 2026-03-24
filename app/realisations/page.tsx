import type { Metadata } from "next";

import { generateMetadata } from "@/lib/seo";
import { ProjectsGrid } from "@/components/projects";
import { CTA } from "@/components/sections/CTA";
import { MotionDiv } from "@/components/MotionWrapper";
import { projects } from "@/lib/projects";

export const metadata: Metadata = generateMetadata({
  title: "Réalisations",
  description:
    "Découvrez nos projets de développement logiciel : applications de tracking, solutions de santé mobile, ERP sur mesure, plateformes de réservation. Études de cas et résultats concrets.",
  path: "/realisations",
  keywords: ["portfolio développement", "projets logiciels", "étude de cas", "application mobile métier", "logiciel sur mesure"],
});

export default function RealisationsPage() {
  return (
    <>
      <section className="pt-24 pb-12 md:pt-40 md:pb-20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <MotionDiv className="max-w-4xl mx-auto text-center">
            <span className="text-altevo-yellow text-xs md:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 block font-mono">
              Nos réalisations
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Des projets qui{" "}
              <span className="gradient-text-fire">font la différence</span>
            </h1>
            <p className="text-sm md:text-lg text-zinc-400 max-w-2xl mx-auto">
              Découvrez nos projets récents et les résultats concrets obtenus.
              Chaque solution est unique et adaptée aux besoins spécifiques de l&apos;entreprise.
            </p>
          </MotionDiv>
        </div>
      </section>

      <section className="pb-12 md:pb-24">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <ProjectsGrid />
        </div>
      </section>

      {/* Stats — mobile optimized bento */}
      <section className="py-12 md:py-24 bg-altevo-dark-light/20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <MotionDiv className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: `${projects.length}`, label: "Projets livrés" },
              { value: "100%", label: "Clients satisfaits" },
              { value: "24h", label: "Temps de réponse" },
              { value: "1 an+", label: "D'activité" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-3 md:p-0 rounded-xl md:rounded-none bg-white/[0.02] md:bg-transparent">
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold gradient-text-fire mb-1 md:mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-xs md:text-base">{stat.label}</div>
              </div>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Sectors — mobile scroll */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Secteurs d&apos;intervention</h2>
          </MotionDiv>
          <MotionDiv delay={0.2}>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {["Transport & Logistique", "Santé & Médical", "Gestion d'entreprise", "Services & Commerce", "B2B / Services", "Industrie", "Finance", "Formation"].map((sector, i) => (
                <span key={i} className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-altevo-dark-light border border-altevo-dark-accent/50 text-zinc-300 text-xs md:text-base hover:border-altevo-yellow/30 transition-colors duration-200">
                  {sector}
                </span>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Technologies — mobile optimized */}
      <section className="py-12 md:py-24 bg-altevo-dark-light/20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Technologies maîtrisées</h2>
          </MotionDiv>
          <MotionDiv delay={0.2}>
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
              {Array.from(new Set(projects.flatMap((p) => p.technologies))).map((tech, i) => (
                <span key={i} className="tech-chip text-[10px] md:text-xs">{tech}</span>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      <CTA
        title="Un projet similaire ?"
        description="Discutons de vos besoins et voyons comment nous pouvons vous aider. Devis gratuit et sans engagement."
        primaryText="Demander un devis"
        secondaryText="Voir nos services"
        secondaryHref="/services"
      />
    </>
  );
}
