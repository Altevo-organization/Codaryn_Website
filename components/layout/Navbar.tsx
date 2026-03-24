"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const navLinks = [
  { href: "/", label: "Accueil", description: "Retour à l'accueil" },
  { href: "/services", label: "Services", description: "Ce que nous construisons" },
  { href: "/realisations", label: "Réalisations", description: "Projets livrés" },
  { href: "/apropos", label: "À propos", description: "Notre studio" },
  { href: "/contact", label: "Contact", description: "Parlons de votre projet" },
];

// Animated hamburger icon component
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-5 flex flex-col justify-center items-center relative">
      <span
        className={cn(
          "block h-[2px] w-6 bg-current rounded-full transition-all duration-300 ease-out absolute",
          isOpen ? "rotate-45 top-[9px]" : "top-[3px]"
        )}
      />
      <span
        className={cn(
          "block h-[2px] w-4 bg-current rounded-full transition-all duration-300 ease-out absolute top-[9px]",
          isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
        )}
      />
      <span
        className={cn(
          "block h-[2px] w-6 bg-current rounded-full transition-all duration-300 ease-out absolute",
          isOpen ? "-rotate-45 top-[9px]" : "top-[15px]"
        )}
      />
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Mobile menu animation variants
  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const menuVariants = prefersReducedMotion
    ? { closed: { opacity: 0 }, open: { opacity: 1 } }
    : {
        closed: { opacity: 0, x: "100%" },
        open: {
          opacity: 1,
          x: "0%",
          transition: { type: "spring", damping: 30, stiffness: 300 },
        },
      };

  const linkVariants = prefersReducedMotion
    ? { closed: { opacity: 0 }, open: { opacity: 1 } }
    : {
        closed: { opacity: 0, x: 40 },
        open: (i: number) => ({
          opacity: 1,
          x: 0,
          transition: { delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
        }),
      };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-altevo-yellow"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-altevo-yellow to-altevo-orange rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="magnetic-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-altevo-yellow text-white font-semibold text-sm hover:bg-altevo-yellow-light hover:shadow-lg hover:shadow-altevo-yellow/20 transition-all duration-200"
              >
                Démarrer un projet
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button — z-[60] so it stays above the panel */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden relative z-[60] p-2 -mr-2 rounded-lg transition-colors duration-200",
                isMobileMenuOpen
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              )}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <HamburgerIcon isOpen={isMobileMenuOpen} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu — rendered OUTSIDE header to avoid stacking context issues */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              key="mobile-overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/60 z-50"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Menu panel */}
            <motion.div
              key="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-y-0 right-0 w-full max-w-[300px] z-[55] flex flex-col bg-altevo-dark backdrop-blur-2xl border-l border-altevo-dark-accent/40"
            >
              {/* Top gradient accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-altevo-yellow/5 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-altevo-orange/3 to-transparent pointer-events-none" />

              {/* Spacer for header height */}
              <div className="h-16 shrink-0" />

              {/* Navigation links */}
              <div className="flex-1 flex flex-col px-6 pt-4 pb-6 overflow-y-auto">
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      variants={linkVariants}
                      custom={index}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          "group flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200",
                          pathname === link.href
                            ? "bg-altevo-yellow/8 border border-altevo-yellow/15"
                            : "hover:bg-white/[0.03]"
                        )}
                      >
                        {/* Active indicator dot */}
                        <div
                          className={cn(
                            "w-2 h-2 rounded-full shrink-0 transition-all duration-300",
                            pathname === link.href
                              ? "bg-altevo-yellow shadow-sm shadow-altevo-yellow/50"
                              : "bg-zinc-700 group-hover:bg-zinc-500"
                          )}
                        />

                        <div className="flex-1 min-w-0">
                          <div
                            className={cn(
                              "text-base font-semibold transition-colors duration-200",
                              pathname === link.href
                                ? "text-altevo-yellow"
                                : "text-white group-hover:text-altevo-yellow"
                            )}
                          >
                            {link.label}
                          </div>
                          <div className="text-xs text-zinc-600 mt-0.5">
                            {link.description}
                          </div>
                        </div>

                        <ArrowRight
                          className={cn(
                            "w-4 h-4 shrink-0 transition-all duration-200",
                            pathname === link.href
                              ? "text-altevo-yellow/60"
                              : "text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-0.5"
                          )}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* CTA Button */}
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="mt-6 pt-6 border-t border-altevo-dark-accent/30"
                >
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="magnetic-btn flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-lg bg-altevo-yellow text-white font-semibold text-sm"
                  >
                    Démarrer un projet
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <p className="text-center text-[11px] text-zinc-600 mt-3 font-mono">
                    Réponse sous 24h &middot; Sans engagement
                  </p>
                </motion.div>

                {/* Contact info */}
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="mt-4 flex items-center justify-center gap-4 text-xs text-zinc-700"
                >
                  <a href="mailto:contact@codaryn.com" className="hover:text-altevo-yellow transition-colors">
                    contact@codaryn.com
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
