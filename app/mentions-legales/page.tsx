import type { Metadata } from "next";

import { generateMetadata } from "@/lib/seo";
import { MotionDiv } from "@/components/MotionWrapper";

export const metadata: Metadata = generateMetadata({
  title: "Mentions légales",
  description:
    "Mentions légales du site Altévo. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation du site.",
  path: "/mentions-legales",
  noIndex: true,
});

export default function MentionsLegalesPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Mentions légales
          </h1>

          <div className="prose prose-invert prose-slate max-w-none space-y-8">
            {/* Éditeur */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Éditeur du site
              </h2>
              <div className="text-slate-400 space-y-2">
                <p>
                  <strong className="text-slate-300">Raison sociale :</strong> Altévo
                </p>
                <p>
                  <strong className="text-slate-300">Forme juridique :</strong> [À compléter]
                </p>
                <p>
                  <strong className="text-slate-300">Adresse :</strong> [À compléter]
                </p>
                <p>
                  <strong className="text-slate-300">SIRET :</strong> [À compléter]
                </p>
                <p>
                  <strong className="text-slate-300">Email :</strong>{" "}
                  <a
                    href="mailto:contact@altevo.fr"
                    className="text-altevo-violet-light hover:underline"
                  >
                    contact@altevo.fr
                  </a>
                </p>
                <p>
                  <strong className="text-slate-300">Téléphone :</strong> [À compléter]
                </p>
                <p>
                  <strong className="text-slate-300">Directeur de la publication :</strong> [À compléter]
                </p>
              </div>
            </section>

            {/* Hébergeur */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Hébergeur
              </h2>
              <div className="text-slate-400 space-y-2">
                <p>
                  <strong className="text-slate-300">Nom :</strong> Vercel Inc.
                </p>
                <p>
                  <strong className="text-slate-300">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                </p>
                <p>
                  <strong className="text-slate-300">Site web :</strong>{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-altevo-violet-light hover:underline"
                  >
                    https://vercel.com
                  </a>
                </p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Propriété intellectuelle
              </h2>
              <p className="text-slate-400">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos,
                marques, etc.) est protégé par le droit de la propriété
                intellectuelle. Toute reproduction, représentation, modification,
                publication ou adaptation de tout ou partie des éléments du site,
                quel que soit le moyen ou le procédé utilisé, est interdite sans
                l'autorisation écrite préalable d'Altévo.
              </p>
              <p className="text-slate-400 mt-4">
                Toute exploitation non autorisée du site ou de son contenu sera
                considérée comme constitutive d'une contrefaçon et poursuivie
                conformément aux dispositions des articles L.335-2 et suivants du
                Code de la Propriété Intellectuelle.
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Limitation de responsabilité
              </h2>
              <p className="text-slate-400">
                Altévo s'efforce de fournir des informations aussi précises que
                possible sur ce site. Toutefois, elle ne pourra être tenue
                responsable des omissions, des inexactitudes et des carences dans
                la mise à jour, qu'elles soient de son fait ou du fait des tiers
                partenaires qui lui fournissent ces informations.
              </p>
              <p className="text-slate-400 mt-4">
                Les informations présentes sur ce site sont fournies à titre
                indicatif et ne sauraient constituer un conseil juridique,
                technique ou commercial.
              </p>
            </section>

            {/* Liens hypertextes */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Liens hypertextes
              </h2>
              <p className="text-slate-400">
                Le site peut contenir des liens vers d'autres sites internet.
                Altévo n'exerce aucun contrôle sur ces sites et décline toute
                responsabilité quant à leur contenu et à leur politique de
                confidentialité.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Droit applicable et attribution de juridiction
              </h2>
              <p className="text-slate-400">
                Les présentes mentions légales sont régies par le droit français.
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>

            {/* Mise à jour */}
            <section className="pt-8 border-t border-altevo-dark-accent/50">
              <p className="text-sm text-slate-500">
                Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", {
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
