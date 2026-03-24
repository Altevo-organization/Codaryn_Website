"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function AuroraBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="aurora-bg" aria-hidden="true">
      <div
        className="aurora-blob aurora-blob-1"
        style={{
          animationPlayState: prefersReducedMotion ? "paused" : "running",
        }}
      />
      <div
        className="aurora-blob aurora-blob-2"
        style={{
          animationPlayState: prefersReducedMotion ? "paused" : "running",
        }}
      />
      <div
        className="aurora-blob aurora-blob-3"
        style={{
          animationPlayState: prefersReducedMotion ? "paused" : "running",
        }}
      />
      <div className="aurora-noise" />
    </div>
  );
}
