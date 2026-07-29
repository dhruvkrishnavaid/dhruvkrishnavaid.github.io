import ScrollReveal from "./ScrollReveal";

const FOOTER_COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com/dhruvkrishnavaid" },
      { label: "LinkedIn", href: "https://linkedin.com/in/dhruvkrishnavaid" },
      {
        label: "Google Devs",
        href: "https://developers.google.com/profile/u/108430102073000785511",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "Email",
        href: "mailto:dhruvkrishnavaid@gmail.com",
      },
      { label: "Telegram", href: "https://t.me/dhruvkrishnavaid" },
    ],
  },
] as const;

export default function Footer() {
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
              <a
                href="mailto:dhruvkrishnavaid@gmail.com"
                className="group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                }}
              >
                <span className="relative z-10">Get in touch</span>
                {/* Mouse-following radial glow on footer CTA hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.15), transparent 80%)",
                  }}
                />
              </a>
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
                      <a
                        href={l.href}
                        target={l.href.startsWith("#") ? undefined : "_blank"}
                        rel={
                          l.href.startsWith("#")
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="cursor-pointer text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
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
