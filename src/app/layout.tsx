import type { Metadata } from "next";

import { inconsolata, spaceMono } from "@/lib/fonts";
import { GlobalProvider } from "@/lib/providers/global-provider";
import { SmoothScrollProvider } from "@/lib/providers/smooth-scroll-provider";
import { TransitionProvider } from "@/lib/providers/transition-provider";
import { constructMetadata } from "@/lib/utils/metadata";

import { Preloader } from "@/modules/shared/ui/components/preloader";
import { FooterSection } from "@/modules/shared/ui/sections/footer-section";
import { NavSection } from "@/modules/shared/ui/sections/nav-section";
import { SocialSection } from "@/modules/shared/ui/sections/social-section";

import "./globals.css";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inconsolata.variable} ${spaceMono.variable} dark`}
    >
      <body className="bg-background text-foreground flex min-h-screen flex-col overflow-x-hidden">
        <SmoothScrollProvider>
          <GlobalProvider>
            <TransitionProvider>
              <Preloader />
              <div
                className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-20"
                style={{
                  backgroundImage: "url('/images/noise.gif')",
                  backgroundRepeat: "repeat",
                }}
              />
              <div className="relative z-10 flex min-h-screen flex-col">
                <NavSection />
                {children}
                <SocialSection />
                <FooterSection />
              </div>
            </TransitionProvider>
          </GlobalProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
