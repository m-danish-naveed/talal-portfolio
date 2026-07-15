"use client";
import Image from "next/image";

import { motion } from "framer-motion";

import { homeConfig } from "@/data/pages/home.config";

import { homeAnimations } from "../lib/animations";

export function LogosSection() {
  const { logos } = homeConfig;

  return (
    <section className="w-full overflow-hidden py-12 md:py-20">
      <div className="mx-auto max-w-[90rem] px-5 md:px-10 lg:px-16">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-10 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={homeAnimations.staggerContainer}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={homeAnimations.fadeUp}
              className="flex items-center justify-center md:gap-12"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={128}
                height={20}
                className="h-4 w-auto max-w-[6rem] flex-none object-contain opacity-70 transition-opacity hover:opacity-100 sm:h-5 sm:max-w-[8rem]"
              />
              {/* Add horizontal divider except for the last item */}
              {index < logos.length - 1 && (
                <div className="hidden h-px w-12 bg-white/10 md:block" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
