import { motion } from "motion/react";
import type { Variants } from "motion/react";

const NAV_ITEMS = [
  "ABOUT",
  "PROJECTS",
  "SKILLS",
  "EXPERIENCE",
  "CONTACT",
] as const;

interface MobileMenuProps {
  onClose: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 15,
    filter: "blur(4px)",
    transition: { duration: 0.2 },
  },
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.45, ease: [0.77, 0, 0.18, 1] }}
      className="fixed inset-0 z-55 flex flex-col justify-between bg-black/95 px-6 py-8 backdrop-blur-xl md:hidden"
    >
      <div className="flex justify-end">
        <motion.button
          onClick={onClose}
          aria-label="Close menu"
          initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.9 }}
          className="liquid-glass flex h-11 w-11 cursor-pointer items-center justify-center rounded-full"
        >
          <span className="relative block h-5 w-5">
            <span
              className="absolute top-1/2 left-0 h-[1.5px] w-5 bg-white"
              style={{ transform: "translateY(-50%) rotate(45deg)" }}
            />
            <span
              className="absolute top-1/2 left-0 h-[1.5px] w-5 bg-white"
              style={{ transform: "translateY(-50%) rotate(-45deg)" }}
            />
          </span>
        </motion.button>
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
            key={item}
            variants={itemVariants}
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.95 }}
            href={`#${item.toLowerCase()}`}
            onClick={onClose}
            className="cursor-pointer text-3xl font-medium text-white/90 transition-colors hover:text-white sm:text-4xl"
          >
            {item}
          </motion.a>
        ))}

        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:dhruvkrishnavaid@gmail.com"
          onClick={onClose}
          className="liquid-glass mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3"
        >
          <span className="text-base font-medium text-white">GET IN TOUCH</span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
