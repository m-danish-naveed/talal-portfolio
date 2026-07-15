import Image from "next/image";

import { NavLink } from "@/lib/components/nav-link";

import { homeConfig } from "@/data/pages/home.config";

export function SocialSection() {
  const { socials } = homeConfig;

  return (
    <section className="w-full py-16">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-6 lg:px-12">
        {socials.map((social, index) => (
          <div key={index} className="flex items-center gap-8">
            <NavLink href={social.url} isExternal className="gap-3">
              <Image
                src={social.icon}
                alt={social.name}
                width={20}
                height={20}
                className="opacity-70 invert transition-opacity hover:opacity-100"
              />
              <span>{social.name}</span>
            </NavLink>
            {index < socials.length - 1 && (
              <div className="bg-surface h-px w-16" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
