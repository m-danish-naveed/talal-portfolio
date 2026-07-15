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
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
        <motion.div
          variants={homeAnimations.ctaSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-surface relative z-40 flex min-h-[600px] flex-col items-center justify-center overflow-hidden p-6 text-center md:p-10 lg:p-20"
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
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-8 py-20">
            {/* Tag */}
            <div className="mb-12 flex flex-col items-center justify-center gap-6">
              <span className="text-base font-medium tracking-widest text-white/70 uppercase">
                Let&apos;s Chat
              </span>
              <div className="h-8 w-px bg-white/10" />
            </div>

            <div className="mb-24 h-12" />

            {/* Stats */}
            <div className="mb-24 flex w-full flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
              {cta.stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-6 sm:flex-row sm:gap-12"
                >
                  <StatCounter
                    value={stat.value}
                    label={stat.label}
                    suffix={stat.suffix}
                  />
                  {i < cta.stats.length - 1 && (
                    <div className="h-px w-12 bg-white/10 sm:h-px sm:w-12" />
                  )}
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-4 rounded-lg bg-white px-8 py-4 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95"
              >
                <span>Contact</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  viewBox="0 0 42 14"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M40.5 7C40.5 7 23.9315 7 0.5 7M40.5 7L34.5 13M40.5 7L34.5 0.999999"
                    stroke="currentColor"
                    strokeLinecap="square"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
