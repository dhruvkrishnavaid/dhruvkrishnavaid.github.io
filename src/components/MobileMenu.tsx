import { motion } from "motion/react";
import type { Variants } from "motion/react";

import { NAV_ITEMS } from "#/data/portfolioData";

import GlassButton from "./common/GlassButton";

interface MobileMenuProps {
  onClose: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.2 },
  },
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col bg-black/95 px-6 py-6 backdrop-blur-xl sm:px-10"
    >
      <div className="flex items-center justify-between">
        <a href="#" onClick={onClose} aria-label="Measured home">
          <img
            src="/images/favicon-transparent.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </a>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="group relative flex h-11 w-11 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-white"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="my-auto flex flex-col items-center justify-center gap-6"
      >
        {NAV_ITEMS.map((item) => (
          <motion.a
            key={item.label}
            variants={itemVariants}
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.95 }}
            href={item.href}
            onClick={onClose}
            className="cursor-pointer text-3xl font-medium text-white/90 uppercase transition-colors hover:text-white sm:text-4xl"
          >
            {item.label}
          </motion.a>
        ))}

        <motion.div variants={itemVariants}>
          <GlassButton
            href="mailto:dhruvkrishnavaid@gmail.com"
            onClick={onClose}
            className="mt-6 px-6 py-3 text-base font-medium text-white uppercase"
          >
            GET IN TOUCH
          </GlassButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
