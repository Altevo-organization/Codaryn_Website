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
    "Découvrez nos services de développement logiciel sur mesure : création de PGI/ERP, applications web et mobiles, intégrations API, hébergement cloud et maintenance.",
  path: "/services",
  keywords: ["services développement logiciel", "création ERP", "application métier", "développement web entreprise"],
});

export default function ServicesPage() {
  return (
    <>
      <section className="pt-24 pb-12 md:pt-40 md:pb-20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <PageHero
            badge="Nos services"
            title="Des solutions sur mesure pour"
            highlightedWord="chaque besoin"
            description="De la conception à la maintenance, nous vous accompagnons dans la création de logiciels performants. Toutes nos prestations sont sur devis."
          />
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <ServicesGrid />
        </div>
      </section>

      <section className="py-12 md:py-24 bg-altevo-dark-light/20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <BenefitsGrid />
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <PricingNote />
        </div>
      </section>

      <CTA
        title="Un projet en tête ?"
        description="Parlez-nous de vos besoins et obtenez un devis personnalisé sous 24h."
      />
    </>
  );
}
