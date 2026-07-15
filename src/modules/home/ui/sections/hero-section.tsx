"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { homeConfig } from "@/data/pages/home.config";

import { ShowreelDialog } from "../components/showreel-dialog";
import { homeAnimations } from "../lib/animations";

export function HeroSection() {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const { hero } = homeConfig;

  return (
    <section className="relative min-h-screen w-full pt-32 pb-20">
      <div className="mx-auto flex max-w-7xl flex-col px-6 lg:px-12">
        {/* Animated Headline */}
        <motion.h1
          variants={homeAnimations.heroStagger}
          initial="hidden"
          animate="visible"
          className="max-w-[960px] font-mono text-2xl leading-[1.2] font-medium sm:text-[2rem] md:text-5xl"
        >
          {hero.headline.map((line, i) => (
            <motion.span key={i} variants={homeAnimations.heroText}>
              {line}{" "}
            </motion.span>
          ))}
        </motion.h1>

        <div className="my-12 h-px w-full bg-transparent" />

        {/* Meta Info */}
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/pin-location.svg"
              alt="Location"
              width={16}
              height={16}
              className="opacity-60"
            />
            <span className="text-muted text-sm tracking-widest">
              {hero.location}
            </span>
          </div>
          <div className="bg-surface hidden h-px w-16 sm:block" />
          <Link
            href={`mailto:${hero.email}`}
            className="group flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/mail.svg"
              alt="Email"
              width={16}
              height={16}
              className="opacity-60 group-hover:opacity-100"
            />
            <span className="text-muted group-hover:text-foreground text-sm tracking-widest">
              {hero.email}
            </span>
          </Link>
        </div>

        <div className="my-12 h-px w-full bg-transparent" />

        {/* Showreel Video Block */}
        <div className="relative z-40 mt-auto aspect-video w-full overflow-hidden rounded-lg sm:aspect-[21/9]">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={hero.showreel.posterImage}
            className="h-full w-full object-cover"
          >
            <source src={hero.showreel.videoMp4} type="video/mp4" />
            <source src={hero.showreel.videoWebm} type="video/webm" />
          </video>

          {/* Showreel Button */}
          <div className="absolute inset-0 z-50 flex items-center justify-center">
            <button
              onClick={() => setIsShowreelOpen(true)}
              className="group relative flex h-[7.5rem] w-[7.5rem] items-center justify-center rounded-full bg-[#65aac8] transition-transform hover:scale-105 active:scale-95"
              aria-label="Play showreel"
            >
              <Image
                src="/images/showreel-icon.svg"
                alt="Showreel Circular Text"
                fill
                className="animate-spin-slow object-contain p-4 opacity-90 transition-opacity group-hover:opacity-100"
              />
              <Image
                src="/images/play.svg"
                alt="Play"
                width={24}
                height={24}
                className="relative z-10 opacity-90 transition-opacity group-hover:opacity-100"
              />
            </button>
          </div>
        </div>
      </div>

      <ShowreelDialog
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        youtubeUrl={hero.showreel.youtubeUrl}
      />
    </section>
  );
}
