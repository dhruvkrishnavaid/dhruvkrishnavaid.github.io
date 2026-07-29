import { useState } from "react";

import { EXPERIENCE_ITEMS } from "#/data/portfolioData";

import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";
import SerifHeading from "./SerifHeading";

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="relative border-t border-white/10 bg-black px-6 py-24 text-white sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <SectionLabel index="04" label="Experience" />
          <div className="mt-6">
            <SerifHeading>Roles & credentials.</SerifHeading>
          </div>
        </ScrollReveal>

        <div className="mt-14 divide-y divide-white/10 border-t border-b border-white/10">
          {EXPERIENCE_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal key={item.title} delay={i * 0.06} yOffset={16}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg text-white/90 transition-colors group-hover:text-white sm:text-xl">
                    {item.title}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/70 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pr-14 pb-4 text-base leading-relaxed text-white/60">
                      {item.description}
                    </p>

                    {item.certificates && item.certificates.length > 0 && (
                      <div className="mt-3 mb-6 pr-14">
                        <span className="font-mono text-xs tracking-wider text-white/40 uppercase">
                          Verified Credentials:
                        </span>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {item.certificates.map((cert) => (
                            <li key={cert.title + cert.provider}>
                              {cert.link ? (
                                <a
                                  href={cert.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                                >
                                  <span>{cert.title}</span>
                                  <span className="text-white/40">
                                    ({cert.provider})
                                  </span>
                                  <svg
                                    className="h-3 w-3 opacity-60"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </a>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60">
                                  <span>{cert.title}</span>
                                  <span className="text-white/40">
                                    ({cert.provider})
                                  </span>
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
