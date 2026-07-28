# Dhruv Krishna Vaid — Portfolio (`portfolio-alpha`)

A modern, high-performance developer portfolio built with **TanStack Start**, **React 19**, **Vite**, **Tailwind CSS v4**, and **Motion**. Designed with liquid-glass aesthetic, custom canvas spotlight effects, interactive smooth animations, and optimized SEO metadata.

---

## 🚀 Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) with [TanStack React Router](https://tanstack.com/router)
- **UI Library**: [React](https://react.dev/)
- **Bundler & Server**: [Vite](https://vitejs.dev/) + [Nitro](https://v3.nitro.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + OKLCH Design Tokens + `tw-animate-css`
- **Animations**: [Motion](https://motion.dev/) (Framer Motion v12)
- **Typography**: Google Fonts (_Instrument Serif_, _Inter Variable_)
- **Linter & Formatter**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) & [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html)
- **Language**: TypeScript

---

## ✨ Features & Sections

- **Hero Section**: Interactive HTML5 Canvas spotlight reveal effect tracking cursor motion over dynamic video backgrounds and high-impact typography.
- **Header & Navigation**: Sticky liquid-glass navigation bar with a responsive animated mobile drawer.
- **About**: Background overview and statistics highlights.
- **Projects**: Grid showcase of featured software engineering, hardware, AI/ML, and fintech projects.
- **Skills & Stack**: Categorized overview of core competencies across Frontend, Backend, AI/ML, Cloud, and DevOps.
- **Experience & Credentials**: Interactive accordion featuring professional work experience alongside verified certificate credentials with PDF preview links.
- **Footer**: Integrated contact CTAs, social profiles, and copyright info.
- **Error & 404 Handling**: Styled fallback components for route errors and missing paths.
- **SEO & Metadata**: Complete set of Open Graph, Twitter Cards, favicons, web app manifest, and Apple touch icons configured in root head metadata.

---

## 📁 Project Structure

```text
portfolio-alpha/
├── public/                # Static assets (fonts, images, videos, certificates, favicons)
├── src/
│   ├── components/        # UI components (Hero, Navbar, About, Projects, Skills, Experience, Footer, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions (clsx, tailwind-merge)
│   ├── routes/            # File-based routing (__root.tsx layout, index.tsx homepage)
│   ├── router.tsx         # Router instantiation
│   └── styles.css         # Tailwind v4 imports & OKLCH color token definition
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration with TanStack Start & Tailwind plugins
└── tsr.config.json        # TanStack Router CLI config
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/) installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/dhruvkrishnavaid/portfolio-alpha.git
cd portfolio-alpha

# Install dependencies
bun install
```

### Development Server

Run the development server locally:

```bash
bun run dev
```

Open `http://localhost:3000` in your browser.

---

## 📜 Scripts

| Command                   | Action                                                              |
| ------------------------- | ------------------------------------------------------------------- |
| `bun run dev`             | Starts the Vite dev server on port 3000                             |
| `bun run build`           | Builds the client and server bundles for production                 |
| `bun run preview`         | Previews the production build locally                               |
| `bun run lint`            | Runs `oxlint` to lint the codebase                                  |
| `bun run format`          | Checks code formatting with `oxfmt`                                 |
| `bun run check`           | Formats files with `oxfmt` and auto-fixes lint issues with `oxlint` |
| `bun run generate-routes` | Regenerates route tree files via `tsr generate`                     |

---

## 🌐 Production & Deployment

This project uses **Nitro** as a server adapter, producing a self-contained Node server bundle.

```bash
# Build for production
bun run build

# Run production server
bun .output/server/index.mjs
```

The app can be deployed to any Node.js compatible environment (Render, Vercel, Railway, Fly.io, or VPS).

---

## 📄 License

Created by **Dhruv Krishna Vaid**. All rights reserved.
