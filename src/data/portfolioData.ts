export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: ReadonlyArray<NavItem> = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export interface ProjectItem {
  tag: string;
  title: string;
  desc: string;
  meta: string;
}

export const PROJECTS: ReadonlyArray<ProjectItem> = [
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

export interface ServiceItem {
  title: string;
  desc: string;
}

export const SERVICES: ReadonlyArray<ServiceItem> = [
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

export interface StatItem {
  k: string;
  v: string;
}

export const STATS: ReadonlyArray<StatItem> = [
  { k: "5+ yrs", v: "Engineering experience" },
  { k: "6+", v: "Featured projects" },
  { k: "AI/ML", v: "Gemini · Tanstack AI" },
  { k: "Noida", v: "Based in India" },
] as const;

export interface Certificate {
  title: string;
  provider: string;
  link?: string;
}

export interface ExperienceItem {
  title: string;
  description: string;
  certificates?: ReadonlyArray<Certificate>;
}

export const EXPERIENCE_ITEMS: ReadonlyArray<ExperienceItem> = [
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
] as const;

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: ReadonlyArray<FooterLink>;
}

export const FOOTER_COLUMNS: ReadonlyArray<FooterColumn> = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "#home" },
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
