"use client";

import { useEffect, useState } from "react";

import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useGlobalState } from "./global-provider";

export function Preloader() {
  const { isFirstLoadComplete, setIsFirstLoadComplete } = useGlobalState();
  const [isLoading, setIsLoading] = useState(true);
  const progress = useMotionValue(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  // clip-path: inset(top right bottom left).
  // Fills from left to right: right inset starts at 100%, goes to 0%
  const clipPath = useTransform(
    progress,
    [0, 100],
    ["inset(-5% 100% -5% -5%)", "inset(-5% -5% -5% -5%)"]
  );

  useEffect(() => {
    if (isFirstLoadComplete) {
      const timer = setTimeout(() => setIsLoading(false), 0);
      return () => clearTimeout(timer);
    }

    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setIsFirstLoadComplete(true);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading, isFirstLoadComplete, setIsFirstLoadComplete]);

  useEffect(() => {
    if (isFirstLoadComplete) return;

    const controls = animate(progress, 100, {
      duration: 2.5,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setDisplayProgress(Math.round(latest));
      },
      onComplete: () => {
        // Pause at 100% so user clearly sees the filled text
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      },
    });

    return () => controls?.stop();
  }, [progress, isFirstLoadComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
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
              style={{
                clipPath,
                WebkitTextStroke: "1px white",
              }}
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
