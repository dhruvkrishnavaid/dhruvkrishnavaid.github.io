import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import ErrorComponent from "@/components/ErrorComponent";
import NotFoundComponent from "@/components/NotFoundComponent";

import "../styles.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dhruv Krishna Vaid — Full Stack & AI/ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Dhruv Krishna Vaid — Full Stack Developer, AI/ML Engineer, and DevOps Engineer based in Noida, India.",
      },
      {
        property: "og:title",
        content: "Dhruv Krishna Vaid — Full Stack & AI/ML Engineer",
      },
      {
        property: "og:description",
        content:
          "Full Stack, AI/ML, and DevOps engineer. Selected projects, skills, and experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "msapplication-TileColor", content: "#da532c" },
      {
        name: "msapplication-TileImage",
        content: "/images/mstile-144x144.png",
      },
      { name: "theme-color", content: "#ffffff" },
      { name: "msapplication-config", content: "/browserconfig.xml" },
    ],
    links: [
      { rel: "icon", href: "/images/favicon.ico", type: "image/x-icon" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/images/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/images/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/images/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/images/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
      {
        rel: "mask-icon",
        href: "/images/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
