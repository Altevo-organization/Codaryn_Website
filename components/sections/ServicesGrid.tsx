"use client";

import { services } from "@/lib/data";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export function ServicesGrid() {
  return (
    <>
      {/* Mobile: Vertical cards with compact spacing */}
      <div className="md:hidden space-y-3">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="glass-card rounded-2xl p-5 scroll-mt-20 relative overflow-hidden"
          >
            <span className="absolute -top-2 -right-1 text-5xl font-bold text-altevo-dark-accent/20 font-mono select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-altevo-yellow/20 to-altevo-orange/20 flex items-center justify-center shrink-0">
                <service.icon className="w-5 h-5 text-altevo-yellow" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-white mb-1">{service.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-3">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-zinc-500">
                      <div className="w-1 h-1 rounded-full bg-altevo-yellow shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: 3-col grid (unchanged) */}
      <StaggerContainer className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <StaggerItem key={service.id}>
            <div id={service.id} className="glass-card rounded-2xl p-6 h-full group hover:scale-[1.02] transition-transform duration-300 scroll-mt-28">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-altevo-yellow/20 to-altevo-orange/20 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-altevo-yellow/10 transition-shadow duration-300">
                <service.icon className="w-6 h-6 text-altevo-yellow" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{service.description}</p>
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
    </>
  );
}
