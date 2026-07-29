import type { ReactNode } from "react";

import { useMouseSpotlight } from "#/hooks/useMouseSpotlight";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  spotlightRadius?: number;
  spotlightOpacity?: number;
}

export default function GlassCard({
  children,
  className = "",
  spotlightRadius = 400,
  spotlightOpacity = 0.12,
}: GlassCardProps) {
  const { handleMouseMove } = useMouseSpotlight();

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] ${className}`}
      onMouseMove={handleMouseMove}
    >
      {children}
      {/* Mouse-following radial glow on card hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${spotlightRadius}px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, ${spotlightOpacity}), transparent 80%)`,
        }}
      />
    </div>
  );
}
