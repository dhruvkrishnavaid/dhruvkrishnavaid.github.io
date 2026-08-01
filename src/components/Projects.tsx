import { PROJECTS } from "#/data/portfolioData";

import GlassCard from "./common/GlassCard";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";
import SerifHeading from "./SerifHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-white/10 bg-black px-6 py-24 text-white sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="02" label="Projects" />
            <div className="mt-6">
              <SerifHeading>Selected work.</SerifHeading>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60 sm:text-base">
            A cross-section across AI, hardware, community contributions, and
            fintech.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ScrollReveal key={p.title} delay={(i % 3) * 0.1} yOffset={20}>
              <GlassCard className="h-full p-6 sm:p-8">
                <div className="flex items-center justify-between text-xs tracking-[0.2em] text-white/50 uppercase">
                  <span>{p.tag}</span>
                  <span className="tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="mt-10 text-3xl leading-tight text-white sm:text-4xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {p.desc}
                </p>
                <div className="mt-8 border-t border-white/10 pt-6 text-xs tracking-[0.2em] text-white/40 uppercase">
                  {p.meta}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
