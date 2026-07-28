import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";
import SerifHeading from "./SerifHeading";

const STATS = [
  { k: "5+ yrs", v: "Engineering experience" },
  { k: "6+", v: "Featured projects" },
  { k: "AI/ML", v: "Gemini · Tanstack AI" },
  { k: "Noida", v: "Based in India" },
] as const;

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/10 bg-black px-6 py-24 text-white sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionLabel index="01" label="About" />
        </ScrollReveal>

        <div className="mt-8 grid items-start gap-10 md:grid-cols-12">
          <ScrollReveal className="md:col-span-7" delay={0.1}>
            <SerifHeading>
              Full stack engineer with an <em className="italic">AI/ML</em>{" "}
              mind.
            </SerifHeading>
          </ScrollReveal>
          <ScrollReveal
            className="space-y-6 text-base leading-relaxed text-white/70 sm:text-lg md:col-span-5 md:pt-6"
            delay={0.2}
          >
            <p>
              I'm Dhruv Krishna Vaid — a software engineer based in Noida, India
              with 5+ years of hands-on experience architecting cross-platform
              web and mobile applications, integrating GenAI and LLM pipelines,
              and shipping scalable cloud backends.
            </p>
            <p>
              I care about minimal, high-utility UI, complex system
              problem-solving, and building tools people actually reach for.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
          {STATS.map((s, i) => (
            <ScrollReveal key={s.v} delay={0.1 * i} yOffset={16}>
              <div
                className="text-4xl leading-none text-white sm:text-5xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {s.k}
              </div>
              <div className="mt-2 text-xs tracking-[0.2em] text-white/50 uppercase">
                {s.v}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
