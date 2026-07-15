"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";

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
    <section className="relative min-h-screen w-full pt-[7.5rem] pb-[7.5rem]">
      <div className="mx-auto flex max-w-[90rem] flex-col px-5 md:px-10 lg:px-16">
        {/* Animated Headline */}
        <motion.h1
          variants={homeAnimations.heroStagger}
          initial="hidden"
          animate="visible"
          className="max-w-[960px] text-2xl leading-[1.2] font-medium tracking-normal md:text-[2rem] lg:text-5xl"
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
            <FiMapPin className="h-4 w-4 opacity-60" />
            <span className="text-muted text-sm tracking-widest">
              {hero.location}
            </span>
          </div>
          <div className="bg-surface hidden h-px w-16 sm:block" />
          <Link
            href={`mailto:${hero.email}`}
            className="group flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <FiMail className="h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100" />
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
            {hero.showreel.videoMp4 && (
              <source src={hero.showreel.videoMp4} type="video/mp4" />
            )}
            {hero.showreel.videoWebm && (
              <source src={hero.showreel.videoWebm} type="video/webm" />
            )}
          </video>

          {/* Showreel Button */}
          <div className="absolute inset-0 z-50 flex items-center justify-center">
            <button
              onClick={() => setIsShowreelOpen(true)}
              className="group relative flex items-center justify-center rounded-full bg-[#65aac8] p-3 transition-transform hover:scale-105 active:scale-95 md:p-5"
              aria-label="Play showreel"
            >
              <Image
                src="/images/brand/showreel-icon.svg"
                alt="Showreel Circular Text"
                width={148}
                height={148}
                className="animate-spin-slow h-24 w-24 opacity-90 transition-opacity group-hover:opacity-100 md:h-[148px] md:w-[148px]"
              />
              <FaPlay className="absolute z-10 h-4 w-4 opacity-90 transition-opacity group-hover:opacity-100 md:h-6 md:w-6" />
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
