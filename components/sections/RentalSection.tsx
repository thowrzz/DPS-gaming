"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Wrench,
  CheckCircle2,
  Calendar,
  Sparkles,
  PartyPopper,
  Building2,
  Tv,
  Gamepad2,
  ShieldCheck,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { SITE_CONFIG } from "@/constants/site";

export function RentalSection() {
  const getWhatsAppLink = (messageText: string) => {
    return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
      messageText
    )}`;
  };

  const steps = [
    {
      step: "01",
      title: "Choose Gear & Date",
      description: "Select PS5 Console (₹949/day) or 43\" QLED TV with Tripod Stand (₹3000/day) or Combo.",
      icon: Gamepad2,
    },
    {
      step: "02",
      title: "Instant WhatsApp Booking",
      description: "Send a quick WhatsApp message to reserve your dates and confirm your Trivandrum location.",
      icon: MessageCircle,
    },
    {
      step: "03",
      title: "We Deliver & Setup",
      description: "Our technical team handles transportation, wiring, tripod setup & installation at your venue.",
      icon: Truck,
    },
    {
      step: "04",
      title: "Rent, Enjoy, Repeat",
      description: "Experience premium gaming & event visuals. We return to pick up the equipment when done!",
      icon: Sparkles,
    },
  ];

  const useCases = [
    {
      title: "Wedding Events",
      icon: Sparkles,
      desc: "High-resolution displays for photo slideshows, live stream playback, or kid-friendly gaming corners at marriage halls.",
      color: "from-pink-500/20 to-purple-500/20",
    },
    {
      title: "Birthday Parties",
      icon: PartyPopper,
      desc: "Turn any birthday into an epic FIFA / EA FC 24 tournament arena with 4K QLED displays & PS5 consoles.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Corporate Events",
      icon: Building2,
      desc: "Sleek 43\" QLED displays with professional tripod stands for Technopark corporate expos, presentations & team bonding.",
      color: "from-[#38BDF8]/20 to-blue-600/20",
    },
    {
      title: "Exhibitions & Trade Shows",
      icon: Tv,
      desc: "Showcase promotional product videos, demos, and interactive customer setups with full installation included.",
      color: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  const deliveryPlaces = [
    "Attingal (⚡ Express Delivery)",
    "Venjaramoodu",
    "Varkala & Varkala Cliff",
    "Chirayinkeezhu & Kadakkavoor",
    "Kattakada & Malayinkeezhu",
    "Kazhakkoottam & Kariavattom",
    "Technopark Phase 1, 2 & 3",
    "Technocity & Korani Junction",
    "Kilimanoor & Kallambalam",
    "Kaniyapuram & Mangalapuram",
    "Pothencode & Nedumangad",
    "Kowdiar & Pattom",
    "Vellayambalam & Poojappura",
    "Trivandrum Central & Kovalam",
  ];


  return (
    <section id="rentals-section" className="py-24 bg-[#030712] relative overflow-hidden border-t border-[#1E293B]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2563EB]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#06B6D4]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <BadgeTag variant="secondary" icon={<Truck className="w-3.5 h-3.5 text-[#38BDF8]" />}>
            DOORSTEP RENTAL SERVICE
          </BadgeTag>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
            How Renting Works <span className="text-gradient-blue">in Trivandrum</span>
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg">
            Hassle-free TV &amp; PS5 rentals for home gaming, birthday parties, corporate expos, and wedding events. We transport, install, and pick up!
          </p>
        </div>

        {/* 4-Step Process */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl p-6 bg-[#0B132B]/60 border border-[#1E293B] hover:border-[#2563EB]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#2563EB]">{item.step}</span>
                    <div className="p-2.5 rounded-xl bg-[#2563EB]/10 text-[#38BDF8] border border-[#2563EB]/20">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Use Cases Grid */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Perfect Display &amp; Gaming for Every Occasion
            </h3>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2">
              Whether you need an ultra-sharp 43&quot; QLED TV with stand or a PS5 console for event entertainment, we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <div
                  key={i}
                  className={`rounded-2xl p-6 bg-gradient-to-br ${uc.color} border border-[#1E293B] hover:border-[#38BDF8]/40 transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className="p-3 rounded-xl bg-black/40 text-[#38BDF8] w-fit mb-4 border border-white/10">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{uc.title}</h4>
                    <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">{uc.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Places Coverage in Trivandrum */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-[#0B132B]/80 via-[#070D1F] to-[#0B132B]/80 border border-[#2563EB]/30">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                Coverage Area • Thiruvananthapuram District
              </div>
              <h3 className="text-2xl font-bold text-white">We Deliver &amp; Install Across All Places in Trivandrum</h3>
              <p className="text-sm text-[#94A3B8] mt-1 max-w-2xl">
                On-time doorstep delivery for PS5 rentals (₹949/day) &amp; QLED TV rentals (₹3000/day with tripod stand).
              </p>
            </div>
            <a
              href={getWhatsAppLink(SITE_CONFIG.contact.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <MagneticButton variant="primary" size="md">
                <MessageCircle className="w-4 h-4 text-white" />
                Check Availability on WhatsApp
              </MagneticButton>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {deliveryPlaces.map((place, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[#030712]/80 border border-[#1E293B] text-xs text-[#CBD5E1] font-medium"
              >
                📍 {place}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
