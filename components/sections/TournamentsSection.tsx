"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Calendar, Medal, Users, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BadgeTag } from "@/components/ui/BadgeTag";

export function TournamentsSection() {
  return (
    <section className="relative py-28 bg-[#030712] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <BadgeTag variant="glow" icon={<Trophy className="w-3.5 h-3.5 text-[#38BDF8]" />}>
              Competitive Esports Kerala
            </BadgeTag>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Prove Your Skill. <br />
              <span className="text-gradient-blue">Claim the Cup.</span>
            </h2>
            <p className="text-[#CBD5E1] text-base sm:text-lg">
              Official weekend tournaments for EA FC 24 and Tekken 8 on low-latency 120Hz displays with cash rewards.
            </p>
          </div>

          <div>
            <Link href="/tournaments">
              <MagneticButton variant="outline">
                <span>View Full Schedule</span>
                <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
              </MagneticButton>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tournament 1 */}
          <GlassCard glow className="space-y-6">
            <div className="flex items-center justify-between">
              <BadgeTag variant="blue">EA FC 24 Showcase</BadgeTag>
              <span className="text-xs font-semibold text-[#22C55E] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                Registrations Open
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Kerala EA FC 24 Champions Cup</h3>
              <p className="text-sm text-[#94A3B8]">
                1v1 Knockout tournament on 120Hz 4K OLED displays. Standard competitive sliders.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10 text-center">
              <div>
                <span className="text-[10px] uppercase text-[#64748B] block">Prize Pool</span>
                <span className="text-lg font-black text-[#38BDF8]">₹15,000</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#64748B] block">Date</span>
                <span className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-1">
                  <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                  This Saturday
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#64748B] block">Format</span>
                <span className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-1">
                  <Users className="w-3.5 h-3.5 text-[#38BDF8]" />
                  32 Players
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-[#CBD5E1]">Entry Fee: <strong className="text-white">₹250 / player</strong></span>
              <Link href="/tournaments#register">
                <MagneticButton variant="primary" size="sm">
                  Register Slot
                </MagneticButton>
              </Link>
            </div>
          </GlassCard>

          {/* Tournament 2 */}
          <GlassCard glow className="space-y-6">
            <div className="flex items-center justify-between">
              <BadgeTag variant="blue">Tekken 8 Arena</BadgeTag>
              <span className="text-xs font-semibold text-[#38BDF8] flex items-center gap-1.5">
                <Medal className="w-4 h-4 text-[#38BDF8]" />
                Regional Qualifier
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Trivandrum Iron Fist Tekken 8</h3>
              <p className="text-sm text-[#94A3B8]">
                Double elimination bracket. 60FPS locked performance mode with DualSense Edge controllers.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10 text-center">
              <div>
                <span className="text-[10px] uppercase text-[#64748B] block">Prize Pool</span>
                <span className="text-lg font-black text-[#38BDF8]">₹10,000</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#64748B] block">Date</span>
                <span className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-1">
                  <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                  Next Sunday
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#64748B] block">Format</span>
                <span className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-1">
                  <Users className="w-3.5 h-3.5 text-[#38BDF8]" />
                  16 Players
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-[#CBD5E1]">Entry Fee: <strong className="text-white">₹200 / player</strong></span>
              <Link href="/tournaments#register">
                <MagneticButton variant="primary" size="sm">
                  Register Slot
                </MagneticButton>
              </Link>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
