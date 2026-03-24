import type { Metadata } from "next";
import Link from "next/link";

import { generateMetadata } from "@/lib/seo";
import { MotionDiv } from "@/components/MotionWrapper";

export const metadata: Metadata = generateMetadata({
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité d'Codaryn. Informations sur la collecte, l'utilisation et la protection de vos données personnelles.",
  path: "/politique-confidentialite",
  noIndex: true,
});

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <MotionDiv className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
            Politique de confidentialité
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-zinc-400">
                Codaryn accorde une grande importance à la protection de vos
                données personnelles. Cette politique de confidentialité vous
                informe sur la manière dont nous collectons, utilisons et
                protégeons vos informations lorsque vous utilisez notre site web
                codaryn.com.
              </p>
            </section>

            {/* Responsable du traitement */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Responsable du traitement
              </h2>
              <p className="text-zinc-400">
                Le responsable du traitement des données est Codaryn, dont les
                coordonnées sont disponibles dans les{" "}
                <Link
                  href="/mentions-legales"
                  className="text-altevo-yellow hover:underline"
                >
                  mentions légales
                </Link>
                .
              </p>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Données collectées
              </h2>
              <p className="text-zinc-400 mb-4">
                Nous collectons les données suivantes lorsque vous utilisez notre
                formulaire de contact :
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (optionnel)</li>
                <li>Nom de l&apos;entreprise (optionnel)</li>
                <li>Contenu de votre message</li>
              </ul>
              <p className="text-zinc-400 mt-4">
                Nous collectons également des données techniques de manière
                automatique :
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Adresse IP (à des fins de sécurité et anti-spam)</li>
                <li>Date et heure de la demande</li>
              </ul>
            </section>

            {/* Finalités */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Finalités du traitement
              </h2>
              <p className="text-zinc-400 mb-4">
                Vos données personnelles sont collectées pour les finalités
                suivantes :
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Établir des propositions commerciales</li>
                <li>Assurer la sécurité du site (prévention du spam)</li>
                <li>
                  Améliorer nos services et l&apos;expérience utilisateur du site
                </li>
              </ul>
            </section>

            {/* Base juridique */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Base juridique du traitement
              </h2>
              <p className="text-zinc-400">
                Le traitement de vos données repose sur votre consentement
                (article 6.1.a du RGPD), donné lors de l&apos;envoi du formulaire de
                contact, ainsi que sur notre intérêt légitime à répondre à vos
                demandes et à assurer la sécurité de notre site.
              </p>
            </section>

            {/* Conservation */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Durée de conservation
              </h2>
              <p className="text-zinc-400">
                Vos données de contact sont conservées pendant une durée de 3 ans
                à compter de notre dernier échange. À l&apos;issue de cette période,
                vos données sont supprimées ou anonymisées.
              </p>
            </section>

            {/* Destinataires */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Destinataires des données
              </h2>
              <p className="text-zinc-400">
                Vos données personnelles sont destinées uniquement à Codaryn pour
                le traitement de vos demandes. Elles ne sont pas transmises à des
                tiers, sauf obligation légale.
              </p>
              <p className="text-zinc-400 mt-4">
                Nos sous-traitants techniques (hébergement, envoi d&apos;emails)
                peuvent avoir accès à vos données dans le cadre strict de leurs
                prestations, en conformité avec le RGPD.
              </p>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Sécurité des données
              </h2>
              <p className="text-zinc-400">
                Nous mettons en œuvre des mesures techniques et organisationnelles
                appropriées pour protéger vos données contre l&apos;accès non autorisé,
                la modification, la divulgation ou la destruction :
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 mt-4">
                <li>Chiffrement des communications (HTTPS/TLS)</li>
                <li>Hébergement sécurisé en Europe</li>
                <li>Accès restreint aux données</li>
                <li>Sauvegardes régulières</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Cookies
              </h2>
              <p className="text-zinc-400">
                Notre site utilise uniquement des cookies techniques nécessaires
                au bon fonctionnement du site. Ces cookies ne collectent pas de
                données personnelles et ne nécessitent pas votre consentement.
              </p>
              <p className="text-zinc-400 mt-4">
                Nous n&apos;utilisons pas de cookies de tracking, de publicité ou
                d&apos;analyse comportementale.
              </p>
            </section>

            {/* Droits */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Vos droits
              </h2>
              <p className="text-zinc-400 mb-4">
                Conformément au RGPD, vous disposez des droits suivants concernant
                vos données personnelles :
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>
                  <strong className="text-zinc-300">Droit d&apos;accès :</strong>{" "}
                  obtenir la confirmation du traitement de vos données et y
                  accéder
                </li>
                <li>
                  <strong className="text-zinc-300">Droit de rectification :</strong>{" "}
                  demander la correction de données inexactes
                </li>
                <li>
                  <strong className="text-zinc-300">Droit à l&apos;effacement :</strong>{" "}
                  demander la suppression de vos données
                </li>
                <li>
                  <strong className="text-zinc-300">Droit à la limitation :</strong>{" "}
                  demander la limitation du traitement
                </li>
                <li>
                  <strong className="text-zinc-300">Droit à la portabilité :</strong>{" "}
                  recevoir vos données dans un format structuré
                </li>
                <li>
                  <strong className="text-zinc-300">Droit d&apos;opposition :</strong>{" "}
                  vous opposer au traitement de vos données
                </li>
              </ul>
              <p className="text-zinc-400 mt-4">
                Pour exercer ces droits, contactez-nous à{" "}
                <a
                  href="mailto:contact@codaryn.com"
                  className="text-altevo-yellow hover:underline"
                >
                  contact@codaryn.com
                </a>
                . Nous répondrons dans un délai d&apos;un mois.
              </p>
              <p className="text-zinc-400 mt-4">
                Vous pouvez également introduire une réclamation auprès de la CNIL
                (Commission Nationale de l&apos;Informatique et des Libertés) :{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-altevo-yellow hover:underline"
                >
                  www.cnil.fr
                </a>
              </p>
            </section>

            {/* Modification */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Modification de la politique
              </h2>
              <p className="text-zinc-400">
                Nous nous réservons le droit de modifier cette politique de
                confidentialité à tout moment. La version en vigueur est celle
                publiée sur cette page. Nous vous invitons à la consulter
                régulièrement.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Contact
              </h2>
              <p className="text-zinc-400">
                Pour toute question relative à cette politique de confidentialité
                ou à vos données personnelles, vous pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2 mt-4">
                <li>
                  Par email :{" "}
                  <a
                    href="mailto:contact@codaryn.com"
                    className="text-altevo-yellow hover:underline"
                  >
                    contact@codaryn.com
                  </a>
                </li>
                <li>
                  Via notre{" "}
                  <Link
                    href="/contact"
                    className="text-altevo-yellow hover:underline"
                  >
                    formulaire de contact
                  </Link>
                </li>
              </ul>
            </section>

            {/* Mise à jour */}
            <section className="pt-8 border-t border-white/[0.06]">
              <p className="text-sm text-zinc-500">
                Dernière mise à jour :{" "}
                {new Date().toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </section>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
