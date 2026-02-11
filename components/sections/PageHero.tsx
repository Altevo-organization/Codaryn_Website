"use client";

import { MotionDiv } from "@/components/MotionWrapper";

interface PageHeroProps {
  badge: string;
  title: string;
  highlightedWord: string;
  description: string;
}

export function PageHero({ badge, title, highlightedWord, description }: PageHeroProps) {
  return (
    <MotionDiv className="max-w-4xl mx-auto text-center">
      <span className="text-altevo-yellow text-xs md:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 block font-mono">
        {badge}
      </span>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
        {title}{" "}
        <span className="gradient-text-fire">{highlightedWord}</span>
      </h1>
      <p className="text-sm md:text-lg text-zinc-400 max-w-2xl mx-auto">
        {description}
      </p>
    </MotionDiv>
  );
}
