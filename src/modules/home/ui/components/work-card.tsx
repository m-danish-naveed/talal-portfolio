"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { homeAnimations } from "../lib/animations";

interface WorkCardProps {
  item: {
    id: string;
    title: string;
    client: string;
    date: string;
    image: string;
    gif: string;
    link: string;
  };
  offset?: boolean;
}

export function WorkCard({ item, offset }: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={homeAnimations.cardEntry}
      className={`w-full ${offset ? "lg:translate-y-16" : ""}`}
    >
      <Link
        href={item.link}
        className="group block w-full outline-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-surface relative aspect-[16/9] w-full overflow-hidden">
          {/* Static Image */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            className={`object-cover transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Hover GIF */}
          <Image
            src={item.gif}
            alt={`${item.title} preview`}
            fill
            className={`object-cover transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
            unoptimized
          />
        </div>

        <div className="mt-4 flex flex-col space-y-3">
          <h3 className="text-sm font-bold tracking-wide">{item.title}</h3>
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
