"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export function Testimonials() {
  return (
    <section className="py-16 md:py-28 relative">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-altevo-yellow text-xs md:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 block font-mono">
            Témoignages
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Ce qu&apos;en disent nos{" "}
            <span className="gradient-text-fire">clients</span>
          </h2>
        </div>

        {/* Mobile: Horizontal snap-scroll testimonials */}
        <div className="md:hidden overflow-hidden -mx-5">
          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-5 scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-[280px]"
              >
                <div className="glass-card rounded-2xl p-5 h-full relative">
                  <Quote className="w-6 h-6 text-altevo-yellow/20 mb-3" />
                  <blockquote className="text-zinc-300 text-xs leading-relaxed mb-4 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-altevo-yellow to-altevo-orange flex items-center justify-center text-altevo-black font-bold text-xs">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-medium text-xs">{testimonial.author}</div>
                      <div className="text-zinc-500 text-[10px]">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Right padding spacer so last card isn't clipped */}
            <div className="shrink-0 w-1" aria-hidden="true" />
          </div>
          <div className="flex justify-center gap-1.5 mt-3 px-5">
            {testimonials.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-altevo-dark-accent" />
            ))}
          </div>
        </div>

        {/* Desktop: 2-col grid (unchanged) */}
        <StaggerContainer className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="glass-card rounded-2xl p-6 h-full relative">
                <Quote className="w-8 h-8 text-altevo-yellow/20 mb-4" />
                <blockquote className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-altevo-yellow to-altevo-orange flex items-center justify-center text-altevo-black font-bold text-sm">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.author}</div>
                    <div className="text-zinc-500 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
