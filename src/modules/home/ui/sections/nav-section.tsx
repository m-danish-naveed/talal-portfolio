"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { NavLink } from "@/lib/components/nav-link";

export function NavSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link href="/" className="z-50 shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Hamas Logo"
              width={80}
              height={24}
              className="h-6 w-auto invert" // Invert if the original is black, or not. Sam's is white, but sometimes SVGs need it.
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center space-x-8 md:flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#" isExternal>
              Masterclass
            </NavLink>
            <div className="bg-surface h-4 w-px" />
            <Link
              href="mailto:engineer.hamas.munawar@gmail.com"
              className="rounded-lg bg-white px-6 py-2 text-xs font-semibold tracking-widest text-black transition-transform hover:scale-105"
            >
              CONTACT
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground z-50 block p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
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
            transition={{ duration: 0.3 }}
            className="bg-background fixed inset-0 z-50 flex flex-col items-center justify-center space-y-8 px-6"
          >
            <NavLink
              href="/"
              className="text-2xl font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              href="#work"
              className="text-2xl font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </NavLink>
            <NavLink
              href="#"
              isExternal
              className="text-2xl font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Masterclass
            </NavLink>
            <Link
              href="mailto:engineer.hamas.munawar@gmail.com"
              className="rounded-lg bg-white px-8 py-3 text-sm font-semibold tracking-widest text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
