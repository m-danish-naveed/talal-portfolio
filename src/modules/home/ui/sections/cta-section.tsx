"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { homeConfig } from "@/data/pages/home.config";

import { StatCounter } from "../components/stat-counter";
import { homeAnimations } from "../lib/animations";

export function CtaSection() {
  const { cta, hero } = homeConfig;

  return (
    <section className="w-full py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={homeAnimations.ctaSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-surface relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden rounded-sm p-8 text-center sm:p-16"
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={cta.posterImage}
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          >
            <source src={cta.videoMp4} type="video/mp4" />
            <source src={cta.videoWebm} type="video/webm" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 flex h-full w-full max-w-4xl flex-col items-center justify-between gap-16 py-12">
            {/* Tag / Card visual (mocking the polaroid visual conceptually) */}
            <div className="relative flex aspect-[3/4] w-64 flex-col items-center justify-between border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:w-80">
              <span className="text-xs tracking-widest text-white/70 uppercase">
                Let&apos;s Chat
              </span>
              <div className="mt-4 w-full flex-1 bg-black/20" />
              <Link
                href={`mailto:${hero.email}`}
                className="mt-6 flex w-full items-center justify-between bg-white px-6 py-4 text-xs font-bold tracking-widest text-black transition-colors hover:bg-white/90"
              >
                <span>CONTACT</span>
                <span>→</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-3">
              {cta.stats.map((stat, i) => (
                <StatCounter
                  key={i}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
