"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Crown, Check, ArrowRight } from "lucide-react";
import { MEMBERSHIP_TIERS } from "@/constants/membership";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BadgeTag } from "@/components/ui/BadgeTag";

export function MembershipSection() {
  return (
    <section className="relative py-28 bg-[#0B1220] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <BadgeTag variant="glow" icon={<Crown className="w-3.5 h-3.5 text-[#38BDF8]" />}>
            Exclusive VIP Clubs
          </BadgeTag>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            DPS Lounge Memberships. <br />
            <span className="text-gradient-blue">Privilege Unlocked.</span>
          </h2>
          <p className="text-[#CBD5E1] text-base sm:text-lg">
            Dedicated station reservations, gear storage, priority esports entry, and member discounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERSHIP_TIERS.map((tier, index) => (
            <GlassCard
              key={tier.id}
              glow
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="flex flex-col justify-between relative bg-[#111827]/80"
            >
              {tier.badge && (
                <div className="absolute top-6 right-6">
                  <BadgeTag variant="glow">{tier.badge}</BadgeTag>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">{tier.name}</h3>
                  <p className="text-xs text-[#94A3B8] mt-1">{tier.recommendedFor}</p>
                </div>

                <div className="py-2 border-y border-white/10">
                  <span className="text-4xl font-black text-white">{tier.price}</span>
                  <span className="text-xs text-[#64748B] ml-1">/ {tier.period}</span>
                </div>

                <ul className="space-y-3 text-xs text-[#CBD5E1]">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link href={`/book?membership=${tier.id}`}>
                  <MagneticButton variant="outline" size="sm" className="w-full">
                    <span>Join {tier.name}</span>
                    <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
                  </MagneticButton>
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
