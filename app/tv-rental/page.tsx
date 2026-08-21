import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { TV_LOCATION_PAGES } from "@/constants/tv-locations";
import { TV_RENTAL_TIERS, TV_RENTAL_NOTES } from "@/constants/pricing";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { SchemaScript } from "@/components/common/SchemaScript";
import { SITE_CONFIG } from "@/constants/site";
import {
  Tv,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Gamepad2,
  Star,
  Truck,
  ShieldCheck,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "TV Rental Trivandrum | 43 Inch Smart TV for Rent | from ₹499/day",
  description:
    "Rent 43-inch Smart TV in Trivandrum (Thiruvananthapuram) from ₹499/day. Doorstep delivery with setup to Attingal, Varkala, Chirayinkeezhu, Kazhakkoottam, Vamanapuram, Kallambalam & Kilimanoor. Free installation for events, parties & home use.",
  keywords: [
    "TV rental Trivandrum",
    "TV rental Thiruvananthapuram",
    "43 inch TV rental Trivandrum",
    "Smart TV for rent Trivandrum",
    "television rental Trivandrum",
    "TV hire Trivandrum",
    "TV on rent Trivandrum Kerala",
    "TV rental near me Trivandrum",
    "Smart TV rental near me Kerala",
    "TV for rent birthday party Trivandrum",
    "TV for wedding Trivandrum",
    "TV for function Trivandrum",
    "43 inch TV rental Attingal",
    "43 inch TV rental Varkala",
    "43 inch TV rental Kazhakkoottam",
    "TV rental Chirayinkeezhu",
    "TV rental Vamanapuram",
    "TV rental Kallambalam",
    "TV rental Kilimanoor",
    "television rental Kerala",
    "Smart TV hire near me",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tv-rental`,
  },
  openGraph: {
    title: "TV Rental Trivandrum | 43 Inch Smart TV for Rent | from ₹499/day",
    description:
      "Rent 43-inch Smart TV in Trivandrum from ₹499/day. Doorstep delivery, full setup, and pickup across Attingal, Varkala, Kazhakkoottam & all Trivandrum areas.",
    url: `${SITE_CONFIG.url}/tv-rental`,
    type: "website",
  },
};

export default function TvRentalHubPage() {
  const getWhatsAppLink = (msg: string) =>
    `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;

  const tvWa = getWhatsAppLink(SITE_CONFIG.contact.whatsappTvMessage);

  const tvProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "43 Inch Smart TV Rental in Trivandrum",
    description:
      "Rent a 43-inch Smart TV in Thiruvananthapuram (Trivandrum) starting from ₹499/day. Doorstep delivery with full setup and pickup included. Available for events, birthday parties, weddings, gaming, and home use.",
    brand: { "@type": "Brand", name: "DPS Gaming Hub" },
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
        reviewBody: "Rented a 43 inch TV for my son's birthday party in Attingal. Delivery was on time, setup was fast, and the TV quality was excellent. Highly recommend DPS Gaming Hub!",
        datePublished: "2026-07-15",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Meera Nair" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Used the TV rental for a wedding function in Varkala. The team was professional, the tripod stand was very sturdy, and the price was very reasonable. Will use again!",
        datePublished: "2026-06-22",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Arun Kumar" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Rented TV and PS5 combo for a gaming event near Kazhakkoottam. Very smooth process from booking to pickup. Great service!",
        datePublished: "2026-08-01",
      },
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "299",
      highPrice: "499",
      offerCount: "4",
      availability: "https://schema.org/InStock",
      offers: TV_RENTAL_TIERS.map((t) => ({
        "@type": "Offer",
        name: `TV Rental – ${t.duration}`,
        price: t.price.replace("₹", ""),
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      })),
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Thiruvananthapuram District, Kerala",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does it cost to rent a TV in Trivandrum?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TV rental in Trivandrum starts at ₹499/day (1 day). Multi-day rates: ₹399/day (2-3 days), ₹349/day (4-7 days), ₹299/day (7-18 days). Delivery and setup are included within our service area.",
        },
      },
      {
        "@type": "Question",
        name: "Which areas in Trivandrum do you deliver TV rental?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We deliver 43-inch Smart TV rental across Trivandrum including Attingal, Chirayinkeezhu, Kazhakkoottam, Varkala, Vamanapuram, Kallambalam, Kilimanoor, Venjaramoodu, Kattakada, Technopark, Trivandrum City, and surrounding areas.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in the TV rental service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every TV rental includes the 43-inch Smart TV, heavy-duty adjustable tripod stand, HDMI and power cables, doorstep delivery, on-site setup, installation, and pickup at end of rental.",
        },
      },
      {
        "@type": "Question",
        name: "Can I rent a TV for a birthday party in Trivandrum?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We deliver 43-inch Smart TVs to birthday party venues across Trivandrum. You can also add a PS5 console to the rental for a complete gaming party experience. Book via WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "Can I rent a TV for a wedding function in Trivandrum?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Our 43-inch Smart TV with heavy-duty tripod stand is perfect for displaying photo slideshows, live streams, and video greetings at wedding halls and event venues across Trivandrum.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a TV rental in Trivandrum?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply WhatsApp us with your rental date, location in Trivandrum, and rental duration. We confirm availability and delivery within 30 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Is PS5 rental available with the TV rental?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer a PS5 + 43-inch Smart TV combo rental package, perfect for gaming parties and events. Contact us on WhatsApp for combo pricing.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum rental period for a TV in Trivandrum?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The minimum rental period is 1 day. We offer flexible plans from 1 day (₹499) to 18 days (₹299/day) to suit your needs.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
      { "@type": "ListItem", position: 2, name: "TV Rental Trivandrum", item: `${SITE_CONFIG.url}/tv-rental` },
    ],
  };

  const benefits = [
    { icon: Truck, title: "Doorstep Delivery", desc: "We come to you — no pickup needed" },
    { icon: ShieldCheck, title: "Full Setup Included", desc: "We handle install, wiring & stand" },
    { icon: Clock, title: "Flexible Durations", desc: "1 day to 18 days, pay only for what you use" },
    { icon: Star, title: "No Hidden Charges", desc: "Transparent pricing, 35% advance booking" },
  ];

  const useCases = [
    { emoji: "🎂", title: "Birthday Parties", desc: "Set up a gaming corner or movie screen at any birthday party venue in Trivandrum" },
    { emoji: "💒", title: "Wedding Functions", desc: "Display slideshows, live feeds, and video greetings at wedding halls" },
    { emoji: "🏢", title: "Corporate Events", desc: "Professional TV setup for presentations, expos, and team events at Technopark" },
    { emoji: "🎮", title: "Gaming Events", desc: "PS5 + TV combo for FIFA tournaments, LAN parties, and gaming events" },
    { emoji: "🎪", title: "Exhibitions & Fairs", desc: "Showcase products and promotions at trade exhibitions and public events" },
    { emoji: "🏠", title: "Temporary Home Use", desc: "Need a TV for a week? Rent without buying — flexible and affordable" },
  ];

  return (
    <>
      <SchemaScript schemaData={tvProductSchema} />
      <SchemaScript schemaData={faqSchema} />
      <SchemaScript schemaData={breadcrumbSchema} />

      <div className="pt-28 pb-20 bg-[#030712] space-y-24">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <BadgeTag variant="glow" icon={<Tv className="w-3.5 h-3.5 text-[#38BDF8]" />}>
            TV Rental Trivandrum • Thiruvananthapuram
          </BadgeTag>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            TV Rental in{" "}
            <span className="text-gradient-blue">Trivandrum</span>
          </h1>
          <p className="text-[#CBD5E1] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Rent a <strong className="text-white">43-inch Smart TV</strong> in Thiruvananthapuram for events,
            birthday parties, wedding functions, gaming setups, and home use. Starting from{" "}
            <strong className="text-[#38BDF8]">₹499/day</strong> with free doorstep delivery and full setup.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href={tvWa} target="_blank" rel="noopener noreferrer">
              <MagneticButton variant="primary" size="lg" id="wa-tv-hub-hero">
                <MessageCircle className="w-5 h-5" />
                Book TV Rental on WhatsApp
              </MagneticButton>
            </a>
            <a href="#tv-rental-areas">
              <MagneticButton variant="secondary" size="lg">
                <MapPin className="w-5 h-5" />
                View Delivery Areas
              </MagneticButton>
            </a>
          </div>
        </section>

        {/* ── PRICING TABLE ────────────────────────────────────── */}
        <section id="tv-rental-pricing" className="max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <div className="text-center mb-10 space-y-3">
            <BadgeTag variant="outline">No Hidden Charges</BadgeTag>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              TV Rental Rates — <span className="text-gradient-blue">Trivandrum</span>
            </h2>
            <p className="text-[#94A3B8] text-sm">
              43-inch Smart TV with tripod stand. The longer you rent, the more you save.
            </p>
          </div>

          <GlassCard glow className="overflow-hidden p-0">
            <div className="grid grid-cols-2 px-6 py-4 bg-[#2563EB]/20 border-b border-[#2563EB]/30">
              <span className="text-sm font-bold text-white uppercase tracking-wider">Rental Duration</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider text-right">Price</span>
            </div>
            {TV_RENTAL_TIERS.map((tier, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 px-6 py-5 border-b border-white/5 transition-colors ${
                  tier.highlight ? "bg-[#2563EB]/10" : "hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-white font-semibold text-base">{tier.duration}</span>
                  {tier.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      tier.highlight
                        ? "bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30"
                        : "bg-white/10 text-[#94A3B8] border border-white/10"
                    }`}>{tier.badge}</span>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-white">{tier.price}</span>
                  <span className="text-[#94A3B8] text-sm ml-1">{tier.perDay}</span>
                </div>
              </div>
            ))}
            <div className="px-6 py-6 space-y-3 bg-[#0B132B]/60">
              {TV_RENTAL_NOTES.map((note, i) => (
                <p key={i} className="text-sm text-[#CBD5E1] leading-relaxed">
                  <span className="font-bold text-white">{note.label}:</span> {note.value}
                </p>
              ))}
            </div>
          </GlassCard>

          <div className="mt-8 text-center">
            <a href={tvWa} target="_blank" rel="noopener noreferrer">
              <MagneticButton variant="primary" size="md" id="wa-tv-hub-pricing">
                <MessageCircle className="w-4 h-4" />
                Check Availability on WhatsApp
              </MagneticButton>
            </a>
          </div>
        </section>

        {/* ── WHY US ───────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-3">
            <BadgeTag variant="glow">Why DPS Gaming Hub</BadgeTag>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Best TV Rental Service in Trivandrum
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <GlassCard key={i} className="space-y-3 text-center">
                  <div className="p-3 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 w-fit mx-auto">
                    <Icon className="w-6 h-6 text-[#38BDF8]" />
                  </div>
                  <h3 className="text-base font-bold text-white">{b.title}</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{b.desc}</p>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* ── USE CASES ────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-3">
            <BadgeTag variant="outline">What People Rent For</BadgeTag>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              TV Rental for Every Occasion in Trivandrum
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <GlassCard key={i} className="space-y-3">
                <span className="text-3xl">{uc.emoji}</span>
                <h3 className="text-lg font-bold text-white">{uc.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{uc.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ── LOCATION PAGES GRID ──────────────────────────────── */}
        <section id="tv-rental-areas" className="max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <div className="text-center mb-12 space-y-3">
            <BadgeTag variant="glow" icon={<MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />}>
              Delivery Locations
            </BadgeTag>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              TV Rental Delivery Areas in Trivandrum
            </h2>
            <p className="text-[#94A3B8] text-sm max-w-2xl mx-auto">
              We deliver 43-inch Smart TV rental across all major locations in Thiruvananthapuram district.
              Click your area for location-specific pricing and details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(TV_LOCATION_PAGES).map((loc) => (
              <Link key={loc.slug} href={`/tv-rental/${loc.slug}`}>
                <GlassCard glow className="space-y-4 group hover:border-[#38BDF8]/50 transition-all cursor-pointer h-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 group-hover:bg-[#38BDF8]/20 transition-colors">
                        <MapPin className="w-5 h-5 text-[#38BDF8]" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">
                          TV Rental {loc.cityName}
                        </h3>
                        <p className="text-[10px] text-[#94A3B8]">{loc.district} District</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                    {loc.subheading}
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[#38BDF8] font-bold text-sm">from ₹499/day</span>
                    <span className="text-[#1E293B]">•</span>
                    <span className="text-xs text-[#94A3B8]">Doorstep Delivery</span>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>

        {/* ── PS5 + TV COMBO ───────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#0B132B]/80 via-[#1a2540] to-[#0B132B]/80 border border-[#2563EB]/30 text-center space-y-6">
            <BadgeTag variant="glow">🔥 Most Popular Package</BadgeTag>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              PS5 + 43&quot; Smart TV Combo Rental{" "}
              <span className="text-gradient-blue">Trivandrum</span>
            </h2>
            <p className="text-[#CBD5E1] max-w-xl mx-auto text-sm sm:text-base">
              The ultimate event rental package — a PS5 console with 2 DualSense controllers, top games,
              and a 43-inch Smart TV with heavy-duty stand. Perfect for birthday gaming parties, FIFA
              tournaments, and event entertainment across Trivandrum.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {["PS5 Console", "2 DualSense Controllers", "Top Games", "43\" Smart TV", "Tripod Stand", "Full Setup"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  {item}
                </span>
              ))}
            </div>
            <a
              href={getWhatsAppLink("Hello DPS Gaming Hub! I want to rent the PS5 + 43\" Smart TV combo in Trivandrum. Please share pricing and availability.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagneticButton variant="primary" size="lg" id="wa-combo-hub">
                <Gamepad2 className="w-5 h-5" />
                Book PS5 + TV Combo
              </MagneticButton>
            </a>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-3">
            <BadgeTag variant="outline">FAQ</BadgeTag>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              TV Rental Trivandrum — Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How much does it cost to rent a TV in Trivandrum?", a: "TV rental in Trivandrum starts at ₹499/day (1 day). Multi-day rates: ₹399/day (2–3 days), ₹349/day (4–7 days), ₹299/day (7–18 days). Delivery and setup are included within our service area." },
              { q: "Which areas in Trivandrum do you deliver TV rental?", a: "We deliver across Attingal, Chirayinkeezhu, Kazhakkoottam, Varkala, Vamanapuram, Kallambalam, Kilimanoor, Venjaramoodu, Kattakada, Technopark, and Trivandrum City. Contact us to confirm delivery for your specific location." },
              { q: "What is included in the TV rental?", a: "Every rental includes the 43-inch Smart TV, heavy-duty adjustable tripod stand, HDMI and power cables, doorstep delivery, on-site setup, installation, and end-of-rental pickup." },
              { q: "Can I rent a TV for just 1 day in Trivandrum?", a: "Yes! 1-day TV rental is available at ₹499 + delivery charges. We deliver, set up, and pick up the TV on your chosen date." },
              { q: "Can I rent a TV for a wedding or birthday party?", a: "Absolutely. Our 43-inch Smart TV with tripod stand is perfect for weddings, birthday parties, and local functions. We deliver to event halls, homes, and venues across Trivandrum." },
              { q: "Is PS5 available with the TV rental?", a: "Yes! We offer a PS5 + TV combo package for gaming parties. WhatsApp us for combo pricing and availability." },
              { q: "How do I book a TV rental in Trivandrum?", a: "WhatsApp us with your rental date, location, and duration. We confirm within 30 minutes and schedule delivery at a convenient time for you." },
            ].map((faq, i) => (
              <GlassCard key={i} className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">{faq.a}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ── CONTENT / ABOUT ──────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <GlassCard glow className="p-8 sm:p-12 space-y-5 bg-[#0B1220]/90">
            <h2 className="text-2xl font-black text-white">
              About Our TV Rental Service in Trivandrum
            </h2>
            <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
              DPS Gaming Hub provides reliable <strong className="text-white">43-inch Smart TV rental in Trivandrum (Thiruvananthapuram)</strong> with
              flexible daily and weekly plans. Our hub is located at Korani Junction on NH66, between Attingal and
              Kazhakkoottam, giving us fast delivery access across the entire Thiruvananthapuram district.
            </p>
            <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
              Whether you need a <strong className="text-white">TV for a birthday party in Attingal</strong>,{" "}
              a <strong className="text-white">TV for a wedding function in Varkala</strong>, a display for a corporate event at Technopark, or
              a temporary TV at home — we handle everything from delivery to installation to pickup.
            </p>
            <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
              Our TV rental service covers <strong className="text-white">Attingal, Chirayinkeezhu, Kazhakkoottam, Varkala, Vamanapuram,
              Kallambalam, Kilimanoor</strong>, and surrounding areas in Thiruvananthapuram. We also deliver to
              Venjaramoodu, Kattakada, Technopark, and Trivandrum city.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {Object.values(TV_LOCATION_PAGES).map((loc) => (
                <Link key={loc.slug} href={`/tv-rental/${loc.slug}`}>
                  <span className="px-3 py-1.5 rounded-lg bg-[#030912]/80 border border-[#1E293B] hover:border-[#38BDF8]/50 text-xs text-[#CBD5E1] font-medium transition-colors hover:text-[#38BDF8] cursor-pointer">
                    📍 TV Rental {loc.cityName}
                  </span>
                </Link>
              ))}
            </div>
          </GlassCard>
        </section>

        <BookingCTA />
      </div>
    </>
  );
}
