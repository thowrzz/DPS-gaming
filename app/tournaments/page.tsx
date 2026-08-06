import React from "react";
import { TournamentsSection } from "@/components/sections/TournamentsSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { GlassCard } from "@/components/ui/GlassCard";
import { Trophy, Award, ShieldCheck, Flame, Bell } from "lucide-react";

export const metadata = {
  title: "Tournaments Coming Soon | DPS Gaming Hub Korani, Kerala",
  description:
    "Official PS5 esports tournaments for EA FC 24, Tekken 8, and Call of Duty are coming soon at DPS Gaming Hub Korani. Sign up for early registration notifications.",
};

export default function TournamentsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#030712] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <BadgeTag variant="glow" icon={<Trophy className="w-3.5 h-3.5 text-[#38BDF8]" />}>
          🚀 ANNOUNCING SOON
        </BadgeTag>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Esports Tournaments <br />
          <span className="text-gradient-blue">Coming Soon</span>
        </h1>
        <p className="text-[#CBD5E1] text-base sm:text-lg max-w-2xl mx-auto">
          We are preparing Kerala's premier competitive arena for EA FC 24, Tekken 8, and COD duels with cash rewards and official trophies.
        </p>
      </div>

      <TournamentsSection />

      {/* Rules & Fair Play Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <BadgeTag variant="outline">Competitive Arena Standards</BadgeTag>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">What to Expect</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#38BDF8]" />
            <h3 className="text-lg font-bold text-white">120Hz Hardware Standard</h3>
            <p className="text-xs text-[#94A3B8]">
              All tournament matches will be played on 120Hz 4K displays with DualSense Edge pro controllers.
            </p>
          </GlassCard>

          <GlassCard className="space-y-3">
            <Award className="w-8 h-8 text-[#38BDF8]" />
            <h3 className="text-lg font-bold text-white">Official Referees</h3>
            <p className="text-xs text-[#94A3B8]">
              Dedicated tournament officials manage brackets, pauses, tactical delays, and live score reporting.
            </p>
          </GlassCard>

          <GlassCard className="space-y-3">
            <Flame className="w-8 h-8 text-[#38BDF8]" />
            <h3 className="text-lg font-bold text-white">Instant Cash Payouts</h3>
            <p className="text-xs text-[#94A3B8]">
              Tournament champions receive immediate cash rewards and physical trophy ceremonies upon match finals.
            </p>
          </GlassCard>
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
