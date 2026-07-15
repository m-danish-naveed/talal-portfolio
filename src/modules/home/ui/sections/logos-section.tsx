import Image from "next/image";

import { homeConfig } from "@/data/pages/home.config";

export function LogosSection() {
  const { logos } = homeConfig;

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between md:gap-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-8 md:gap-12 lg:gap-16"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={32}
                className="h-6 w-auto object-contain opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:h-8"
              />
              {/* Add divider except for the last item */}
              {index < logos.length - 1 && (
                <div className="bg-surface hidden h-8 w-px md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
