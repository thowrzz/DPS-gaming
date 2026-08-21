"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Tv,
  Truck,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  ChevronDown,
  Rocket,
  ShieldCheck,
  Zap,
  Wrench,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { SITE_CONFIG } from "@/constants/site";
import { NotifyModal } from "@/components/common/NotifyModal";

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  const getWhatsAppLink = (messageText: string) => {
    return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
      messageText
    )}`;
  };

  return (
    <>
      <section className="relative flex flex-col items-center justify-center pt-10 sm:pt-16 pb-16 overflow-hidden bg-[#030712]">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="DPS Gaming Hub PS5 & TV Rentals Trivandrum"
            fill
            priority
            className="object-cover object-center opacity-25 scale-105 filter blur-[1px]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/95 via-[#030712]/85 to-[#030712]" />
          <div className="ambient-spotlight top-1/4 left-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full text-center flex flex-col items-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <BadgeTag variant="glow" icon={<Rocket className="w-3.5 h-3.5 text-[#38BDF8]" />}>
              ⚡ FAST DELIVERY: ATTINGAL • VENJARAMOODU • VARKALA • CHIRAYINKEEZHU • KATTAKADA • KAZHAKKOOTTAM
            </BadgeTag>
          </motion.div>


          {/* Main H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white max-w-5xl"
          >
            Rent <span className="text-gradient-blue">PS5 Console</span> &amp;{" "}
            <span className="text-gradient-cyan">43&quot; QLED TV</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-[#CBD5E1] max-w-3xl leading-relaxed font-normal"
          >
            Play high-end games at home or upgrade your events in Trivandrum. Fast doorstep delivery, full installation, pre-installed games &amp; 24/7 support.
          </motion.p>

          {/* Parent Company SEO Backlink Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-3 text-xs text-[#94A3B8] font-medium"
          >
            <span>Powered by </span>
            <a
              href="https://digitalproductsolutions.in"
              target="_blank"
              rel="noopener dofollow"
              className="text-[#7DD3FC] hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              Digital Product Solutions
            </a>
          </motion.div>


          {/* RENTAL HIGHLIGHT CARDS (MATCHING POSTERS DIRECTLY) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl text-left"
          >
            {/* CARD 1: PS5 CONSOLE RENTAL */}
            <div className="relative group rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0B132B]/90 via-[#070D1F]/90 to-[#030712] border border-[#2563EB]/40 hover:border-[#38BDF8] transition-all duration-300 shadow-[0_0_50px_rgba(37,99,235,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#2563EB]/20 text-[#38BDF8] border border-[#2563EB]/30">
                      <Gamepad2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white tracking-wide">PS5 Console Rental</h2>
                      <p className="text-xs text-[#94A3B8] font-mono uppercase tracking-wider">Play More • Pay Less</p>
                    </div>
                  </div>
                  <div className="bg-[#2563EB]/20 border border-[#38BDF8]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#38BDF8] shrink-0">
                    🔥 Popular Rental
                  </div>
                </div>

                {/* Price Display */}
                <div className="my-4 p-4 rounded-2xl bg-[#030712]/80 border border-[#1E293B] flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#94A3B8] font-semibold">1 DAY PASS</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">₹949</span>
                    <span className="text-xs text-[#94A3B8]">/ day</span>
                  </div>
                </div>

                {/* Poster Features */}
                <ul className="space-y-2.5 my-6 text-sm text-[#CBD5E1]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span><strong>Latest Games Included</strong> (Unlimited Fun)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Truck className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span><strong>On-Time Doorstep Delivery</strong> across Trivandrum</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span><strong>Well Maintained</strong> (100% Quality &amp; Sanitized)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span><strong>24/7 Customer Support</strong> &amp; Setup Help</span>
                  </li>
                </ul>
              </div>

              {/* Instant WhatsApp CTA */}
              <a
                href={getWhatsAppLink(SITE_CONFIG.contact.whatsappPs5Message)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2"
              >
                <MagneticButton variant="primary" size="lg" className="w-full justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                  Rent PS5 on WhatsApp
                </MagneticButton>
              </a>
            </div>

            {/* CARD 2: 43" QLED TV RENTAL */}
            <div className="relative group rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0B132B]/90 via-[#070D1F]/90 to-[#030712] border border-[#06B6D4]/40 hover:border-[#22D3EE] transition-all duration-300 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#06B6D4]/20 text-[#22D3EE] border border-[#06B6D4]/30">
                      <Tv className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white tracking-wide">43&quot; QLED TV Rental</h2>
                      <p className="text-xs text-[#94A3B8] font-mono uppercase tracking-wider">Rent It • Love It</p>
                    </div>
                  </div>
                  <div className="bg-[#06B6D4]/20 border border-[#22D3EE]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#22D3EE] shrink-0">
                    📺 Event Display
                  </div>
                </div>

                {/* Price Display */}
                <div className="my-4 p-4 rounded-2xl bg-[#030712]/80 border border-[#1E293B] flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#94A3B8] font-semibold">1 DAY PASS</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">₹3,000</span>
                    <span className="text-xs text-[#94A3B8]">/ day</span>
                  </div>
                </div>

                {/* Poster Features */}
                <ul className="space-y-2.5 my-6 text-sm text-[#CBD5E1]">
                  <li className="flex items-center gap-2.5">
                    <Tv className="w-4 h-4 text-[#22D3EE] shrink-0" />
                    <span><strong>43&quot; QLED TV + Tripod Stand</strong> Included</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Truck className="w-4 h-4 text-[#22D3EE] shrink-0" />
                    <span><strong>We Handle Transport</strong> (Delivery &amp; Pickup)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Wrench className="w-4 h-4 text-[#22D3EE] shrink-0" />
                    <span><strong>We Handle Installation</strong> &amp; Cable Setup</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#22D3EE] shrink-0" />
                    <span><strong>Weddings, Birthdays, Corporate &amp; Expos</strong></span>
                  </li>
                </ul>
              </div>

              {/* Instant WhatsApp CTA */}
              <a
                href={getWhatsAppLink(SITE_CONFIG.contact.whatsappTvMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2"
              >
                <MagneticButton variant="secondary" size="lg" className="w-full justify-center border-[#06B6D4]/50 text-[#22D3EE]">
                  <MessageCircle className="w-5 h-5 text-[#22D3EE]" />
                  Rent QLED TV on WhatsApp
                </MagneticButton>
              </a>
            </div>

          </motion.div>

          {/* Lounge Visit Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 p-4 rounded-2xl bg-[#0B132B]/50 border border-[#1E293B] max-w-3xl w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          >
            <div className="flex items-center gap-3 text-left">
              <span className="text-xl">🎮</span>
              <div>
                <span className="font-semibold text-white">Prefer to visit our Korani Lounge?</span>
                <p className="text-xs text-[#94A3B8]">24/7 PS5 stations with 4K high-refresh displays starting at ₹89/hr.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link href="/book">
                <MagneticButton variant="outline" size="sm">
                  Book Lounge Station →
                </MagneticButton>
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-10 flex flex-col items-center gap-2 text-[11px] uppercase tracking-widest text-[#64748B]"
          >
            <span>Scroll for event details &amp; locations</span>
            <ChevronDown className="w-4 h-4 text-[#38BDF8]" />
          </motion.div>
        </div>
      </section>

      <NotifyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
