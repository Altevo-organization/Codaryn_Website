"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionDiv, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { services } from "@/lib/data";

interface ServicesProps {
  showCTA?: boolean;
  limit?: number;
}

export function Services({ showCTA = true, limit }: ServicesProps) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionDiv className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-3 block">
            Nos services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Des solutions complètes pour{" "}
            <span className="gradient-text">votre entreprise</span>
          </h2>
          <p className="text-slate-400 text-lg">
            De la conception au déploiement, nous vous accompagnons dans la création
            de logiciels sur mesure qui répondent précisément à vos besoins métier.
          </p>
        </MotionDiv>

        {/* Services Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {displayedServices.map((service) => (
            <StaggerItem key={service.id}>
              <Card
                id={service.id}
                className="h-full group card-glow hover:translate-y-[-4px] transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-altevo-violet/20 to-altevo-violet-light/10 flex items-center justify-center mb-4 group-hover:from-altevo-violet/30 group-hover:to-altevo-violet-light/20 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-altevo-violet-light" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-slate-400 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-altevo-violet-light" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        {showCTA && (
          <MotionDiv delay={0.4} className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services" className="gap-2">
                Découvrir tous nos services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </MotionDiv>
        )}
      </div>
    </section>
  );
}
