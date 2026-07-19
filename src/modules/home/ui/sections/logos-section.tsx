"use client";
import Image from "next/image";

import { motion } from "framer-motion";

import { siteAnimations } from "@/lib/animations";

import { homeConfig } from "@/data/pages/home.config";

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
          variants={siteAnimations.staggerContainer(0)}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={siteAnimations.fadeUp(0)}
              className="flex items-center justify-center md:gap-12"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={128}
                height={20}
                className="h-4 w-[102px] flex-none object-contain opacity-70 transition-opacity hover:opacity-100 sm:h-5 sm:w-[128px]"
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
