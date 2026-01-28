"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionDiv } from "@/components/MotionWrapper";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionDiv className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Questions{" "}
            <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Retrouvez les réponses aux questions les plus courantes sur nos services,
            notre méthode de travail et notre accompagnement.
          </p>
        </MotionDiv>

        {/* FAQ Accordion */}
        <MotionDiv delay={0.2} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-altevo-dark-light/30 rounded-xl border border-altevo-dark-accent/50 px-6 data-[state=open]:border-altevo-violet/30 transition-colors duration-200"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-base font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionDiv>
      </div>
    </section>
  );
}
