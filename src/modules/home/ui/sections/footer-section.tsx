import Image from "next/image";
import Link from "next/link";

import { NavLink } from "@/lib/components/nav-link";

import { homeConfig } from "@/data/pages/home.config";

export function FooterSection() {
  const { hero, footer, socials } = homeConfig;

  return (
    <footer className="w-full bg-[#111] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top Row */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-8">
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo.svg"
                alt="Hamas Logo"
                width={80}
                height={24}
                className="h-6 w-auto invert"
              />
            </Link>
            <div className="bg-surface hidden h-px w-16 md:block" />
            <Link
              href={`mailto:${hero.email}`}
              className="text-muted hover:text-foreground flex items-center gap-2 text-sm tracking-widest transition-colors"
            >
              <Image
                src="/images/mail.svg"
                alt="Email"
                width={16}
                height={16}
                className="opacity-60"
              />
              {hero.email}
            </Link>
          </div>

          <nav className="flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href={`mailto:${hero.email}`}>Contact</NavLink>
          </nav>
        </div>

        {/* Bottom Row */}
        <div className="mt-16 flex flex-col items-center justify-between gap-8 rounded-sm bg-[#1a1a1a] p-8 md:flex-row">
          <p className="text-muted text-xs tracking-widest">
            {footer.copyright}
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-muted hover:text-foreground text-xs tracking-widest uppercase transition-colors"
            >
              Privacy
            </Link>
            <div className="flex items-center gap-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={16}
                    height={16}
                    className="opacity-70 invert hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-muted/50 mt-8 flex flex-col items-center justify-between gap-4 text-[10px] tracking-widest uppercase md:flex-row">
          <p>Powered by Next.js & Tailwind</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-muted">
              Template Preview
            </a>
            <a href="#" className="hover:text-muted">
              Masterclass
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
