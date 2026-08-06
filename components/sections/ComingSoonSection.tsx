"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Bell, Sparkles, MapPin } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { NotifyModal } from "@/components/common/NotifyModal";

const LAUNCH_FEATURES = [
  "Premium PS5 Experience",
  "High Refresh Rate Gaming",
  "Multiplayer Lounge",
  "Weekend Tournaments",
  "Birthday Gaming Packages",
  "Student Friendly Pricing",
];

export function ComingSoonSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 bg-[#0B1220] border-y border-white/10 overflow-hidden">
        {/* Soft Background Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#2563EB]/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/20 text-[#7DD3FC] text-xs font-bold uppercase tracking-wider border border-[#38BDF8]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                🚀 OPENING SOON • Expected Launch: Coming Soon
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Opening Soon in <span className="text-gradient-blue">Korani</span>
              </h2>

              <p className="text-[#CBD5E1] text-base sm:text-lg leading-relaxed max-w-2xl">
                We're building a premium gaming destination between Attingal and Kazhakkoottam. Designed for gamers who want more than just a place to play.
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {LAUNCH_FEATURES.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-white">
                    <div className="w-5 h-5 rounded-full bg-[#2563EB]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <MagneticButton variant="primary" size="lg" onClick={() => setModalOpen(true)}>
                  <Bell className="w-5 h-5 text-[#7DD3FC]" />
                  Notify Me
                </MagneticButton>
              </div>
            </div>

            {/* Right Launch Card */}
            <div className="lg:col-span-5">
              <GlassCard glow className="p-8 sm:p-10 space-y-6 text-center bg-gradient-to-b from-[#111827] to-[#0B1220] border-[#38BDF8]/30 shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-[#2563EB]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] mx-auto">
                  <MapPin className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <BadgeTag variant="glow">Launch Soon Card</BadgeTag>
                  <h3 className="text-2xl font-black text-white tracking-tight">DPS Gaming Hub is Getting Ready</h3>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed">
                    Be among the first gamers to experience Kerala’s next-generation gaming lounge. Stay connected for exclusive launch offers.
                  </p>
                </div>

                <div className="pt-2">
                  <MagneticButton variant="primary" size="md" className="w-full" onClick={() => setModalOpen(true)}>
                    Join Waiting List
                  </MagneticButton>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <NotifyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
