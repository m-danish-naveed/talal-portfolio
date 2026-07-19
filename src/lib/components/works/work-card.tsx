"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { siteAnimations } from "@/lib/animations";

interface WorkCardProps {
  item: {
    id: string;
    title: string;
    client: string;
    date: string;
    image: string;
    video: string;
    link: string;
  };
  offset?: boolean;
  priority?: boolean;
}

export function WorkCard({ item, offset, priority }: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={siteAnimations.cardEntry}
      className={`w-full ${offset ? "lg:translate-y-16" : ""}`}
    >
      <Link
        href={item.link}
        className="group block w-full outline-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-surface relative z-40 aspect-[16/9] w-full overflow-hidden rounded-lg">
          {/* Static Image */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            className={`object-cover transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
          />
          {/* Hover Video */}
          <video
            src={item.video}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        <div className="mt-4 flex flex-col space-y-2">
          <h3 className="text-base leading-[1.4] font-medium tracking-normal md:text-xl">
            {item.title}
          </h3>
          <div className="bg-surface h-[1px] w-full" />
          <div className="text-muted text-xs">{item.client}</div>
          <div className="bg-surface h-[1px] w-full" />
          <div className="text-muted text-xs">{item.date}</div>
          <div className="bg-surface h-[1px] w-full" />
        </div>
      </Link>
    </motion.div>
  );
}
