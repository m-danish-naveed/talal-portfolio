"use client";

import { motion } from "framer-motion";

import { siteAnimations } from "@/lib/animations";
import { TransitionLink } from "@/lib/components/transition-link";
import { useEntryDelay } from "@/lib/hooks/use-entry-delay";

export default function NotFound() {
  const entryDelay = useEntryDelay();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="z-10 flex flex-col items-center justify-center px-5 text-center">
        <motion.h1
          variants={siteAnimations.fadeUp(entryDelay)}
          initial="hidden"
          animate="visible"
          className="text-[150px] leading-none font-bold tracking-tighter md:text-[250px] lg:text-[300px]"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.4)",
            color: "transparent",
          }}
        >
          404
        </motion.h1>

        <motion.p
          variants={siteAnimations.fadeUp(entryDelay + 0.2)}
          initial="hidden"
          animate="visible"
          className="mt-4 max-w-[500px] text-lg text-white/70 md:text-xl"
        >
          The page you are looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          variants={siteAnimations.fadeUp(entryDelay + 0.4)}
          initial="hidden"
          animate="visible"
          className="mt-12"
        >
          <TransitionLink
            href="/"
            className="group relative flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-medium tracking-wide text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Return to Homepage
          </TransitionLink>
        </motion.div>
      </div>
    </main>
  );
}
