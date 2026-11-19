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
    "AI-native SDET. I help teams ask better questions of their software — and ship answers they can trust. Globant · Zoox · Kivo.",
  metadataBase: new URL(
    "https://jesussalatiel.github.io/jesus-salatiel-portfolio",
  ),
  openGraph: {
    title: "Jesús Salatiel · AI-Native SDET",
    description:
      "Curious, constructive quality engineering — agentic testing, LLM evaluation, evidence-based delivery.",
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
      "Curious, constructive quality engineering — agentic testing, LLM evaluation, evidence-based delivery.",
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
