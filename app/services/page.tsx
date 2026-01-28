import type { Metadata } from "next";

import { generateMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { PricingNote } from "@/components/sections/PricingNote";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = generateMetadata({
  title: "Services",
  description:
    "Découvrez nos services de développement logiciel sur mesure : création de PGI/ERP, applications web et mobiles, intégrations API, hébergement cloud et maintenance. Solutions adaptées à vos besoins métier.",
  path: "/services",
  keywords: [
    "services développement logiciel",
    "création ERP",
    "application métier",
    "développement web entreprise",
    "API entreprise",
    "cloud hosting",
  ],
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PageHero
            badge="Nos services"
            title="Des solutions sur mesure pour"
            highlightedWord="chaque besoin"
            description="De la conception à la maintenance, nous vous accompagnons dans la création de logiciels performants qui répondent précisément à vos enjeux métier. Toutes nos prestations sont sur devis."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesGrid />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-altevo-dark-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BenefitsGrid />
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PricingNote />
        </div>
      </section>

      <CTA
        title="Un projet en tête ?"
        description="Parlez-nous de vos besoins et obtenez un devis personnalisé sous 24h. Notre équipe est à votre écoute pour trouver la solution idéale."
      />
    </>
  );
}
