import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { LOCAL_PAGES } from "@/constants/locations";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { LocationMapSection } from "@/components/sections/LocationMapSection";
import { SchemaScript } from "@/components/common/SchemaScript";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "@/lib/schema";
import { MapPin, CheckCircle2, Navigation, Gamepad2, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return Object.values(LOCAL_PAGES).map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const pageData = Object.values(LOCAL_PAGES).find((p) => p.slug === resolvedParams.slug);

  if (!pageData) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: pageData.metaTitle,
    description: pageData.metaDescription,
    keywords: pageData.keywords,
  };
}

export default async function LocalSEOPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const pageData = Object.values(LOCAL_PAGES).find((p) => p.slug === resolvedParams.slug);

  if (!pageData) {
    notFound();
  }

  const localSchema = getLocalBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Locations", item: "/contact" },
    { name: pageData.cityName, item: `/location/${pageData.slug}` },
  ]);

  return (
    <>
      <SchemaScript schemaData={localSchema} />
      <SchemaScript schemaData={breadcrumbSchema} />

      <div className="pt-28 pb-20 bg-[#030712] space-y-20">
        {/* Local Page Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <BadgeTag variant="glow" icon={<MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />}>
            Local Gaming Destination • {pageData.cityName}
          </BadgeTag>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            {pageData.heroHeading}
          </h1>
          <p className="text-[#CBD5E1] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {pageData.subheading}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/book">
              <MagneticButton variant="primary" size="lg">
                <Gamepad2 className="w-5 h-5" />
                Book PS5 Station
              </MagneticButton>
            </Link>
            <a href="#location-details">
              <MagneticButton variant="secondary" size="lg">
                View Driving Route
              </MagneticButton>
            </a>
          </div>
        </section>

        {/* Story & Distance Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <GlassCard glow className="p-8 sm:p-12 space-y-8 bg-[#0B1220]/90">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs uppercase font-bold text-[#38BDF8] tracking-widest block">Proximity Guide</span>
                <h2 className="text-2xl font-extrabold text-white mt-1">{pageData.distanceInfo}</h2>
              </div>
              <BadgeTag variant="glow">Fast Highway Connection</BadgeTag>
            </div>

            <div className="prose prose-invert max-w-none text-[#CBD5E1] text-sm sm:text-base leading-relaxed space-y-4">
              <p>{pageData.contentStory}</p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">
                Key Highlights for {pageData.cityName} Gamers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pageData.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3 text-xs sm:text-sm text-[#CBD5E1]">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Nearby Landmarks */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <BadgeTag variant="outline">Landmarks & Connectivity</BadgeTag>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">Nearby Hubs & Access Points</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {pageData.landmarks.map((landmark) => (
              <GlassCard key={landmark} className="p-4 text-center space-y-2">
                <Navigation className="w-5 h-5 text-[#38BDF8] mx-auto" />
                <span className="text-xs font-bold text-white block">{landmark}</span>
                <span className="text-[10px] text-[#94A3B8]">Direct NH66 Access</span>
              </GlassCard>
            ))}
          </div>
        </section>

        <div id="location-details">
          <LocationMapSection />
        </div>

        <BookingCTA />
      </div>
    </>
  );
}
