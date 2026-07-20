import { Inconsolata, Space_Mono } from "next/font/google";

export const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inter", // Note: Kept the variable name for backward compatibility
});

export const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});
