import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";
import SerifHeading from "./SerifHeading";

const PROJECTS = [
  {
    tag: "AI / Healthcare",
    title: "DrugXplore",
    desc: "AI-driven platform for accelerated drug discovery and molecular interaction analysis.",
    meta: "TypeScript · React · Gemini API",
  },
  {
    tag: "Web / Community",
    title: "ISKCON Noida Landing Page",
    desc: "Redesigned flagship web platform for community operations, driving a 10x increase in online donations.",
    meta: "TypeScript · React · Tailwind CSS",
  },
  {
    tag: "Healthcare / Web",
    title: "Chaitanya Diagnostics Web Platform",
    desc: "Modern digital platform for diagnostic services, streamlining patient appointments and medical report delivery.",
    meta: "React · TypeScript · Node.js",
  },
  {
    tag: "Hardware",
    title: "Digital Kiosk Platform",
    desc: "Community kiosk app bridging Ionic + React with Android native for legacy hardware.",
    meta: "Ionic · React · Android",
  },
  {
    tag: "Productivity",
    title: "Fimpo",
    desc: "Cross-platform task and workflow manager designed for high productivity.",
    meta: "Ionic · TypeScript · React",
  },
  {
    tag: "Fintech",
    title: "ArthSaathi",
    desc: "Personal finance tracking and advisory application with actionable insights.",
    meta: "TypeScript · React · APIs",
  },
] as const;

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
            A cross-section across AI, hardware, disaster management, and
            fintech.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ScrollReveal key={p.title} delay={(i % 3) * 0.1} yOffset={20}>
              <article
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] sm:p-8"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                }}
              >
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
                {/* Mouse-following radial glow on card hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.1), transparent 90%)",
                  }}
                />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
