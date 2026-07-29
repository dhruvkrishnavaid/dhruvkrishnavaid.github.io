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
        title: "Coding Foundations",
        provider: "Grasshopper (Google Area 120)",
        link: "/certificates/Grasshopper (Coding Foundations).pdf",
      },
      {
        title: "Foundations II",
        provider: "Grasshopper (Google Area 120)",
        link: "/certificates/Grasshopper (Foundations II).pdf",
      },
      {
        title: "JS Array Methods",
        provider: "Grasshopper (Google Area 120)",
        link: "/certificates/Grasshopper (JS Array Methods).pdf",
      },
      {
        title: "JavaScript",
        provider: "Sololearn",
        link: "/certificates/Sololearn (Javascript).pdf",
      },
      {
        title: "PHP",
        provider: "Sololearn",
        link: "/certificates/Sololearn (PHP).pdf",
      },
      {
        title: "Responsive Web Design",
        provider: "Sololearn",
        link: "/certificates/Sololearn (Responsive Web Design).pdf",
      },
      {
        title: "HTML",
        provider: "Sololearn",
        link: "/certificates/Sololearn (HTML).pdf",
      },
    ],
  },
  {
    title: "Certifications — Programming Languages & Software Engineering",
    description:
      "Object-oriented programming, data structures, algorithms, and core language proficiency.",
    certificates: [
      {
        title: "Python 3",
        provider: "Sololearn",
        link: "/certificates/Sololearn (Python 3).pdf",
      },
      {
        title: "Python Developer",
        provider: "Sololearn",
        link: "/certificates/Sololearn (Python Developer).pdf",
      },
      {
        title: "Python Data Structures",
        provider: "Sololearn",
        link: "/certificates/Sololearn (Python Data Structures).pdf",
      },
      {
        title: "Python Core",
        provider: "Sololearn",
        link: "/certificates/Sololearn (Python Core).pdf",
      },
      {
        title: "Python for Beginners",
        provider: "Sololearn",
        link: "/certificates/Sololearn (Python for Beginners).pdf",
      },
      {
        title: "Python Intermediate",
        provider: "Sololearn",
        link: "/certificates/Sololearn (Python Intermediate).pdf",
      },
      {
        title: "C",
        provider: "Sololearn",
        link: "/certificates/Sololearn (C).pdf",
      },
      {
        title: "C++",
        provider: "Sololearn",
        link: "/certificates/Sololearn (C++).pdf",
      },
      {
        title: "Java",
        provider: "Sololearn",
        link: "/certificates/Sololearn (Java).pdf",
      },
    ],
  },
  {
    title: "Certifications — Artificial Intelligence & Data Science",
    description:
      "Machine learning models, GenAI workflows, neural networks, data analysis, and predictive analytics.",
    certificates: [
      {
        title: "AI & ML Certificate",
        provider: "Coincent",
        link: "/certificates/Coincent (AI ML).pdf",
      },
      {
        title: "Machine Learning with Python",
        provider: "Sololearn",
        link: "/certificates/Sololearn (Machine Learning).pdf",
      },
      {
        title: "Data Science",
        provider: "Sololearn",
        link: "/certificates/Sololearn (Data Science).pdf",
      },
      {
        title: "Generative AI",
        provider: "Sololearn",
        link: "/certificates/Sololearn (Generative AI).pdf",
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
