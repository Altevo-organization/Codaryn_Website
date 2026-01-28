import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Users,
  Lightbulb,
  Shield,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";

import { generateMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = generateMetadata({
  title: "À propos",
  description:
    "Découvrez Altévo : notre mission, nos valeurs et notre méthode de travail. Une équipe passionnée qui accompagne les entreprises dans leur transformation digitale.",
  path: "/apropos",
  keywords: [
    "à propos Altévo",
    "équipe développement",
    "méthode agile",
    "valeurs entreprise",
    "transformation digitale",
  ],
});

const values = [
  {
    icon: Target,
    title: "Sur mesure",
    description:
      "Chaque entreprise est unique. Nous créons des solutions adaptées à vos processus, pas l'inverse. Pas de compromis sur vos besoins.",
  },
  {
    icon: Shield,
    title: "Qualité & Sécurité",
    description:
      "Code propre, tests rigoureux, sécurité intégrée dès la conception. Nous construisons des logiciels robustes et pérennes.",
  },
  {
    icon: Users,
    title: "Transparence",
    description:
      "Communication claire à chaque étape. Vous savez toujours où en est votre projet, sans surprise ni jargon incompréhensible.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Technologies modernes, bonnes pratiques, veille constante. Nous vous apportons le meilleur de l'état de l'art.",
  },
  {
    icon: Clock,
    title: "Réactivité",
    description:
      "Réponse sous 24h, support technique efficace. Nous sommes là quand vous avez besoin de nous.",
  },
  {
    icon: Award,
    title: "Engagement",
    description:
      "Nous nous engageons sur les délais et la qualité. Votre succès est notre priorité, pas la facturation.",
  },
];

const guarantees = [
  {
    title: "Devis détaillé et transparent",
    description:
      "Vous savez exactement ce que vous payez. Pas de coûts cachés, pas de mauvaises surprises.",
  },
  {
    title: "Propriété du code source",
    description:
      "Le code vous appartient intégralement. Vous êtes libre de le faire évoluer comme vous le souhaitez.",
  },
  {
    title: "Documentation complète",
    description:
      "Chaque projet est documenté pour faciliter la maintenance et les évolutions futures.",
  },
  {
    title: "Garantie de conformité",
    description:
      "Conformité RGPD, normes de sécurité, accessibilité. Nous respectons les standards en vigueur.",
  },
];

export default function AproposPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="max-w-4xl mx-auto text-center">
            <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-4 block">
              À propos
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Une expertise au service de{" "}
              <span className="gradient-text">votre réussite</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Altévo est une entreprise spécialisée dans la création de logiciels
              sur mesure. Nous accompagnons les entreprises de toutes tailles dans
              leur transformation digitale avec des solutions performantes et
              adaptées à leurs besoins.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-altevo-dark-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv>
              <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-4 block">
                Notre mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Transformer vos idées en{" "}
                <span className="gradient-text">solutions concrètes</span>
              </h2>
              <div className="space-y-4 text-slate-400">
                <p>
                  Nous croyons que chaque entreprise mérite des outils à la hauteur
                  de ses ambitions. Trop souvent, les logiciels du marché imposent
                  des compromis : fonctionnalités inutiles, processus rigides,
                  interfaces inadaptées.
                </p>
                <p>
                  Notre mission est de concevoir des logiciels qui s'adaptent à
                  votre façon de travailler, pas l'inverse. Des solutions qui vous
                  font gagner du temps, réduisent les erreurs et vous permettent de
                  vous concentrer sur votre cœur de métier.
                </p>
                <p>
                  De l'analyse initiale au support long terme, nous sommes à vos
                  côtés pour garantir le succès de votre projet.
                </p>
              </div>
            </MotionDiv>

            <MotionDiv delay={0.2}>
              <div className="relative">
                {/* Stats showcase instead of team image */}
                <div className="rounded-2xl bg-gradient-to-br from-altevo-dark-light to-altevo-dark border border-altevo-dark-accent/50 p-8 overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </div>

                  {/* Stats grid */}
                  <div className="relative grid grid-cols-2 gap-6">
                    <div className="text-center p-4 rounded-xl bg-altevo-violet/10 border border-altevo-violet/20">
                      <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">2</div>
                      <div className="text-slate-400 text-sm">Projets livrés</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-altevo-violet/10 border border-altevo-violet/20">
                      <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">100%</div>
                      <div className="text-slate-400 text-sm">Clients fidélisés</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-altevo-violet/10 border border-altevo-violet/20">
                      <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">1 an</div>
                      <div className="text-slate-400 text-sm">D'activité</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-altevo-violet/10 border border-altevo-violet/20">
                      <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">24h</div>
                      <div className="text-slate-400 text-sm">Délai de réponse</div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-3 -right-3 px-4 py-2 rounded-full bg-gradient-to-r from-altevo-violet to-altevo-violet-light text-white text-sm font-medium shadow-lg">
                    Micro-entreprise
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-altevo-violet/20 rounded-xl -z-10" />
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-3 block">
              Nos valeurs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ce qui guide notre{" "}
              <span className="gradient-text">approche</span>
            </h2>
            <p className="text-slate-400">
              Nos valeurs ne sont pas que des mots. Elles se traduisent concrètement
              dans chaque projet, chaque interaction, chaque ligne de code.
            </p>
          </MotionDiv>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-altevo-violet/20 to-altevo-violet-light/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-altevo-violet-light" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <div className="bg-altevo-dark-light/30">
        <Process />
      </div>

      {/* Guarantees Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-3 block">
              Nos garanties
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Des engagements{" "}
              <span className="gradient-text">concrets</span>
            </h2>
            <p className="text-slate-400">
              Nous nous engageons sur des points essentiels pour vous garantir
              sérénité et satisfaction.
            </p>
          </MotionDiv>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            staggerDelay={0.1}
          >
            {guarantees.map((guarantee, index) => (
              <StaggerItem key={index}>
                <div className="p-6 rounded-xl bg-altevo-dark-light/50 border border-altevo-dark-accent/50 hover:border-altevo-violet/30 transition-colors duration-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-green-500 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {guarantee.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {guarantee.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTA
        title="Envie d'en savoir plus ?"
        description="Discutons de votre projet autour d'un café (virtuel ou réel). Nous serons ravis de vous présenter notre approche en détail."
        primaryText="Prendre contact"
        secondaryText="Voir nos réalisations"
        secondaryHref="/realisations"
      />
    </>
  );
}
