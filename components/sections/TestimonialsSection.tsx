"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { BadgeTag } from "@/components/ui/BadgeTag";

const REVIEWS_LIST = [
  {
    name: "Arjun R.",
    role: "Technopark Software Engineer",
    location: "Kazhakkoottam",
    rating: 5,
    comment:
      "Finally a gaming lounge in Kerala that feels like an Apple store instead of an RGB basement. The 120Hz high refresh displays and clean acoustic vibe make EA FC 24 incredible to play with friends.",
  },
  {
    name: "Rahul S.",
    role: "College Student",
    location: "Attingal",
    rating: 5,
    comment:
      "Just 5 minutes from Attingal! The DualSense Edge controllers and low latency internet ping are unmatched. We come here every Friday evening.",
  },
  {
    name: "Dr. Vishnu V.",
    role: "Console Gaming Enthusiast",
    location: "Trivandrum",
    rating: 5,
    comment:
      "DPS Gaming Hub elevates console gaming to a luxury experience. Premium leather seating, clean air conditioning, and top-tier hospitality.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-28 bg-[#0B1220] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <BadgeTag variant="glow" icon={<Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}>
            4.9/5 Rating from 250+ Gamers
          </BadgeTag>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Loved by Gamers. <br />
            <span className="text-gradient-blue">Trusted by Techies.</span>
          </h2>
          <p className="text-[#CBD5E1] text-base sm:text-lg">
            See what gamers from Attingal, Kazhakkoottam, and Technopark say about their lounge experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_LIST.map((review, index) => (
            <GlassCard
              key={review.name}
              glow
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#2563EB]/40" />
                </div>
                <p className="text-sm text-[#CBD5E1] leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">{review.name}</h3>
                  <span className="text-xs text-[#94A3B8]">{review.role}</span>
                </div>
                <span className="text-[10px] text-[#38BDF8] flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {review.location}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
