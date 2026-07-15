import type { Metadata } from "next";
import { Inconsolata, Space_Mono } from "next/font/google";

import { Preloader } from "@/lib/components/preloader";

import "./globals.css";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inter",
});
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Hamas Munawar",
  description:
    "A world-renowned filmmaker that inspired a generation of content creators from all around the world.",
};

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
        <Preloader />
        <div
          className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-20"
          style={{
            backgroundImage: "url('/images/noise.gif')",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
