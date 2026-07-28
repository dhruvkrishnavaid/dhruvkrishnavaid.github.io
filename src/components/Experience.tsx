import { useState } from "react";

import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";
import SerifHeading from "./SerifHeading";

interface Certificate {
  title: string;
  provider: string;
  link?: string;
}

interface ExperienceItem {
  title: string;
  description: string;
  certificates?: Array<Certificate>;
}

const EXPERIENCE_ITEMS: Array<ExperienceItem> = [
  {
    title: "Project Leader & Full Stack Developer — ISKCON Noida (Volunteer)",
    description:
      "June 2024 – Present. Leading end-to-end technical initiatives, API architecture, and frontend systems for community operations. Architected and deployed an interactive digital kiosk using React and native modules to overcome legacy hardware constraints, and redesigned the primary homepage—driving a 10x increase in online donations.",
  },
  {
    title: "Google Gemini Student Ambassador — Google",
    description:
      "Completed the ambassador program, hosting campus events and promoting AI literacy and developer tooling around the Gemini ecosystem.",
  },
  {
    title: "Certifications — Cybersecurity & Networking",
    description:
      "Specialized training and credentials in penetration testing, network defense, and ethical hacking protocols.",
    certificates: [
      {
        title: "Ethical Hacking",
        provider: "Eduonix",
        link: "/certificates/Eduonix (Ethical hacking).pdf",
      },
      {
        title: "Ethical Hacking",
        provider: "Programming Hub",
        link: "/certificates/Dhruv Krishna Vaid_Ethical Hacking.pdf",
      },
      {
        title: "Advanced Hacking",
        provider: "Programming Hub",
        link: "/certificates/Dhruv Krishna Vaid_Hacking Advanced.pdf",
      },
      {
        title: "Network Security Fundamentals",
        provider: "BitDegree",
        link: "/certificates/Bitdegree (Network Security).pdf",
      },
    ],
  },
  {
    title: "Certifications — Web & Application Development",
    description:
      "Frontend frameworks, UI design principles, responsive web architecture, and cross-platform mobile development.",
    certificates: [
      {
        title: "Bootstrap Tutorial",
        provider: "BitDegree",
        link: "/certificates/Bitdegree (Bootstrap).pdf",
      },
      {
        title: "Introduction to HTML5 and CSS3",
        provider: "BitDegree / Stone River",
        link: "/certificates/Bitdegree (HTML5 and CSS3).pdf",
      },
      {
        title: "Responsive Web Design",
        provider: "BitDegree",
        link: "/certificates/Bitdegree (Responsive Web Design).pdf",
      },
      {
        title: "Animations",
        provider: "Grasshopper (Google Area 120)",
        link: "/certificates/Grasshopper (Animations).pdf",
      },
      {
        title: "Animations II",
        provider: "Grasshopper (Google Area 120)",
        link: "/certificates/Grasshopper (Animations II).pdf",
      },
      {
        title: "Intro to Webpages",
        provider: "Grasshopper (Google Area 120)",
        link: "/certificates/Grasshopper (Intro to Webpages).pdf",
      },
    ],
  },
  {
    title: "Certifications — Programming Languages & Core Fundamentals",
    description:
      "Core programming syntax, asynchronous logic, object-oriented principles, and data manipulation across modern languages.",
    certificates: [
      {
        title: "Python",
        provider: "Coursera / University of Michigan",
        link: "/certificates/Python (Coursera).pdf",
      },
      {
        title: "JavaScript",
        provider: "BitDegree",
        link: "/certificates/Bitdegree (JavaScript).pdf",
      },
      {
        title: "Dart",
        provider: "Programming Hub",
        link: "/certificates/Dhruv Krishna Vaid_Dart.pdf",
      },
      {
        title: "TypeScript",
        provider: "Programming Hub",
        link: "/certificates/Dhruv Krishna Vaid_TypeScript.pdf",
      },
      {
        title: "Coding Fundamentals",
        provider: "Grasshopper (Google Area 120)",
        link: "/certificates/Grasshopper (Coding Fundamentals).pdf",
      },
      {
        title: "Coding Fundamentals II",
        provider: "Grasshopper (Google Area 120)",
        link: "/certificates/Grasshopper (Coding Fundamentals II).pdf",
      },
      {
        title: "Coding for Beginners",
        provider: "BitDegree",
        link: "/certificates/Bitdegree (Intro to Coding).pdf",
      },
      {
        title: "Array Methods",
        provider: "Grasshopper (Google Area 120)",
        link: "/certificates/Grasshopper (Array Methods).pdf",
      },
    ],
  },
  {
    title: "Certifications — Tools, Cloud & Emerging Tech",
    description:
      "Version control systems, ledger architecture, automated scripts, and developer tooling.",
    certificates: [
      {
        title: "Git Course",
        provider: "Programming Hub",
        link: "/certificates/Dhruv Krishna Vaid_Git.pdf",
      },
      {
        title: "Introduction to Blockchain",
        provider: "BitDegree",
        link: "/certificates/Bitdegree (Blockchain).pdf",
      },
      {
        title: "Automation",
        provider: "Grasshopper (Google Area 120)",
        link: "/certificates/Grasshopper (Automation).pdf",
      },
      {
        title: "Using a Code Editor",
        provider: "Grasshopper (Google Area 120)",
        link: "/certificates/Grasshopper (Using a Code Editor).pdf",
      },
    ],
  },
  {
    title: "Certifications — Digital Strategy & Professional Fundamentals",
    description:
      "Comprehensive skills spanning corporate workplace readiness, technical interviewing, and digital growth marketing.",
    certificates: [
      {
        title: "Fundamentals of Digital Marketing",
        provider: "Google Digital Garage",
        link: "/certificates/Google (Fundamentals of Digital Marketing).pdf",
      },
      {
        title: "Career Edge",
        provider: "TCS iON",
        link: "/certificates/TCS iON (Career Edge).pdf",
      },
      {
        title: "Intro to Interviewing",
        provider: "Grasshopper (Google Area 120)",
        link: "/certificates/Grasshopper (Intro to Interviewing).pdf",
      },
    ],
  },
];

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
