import { createFileRoute } from "@tanstack/react-router";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";

import "lenis/dist/lenis.css";

import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useIsMobile } from "@/hooks/use-mobile";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lenisRef = useRef<LenisRef>(null);
  const isMobile = useIsMobile();

  const scrollToSection = (target: string) => {
    const element = document.querySelector(target) as HTMLElement | null;

    if (!element) {
      return;
    }

    if (isMobile) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      lenisRef.current?.lenis?.scrollTo(element, { offset: 32 });
    }

    setMenuOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const lenis = lenisRef.current?.lenis;

    if (!lenis) {
      return;
    }

    if (menuOpen) {
      lenis.stop();
      return () => {
        lenis.start();
      };
    }

    lenis.start();
  }, [isMobile, menuOpen]);

  const content = (
    <div className="bg-black">
      <Navbar
        onNavigate={scrollToSection}
        onOpenMenu={() => setMenuOpen(true)}
      />
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            onNavigate={scrollToSection}
            onClose={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer onNavigate={scrollToSection} />
    </div>
  );

  if (isMobile) {
    return content;
  }

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: true,
      }}
    >
      {content}
    </ReactLenis>
  );
}
