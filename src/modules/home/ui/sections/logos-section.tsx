import Image from "next/image";

import { homeConfig } from "@/data/pages/home.config";

export function LogosSection() {
  const { logos } = homeConfig;

  return (
    <section className="w-full overflow-hidden py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center md:gap-12"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={128}
                height={20}
                className="h-4 w-auto max-w-[6rem] flex-none object-contain opacity-70 transition-opacity hover:opacity-100 sm:h-5 sm:max-w-[8rem]"
              />
              {/* Add horizontal divider except for the last item */}
              {index < logos.length - 1 && (
                <div className="hidden h-px w-12 bg-white/10 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
