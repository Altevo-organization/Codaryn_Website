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
      <span className="text-altevo-violet-light text-sm font-semibold uppercase tracking-wider mb-4 block">
        {badge}
      </span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
        {title}{" "}
        <span className="gradient-text">{highlightedWord}</span>
      </h1>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto">
        {description}
      </p>
    </MotionDiv>
  );
}
