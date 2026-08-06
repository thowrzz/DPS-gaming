import React from "react";
import { PricingSection } from "@/components/sections/PricingSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { GlassCard } from "@/components/ui/GlassCard";
import { GraduationCap, Moon, Gift } from "lucide-react";

export const metadata = {
  title: "Gaming Pricing & Night Passes | DPS Gaming Hub Korani",
  description:
    "Explore transparent PS5 lounge hourly rates, student passes, night owl passes, and squad birthday packages at Korani, between Attingal and Kazhakkoottam.",
};

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20 bg-[#030712] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <BadgeTag variant="glow">Honest & Simple Rates</BadgeTag>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Gaming Passes & <span className="text-gradient-blue">Hourly Rates</span>
        </h1>
        <p className="text-[#CBD5E1] text-base sm:text-lg max-w-2xl mx-auto">
          No hidden lounge surcharges. Play on Ultra High-Definition PS5 setups with luxury seating.
        </p>
      </div>

      <PricingSection />

      {/* Special Deals Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <BadgeTag variant="outline">Special Offers</BadgeTag>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">Discounts & Squad Perks</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard id="student" className="space-y-4">
            <GraduationCap className="w-8 h-8 text-[#38BDF8]" />
            <h3 className="text-lg font-bold text-white">Student Discount Pass</h3>
            <p className="text-xs text-[#94A3B8]">
              Show a valid college ID from Attingal or Kazhakkoottam to enjoy 20% off hourly rates on weekdays between 10:00 AM - 4:00 PM.
            </p>
          </GlassCard>

          <GlassCard id="night-pass" className="space-y-4">
            <Moon className="w-8 h-8 text-[#38BDF8]" />
            <h3 className="text-lg font-bold text-white">Night Owl Marathon</h3>
            <p className="text-xs text-[#94A3B8]">
              4-hour non-stop late night PS5 gaming pass for ₹699 on Fridays and Saturdays with free energy drink refills.
            </p>
          </GlassCard>

          <GlassCard id="parties" className="space-y-4">
            <Gift className="w-8 h-8 text-[#38BDF8]" />
            <h3 className="text-lg font-bold text-white">Birthday Squad Party</h3>
            <p className="text-xs text-[#94A3B8]">
              Reserve the private multi-station lounge for 3 hours for up to 6 friends. Includes snacks, drinks, and dedicated butler.
            </p>
          </GlassCard>
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
