"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GAMES_LIBRARY, GameItem } from "@/constants/games";
import { GlassCard } from "@/components/ui/GlassCard";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Gamepad2, Tv, Headphones, Cpu, Sparkles } from "lucide-react";

export default function GamingPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Sports", "Action", "Fighting", "Racing", "Co-op", "FPS"];

  const filteredGames =
    activeCategory === "All"
      ? GAMES_LIBRARY
      : GAMES_LIBRARY.filter((g) => g.category === activeCategory);

  return (
    <div className="pt-28 pb-20 space-y-20 bg-[#030712]">
      {/* Gaming Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <BadgeTag variant="glow" icon={<Gamepad2 className="w-3.5 h-3.5 text-[#38BDF8]" />}>
          PS5 Games Library & Hardware
        </BadgeTag>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Next-Gen Performance. <br />
          <span className="text-gradient-blue">50+ PS5 Titles.</span>
        </h1>
        <p className="text-[#CBD5E1] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          From high frame-rate FIFA & eFootball duels to high-resolution Ray-Traced single player masterpieces on Ultra High-Definition displays.
        </p>
      </section>

      {/* Category Tabs Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#2563EB] text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-[#38BDF8]/40"
                  : "bg-[#0B1220] text-[#CBD5E1] border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Games Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GlassCard key={game.id} glow className="flex flex-col justify-between p-0 overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-3 right-3">
                  <BadgeTag variant="glow">{game.fps}</BadgeTag>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold text-[#38BDF8] tracking-widest">
                    {game.category} • {game.players}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">{game.title}</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{game.description}</p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#CBD5E1]">{game.resolution}</span>
                  <Link href={`/book?game=${game.id}`}>
                    <MagneticButton variant="primary" size="sm">
                      Play Title
                    </MagneticButton>
                  </Link>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Hardware Breakdown Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <BadgeTag variant="outline">Flagship Hardware</BadgeTag>
          <h2 className="text-3xl font-extrabold text-white">Station Technical Specs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard id="display" className="space-y-4">
            <Tv className="w-8 h-8 text-[#38BDF8]" />
            <h3 className="text-lg font-bold text-white">Ultra High-Definition Displays</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Ultra High-Definition panels with smooth high frame-rate mode and Variable Refresh Rate (VRR) to eliminate input lag.
            </p>
          </GlassCard>

          <GlassCard id="controllers" className="space-y-4">
            <Gamepad2 className="w-8 h-8 text-[#38BDF8]" />
            <h3 className="text-lg font-bold text-white">DualSense Edge Controllers</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Pro wireless controllers with customizable back paddles, hair-trigger locks, and anti-slip rubber grips.
            </p>
          </GlassCard>

          <GlassCard id="audio" className="space-y-4">
            <Headphones className="w-8 h-8 text-[#38BDF8]" />
            <h3 className="text-lg font-bold text-white">PULSE 3D Spatial Audio</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Custom acoustic headphones tuned specifically for 3D positional sound cues in competitive titles.
            </p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
