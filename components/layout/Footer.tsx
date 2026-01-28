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
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/altevo",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/altevo",
    icon: Github,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/altevo",
    icon: Twitter,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-altevo-dark-accent/50 bg-altevo-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
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
                  className="w-10 h-10 rounded-lg bg-altevo-dark-light flex items-center justify-center text-slate-400 hover:text-altevo-violet-light hover:bg-altevo-violet/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-altevo-violet-light transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-altevo-violet-light transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@altevo.fr"
                  className="flex items-center gap-3 text-slate-400 hover:text-altevo-violet-light transition-colors duration-200 text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>contact@altevo.fr</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+33600000000"
                  className="flex items-center gap-3 text-slate-400 hover:text-altevo-violet-light transition-colors duration-200 text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+33 6 02 69 92 58</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>France</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-altevo-dark-accent/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Altévo. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
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
