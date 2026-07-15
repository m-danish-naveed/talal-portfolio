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
    <div
      ref={ref}
      className="flex flex-col items-center justify-center space-y-2"
    >
      <div className="flex items-end space-x-1">
        <span className="font-mono text-4xl sm:text-5xl">{displayValue}</span>
        <span className="font-mono text-4xl sm:text-5xl">{suffix}</span>
      </div>
      <span className="text-muted text-xs tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}
