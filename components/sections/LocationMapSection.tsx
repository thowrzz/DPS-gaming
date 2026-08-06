"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Clock, Phone, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BadgeTag } from "@/components/ui/BadgeTag";

export function LocationMapSection() {
  return (
    <section className="relative py-28 bg-[#0B1220] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6">
            <BadgeTag variant="glow" icon={<MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />}>
              Google Business & Directions
            </BadgeTag>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Located at Korani. <br />
              <span className="text-gradient-blue">Minutes from You.</span>
            </h2>
            <p className="text-[#CBD5E1] text-base leading-relaxed">
              Situated precisely on the main NH66 highway corridor between Attingal and Kazhakkoottam. Easy highway access with dedicated frontage parking.
            </p>

            {/* NAP Info Card */}
            <div className="space-y-4 pt-2">
              <GlassCard className="p-5 space-y-3">
                <div className="flex items-start gap-3 text-sm text-[#CBD5E1]">
                  <MapPin className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">DPS Gaming Hub</strong>
                    <span>Korani Junction, Between Attingal and Kazhakkoottam, Thiruvananthapuram, Kerala 695104</span>
                  </div>
                </div>
              </GlassCard>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <GlassCard className="p-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#38BDF8] font-bold">
                    <Navigation className="w-4 h-4" />
                    <span>From Attingal</span>
                  </div>
                  <p className="text-xs text-[#94A3B8]">5 mins drive (3.2 km) south via NH66</p>
                </GlassCard>

                <GlassCard className="p-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#38BDF8] font-bold">
                    <Navigation className="w-4 h-4" />
                    <span>From Kazhakkoottam</span>
                  </div>
                  <p className="text-xs text-[#94A3B8]">10 mins drive (8.5 km) north via NH66</p>
                </GlassCard>

                <GlassCard className="p-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#38BDF8] font-bold">
                    <Clock className="w-4 h-4" />
                    <span>Opening Hours</span>
                  </div>
                  <p className="text-xs text-[#94A3B8]">24/7 (Pre-Booking Only)</p>
                </GlassCard>

                <GlassCard className="p-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#38BDF8] font-bold">
                    <Car className="w-4 h-4" />
                    <span>Parking</span>
                  </div>
                  <p className="text-xs text-[#94A3B8]">Free spacious vehicle parking</p>
                </GlassCard>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={SITE_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton variant="primary">
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-4 h-4" />
                </MagneticButton>
              </a>
            </div>
          </div>

          {/* Right Map Embed / Graphic Frame */}
          <div className="lg:col-span-6">
            <GlassCard glow className="p-3 sm:p-4 rounded-3xl overflow-hidden aspect-square sm:aspect-[4/3] relative">
              <iframe
                title="DPS Gaming Hub Location Map Korani Kerala"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15777.6256247957!2d76.8431!3d8.6542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e55555555555%3A0x5555555555555555!2sKorani%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full rounded-2xl border-0 filter grayscale contrast-125 invert"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
