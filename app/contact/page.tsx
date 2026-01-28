import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

import { generateMetadata } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/ContactForm";
import { MotionDiv } from "@/components/MotionWrapper";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = generateMetadata({
  title: "Contact",
  description:
    "Contactez Altévo pour discuter de votre projet de développement logiciel. Demande de devis gratuite, réponse sous 24h. Nous sommes à votre écoute.",
  path: "/contact",
  keywords: [
    "contact développeur",
    "devis logiciel",
    "demande de devis",
    "projet sur mesure",
    "consultation gratuite",
  ],
});

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@altevo.fr",
    href: "mailto:contact@altevo.fr",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 6 02 69 92 58",
    href: "tel:+33600000000",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "France",
    href: null,
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun-Ven 9h-18h",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv className="max-w-4xl mx-auto text-center">
            <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-4 block">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Parlons de votre{" "}
              <span className="gradient-text">projet</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Vous avez un projet de développement logiciel ? Une question sur nos
              services ? Contactez-nous et recevez une réponse sous 24 heures.
              Devis gratuit et sans engagement.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <MotionDiv className="lg:col-span-1">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Informations de contact
                  </h2>
                  <p className="text-slate-400">
                    N'hésitez pas à nous contacter par le moyen qui vous convient
                    le mieux. Nous vous répondrons rapidement.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg bg-altevo-dark-light/30 border border-altevo-dark-accent/50"
                    >
                      <div className="w-10 h-10 rounded-lg bg-altevo-violet/20 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-altevo-violet-light" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-altevo-violet-light transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* What to expect */}
                <Card className="mt-8">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MessageSquare className="w-5 h-5 text-altevo-violet-light" />
                      <h3 className="font-semibold text-white">
                        À quoi s'attendre ?
                      </h3>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-400">
                      <li className="flex items-start gap-2">
                        <span className="text-altevo-violet-light mt-1">1.</span>
                        <span>Réponse sous 24h ouvrées</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-altevo-violet-light mt-1">2.</span>
                        <span>Échange téléphonique ou visio pour comprendre vos besoins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-altevo-violet-light mt-1">3.</span>
                        <span>Proposition commerciale détaillée et sans engagement</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </MotionDiv>

            {/* Contact Form */}
            <MotionDiv delay={0.2} className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Envoyez-nous un message
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="bg-altevo-dark-light/30">
        <FAQ />
      </div>
    </>
  );
}
