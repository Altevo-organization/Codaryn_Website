"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="animated-bg"
      aria-hidden="true"
      style={{
        animationPlayState: prefersReducedMotion ? "paused" : "running",
      }}
    />
  );
}
