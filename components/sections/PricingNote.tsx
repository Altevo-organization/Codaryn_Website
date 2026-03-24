"use client";

import { MotionDiv } from "@/components/MotionWrapper";
import { FileText, Shield, Clock } from "lucide-react";

export function PricingNote() {
  return (
    <MotionDiv className="max-w-3xl mx-auto">
      <div className="glass-card rounded-2xl p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
          Toutes nos prestations sont sur{" "}
          <span className="gradient-text-fire">devis</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto">
          Chaque projet est unique. Nous analysons vos besoins et vous proposons
          un devis détaillé, transparent et sans engagement.
        </p>
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          <div className="flex flex-col items-center gap-1.5 md:gap-2 p-3 md:p-4">
            <FileText className="w-5 h-5 md:w-6 md:h-6 text-altevo-yellow" />
            <span className="text-white font-medium text-xs md:text-sm">Devis détaillé</span>
            <span className="text-zinc-500 text-[10px] md:text-xs text-center">Périmètre, planning, budget</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 md:gap-2 p-3 md:p-4">
            <Shield className="w-5 h-5 md:w-6 md:h-6 text-altevo-orange" />
            <span className="text-white font-medium text-xs md:text-sm">Sans engagement</span>
            <span className="text-zinc-500 text-[10px] md:text-xs text-center">Gratuit et sans obligation</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 md:gap-2 p-3 md:p-4">
            <Clock className="w-5 h-5 md:w-6 md:h-6 text-altevo-red" />
            <span className="text-white font-medium text-xs md:text-sm">Réponse rapide</span>
            <span className="text-zinc-500 text-[10px] md:text-xs text-center">Sous 24h ouvrées</span>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
