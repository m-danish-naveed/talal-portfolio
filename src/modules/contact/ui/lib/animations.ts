import type { Variants } from "framer-motion";

export const contactAnimations: Record<string, Variants> = {
  staggerContainer: (delay: number = 0) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: delay },
    },
  }),
  textReveal: {
    hidden: { opacity: 0, y: 60, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  },
  fadeUp: (delay: number = 0) => ({
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay },
    },
  }),
};
