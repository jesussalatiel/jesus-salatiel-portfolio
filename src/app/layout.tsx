import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jesús Salatiel · SDET & QA Automation",
  description:
    "SDET & QA Automation — AI Agents, MCP & Test Strategy. Globant · InStride · Zoox · Kivo.",
  metadataBase: new URL(
    "https://jesussalatiel.github.io/jesus-salatiel-portfolio",
  ),
  openGraph: {
    title: "Jesús Salatiel · SDET & QA Automation",
    description:
      "AI Agents, MCP & Test Strategy — quality engineering for data platforms, robotaxis, and SaaS.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1376,
        height: 768,
        alt: "Jesús Salatiel · SDET & QA Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesús Salatiel · SDET & QA Automation",
    description:
      "AI Agents, MCP & Test Strategy — quality engineering for data platforms, robotaxis, and SaaS.",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F8FB",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-kivo-bg font-sans text-kivo-muted antialiased">
        {children}
      </body>
    </html>
  );
}
