"use client";

import { MotionDiv } from "@/components/MotionWrapper";

export function PricingNote() {
  return (
    <MotionDiv className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-altevo-violet/20 mb-6">
        <span className="text-2xl font-bold text-altevo-violet-light">€</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        Tarification sur devis
      </h2>
      <p className="text-slate-400 mb-6">
        Chaque projet est unique et mérite une analyse approfondie. Nous
        établissons un devis personnalisé après avoir compris vos besoins,
        vos contraintes et vos objectifs. Nos tarifs sont transparents et
        sans surprise.
      </p>
      <p className="text-sm text-slate-500">
        Demande de devis gratuite et sans engagement. Réponse sous 24h.
      </p>
    </MotionDiv>
  );
}
