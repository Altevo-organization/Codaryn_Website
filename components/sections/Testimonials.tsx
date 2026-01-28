"use client";

import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionDiv className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-3 block">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ce que nos clients{" "}
            <span className="gradient-text">disent de nous</span>
          </h2>
          <p className="text-slate-400 text-lg">
            La satisfaction de nos clients est notre priorité. Découvrez leurs retours
            d'expérience sur notre collaboration.
          </p>
        </MotionDiv>

        {/* Testimonials Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <Card className="h-full relative overflow-hidden group">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-16 h-16 text-altevo-violet-light" />
                </div>

                <CardContent className="p-6 flex flex-col h-full">
                  {/* Quote */}
                  <blockquote className="text-slate-300 leading-relaxed mb-6 flex-grow relative z-10">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-altevo-dark-accent/50">
                    {/* Avatar placeholder */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-altevo-violet to-altevo-violet-light flex items-center justify-center text-white font-semibold text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-slate-400">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-altevo-violet-light">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
