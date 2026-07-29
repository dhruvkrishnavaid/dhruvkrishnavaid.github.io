import { SERVICES } from "#/data/portfolioData";

import GlassCard from "./common/GlassCard";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";
import SerifHeading from "./SerifHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-white/10 bg-black px-6 py-24 text-white sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionLabel index="03" label="Skills" />
          <div className="mt-6 max-w-3xl">
            <SerifHeading>The stack I build with.</SerifHeading>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.title} delay={(i % 2) * 0.1} yOffset={16}>
              <GlassCard className="flex h-full min-h-55 flex-col gap-4 p-8 sm:p-10">
                <div className="flex items-center text-xs tracking-[0.2em] text-white/40 uppercase tabular-nums">
                  <span>0{i + 1}</span>
                </div>
                <h3
                  className="text-2xl leading-tight text-white sm:text-3xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {s.desc}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
