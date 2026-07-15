"use client";

import { useEffect, useState } from "react";

import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const progress = useMotionValue(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  // clip-path: inset(top right bottom left).
  // Fills from left to right: right inset starts at 100%, goes to 0%
  const clipPath = useTransform(
    progress,
    (val) => `inset(0 ${100 - val}% 0 0)`
  );

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 2.5,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setDisplayProgress(Math.round(latest));
      },
      onComplete: () => {
        // Small pause at 100% before exiting
        setTimeout(() => {
          setIsLoading(false);
        }, 400);
      },
    });

    return () => controls.stop();
  }, [progress]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#121212]"
        >
          {/* Noise Overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-20"
            style={{
              backgroundImage: "url('/images/noise.gif')",
              backgroundRepeat: "repeat",
            }}
          />

          {/* Main Text Wrapper */}
          <div className="relative flex items-center justify-center text-[18vw] leading-none font-bold tracking-tighter uppercase md:text-[12vw]">
            {/* Background Layer: Outlined */}
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                color: "transparent",
              }}
            >
              HAMAS
            </span>

            {/* Foreground Layer: Solid Fill */}
            <motion.span
              className="absolute top-0 left-0 text-white"
              style={{ clipPath }}
            >
              HAMAS
            </motion.span>
          </div>

          {/* Percentage Counter */}
          <div className="absolute right-8 bottom-8 flex items-end gap-1 md:right-12 md:bottom-12">
            <span className="font-mono text-5xl font-bold tracking-tighter text-white md:text-7xl">
              {displayProgress}
            </span>
            <span className="mb-1 font-mono text-xl text-white/50 md:mb-2 md:text-3xl">
              %
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
