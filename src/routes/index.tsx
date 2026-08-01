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

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lenisRef = useRef<LenisRef>(null);

  const scrollToSection = (target: string) => {
    lenisRef.current?.lenis?.scrollTo(target);
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
  }, [menuOpen]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: true,
        anchors: true,
      }}
    >
      <div className="bg-black">
        <Navbar
          onNavigate={scrollToSection}
          onOpenMenu={() => setMenuOpen(true)}
        />
        <AnimatePresence>
          {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
        </AnimatePresence>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Footer onNavigate={scrollToSection} />
      </div>
    </ReactLenis>
  );
}
