"use client";

import { CheckCircle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { services } from "@/lib/data";

export function ServicesGrid() {
  return (
    <StaggerContainer
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      staggerDelay={0.1}
    >
      {services.map((service) => (
        <StaggerItem key={service.id}>
          <Card
            id={service.id}
            className="h-full group card-glow hover:translate-y-[-4px] transition-all duration-300"
          >
            <CardHeader>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-altevo-violet/20 to-altevo-violet-light/10 flex items-center justify-center mb-4 group-hover:from-altevo-violet/30 group-hover:to-altevo-violet-light/20 transition-all duration-300">
                <service.icon className="w-7 h-7 text-altevo-violet-light" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="text-slate-400 leading-relaxed">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="text-sm font-semibold text-white mb-3">
                Inclus dans ce service :
              </h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
