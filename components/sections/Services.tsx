"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

interface ServicesProps {
  limit?: number;
  showTitle?: boolean;
}

export function Services({ limit, showTitle = true }: ServicesProps) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-16 md:py-28 relative" id="services">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-10 md:mb-16">
            <span className="text-altevo-yellow text-xs md:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 block font-mono">
              Nos services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Des solutions pour chaque{" "}
              <span className="gradient-text-fire">besoin</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto">
              De la conception à la maintenance, nous couvrons l&apos;ensemble du cycle de vie
              de vos projets logiciels.
            </p>
          </div>
        )}

        {/* Mobile: Horizontal snap-scroll carousel */}
        <div className="md:hidden overflow-hidden -mx-5">
          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-5 scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {displayedServices.map((service, index) => (
              <div
                key={service.id}
                className="snap-start shrink-0 w-[280px]"
              >
                <div className="glass-card rounded-2xl p-5 h-full relative overflow-hidden">
                  {/* Step number background */}
                  <span className="absolute -top-2 -right-1 text-6xl font-bold text-altevo-dark-accent/30 font-mono select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-altevo-yellow/20 to-altevo-orange/20 flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5 text-altevo-yellow" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-3 line-clamp-3">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-zinc-500">
                        <div className="w-1 h-1 rounded-full bg-altevo-yellow shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            {/* Right padding spacer so last card isn't clipped */}
            <div className="shrink-0 w-1" aria-hidden="true" />
          </div>
          {/* Scroll hint */}
          <div className="flex justify-center gap-1.5 mt-3 px-5">
            {displayedServices.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-altevo-dark-accent" />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout (unchanged) */}
        <StaggerContainer className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service) => (
            <StaggerItem key={service.id}>
              <div className="glass-card rounded-2xl p-6 h-full group hover:scale-[1.02] transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-altevo-yellow/20 to-altevo-orange/20 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-altevo-yellow/10 transition-shadow duration-300">
                  <service.icon className="w-6 h-6 text-altevo-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-500">
                      <div className="w-1 h-1 rounded-full bg-altevo-yellow" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {limit && (
          <div className="text-center mt-8 md:mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-altevo-yellow hover:text-altevo-orange font-medium transition-colors duration-200 text-sm md:text-base"
            >
              Voir tous nos services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
