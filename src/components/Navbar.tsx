import { NAV_ITEMS } from "#/data/portfolioData";
import { useMouseSpotlight } from "#/hooks/useMouseSpotlight";

import GlassButton from "./common/GlassButton";

interface NavbarProps {
  onNavigate: (target: string) => void;
  onOpenMenu: () => void;
}

export default function Navbar({ onNavigate, onOpenMenu }: NavbarProps) {
  const { handleMouseMove } = useMouseSpotlight();

  return (
    <nav className="pointer-events-none fixed top-0 right-0 left-0 z-50">
      <div className="flex items-center justify-between px-5 pt-5 sm:px-8">
        {/* Logo */}
        <button
          type="button"
          onClick={() => onNavigate("#home")}
          className="pointer-events-auto cursor-pointer"
          aria-label="Measured home"
        >
          <img
            src="/images/favicon-transparent.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </button>

        {/* Center pill nav */}
        <div className="pointer-events-auto absolute top-4 left-1/2 hidden -translate-x-1/2 md:flex">
          <div
            className="group relative flex items-center gap-1 overflow-hidden rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]"
            onMouseMove={handleMouseMove}
          >
            {NAV_ITEMS.map((item) => (
              <button
                type="button"
                key={item.label}
                onClick={() => onNavigate(item.href)}
                className="relative z-10 cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium text-white/70 transition-all duration-300 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            {/* Mouse-following radial glow on nav pill hover */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.15), transparent 80%)",
              }}
            />
          </div>
        </div>

        {/* Desktop CTA */}
        <GlassButton
          href="mailto:dhruvkrishnavaid@gmail.com"
          className="pointer-events-auto hidden px-5 py-2 text-sm font-medium text-white md:inline-flex"
        >
          Get in touch
        </GlassButton>

        {/* Mobile hamburger */}
        <button
          onClick={onOpenMenu}
          aria-label="Open menu"
          className="group pointer-events-auto relative flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] md:hidden"
        >
          <span className="relative z-10 h-[1.5px] w-5 bg-white" />
          <span className="relative z-10 h-[1.5px] w-3.5 bg-white" />
        </button>
      </div>
    </nav>
  );
}
