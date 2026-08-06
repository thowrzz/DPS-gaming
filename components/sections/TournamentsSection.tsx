"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Calendar, Medal, Users, ArrowRight, Bell, Sparkles, Flame } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { NotifyModal } from "@/components/common/NotifyModal";

export function TournamentsSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-28 bg-[#030712] border-t border-white/5 overflow-hidden">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#2563EB]/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4 max-w-2xl">
              <BadgeTag variant="glow" icon={<Trophy className="w-3.5 h-3.5 text-[#38BDF8]" />}>
                🚀 TOURNAMENTS ANNOUNCING SOON
              </BadgeTag>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Competitive Esports. <br />
                <span className="text-gradient-blue">Announcing Soon.</span>
              </h2>
              <p className="text-[#CBD5E1] text-base sm:text-lg">
                Kerala's premier competitive arena for EA FC 24, Tekken 8, and Call of Duty tournaments will be announced soon. Get notified to claim early slot registrations.
              </p>
            </div>

            <div>
              <MagneticButton variant="primary" onClick={() => setModalOpen(true)}>
                <Bell className="w-4 h-4 text-[#7DD3FC]" />
                Notify Me for Tournaments
              </MagneticButton>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upcoming Tournament 1 */}
            <GlassCard glow className="space-y-6">
              <div className="flex items-center justify-between">
                <BadgeTag variant="blue">EA FC 24 Showcase</BadgeTag>
                <span className="text-xs font-semibold text-[#38BDF8] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
                  Announcing Soon
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">Kerala EA FC 24 Champions Cup</h3>
                <p className="text-sm text-[#94A3B8]">
                  1v1 Knockout tournament on Ultra High-Definition displays. Official competitive rules and cash prize pool to be announced soon.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10 text-center">
                <div>
                  <span className="text-[10px] uppercase text-[#64748B] block">Prize Pool</span>
                  <span className="text-sm font-bold text-[#38BDF8]">To Be Revealed</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#64748B] block">Status</span>
                  <span className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-1">
                    <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                    Coming Soon
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#64748B] block">Location</span>
                  <span className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-1">
                    <Users className="w-3.5 h-3.5 text-[#38BDF8]" />
                    Korani Lounge
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-[#CBD5E1]">Status: <strong className="text-white">Early Registration List</strong></span>
                <MagneticButton variant="secondary" size="sm" onClick={() => setModalOpen(true)}>
                  Get Early Access
                </MagneticButton>
              </div>
            </GlassCard>

            {/* Upcoming Tournament 2 */}
            <GlassCard glow className="space-y-6">
              <div className="flex items-center justify-between">
                <BadgeTag variant="blue">Tekken 8 Arena</BadgeTag>
                <span className="text-xs font-semibold text-[#38BDF8] flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
                  Announcing Soon
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">Trivandrum Iron Fist Tekken 8</h3>
                <p className="text-sm text-[#94A3B8]">
                  Double elimination fighting tournament. 60FPS locked performance mode with DualSense Edge controllers.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10 text-center">
                <div>
                  <span className="text-[10px] uppercase text-[#64748B] block">Prize Pool</span>
                  <span className="text-sm font-bold text-[#38BDF8]">To Be Revealed</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#64748B] block">Status</span>
                  <span className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-1">
                    <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                    Coming Soon
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#64748B] block">Location</span>
                  <span className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-1">
                    <Users className="w-3.5 h-3.5 text-[#38BDF8]" />
                    Korani Lounge
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-[#CBD5E1]">Status: <strong className="text-white">Early Registration List</strong></span>
                <MagneticButton variant="secondary" size="sm" onClick={() => setModalOpen(true)}>
                  Get Early Access
                </MagneticButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <NotifyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
