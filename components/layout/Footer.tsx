import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Linkedin, Github, Twitter, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Réalisations", href: "/realisations" },
    { label: "À propos", href: "/apropos" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Logiciel sur mesure", href: "/services#logiciel" },
    { label: "Applications web", href: "/services#web" },
    { label: "Applications mobiles", href: "/services#mobile" },
    { label: "Intégrations & API", href: "/services#integration" },
    { label: "Maintenance", href: "/services#maintenance" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  ],
};

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/altevo", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/altevo", icon: Github },
  { label: "Twitter", href: "https://twitter.com/altevo", icon: Twitter },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-altevo-dark-accent/50 bg-altevo-dark/80">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Mobile: Compact 2-col layout */}
        <div className="py-10 md:py-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <Logo className="mb-3 md:mb-4" />
            <p className="text-zinc-500 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              Création de logiciels sur mesure pour les entreprises.
              Solutions performantes, sécurisées et évolutives.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-altevo-dark-light flex items-center justify-center text-zinc-500 hover:text-altevo-yellow hover:bg-altevo-yellow/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 md:space-y-2.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-altevo-yellow transition-colors duration-200 text-xs md:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — hidden on very small mobile, shown on larger */}
          <div className="hidden sm:block">
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 md:space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-altevo-yellow transition-colors duration-200 text-xs md:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2.5 md:space-y-3">
              <li>
                <a
                  href="mailto:contact@altevo.fr"
                  className="flex items-center gap-2 md:gap-3 text-zinc-500 hover:text-altevo-yellow transition-colors duration-200 text-xs md:text-sm"
                >
                  <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
                  <span>contact@altevo.fr</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+33602699258"
                  className="flex items-center gap-2 md:gap-3 text-zinc-500 hover:text-altevo-yellow transition-colors duration-200 text-xs md:text-sm"
                >
                  <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
                  <span>+33 6 02 69 92 58</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 md:gap-3 text-zinc-500 text-xs md:text-sm">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 mt-0.5" />
                  <span>France</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-4 md:py-6 border-t border-altevo-dark-accent/50 flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-zinc-600 text-xs md:text-sm">
            &copy; {currentYear} Altévo. Tous droits réservés.
          </p>
          <div className="flex gap-4 md:gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-600 hover:text-zinc-400 text-[10px] md:text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
