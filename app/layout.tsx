import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jet = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://navidk0.dev"),
  title: "Navid Kabir: code, music & games",
  description:
    "Navid Kabir (NavidK0), software engineer, game developer, and composer. Games, music, writing, and the things in between.",
  keywords: [
    "Navid Kabir",
    "NavidK0",
    "game developer",
    "software engineer",
    "composer",
    "N-GON Interactive",
    "Fresh Prints",
    "Rotoscape",
    "Space Pulse",
    "Nords and Fjords",
    "Tableside",
  ],
  authors: [{ name: "Navid Kabir" }],
  openGraph: {
    title: "Navid Kabir: code, music & games",
    description:
      "Software engineer, game developer, and composer. Games, music, writing, and the things in between.",
    url: "https://navidk0.dev",
    siteName: "navidk0.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navid Kabir: code, music & games",
    description: "Software engineer, game developer, and composer.",
    creator: "@NavidK0",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${space.variable} ${inter.variable} ${jet.variable}`}>
      <body>{children}</body>
    </html>
  );
}
