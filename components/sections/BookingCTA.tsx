"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gamepad2, MessageCircle, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SITE_CONFIG } from "@/constants/site";

export function BookingCTA() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello DPS Gaming Hub, I want to reserve a PS5 station at your Korani lounge."
  )}`;

  return (
    <section className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="glass-card p-10 sm:p-16 rounded-3xl border border-[#38BDF8]/30 bg-gradient-to-b from-[#0B1220]/90 to-[#111827]/90 text-center space-y-8 shadow-[0_0_80px_rgba(37,99,235,0.2)]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/20 text-[#7DD3FC] text-xs font-bold uppercase tracking-wider border border-[#38BDF8]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            Direct Station Reservation
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Reserve Your <br />
            <span className="text-gradient-blue">Gaming Experience</span>
          </h2>

          <p className="text-[#CBD5E1] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Lock in your Ultra High-Definition PS5 console station at Korani lounge between Attingal and Kazhakkoottam. Zero waiting time.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/book">
              <MagneticButton variant="primary" size="lg">
                <Gamepad2 className="w-5 h-5 text-[#7DD3FC]" />
                Book Station Now
              </MagneticButton>
            </Link>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MagneticButton variant="whatsapp" size="lg">
                <MessageCircle className="w-5 h-5 fill-white text-[#16A34A]" />
                Reserve via WhatsApp
              </MagneticButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
