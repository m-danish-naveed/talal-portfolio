"use client";

import { useEffect, useRef, useState } from "react";

import { useInView, useSpring } from "framer-motion";

interface StatCounterProps {
  value: number;
  label: string;
  suffix: string;
}

export function StatCounter({ value, label, suffix }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      // Round to 2 decimal places max, then to string
      const rounded = Math.round(latest * 100) / 100;
      setDisplayValue(rounded);
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <div ref={ref} className="flex items-center justify-center gap-4 sm:gap-6">
      <div className="flex items-end text-xl leading-[1.1] font-medium sm:text-4xl">
        <span>{displayValue}</span>
        <span>{suffix}</span>
      </div>
      <span className="text-base text-white/50 sm:text-lg">{label}</span>
    </div>
  );
}
