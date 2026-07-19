"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

import { siteAnimations } from "@/lib/animations";
import { NavLink } from "@/lib/components/nav-link";
import { TransitionLink } from "@/lib/components/transition-link";

import { siteConfig } from "@/data/site.config";

export function NavSection() {
  const { socials } = siteConfig;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 pt-0 backdrop-blur-md md:pt-3 lg:pt-4"
            : "bg-transparent pt-2 md:pt-4 lg:pt-8"
        }`}
      >
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-5 py-3 md:px-10 lg:px-16">
          <TransitionLink href="/" className="shrink-0 outline-none">
            <Image
              src="/images/brand/logo.svg"
              alt="Hamas Logo"
              width={100}
              height={28}
              className="h-6 w-auto transition-opacity hover:opacity-60 md:h-7"
            />
          </TransitionLink>

          {/* Desktop Nav */}
          <nav className="hidden items-center space-x-8 md:flex">
            <NavLink
              href="/"
              className={
                pathname === "/" ? "text-white opacity-100" : "text-white/80"
              }
            >
              Home
            </NavLink>
            <NavLink
              href="/work"
              className={
                pathname === "/work"
                  ? "text-white opacity-100"
                  : "text-white/80"
              }
            >
              Work
            </NavLink>
            <div className="bg-surface h-4 w-px" />
            <TransitionLink
              href="/contact"
              className="rounded-lg bg-white px-6 py-2 text-xs font-semibold tracking-widest text-black transition-transform hover:scale-105"
            >
              CONTACT
            </TransitionLink>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground z-50 block p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            variants={siteAnimations.staggerContainerFast}
            className="bg-background fixed inset-0 z-[999] flex flex-col items-center justify-center space-y-8 px-6"
          >
            <TransitionLink
              href="/work"
              className={`text-base font-medium tracking-wide uppercase transition-opacity hover:opacity-60 ${pathname === "/work" ? "text-white opacity-100" : "text-white/60"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </TransitionLink>
            <TransitionLink
              href="/contact"
              className={`text-base font-medium tracking-wide uppercase transition-opacity hover:opacity-60 ${pathname === "/contact" ? "text-white opacity-100" : "text-white/60"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </TransitionLink>
            <TransitionLink
              href="/contact"
              className="rounded-lg bg-white px-8 py-3 text-sm font-semibold tracking-widest text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </TransitionLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
