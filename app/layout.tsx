import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LaunchBanner } from "@/components/sections/LaunchBanner";
import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { SchemaScript } from "@/components/common/SchemaScript";
import { getLocalBusinessSchema } from "@/lib/schema";
import { SITE_CONFIG } from "@/constants/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.metaTitle,
    template: "%s | DPS Gaming Hub",
  },
  description: SITE_CONFIG.metaDescription,
  keywords: [
    "PS5 Gaming Lounge Kerala",
    "Gaming Hub Kerala",
    "Gaming Lounge Trivandrum",
    "Gaming Lounge Attingal",
    "Gaming Lounge Kazhakkoottam",
    "Gaming Korani",
    "Gaming Near Technopark",
    "Best PS5 Gaming Lounge in Kerala",
    "Ultra High-Definition Gaming Lounge Kerala",
    "Console Gaming Attingal",
    "EA FC 24 Tournament Kerala",
  ],
  authors: [{ name: "Digital Product Solutions" }],
  creator: "Digital Product Solutions",
  publisher: "Digital Product Solutions",
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.metaTitle,
    description: SITE_CONFIG.metaDescription,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/hero-bg.png`,
        width: 1200,
        height: 630,
        alt: "DPS Gaming Hub Premium PS5 Lounge Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.metaTitle,
    description: SITE_CONFIG.metaDescription,
    images: [`${SITE_CONFIG.url}/hero-bg.png`],
    creator: "@dpsgaminghub",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localSchema = getLocalBusinessSchema();

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <SchemaScript schemaData={localSchema} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030712] text-white selection:bg-[#2563EB]/40 selection:text-white min-h-screen flex flex-col`}
      >
        <LaunchBanner />
        <FloatingNavbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
