"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

interface TransitionContextType {
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  navigate: () => {},
});

export const useTransition = () => useContext(TransitionContext);

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetHref, setTargetHref] = useState<string | null>(null);
  const [direction, setDirection] = useState<"up" | "down">("up");

  const navigate = (href: string) => {
    // If it's an external link or a mailto link, just go there
    if (href.startsWith("http") || href.startsWith("mailto:")) {
      window.location.href = href;
      return;
    }

    // Check if it's exactly the current URL to prevent unnecessary transitions
    const targetPath = href.split("#")[0];
    const targetHash = href.includes("#") ? "#" + href.split("#")[1] : "";

    // If we are already on the target path, don't trigger the page transition cover
    if (targetPath === window.location.pathname || targetPath === "") {
      if (targetHash) {
        // Natively scroll to the hash if it exists
        router.push(href);
      }
      return;
    }

    // Determine direction: if going home, slide down. Otherwise, slide up.
    const isHome = targetPath === "/";
    setDirection(isHome ? "down" : "up");

    // Start transition
    setIsTransitioning(true);
    setTargetHref(href);
  };

  useEffect(() => {
    // We only want to trigger the route change after the screen is fully covered.
    // The cover animation takes 0.8s.
    if (isTransitioning && targetHref) {
      const timer = setTimeout(() => {
        router.push(targetHref);

        setTimeout(() => {
          setIsTransitioning(false);
          // We intentionally don't clear targetHref or direction here
          // so the exit animation uses the correct values.
        }, 200);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [isTransitioning, targetHref, router]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="transition-pane"
            className="pointer-events-none fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-[#121212]"
            initial={{ y: direction === "down" ? "-100%" : "100%" }}
            animate={{ y: 0 }}
            exit={{ y: direction === "down" ? "100%" : "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* We can put a small loading icon or noise overlay here if desired */}
            <div
              className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-20"
              style={{
                backgroundImage: "url('/images/noise.gif')",
                backgroundRepeat: "repeat",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
