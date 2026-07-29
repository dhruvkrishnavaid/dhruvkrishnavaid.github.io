import type { MouseEventHandler, ReactNode } from "react";

import { useMouseSpotlight } from "#/hooks/useMouseSpotlight";

interface GlassButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  spotlightRadius?: number;
  spotlightOpacity?: number;
  ariaLabel?: string;
}

export default function GlassButton({
  children,
  href,
  onClick,
  className = "",
  spotlightRadius = 200,
  spotlightOpacity = 0.15,
  ariaLabel,
}: GlassButtonProps) {
  const { handleMouseMove } = useMouseSpotlight();

  const baseStyles = `group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.12)] ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${spotlightRadius}px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, ${spotlightOpacity}), transparent 80%)`,
        }}
      />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={baseStyles}
        onMouseMove={handleMouseMove}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={baseStyles}
      onMouseMove={handleMouseMove}
    >
      {content}
    </button>
  );
}
