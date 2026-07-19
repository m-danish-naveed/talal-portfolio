"use client";

import { motion } from "framer-motion";

import { useEntryDelay } from "@/lib/hooks/use-entry-delay";

import { contactConfig } from "@/data/pages/contact.config";

import { contactAnimations } from "../lib/animations";

export function ContactHeroSection() {
  const { hero } = contactConfig;
  const entryDelay = useEntryDelay();

  return (
    <section className="w-full pt-40 pb-20 md:pt-52 md:pb-32">
      <div className="mx-auto flex max-w-[90rem] flex-col items-center justify-center px-5 md:px-10 lg:px-16">
        <motion.div
          variants={contactAnimations.staggerContainer(entryDelay)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.div
            variants={contactAnimations.textReveal}
            className="flex flex-col items-center gap-6"
          >
            <span className="text-sm font-medium tracking-widest text-white/70 uppercase">
              {hero.tag}
            </span>
            <div className="h-8 w-px bg-white/20" />
          </motion.div>
          <motion.h1
            variants={contactAnimations.textReveal}
            className="text-center text-4xl font-medium tracking-tight md:text-6xl lg:text-[5rem]"
          >
            {hero.headline}
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}
