"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Gamepad2, Calendar, Clock, Users, Send, CheckCircle2, Shield } from "lucide-react";
import { PRICING_TIERS } from "@/constants/pricing";
import { GAMES_LIBRARY } from "@/constants/games";
import { SITE_CONFIG } from "@/constants/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BadgeTag } from "@/components/ui/BadgeTag";

function BookingFormContent() {
  const searchParams = useSearchParams();
  const initialPassId = searchParams.get("pass") || PRICING_TIERS[1].id;

  const [selectedPass, setSelectedPass] = useState(initialPassId);
  const [selectedGame, setSelectedGame] = useState(GAMES_LIBRARY[0].title);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("16:00");
  const [players, setPlayers] = useState("2 Players");

  const currentPass = PRICING_TIERS.find((p) => p.id === selectedPass) || PRICING_TIERS[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingSummary = `🎮 *DPS GAMING HUB - PS5 RESERVATION*
----------------------------------------
*Name:* ${name || "Guest Gamer"}
*Phone:* ${phone || "Not provided"}
*Pass Selected:* ${currentPass.name} (${currentPass.price})
*Game Choice:* ${selectedGame}
*Players:* ${players}
*Date:* ${date}
*Time Slot:* ${time}
----------------------------------------
Location: Korani Lounge (Attingal - Kazhakkoottam)
Please confirm my station reservation!`;

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
      bookingSummary
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <BadgeTag variant="glow" icon={<Shield className="w-3.5 h-3.5 text-[#38BDF8]" />}>
          Instant WhatsApp Confirmation
        </BadgeTag>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Reserve Your <span className="text-gradient-blue">PS5 Station</span>
        </h1>
        <p className="text-[#CBD5E1] text-sm sm:text-base">
          Fill in your preferences below to generate your instant lounge booking ticket.
        </p>
      </div>

      <GlassCard className="p-8 sm:p-12 border border-[#38BDF8]/30">
        <form onSubmit={handleBookingSubmit} className="space-y-8">
          {/* Step 1: Pass Selection */}
          <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] flex items-center gap-2">
              <Gamepad2 className="w-4 h-4" />
              1. Select Gaming Pass Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRICING_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  onClick={() => setSelectedPass(tier.id)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all duration-200 ${
                    selectedPass === tier.id
                      ? "bg-[#2563EB]/20 border-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                      : "bg-[#0B1220]/60 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{tier.name}</span>
                    <span className="text-sm font-black text-[#38BDF8]">{tier.price}</span>
                  </div>
                  <span className="text-xs text-[#94A3B8] block mt-1">{tier.tagline}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Game Choice & Players */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
                2. Preferred PS5 Game
              </label>
              <select
                value={selectedGame}
                onChange={(e) => setSelectedGame(e.target.value)}
                className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38BDF8]"
              >
                {GAMES_LIBRARY.map((game) => (
                  <option key={game.id} value={game.title} className="bg-[#0B1220]">
                    {game.title} ({game.fps})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
                Player Count
              </label>
              <select
                value={players}
                onChange={(e) => setPlayers(e.target.value)}
                className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38BDF8]"
              >
                <option value="1 Player Solo">1 Player Solo</option>
                <option value="2 Players Duo">2 Players Duo (EA FC / Tekken)</option>
                <option value="3-4 Squad Co-op">3-4 Squad Co-op</option>
                <option value="5+ Party VIP Room">5+ Party VIP Room</option>
              </select>
            </div>
          </div>

          {/* Step 3: Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38BDF8]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Time Slot (24/7 Pre-Booking)
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38BDF8]"
              >
                <option value="12:00 AM (Midnight)">12:00 AM (Midnight Session)</option>
                <option value="02:00 AM (Late Night)">02:00 AM (Late Night Session)</option>
                <option value="04:00 AM (Early Dawn)">04:00 AM (Early Dawn Session)</option>
                <option value="06:00 AM (Early Morning)">06:00 AM (Early Morning)</option>
                <option value="08:00 AM (Morning)">08:00 AM (Morning)</option>
                <option value="10:00 AM (Morning)">10:00 AM (Morning)</option>
                <option value="12:00 PM (Noon)">12:00 PM (Noon)</option>
                <option value="02:00 PM (Afternoon)">02:00 PM (Afternoon)</option>
                <option value="04:00 PM (Evening)">04:00 PM (Evening)</option>
                <option value="06:00 PM (Prime Evening)">06:00 PM (Prime Evening)</option>
                <option value="08:00 PM (Night)">08:00 PM (Night Session)</option>
                <option value="10:00 PM (Night Owl)">10:00 PM (Night Owl Session)</option>
              </select>
            </div>
          </div>

          {/* Step 4: Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38BDF8]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="+91 Mobile Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38BDF8]"
              />
            </div>
          </div>

          {/* Ticket Summary Box */}
          <div className="p-4 rounded-2xl bg-[#0B1220]/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[#94A3B8] block">Selected Pass: <strong className="text-white">{currentPass.name}</strong></span>
              <span className="text-[#38BDF8] font-semibold">{currentPass.duration}</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-white">{currentPass.price}</span>
            </div>
          </div>

          <MagneticButton variant="whatsapp" size="lg" type="submit" className="w-full">
            <Send className="w-5 h-5 fill-white text-[#16A34A]" />
            Dispatch WhatsApp Booking Ticket
          </MagneticButton>
        </form>
      </GlassCard>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="text-center py-24 text-white">Loading booking desk...</div>}>
      <BookingFormContent />
    </Suspense>
  );
}
