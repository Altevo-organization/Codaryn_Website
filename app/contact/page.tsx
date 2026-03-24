import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

import { generateMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/forms/ContactForm";
import { MotionDiv } from "@/components/MotionWrapper";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = generateMetadata({
  title: "Contact",
  description:
    "Contactez Codaryn pour discuter de votre projet logiciel. Sans engagement, réponse sous 24h.",
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
    value: "contact@codaryn.com",
    href: "mailto:contact@codaryn.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 6 02 69 92 58",
    href: "tel:+33602699258",
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
      <section className="pt-24 pb-10 md:pt-40 md:pb-20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <MotionDiv className="max-w-4xl mx-auto text-center">
            <span className="text-altevo-yellow text-xs md:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 block font-mono">
              Contact
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Parlons de votre{" "}
              <span className="gradient-text-fire">projet</span>
            </h1>
            <p className="text-sm md:text-lg text-zinc-400 max-w-2xl mx-auto">
              Vous avez un projet de développement logiciel ? Une question sur nos
              services ? Contactez-nous et recevez une réponse sous 24 heures.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          {/* Mobile: Contact info as horizontal scroll, then form below */}
          <div className="md:hidden mb-8">
            <div className="grid grid-cols-2 gap-3">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-altevo-yellow/20 to-altevo-orange/20 flex items-center justify-center shrink-0">
                    <info.icon className="w-4 h-4 text-altevo-yellow" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-zinc-500">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white text-xs hover:text-altevo-yellow transition-colors truncate block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white text-xs truncate">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Info — desktop only sidebar */}
            <MotionDiv className="hidden lg:block lg:col-span-1">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Informations de contact
                  </h2>
                  <p className="text-zinc-400">
                    N&apos;hésitez pas à nous contacter par le moyen qui vous convient
                    le mieux. Nous vous répondrons rapidement.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-altevo-yellow/20 to-altevo-orange/20 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-altevo-yellow" />
                      </div>
                      <div>
                        <p className="text-sm text-zinc-500">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-altevo-yellow transition-colors"
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
                <div className="mt-8 glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-5 h-5 text-altevo-yellow" />
                    <h3 className="font-semibold text-white">
                      À quoi s&apos;attendre ?
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-altevo-yellow font-mono mt-0.5">01.</span>
                      <span>Réponse sous 24h ouvrées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-altevo-orange font-mono mt-0.5">02.</span>
                      <span>Échange téléphonique ou visio pour comprendre vos besoins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-altevo-red font-mono mt-0.5">03.</span>
                      <span>Proposition commerciale détaillée et sans engagement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </MotionDiv>

            {/* Contact Form */}
            <MotionDiv delay={0.2} className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-5 md:p-8">
                <h2 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">
                  Envoyez-nous un message
                </h2>
                <ContactForm />
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="bg-white/[0.02]">
        <FAQ />
      </div>
    </>
  );
}
