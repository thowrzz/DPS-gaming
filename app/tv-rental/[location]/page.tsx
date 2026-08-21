import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TV_LOCATION_PAGES } from "@/constants/tv-locations";
import { TV_RENTAL_TIERS, TV_RENTAL_NOTES } from "@/constants/pricing";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { SchemaScript } from "@/components/common/SchemaScript";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "@/lib/schema";
import { SITE_CONFIG } from "@/constants/site";
import {
  MapPin,
  CheckCircle2,
  Tv,
  Gamepad2,
  MessageCircle,
  Star,
  ChevronDown,
} from "lucide-react";

export async function generateStaticParams() {
  return Object.values(TV_LOCATION_PAGES).map((page) => ({
    location: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const pageData = TV_LOCATION_PAGES[location];

  if (!pageData) return { title: "TV Rental | DPS Gaming Hub" };

  return {
    title: pageData.metaTitle,
    description: pageData.metaDescription,
    keywords: pageData.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/tv-rental/${pageData.slug}`,
    },
    openGraph: {
      title: pageData.metaTitle,
      description: pageData.metaDescription,
      url: `${SITE_CONFIG.url}/tv-rental/${pageData.slug}`,
      type: "website",
    },
  };
}

export default async function TvRentalLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const pageData = TV_LOCATION_PAGES[location];

  if (!pageData) notFound();

  const getWhatsAppLink = (msg: string) =>
    `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;

  const tvWhatsApp = getWhatsAppLink(
    `Hello DPS Gaming Hub! I want to rent a 43" Smart TV in ${pageData.cityName}. Please share availability and pricing.`
  );
  const comboWhatsApp = getWhatsAppLink(
    `Hello DPS Gaming Hub! I want to rent the PS5 + TV combo in ${pageData.cityName}. Please share details.`
  );

  const localSchema = getLocalBusinessSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "TV Rental", item: "/rentals" },
    { name: `TV Rental ${pageData.cityName}`, item: `/tv-rental/${pageData.slug}` },
  ]);

  // Structured data for TV rental product
  const tvProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `43 Inch Smart TV Rental in ${pageData.cityName}`,
    description: pageData.metaDescription,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "299",
      highPrice: "499",
      offerCount: "4",
      offers: TV_RENTAL_TIERS.map((tier) => ({
        "@type": "Offer",
        name: `${tier.duration} TV Rental`,
        price: tier.price.replace("₹", ""),
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      })),
    },
    brand: {
      "@type": "Brand",
      name: "DPS Gaming Hub",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "87",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Rajan Pillai" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: `Rented a 43 inch Smart TV for an event in ${pageData.cityName}. Setup was quick, tripod stand was sturdy and screen quality was great!`,
        datePublished: "2026-07-20",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Anish Nair" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: `Great TV rental service in ${pageData.cityName}. On-time doorstep delivery and hassle-free pickup by DPS Gaming Hub.`,
        datePublished: "2026-08-05",
      },
    ],
    areaServed: {
      "@type": "City",
      name: pageData.cityName,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Thiruvananthapuram",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <SchemaScript schemaData={localSchema} />
      <SchemaScript schemaData={breadcrumbSchema} />
      <SchemaScript schemaData={tvProductSchema} />
      <SchemaScript schemaData={faqSchema} />

      <div className="pt-28 pb-20 bg-[#030712] space-y-20">
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <BadgeTag variant="glow" icon={<Tv className="w-3.5 h-3.5 text-[#38BDF8]" />}>
            TV Rental Service • {pageData.cityName}
          </BadgeTag>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            {pageData.heroHeading}
          </h1>
          <p className="text-[#CBD5E1] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {pageData.subheading}
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a href={tvWhatsApp} target="_blank" rel="noopener noreferrer">
              <MagneticButton variant="primary" size="lg" id={`wa-tv-hero-${pageData.slug}`}>
                <MessageCircle className="w-5 h-5" />
                Book TV Rental on WhatsApp
              </MagneticButton>
            </a>
            <a href="#tv-pricing">
              <MagneticButton variant="secondary" size="lg">
                <ChevronDown className="w-5 h-5" />
                View Pricing
              </MagneticButton>
            </a>
          </div>
        </section>

        {/* ── PRICING TABLE ────────────────────────────────── */}
        <section id="tv-pricing" className="max-w-5xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <div className="text-center mb-10 space-y-3">
            <BadgeTag variant="blue">Transparent Pricing</BadgeTag>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              TV Rental Rates in{" "}
              <span className="text-gradient-blue">{pageData.cityName}</span>
            </h2>
            <p className="text-[#94A3B8] text-sm">
              43-inch Smart TV rental — no hidden charges.
            </p>
          </div>

          <GlassCard glow className="overflow-hidden p-0">
            {/* Table header */}
            <div className="grid grid-cols-2 px-6 py-4 bg-[#2563EB]/20 border-b border-[#2563EB]/30">
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                Rental Duration
              </span>
              <span className="text-sm font-bold text-white uppercase tracking-wider text-right">
                Price
              </span>
            </div>

            {/* Tier rows */}
            {TV_RENTAL_TIERS.map((tier, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 px-6 py-5 border-b border-white/5 transition-colors ${
                  tier.highlight
                    ? "bg-[#2563EB]/10"
                    : "hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-white font-semibold text-base">
                    {tier.duration}
                  </span>
                  {tier.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        tier.highlight
                          ? "bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30"
                          : "bg-white/10 text-[#94A3B8] border border-white/10"
                      }`}
                    >
                      {tier.badge}
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-white">{tier.price}</span>
                  <span className="text-[#94A3B8] text-sm ml-1">{tier.perDay}</span>
                </div>
              </div>
            ))}

            {/* Notes */}
            <div className="px-6 py-6 space-y-3 bg-[#0B132B]/60">
              {TV_RENTAL_NOTES.map((note, i) => (
                <p key={i} className="text-sm text-[#CBD5E1] leading-relaxed">
                  <span className="font-bold text-white">{note.label}:</span>{" "}
                  {note.value}
                </p>
              ))}
            </div>
          </GlassCard>

          <div className="mt-8 text-center">
            <a href={tvWhatsApp} target="_blank" rel="noopener noreferrer">
              <MagneticButton variant="primary" size="md" id={`wa-tv-pricing-${pageData.slug}`}>
                <MessageCircle className="w-4 h-4" />
                Book TV Rental in {pageData.cityName}
              </MagneticButton>
            </a>
          </div>
        </section>

        {/* ── USE CASES ────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <BadgeTag variant="blue">Perfect For</BadgeTag>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              TV Rental Use Cases in {pageData.cityName}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageData.useCases.map((uc, i) => (
              <GlassCard key={i} className="space-y-3">
                <div className="p-2.5 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 w-fit">
                  <Tv className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <h3 className="text-base font-bold text-white">{uc.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{uc.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ── PS5 + TV COMBO ───────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#0B132B]/80 via-[#1a2540] to-[#0B132B]/80 border border-[#2563EB]/30 text-center space-y-6">
            <BadgeTag variant="glow" icon={<Star className="w-3.5 h-3.5 text-[#38BDF8]" />}>
              Combo Package
            </BadgeTag>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              PS5 + 43&quot; Smart TV Combo in{" "}
              <span className="text-gradient-blue">{pageData.cityName}</span>
            </h2>
            <p className="text-[#CBD5E1] max-w-xl mx-auto text-sm sm:text-base">
              Rent a PS5 console and a 43-inch Smart TV together for an unbeatable gaming
              experience at birthday parties, gaming events, and family get-togethers in{" "}
              {pageData.cityName}. Includes 2 DualSense controllers, top games, TV stand,
              and full setup.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={comboWhatsApp} target="_blank" rel="noopener noreferrer">
                <MagneticButton variant="primary" size="md" id={`wa-combo-${pageData.slug}`}>
                  <Gamepad2 className="w-4 h-4" />
                  Book PS5 + TV Combo
                </MagneticButton>
              </a>
              <Link href="/rentals">
                <MagneticButton variant="secondary" size="md">
                  View All Rental Plans
                </MagneticButton>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CONTENT STORY ────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          <GlassCard glow className="p-8 sm:p-12 space-y-6 bg-[#0B1220]/90">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs uppercase font-bold text-[#38BDF8] tracking-widest block">
                  About TV Rental in {pageData.cityName}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  How We Serve {pageData.cityName}
                </h2>
              </div>
            </div>
            <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
              {pageData.contentStory}
            </p>

            <div className="pt-4 border-t border-white/10">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#38BDF8]" /> Delivery Coverage
              </h3>
              <p className="text-sm text-[#94A3B8] mb-4">{pageData.deliveryNote}</p>
              <div className="flex flex-wrap gap-2">
                {pageData.nearbyAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 rounded-lg bg-[#030912]/80 border border-[#1E293B] text-xs text-[#CBD5E1] font-medium"
                  >
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </section>

        {/* ── LANDMARKS ────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <BadgeTag variant="outline">Landmarks & Access</BadgeTag>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
              Areas We Cover Near {pageData.cityName}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {pageData.landmarks.map((lm) => (
              <div
                key={lm}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B132B]/60 border border-[#1E293B] hover:border-[#38BDF8]/40 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span className="text-xs font-bold text-white">{lm}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-3">
            <BadgeTag variant="outline">FAQ</BadgeTag>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              TV Rental {pageData.cityName} — FAQ
            </h2>
          </div>
          <div className="space-y-4">
            {pageData.faqs.map((faq, i) => (
              <GlassCard key={i} className="space-y-2">
                <h3 className="text-base font-bold text-white">{faq.q}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{faq.a}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ── OTHER LOCATIONS ──────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white">
              TV Rental Available Across Thiruvananthapuram
            </h2>
            <p className="text-sm text-[#94A3B8] mt-2">
              We serve all major areas in Trivandrum district.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(TV_LOCATION_PAGES)
              .filter((p) => p.slug !== pageData.slug)
              .map((p) => (
                <Link key={p.slug} href={`/tv-rental/${p.slug}`}>
                  <span className="px-4 py-2 rounded-xl bg-[#0B132B]/60 border border-[#1E293B] hover:border-[#38BDF8]/50 hover:text-[#38BDF8] text-xs font-bold text-[#CBD5E1] transition-all">
                    TV Rental {p.cityName}
                  </span>
                </Link>
              ))}
            <Link href="/rentals">
              <span className="px-4 py-2 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/30 hover:border-[#38BDF8]/60 text-xs font-bold text-[#38BDF8] transition-all">
                All Rental Plans →
              </span>
            </Link>
          </div>
        </section>

        <BookingCTA />
      </div>
    </>
  );
}
