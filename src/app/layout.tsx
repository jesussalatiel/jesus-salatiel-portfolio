import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jesús Salatiel · AI-Native SDET",
  description:
    "AI-native SDET building agentic test automation, LLM evaluation, and QA infrastructure. Experience at Globant and Zoox. Founder of Kivo.",
  metadataBase: new URL(
    "https://jesussalatiel.github.io/jesus-salatiel-portfolio",
  ),
  openGraph: {
    title: "Jesús Salatiel · AI-Native SDET",
    description:
      "Agentic test automation · LLM evaluation · Playwright · AWS · CI/CD",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1376,
        height: 768,
        alt: "Jesús Salatiel · AI-Native SDET",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesús Salatiel · AI-Native SDET",
    description:
      "Agentic test automation · LLM evaluation · Playwright · AWS · CI/CD",
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
