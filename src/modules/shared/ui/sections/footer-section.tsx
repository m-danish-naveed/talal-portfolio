"use client";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import Image from "next/image";

import { motion } from "framer-motion";

import { siteAnimations } from "@/lib/animations";
import { TransitionLink } from "@/lib/components/transition-link";

import { person } from "@/data/entities/person";
import { socials } from "@/data/entities/socials";
import { siteConfig } from "@/data/site.config";

export function FooterSection() {
  const { footer, contact } = siteConfig;

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={siteAnimations.staggerContainer(0)}
      className="w-full bg-[#121212] pt-16 pb-8"
    >
      <motion.div
        variants={siteAnimations.fadeUp(0)}
        className="mx-auto flex max-w-[90rem] flex-col gap-10 px-5 md:gap-24 md:px-10 lg:gap-[7.5rem] lg:px-16"
      >
        {/* Top Row */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-12">
          <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-12">
            <TransitionLink
              href="/"
              className="shrink-0 transition-opacity hover:opacity-60"
            >
              <Image
                src="/images/brand/logo.svg"
                alt={`${person.firstName} Logo`}
                width={80}
                height={22}
                className="h-5 w-[73px]"
              />
            </TransitionLink>
            <div className="h-px w-12 bg-white/10" />
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-base text-white transition-opacity hover:opacity-60"
            >
              <FiMail className="h-6 w-6" />
              {contact.email}
            </a>
          </div>

          <nav className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10">
            <TransitionLink
              href="/"
              className="text-base font-medium text-white uppercase transition-opacity hover:opacity-60"
            >
              Home
            </TransitionLink>
            <TransitionLink
              href="/work"
              className="text-base font-medium text-white uppercase transition-opacity hover:opacity-60"
            >
              Work
            </TransitionLink>
            <TransitionLink
              href="/contact"
              className="text-base font-medium text-white uppercase transition-opacity hover:opacity-60"
            >
              Contact
            </TransitionLink>
          </nav>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between gap-10 rounded-lg bg-[#262626] p-6 md:flex-row md:gap-12 lg:p-20">
          <p className="flex-1 text-center text-base text-white/80 md:text-left">
            {footer.copyright}
          </p>

          <div className="order-first flex flex-col items-center justify-center gap-5 md:order-none md:flex-row md:gap-10">
            <TransitionLink
              href="/contact"
              className="text-base font-medium text-white uppercase transition-opacity hover:opacity-60"
            >
              Privacy
            </TransitionLink>
          </div>

          <div className="flex flex-1 items-center justify-center gap-6 md:justify-end">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity hover:opacity-60"
                aria-label={social.name}
              >
                {social.iconName === "instagram" && (
                  <FaInstagram className="h-6 w-6 text-white" />
                )}
                {social.iconName === "youtube" && (
                  <FaYoutube className="h-6 w-6 text-white" />
                )}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
