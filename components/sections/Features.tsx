"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Tv,
  Headphones,
  Wifi,
  Armchair,
  Snowflake,
  Trophy,
  Users,
  Gamepad2,
  Clock,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { BadgeTag } from "@/components/ui/BadgeTag";

const FEATURES_DATA = [
  {
    icon: Gamepad2,
    title: "Premium PS5 Consoles",
    description: "Every station features high-speed custom SSDs and native 4K ray-tracing performance.",
  },
  {
    icon: Tv,
    title: "120Hz High Refresh Displays",
    description: "Ultra-low latency HDMI 2.1 displays with Variable Refresh Rate (VRR) for zero screen tearing.",
  },
  {
    icon: Clock,
    title: "24/7 Pre-Booking Access",
    description: "Book early morning, late night, or anytime 24 hours a day, 7 days a week via online pre-booking.",
  },
  {
    icon: Wifi,
    title: "Ultra Fast Internet",
    description: "Dedicated high-speed line delivering sub-5ms low ping for fluid online multiplayer battles.",
  },
  {
    icon: Armchair,
    title: "Executive Luxury Seating",
    description: "Ergonomic leather lounge recliners built for hours of intense gameplay in complete comfort.",
  },
  {
    icon: Snowflake,
    title: "Air Conditioned Lounge",
    description: "Climate-controlled ambient room temperature with clean air filtration and subtle scenting.",
  },
  {
    icon: Trophy,
    title: "Weekend Tournaments",
    description: "Regular esports championships for EA FC 24, Tekken 8, and COD with prize pools.",
  },
  {
    icon: Users,
    title: "Thriving Tech Community",
    description: "Connect with fellow console enthusiasts, college gamers, and Technopark professionals.",
  },
];

export function Features() {
  return (
    <section className="relative py-24 bg-[#030712] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <BadgeTag variant="glow">Engineered for Excellence</BadgeTag>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Premium Features. <br />
            <span className="text-gradient-blue">Zero Compromises.</span>
          </h2>
          <p className="text-[#CBD5E1] text-base sm:text-lg">
            We stripped away cheap gamer gimmicks to create a technology lounge that feels like an Apple flagship store built for PlayStation.
          </p>
        </div>

        {/* 8 Feature Cards aligned on 8px grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={item.title}
                glow
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
