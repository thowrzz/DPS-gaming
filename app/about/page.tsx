import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SITE_CONFIG } from "@/constants/site";
import { Sparkles, Shield, Cpu, HeartHandshake, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About DPS Gaming Hub | Luxury PS5 Lounge in Korani, Kerala",
  description:
    "Learn about DPS Gaming Hub, created by Digital Product Solutions. Kerala's premier luxury technology lounge situated between Attingal and Kazhakkoottam.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 space-y-24 bg-[#030712]">
      {/* About Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <BadgeTag variant="glow" icon={<Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />}>
          Parented by Digital Product Solutions
        </BadgeTag>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Where Apple Design Meets <br />
          <span className="text-gradient-blue">PlayStation Heritage</span>
        </h1>
        <p className="text-[#CBD5E1] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          DPS Gaming Hub was founded to dismantle outdated gaming café tropes. We engineered a quiet, luxurious technology sanctuary at Korani, between Attingal and Kazhakkoottam.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <BadgeTag variant="outline">Our Story</BadgeTag>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Kerala's First Apple-Grade Console Lounge
            </h2>
            <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
              Digital Product Solutions envisioned a venue where gamers, software developers from Technopark, and console enthusiasts from Attingal could experience PlayStation 5 hardware in an environment designed with Apple HIG principles.
            </p>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              We replaced noisy, dim rooms with acoustic wall paneling, clean ambient lighting, Ultra High-Definition displays, and ergonomic leather recliners. Everything is measured on an 8px grid system for visual harmony.
            </p>
          </div>

          <div className="lg:col-span-6">
            <GlassCard glow className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden">
              <Image
                src="/lounge-setup.png"
                alt="DPS Gaming Hub Premium Lounge Interior"
                fill
                className="object-cover"
              />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Uncompromised Tech</h3>
            <p className="text-sm text-[#94A3B8]">
              Ultra High-Definition displays with smooth high frame-rate rendering and low-latency fiber internet.
            </p>
          </GlassCard>

          <GlassCard className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Minimal Luxury</h3>
            <p className="text-sm text-[#94A3B8]">
              Zero visual clutter, no harsh neon RGB, clean air filtration, and acoustic comfort.
            </p>
          </GlassCard>

          <GlassCard className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Community First</h3>
            <p className="text-sm text-[#94A3B8]">
              Fair local tournament prize pools, student discounts, and friendly hospitality.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 pt-12">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Ready to Experience the Lounge?</h2>
        <Link href="/book">
          <MagneticButton variant="primary" size="lg">
            <span>Reserve PS5 Station</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </Link>
      </section>
    </div>
  );
}
