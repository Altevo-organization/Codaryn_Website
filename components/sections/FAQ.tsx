"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import { MotionDiv } from "@/components/MotionWrapper";

export function FAQ() {
  return (
    <section className="py-16 md:py-28 relative">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-altevo-yellow text-xs md:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 block font-mono">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Questions{" "}
            <span className="gradient-text-fire">fréquentes</span>
          </h2>
        </div>

        <MotionDiv className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-4 md:px-6 border-none"
              >
                <AccordionTrigger className="text-left text-white hover:text-altevo-yellow text-xs md:text-sm font-medium py-3.5 md:py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-xs md:text-sm leading-relaxed pb-3.5 md:pb-4">
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
