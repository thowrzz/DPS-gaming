import React from "react";
import { TournamentsSection } from "@/components/sections/TournamentsSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { GlassCard } from "@/components/ui/GlassCard";
import { Trophy, Award, ShieldCheck, Flame } from "lucide-react";

export const metadata = {
  title: "PS5 Esports Tournaments in Kerala | EA FC 24 & Tekken 8",
  description:
    "Compete in official weekend esports tournaments at DPS Gaming Hub Korani. Cash prizes, leaderboards, and 120Hz competitive arenas.",
};

export default function TournamentsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#030712] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <BadgeTag variant="glow" icon={<Trophy className="w-3.5 h-3.5 text-[#38BDF8]" />}>
          Kerala Competitive Arena
        </BadgeTag>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Esports Tournaments & <span className="text-gradient-blue">Prize Pools</span>
        </h1>
        <p className="text-[#CBD5E1] text-base sm:text-lg max-w-2xl mx-auto">
          Test your skill on zero-lag 120Hz 4K OLED setups. Cash prizes and trophy recognition.
        </p>
      </div>

      <TournamentsSection />

      {/* Rules & Fair Play */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <BadgeTag variant="outline">Tournament Integrity</BadgeTag>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">Official Standard Rules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#38BDF8]" />
            <h3 className="text-lg font-bold text-white">Hardware Standard</h3>
            <p className="text-xs text-[#94A3B8]">
              All matches played on identical PS5 consoles connected to 120Hz displays via HDMI 2.1 ultra high speed cables.
            </p>
          </GlassCard>

          <GlassCard className="space-y-3">
            <Award className="w-8 h-8 text-[#38BDF8]" />
            <h3 className="text-lg font-bold text-white">Official Referees</h3>
            <p className="text-xs text-[#94A3B8]">
              Dedicated tournament officials manage pauses, tactical delays, and score reporting in real-time.
            </p>
          </GlassCard>

          <GlassCard className="space-y-3">
            <Flame className="w-8 h-8 text-[#38BDF8]" />
            <h3 className="text-lg font-bold text-white">Instant Cash Payout</h3>
            <p className="text-xs text-[#94A3B8]">
              Winners receive immediate prize money transfer and physical trophy ceremony upon final whistle.
            </p>
          </GlassCard>
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
