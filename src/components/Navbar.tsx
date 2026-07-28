const NAV_ITEMS = [
  "About",
  "Projects",
  "Skills",
  "Experience",
  "Contact",
] as const;

interface NavbarProps {
  onOpenMenu: () => void;
}

export default function Navbar({ onOpenMenu }: NavbarProps) {
  return (
    <nav className="pointer-events-none fixed top-0 right-0 left-0 z-50">
      <div className="flex items-center justify-between px-5 pt-5 sm:px-8">
        {/* Logo */}
        <a
          href="#"
          className="pointer-events-auto cursor-pointer"
          aria-label="Measured home"
        >
          <img
            src="/images/favicon-transparent.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Center pill nav */}
        <div className="pointer-events-auto absolute top-4 left-1/2 hidden -translate-x-1/2 md:flex">
          <div className="liquid-glass flex items-center gap-1 rounded-full px-2 py-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <a
          href="mailto:dhruvkrishnavaid@gmail.com"
          className="liquid-glass pointer-events-auto hidden cursor-pointer items-center gap-2 rounded-full px-4 py-2 md:inline-flex"
        >
          <span className="text-sm font-medium text-white">Get in touch</span>
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={onOpenMenu}
          aria-label="Open menu"
          className="liquid-glass pointer-events-auto flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full md:hidden"
        >
          <span className="h-[1.5px] w-5 bg-white" />
          <span className="h-[1.5px] w-3.5 bg-white" />
        </button>
      </div>
    </nav>
  );
}
