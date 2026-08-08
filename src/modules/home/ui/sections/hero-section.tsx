"use client";

import { useEffect, useRef, useState } from "react";
import { FiMail, FiMapPin } from "react-icons/fi";

import Link from "next/link";

import { motion } from "framer-motion";

import { siteAnimations } from "@/lib/animations";
import { useEntryDelay } from "@/lib/hooks/use-entry-delay";

import { homeConfig } from "@/data/pages/home.config";
import { siteConfig } from "@/data/site.config";

export function HeroSection() {
  const entryDelay = useEntryDelay();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { hero } = homeConfig;
  const { contact } = siteConfig;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      video.muted = false;
      video.volume = 1;
      video.play().catch(() => {});
    } else {
      video.pause();
      video.muted = true;
    }
  }, [isHovered]);

  return (
    <section className="relative min-h-screen w-full pt-[7.5rem] pb-[7.5rem]">
      <div className="mx-auto flex max-w-[90rem] flex-col px-5 md:px-10 lg:px-16">
        {/* Animated Headline */}
        <motion.h1
          variants={siteAnimations.heroStagger(entryDelay)}
          initial="hidden"
          animate="visible"
          className="max-w-[960px] text-2xl leading-[1.2] font-medium tracking-normal md:text-[2rem] lg:text-5xl"
        >
          {hero.headline.map((line, i) => (
            <motion.span key={i} variants={siteAnimations.heroText}>
              {line}{" "}
            </motion.span>
          ))}
        </motion.h1>

        <div className="my-12 h-px w-full bg-transparent" />

        {/* Meta Info */}
        <motion.div
          variants={siteAnimations.metaFade(entryDelay)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-2">
            <FiMapPin className="h-4 w-4 opacity-60" />
            <span className="text-muted text-sm tracking-widest">
              {contact.location}
            </span>
          </div>
          <div className="bg-surface hidden h-px w-16 sm:block" />
          <Link
            href={`mailto:${contact.email}`}
            className="group flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <FiMail className="h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100" />
            <span className="text-muted group-hover:text-foreground text-sm tracking-widest">
              {contact.email}
            </span>
          </Link>
        </motion.div>

        <div className="my-12 h-px w-full bg-transparent" />

        {/* Showreel Video Block */}
        <motion.div
          variants={siteAnimations.videoScale(entryDelay)}
          initial="hidden"
          animate="visible"
          tabIndex={0}
          className="relative z-40 mt-auto aspect-video w-full overflow-hidden rounded-lg sm:aspect-[21/9]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
        >
          {hero.showreel.posterImage && (
            <img
              src={hero.showreel.posterImage}
              alt="Showreel thumbnail"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <video
            ref={videoRef}
            loop
            playsInline
            muted={!isHovered}
            preload="auto"
            poster={hero.showreel.posterImage || undefined}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            {hero.showreel.videoMp4 && (
              <source src={hero.showreel.videoMp4} type="video/mp4" />
            )}
            {hero.showreel.videoWebm && (
              <source src={hero.showreel.videoWebm} type="video/webm" />
            )}
          </video>
        </motion.div>
      </div>
    </section>
  );
}
