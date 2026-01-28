import { Metadata } from "next";

const siteConfig = {
  name: "Altévo",
  description:
    "Création de logiciels sur mesure pour entreprises : PGI, ERP, applications web et mobiles, intégrations, automatisations. Solutions performantes et sécurisées.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://altevo.fr",
  ogImage: "/og-image.jpg",
  creator: "Altévo",
  keywords: [
    "développement logiciel sur mesure",
    "logiciel entreprise",
    "PGI",
    "ERP sur mesure",
    "application web entreprise",
    "application mobile professionnelle",
    "intégration API",
    "automatisation processus",
    "développeur freelance",
    "création logiciel",
    "déploiement application",
    "maintenance logicielle",
    "hébergement cloud",
    "sécurité données",
  ],
};

export function generateMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
      creator: "@altevo",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// JSON-LD structured data for LocalBusiness/ProfessionalService
export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: "+33600000000",
    email: "contact@altevo.fr",
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.8566",
      longitude: "2.3522",
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    priceRange: "€€€",
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: [
      "https://linkedin.com/company/altevo",
      "https://github.com/altevo",
      "https://twitter.com/altevo",
    ],
    serviceType: [
      "Développement logiciel sur mesure",
      "Création d'applications web",
      "Développement d'applications mobiles",
      "Intégration API",
      "Déploiement et hébergement",
      "Maintenance logicielle",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de développement logiciel",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Logiciel sur mesure",
            description:
              "Développement de solutions métier adaptées : PGI, ERP, CRM, outils de gestion internes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Applications web",
            description:
              "Applications web modernes : plateformes SaaS, intranets, extranets, portails clients.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Applications mobiles",
            description:
              "Applications iOS et Android natives ou cross-platform.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Intégrations & API",
            description:
              "Développement d'API robustes et intégration de logiciels existants.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hébergement & Déploiement",
            description:
              "Infrastructure cloud sécurisée et scalable avec garanties de disponibilité.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Maintenance & Support",
            description:
              "Accompagnement continu, mises à jour et support technique réactif.",
          },
        },
      ],
    },
  };
}

export { siteConfig };
