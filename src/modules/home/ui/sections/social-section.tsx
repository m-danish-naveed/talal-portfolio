"use client";

import { Fragment } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

import { motion } from "framer-motion";

import { homeConfig } from "@/data/pages/home.config";

import { homeAnimations } from "../lib/animations";

export function SocialSection() {
  const { socials } = homeConfig;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={homeAnimations.staggerContainer}
      className="w-full py-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-5 px-6 md:flex-row md:gap-10 lg:px-12">
        {socials.map((social, index) => (
          <Fragment key={index}>
            <motion.a
              variants={homeAnimations.fadeUp}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 transition-opacity hover:opacity-60"
            >
              {social.iconName === "instagram" && (
                <FaInstagram className="h-6 w-6 flex-none" />
              )}
              {social.iconName === "youtube" && (
                <FaYoutube className="h-6 w-6 flex-none" />
              )}
              <span className="text-base font-medium">{social.name}</span>
            </motion.a>
            {index < socials.length - 1 && (
              <motion.div
                variants={homeAnimations.fadeUp}
                className="h-px w-12 bg-white/10"
              />
            )}
          </Fragment>
        ))}
      </div>
    </motion.section>
  );
}
