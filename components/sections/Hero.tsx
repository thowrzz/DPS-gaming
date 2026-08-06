"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gamepad2, Sparkles, ChevronDown, Monitor, ShieldCheck, Zap, Rocket } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { NotifyModal } from "@/components/common/NotifyModal";

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#030712]">
        {/* Background Image with Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="DPS Gaming Hub Luxury PS5 Lounge Interior"
            fill
            priority
            className="object-cover object-center opacity-30 scale-105 filter blur-[1px]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/90 via-[#030712]/75 to-[#030712]" />
          <div className="ambient-spotlight top-1/4 left-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full text-center flex flex-col items-center">
          {/* Top Launch Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <BadgeTag variant="glow" icon={<Rocket className="w-3.5 h-3.5 text-[#38BDF8]" />}>
              🚀 OPENING SOON • Expected Launch: Coming Soon
            </BadgeTag>
          </motion.div>

          {/* Main H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] text-white max-w-5xl"
          >
            Kerala’s Premium <br />
            <span className="text-gradient-blue">PS5 Gaming Lounge</span>
          </motion.h1>

          {/* Official Subtitle from Content Pack */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#CBD5E1] max-w-3xl leading-relaxed font-normal"
          >
            Experience next-generation console gaming on premium PlayStation 5 setups with high-refresh-rate displays, immersive gameplay, and a modern gaming environment. Whether you're playing with friends, competing in tournaments, or celebrating special occasions, DPS Gaming Hub is designed to deliver a premium gaming experience.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/book">
              <MagneticButton variant="primary" size="lg">
                <Gamepad2 className="w-5 h-5 text-[#7DD3FC]" />
                🎮 Book Your Session
              </MagneticButton>
            </Link>
            <MagneticButton variant="secondary" size="lg" onClick={() => setModalOpen(true)}>
              <Rocket className="w-5 h-5 text-[#38BDF8]" />
              🚀 Launching Soon
            </MagneticButton>
          </motion.div>

          {/* Floating DualSense Controller Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 relative w-full max-w-lg h-64 sm:h-80 flex items-center justify-center"
          >
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#2563EB]/20 blur-3xl" />
            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-72 sm:w-96 h-56 sm:h-72"
            >
              <Image
                src="/ps5-controller.png"
                alt="Floating DualSense PS5 Controller"
                fill
                className="object-contain filter drop-shadow-[0_20px_40px_rgba(37,99,235,0.4)]"
                sizes="(max-width: 640px) 280px, 384px"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Micro-Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#94A3B8]"
          >
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-[#38BDF8]" />
              <span>High Refresh Rate Displays</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#38BDF8]" />
              <span>DualSense Edge Gear</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span>Multiplayer Lounge</span>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-12 flex flex-col items-center gap-2 text-[11px] uppercase tracking-widest text-[#64748B]"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-4 h-4 text-[#38BDF8]" />
          </motion.div>
        </div>
      </section>

      <NotifyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
