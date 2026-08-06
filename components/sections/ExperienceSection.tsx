"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeTag } from "@/components/ui/BadgeTag";

export function ExperienceSection() {
  return (
    <section className="relative py-28 bg-[#0B1220] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-24">
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <BadgeTag variant="glow">The Technology Experience</BadgeTag>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Designed like Apple. <br />
            <span className="text-gradient-blue">Powered by PlayStation.</span>
          </h2>
          <p className="text-[#CBD5E1] text-base sm:text-lg">
            Immerse yourself in clean aesthetics, acoustic refinement, and uncompromised frame rates.
          </p>
        </div>

        {/* Large Story Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group rounded-3xl overflow-hidden border border-white/10 bg-[#111827] shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center"
        >
          <div className="lg:col-span-7 relative h-80 sm:h-[450px] w-full overflow-hidden">
            <Image
              src="/lounge-setup.png"
              alt="Apple Style Gaming Lounge Interior Setup"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent lg:hidden" />
          </div>
          <div className="lg:col-span-5 p-8 sm:p-12 space-y-6">
            <BadgeTag variant="outline">Display Precision</BadgeTag>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ultra High-Definition Gaming Displays. <br />
              Zero Lag. Pure Clarity.
            </h3>
            <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
              Every millisecond matters in competitive gaming. Our custom HDMI 2.1 panels deliver true high frame-rate rendering for FIFA, eFootball, and Tekken 8, giving you the crispest visual fidelity in Kerala.
            </p>
          </div>
        </motion.div>

        {/* Large Story Card 2 - Reverse Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group rounded-3xl overflow-hidden border border-white/10 bg-[#111827] shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center"
        >
          <div className="lg:col-span-5 p-8 sm:p-12 space-y-6 lg:order-1 order-2">
            <BadgeTag variant="outline">Tactile Gear</BadgeTag>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              DualSense Edge Pro. <br />
              In Your Hands.
            </h3>
            <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
              Custom remappable back buttons, adjustable trigger stops, and haptic rumble that lets you feel every pitch turn, tackle, and explosion with lifelike tactile depth.
            </p>
          </div>
          <div className="lg:col-span-7 relative h-80 sm:h-[450px] w-full overflow-hidden lg:order-2 order-1">
            <Image
              src="/ps5-controller.png"
              alt="DualSense PS5 Controller Studio Render"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent lg:hidden" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
