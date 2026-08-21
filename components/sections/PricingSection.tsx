"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Clock, Gamepad2, Tv, Truck, MessageCircle, MapPin } from "lucide-react";
import { PRICING_TIERS, RENTAL_TIERS, TV_RENTAL_TIERS, TV_RENTAL_NOTES } from "@/constants/pricing";
import { TV_LOCATION_PAGES } from "@/constants/tv-locations";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { SITE_CONFIG } from "@/constants/site";

export function PricingSection() {
  const [activeTab, setActiveTab] = useState<"rental" | "lounge" | "tv">("rental");

  const getWhatsAppLink = (messageText?: string) => {
    const text = messageText || SITE_CONFIG.contact.whatsappMessage;
    return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const displayedTiers = activeTab === "rental" ? RENTAL_TIERS : PRICING_TIERS;

  return (
    <section id="pricing" className="relative py-24 bg-[#030712] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <BadgeTag variant="glow" icon={<Clock className="w-3.5 h-3.5 text-[#38BDF8]" />}>
            TRANSPARENT &amp; HONEST PRICING
          </BadgeTag>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Doorstep Rentals &amp; <br />
            <span className="text-gradient-blue">Lounge Hourly Passes</span>
          </h2>
          <p className="text-[#CBD5E1] text-base sm:text-lg">
            Rent top-tier gaming hardware &amp; 43&quot; Smart TV delivered in Trivandrum, or visit our Korani lounge.
          </p>

          {/* Tab Switcher */}
          <div className="mt-8 inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-[#0B132B] border border-[#1E293B] gap-1">
            <button
              id="tab-doorstep-rentals"
              onClick={() => setActiveTab("rental")}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "rental"
                  ? "bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white shadow-lg"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              <Truck className="w-4 h-4" />
              🚚 Doorstep Rentals
            </button>
            <button
              id="tab-tv-rental-rates"
              onClick={() => setActiveTab("tv")}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "tv"
                  ? "bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white shadow-lg"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              <Tv className="w-4 h-4" />
              📺 TV Rental Rates
            </button>
            <button
              id="tab-in-lounge-passes"
              onClick={() => setActiveTab("lounge")}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "lounge"
                  ? "bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white shadow-lg"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              🎮 In-Lounge Passes
            </button>
          </div>
        </div>

        {/* ── TV RENTAL RATES TAB ─────────────────────────────── */}
        {activeTab === "tv" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            {/* Tier table */}
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
                    <span className="text-3xl font-black text-white">{tier.price}</span>
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

            {/* CTA */}
            <div className="text-center">
              <a
                href={getWhatsAppLink(SITE_CONFIG.contact.whatsappTvMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton variant="primary" size="md" className="mx-auto">
                  <MessageCircle className="w-4 h-4" />
                  Book TV Rental on WhatsApp
                </MagneticButton>
              </a>
            </div>

            {/* TV Location Links */}
            <div className="pt-4">
              <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-4 justify-center">
                <MapPin className="w-4 h-4" />
                TV Rental Available In Trivandrum
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {Object.values(TV_LOCATION_PAGES).map((loc) => (
                  <Link key={loc.slug} href={`/tv-rental/${loc.slug}`}>
                    <span className="px-3 py-1.5 rounded-lg bg-[#030912]/80 border border-[#1E293B] hover:border-[#38BDF8]/50 text-xs text-[#CBD5E1] font-medium transition-colors hover:text-[#38BDF8] cursor-pointer">
                      📍 {loc.cityName}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ── PS5 DOORSTEP & LOUNGE TABS ─────────────────────── */}
        {activeTab !== "tv" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayedTiers.map((tier, index) => (
              <GlassCard
                key={tier.id}
                glow={tier.popular}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col justify-between relative ${
                  tier.popular ? "border-[#38BDF8]/50 ring-1 ring-[#38BDF8]/30 bg-[#0B1220]/90" : ""
                }`}
              >
                <div className="space-y-6">
                  <div>
                    {tier.popular && (
                      <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md border border-[#38BDF8]/40">
                        🔥 Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white tracking-tight">{tier.name}</h3>
                    <p className="text-xs text-[#94A3B8] mt-1">{tier.tagline}</p>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white">{tier.price}</span>
                    </div>
                    <span className="text-xs text-[#38BDF8] font-medium block mt-1">
                      {tier.duration}
                    </span>
                  </div>

                  <ul className="space-y-3 pt-4 border-t border-white/10 text-xs text-[#CBD5E1]">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  {activeTab === "rental" ? (
                    <a
                      href={getWhatsAppLink(tier.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <MagneticButton
                        variant={tier.popular ? "primary" : "secondary"}
                        size="sm"
                        className="w-full justify-center"
                      >
                        <MessageCircle className="w-4 h-4" />
                        {tier.ctaText}
                      </MagneticButton>
                    </a>
                  ) : (
                    <Link href={`/book?pass=${tier.id}`}>
                      <MagneticButton
                        variant={tier.popular ? "primary" : "secondary"}
                        size="sm"
                        className="w-full justify-center"
                      >
                        <Gamepad2 className="w-4 h-4" />
                        {tier.ctaText}
                      </MagneticButton>
                    </Link>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
