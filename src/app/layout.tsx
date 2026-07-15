import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
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
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} dark`}>
      <body className="bg-background text-foreground flex min-h-screen flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
