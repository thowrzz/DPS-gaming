import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LaunchBanner } from "@/components/sections/LaunchBanner";
import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { SchemaScript } from "@/components/common/SchemaScript";
import { getLocalBusinessSchema, getRentalServiceSchema } from "@/lib/schema";
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
  verification: {
    google: SITE_CONFIG.googleSiteVerification,
  },
  keywords: [
    "PS5 Rental Trivandrum",
    "TV Rental Trivandrum",
    "43 inch QLED TV Rental Trivandrum",
    "PS5 Console Rental Attingal",
    "PS5 Rental Kazhakkoottam",
    "PS5 Rental Technopark",
    "Rent PS5 1 Day Kerala",
    "Event TV Rental Trivandrum",
    "PS5 Gaming Lounge Kerala",
    "Gaming Hub Kerala",
    "Gaming Lounge Trivandrum",
    "Gaming Lounge Attingal",
    "Gaming Lounge Kazhakkoottam",
    "Gaming Korani",
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
        alt: "DPS Gaming Hub PS5 & TV Rentals Trivandrum",
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
  const rentalSchema = getRentalServiceSchema();

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <SchemaScript schemaData={localSchema} />
        <SchemaScript schemaData={rentalSchema} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030712] text-white selection:bg-[#2563EB]/40 selection:text-white min-h-screen flex flex-col`}
      >
        <header className="sticky top-0 z-50 w-full">
          <LaunchBanner />
          <FloatingNavbar />
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}


