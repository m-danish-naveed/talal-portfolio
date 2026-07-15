"use client";

import { motion } from "framer-motion";

import { fadeUp } from "@/lib/animations";

import { homeConfig } from "@/data/pages/home.config";

import { WorkCard } from "../components/work-card";

export function WorksSection() {
  const { works } = homeConfig;

  return (
    <section id="work" className="w-full py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
            {works.map((work, index) => (
              <WorkCard key={work.id} item={work} offset={index % 2 !== 0} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
