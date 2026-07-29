import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";
import SerifHeading from "./SerifHeading";

const SERVICES = [
  {
    title: "Frontend & Mobile",
    desc: "React, React Native, Tanstack Start, Next.js, Ionic, Shaders, TailwindCSS, Framer Motion, Bootstrap, jQuery.",
  },
  {
    title: "Backend & APIs",
    desc: "Node.js, Express.js, Flask, FastAPI, Bun, REST APIs — TypeScript, JavaScript, Python, Java, C, Dart.",
  },
  {
    title: "AI / ML & Cloud",
    desc: "GenAI with Gemini API & Genkit, Tanstack AI, Python ML libraries, predictive modeling. Supabase, Firebase, GCP, AWS, MySQL, MongoDB, Postgres.",
  },
  {
    title: "DevOps & Tools",
    desc: "Git, GitHub, NPM, Yarn, Pnpm, Docker, Linux/Bash scripting, Arduino and Hardware based products. Shipping and maintaining production systems.",
  },
] as const;

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
              <div
                className="group relative flex h-full min-h-55 flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] sm:p-10"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                }}
              >
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
                {/* Mouse-following radial glow on card hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.12), transparent 80%)",
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
