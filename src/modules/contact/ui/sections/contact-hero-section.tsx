"use client";

import { contactConfig } from "@/data/pages/contact.config";

export function ContactHeroSection() {
  const { hero } = contactConfig;

  return (
    <section className="w-full pt-40 pb-20 md:pt-52 md:pb-32">
      <div className="mx-auto flex max-w-[90rem] flex-col items-center justify-center px-5 md:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-6">
            <span className="text-sm font-medium tracking-widest text-white/70 uppercase">
              {hero.tag}
            </span>
            <div className="h-8 w-px bg-white/20" />
          </div>
          <h1 className="text-center text-4xl font-medium tracking-tight md:text-6xl lg:text-[5rem]">
            {hero.headline}
          </h1>
        </div>
      </div>
    </section>
  );
}
