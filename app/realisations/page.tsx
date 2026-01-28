import type { Metadata } from "next";

import { generateMetadata } from "@/lib/seo";
import { ProjectsGrid } from "@/components/projects";
import { CTA } from "@/components/sections/CTA";
import { MotionDiv } from "@/components/MotionWrapper";
import { projects } from "@/lib/projects";

export const metadata: Metadata = generateMetadata({
  title: "Realisations",
  description:
    "Decouvrez nos projets de developpement logiciel : applications de tracking logistique, solutions de sante mobile, applications metier sur mesure. Etudes de cas et resultats concrets.",
  path: "/realisations",
  keywords: [
    "portfolio developpement",
    "projets logiciels",
    "etude de cas",
    "application mobile metier",
    "logiciel sur mesure",
    "tracking logistique",
    "application sante",
  ],
});

export default function RealisationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="max-w-4xl mx-auto text-center">
            <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-4 block">
              Nos realisations
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Des projets qui{" "}
              <span className="gradient-text">font la difference</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Decouvrez nos projets recents et les resultats concrets
              obtenus pour nos clients. Chaque solution est unique et adaptee aux
              besoins specifiques de l&apos;entreprise.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsGrid />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-altevo-dark-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2", label: "Projets livres" },
              { value: "100%", label: "Clients fidélisés" },
              { value: "24h", label: "Temps de reponse" },
              { value: "1 an", label: "D'activite" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Secteurs d&apos;intervention
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Notre expertise couvre de nombreux secteurs d&apos;activite, avec une
              specialisation dans les applications metier complexes.
            </p>
          </MotionDiv>

          <MotionDiv delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Transport & Logistique",
                "Sante & Medical",
                "Industrie",
                "Commerce & Retail",
                "Finance & Assurance",
                "Services",
                "Formation",
                "Immobilier",
              ].map((sector, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg bg-altevo-dark-light border border-altevo-dark-accent/50 text-slate-300 hover:border-altevo-violet/30 transition-colors duration-200"
                >
                  {sector}
                </span>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-altevo-dark-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Technologies maitrisees
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Nous utilisons les technologies les plus modernes et eprouvees pour
              developper des solutions performantes, maintenables et evolutives.
            </p>
          </MotionDiv>

          <MotionDiv delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {/* Extract unique technologies from all projects */}
              {Array.from(
                new Set(projects.flatMap((p) => p.technologies))
              ).map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg bg-altevo-dark border border-altevo-dark-accent/50 text-slate-300 hover:border-altevo-violet/30 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      <CTA
        title="Un projet similaire ?"
        description="Discutons de vos besoins et voyons comment nous pouvons vous aider a concretiser votre projet. Devis gratuit et sans engagement."
        primaryText="Demander un devis"
        secondaryText="Voir nos services"
        secondaryHref="/services"
      />
    </>
  );
}
