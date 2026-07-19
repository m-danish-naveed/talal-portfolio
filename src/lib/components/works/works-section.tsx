"use client";

import { motion } from "framer-motion";

import { siteAnimations } from "@/lib/animations";

import { siteConfig } from "@/data/site.config";

import { WorkCard } from "./work-card";

export function WorksSection() {
  const { works } = siteConfig;

  return (
    <section id="work" className="w-full py-24 sm:py-32">
      <div className="mx-auto max-w-360 px-5 md:px-10 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={siteAnimations.staggerContainerFast}
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {works.map((work, index) => (
              <WorkCard
                key={work.id}
                item={work}
                offset={index % 2 !== 0}
                priority={index < 2}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
