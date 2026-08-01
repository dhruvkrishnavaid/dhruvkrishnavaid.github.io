import { FOOTER_COLUMNS } from "#/data/portfolioData";

import GlassButton from "./common/GlassButton";
import ScrollReveal from "./ScrollReveal";

interface FooterProps {
  onNavigate: (target: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-black px-6 pt-24 pb-10 text-white sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12">
          <ScrollReveal className="md:col-span-5">
            <img
              src="/images/footer-banner.png"
              alt="Logo"
              className="h-10 w-auto"
            />
            <p
              className="mt-6 max-w-md text-4xl leading-none text-white sm:text-5xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Let's build something <em className="italic">valuable.</em>
            </p>
            <div className="mt-8">
              <GlassButton
                href="mailto:dhruvkrishnavaid@gmail.com"
                className="px-6 py-3 text-sm font-medium text-white"
              >
                Get in touch
              </GlassButton>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-7">
            <div className="hidden lg:block" />
            {FOOTER_COLUMNS.map((c, i) => (
              <ScrollReveal key={c.title} delay={0.1 * i} yOffset={16}>
                <div className="mb-4 text-xs tracking-[0.25em] text-white/40 uppercase">
                  {c.title}
                </div>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith("#") ? (
                        <button
                          type="button"
                          onClick={() => onNavigate(l.href)}
                          className="cursor-pointer text-sm text-white/80 transition-colors hover:text-white"
                        >
                          {l.label}
                        </button>
                      ) : (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer text-sm text-white/80 transition-colors hover:text-white"
                        >
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal
          delay={0.2}
          yOffset={10}
          className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center"
        >
          <div>
            © {new Date().getFullYear()} Dhruv Krishna Vaid. All rights
            reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/dhruvkrishnavaid"
              className="cursor-pointer transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/dhruvkrishnavaid"
              className="cursor-pointer transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:dhruvkrishnavaid@gmail.com"
              className="cursor-pointer transition-colors hover:text-white"
            >
              Email
            </a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
