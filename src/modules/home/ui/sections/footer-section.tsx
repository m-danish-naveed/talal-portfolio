import Image from "next/image";
import Link from "next/link";

import { homeConfig } from "@/data/pages/home.config";

export function FooterSection() {
  const { hero, footer, socials } = homeConfig;

  return (
    <footer className="w-full bg-[#121212] pt-16 pb-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 md:gap-24 md:px-10 lg:gap-[7.5rem] lg:px-16">
        {/* Top Row */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-12">
          <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-12">
            <Link
              href="/"
              className="shrink-0 transition-opacity hover:opacity-60"
            >
              <Image
                src="/images/logo.svg"
                alt="Hamas Logo"
                width={80}
                height={22}
                className="h-5 w-auto"
              />
            </Link>
            <div className="h-px w-12 bg-white/10" />
            <a
              href={`mailto:${hero.email}`}
              className="flex items-center gap-2 text-base text-white transition-opacity hover:opacity-60"
            >
              <Image
                src="/images/mail.svg"
                alt="Email"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              {hero.email}
            </a>
          </div>

          <nav className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10">
            <Link
              href="/"
              className="text-base font-medium text-white uppercase transition-opacity hover:opacity-60"
            >
              Home
            </Link>
            <Link
              href="#work"
              className="text-base font-medium text-white uppercase transition-opacity hover:opacity-60"
            >
              Work
            </Link>
            <Link
              href={`mailto:${hero.email}`}
              className="text-base font-medium text-white uppercase transition-opacity hover:opacity-60"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between gap-10 rounded-lg bg-[#262626] p-6 md:flex-row md:gap-12 lg:p-20">
          <p className="flex-1 text-center text-base text-white/80 md:text-left">
            {footer.copyright}
          </p>

          <div className="order-first flex flex-col items-center justify-center gap-5 md:order-none md:flex-row md:gap-10">
            <Link
              href="#"
              className="text-base font-medium text-white uppercase transition-opacity hover:opacity-60"
            >
              Privacy
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center gap-6 md:justify-end">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity hover:opacity-60"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
