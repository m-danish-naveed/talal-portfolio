import { Fragment } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

import { homeConfig } from "@/data/pages/home.config";

export function SocialSection() {
  const { socials } = homeConfig;

  return (
    <section className="w-full py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-5 px-6 md:flex-row md:gap-10 lg:px-12">
        {socials.map((social, index) => (
          <Fragment key={index}>
            <a
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
            </a>
            {index < socials.length - 1 && (
              <div className="h-px w-12 bg-white/10" />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
