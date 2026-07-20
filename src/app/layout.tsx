import type { Metadata } from "next";

import { GlobalProvider } from "@/lib/components/global-provider";
import { FooterSection } from "@/lib/components/layout/footer-section";
import { NavSection } from "@/lib/components/layout/nav-section";
import { SocialSection } from "@/lib/components/layout/social-section";
import { Preloader } from "@/lib/components/preloader";
import { SmoothScrollProvider } from "@/lib/components/smooth-scroll";
import { TransitionProvider } from "@/lib/components/transition-provider";
import { inconsolata, spaceMono } from "@/lib/fonts";
import { constructMetadata } from "@/lib/utils/metadata";

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
