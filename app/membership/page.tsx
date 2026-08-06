import React from "react";
import { MembershipSection } from "@/components/sections/MembershipSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { BadgeTag } from "@/components/ui/BadgeTag";

export const metadata = {
  title: "DPS Lounge VIP Membership | Premium PS5 Gaming Kerala",
  description:
    "Join the DPS Silver, Gold Pro, or Black Elite VIP Club. Exclusive station reservations, gear lockers, and tournament entry at Korani lounge.",
};

export default function MembershipPage() {
  return (
    <div className="pt-28 pb-20 bg-[#030712] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <BadgeTag variant="glow">VIP Player Clubs</BadgeTag>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Privilege Pass & <span className="text-gradient-blue">VIP Tiers</span>
        </h1>
        <p className="text-[#CBD5E1] text-base sm:text-lg max-w-2xl mx-auto">
          Elevate your daily gaming with priority booking privileges, free tournament passes, and DualSense Edge controller allocation.
        </p>
      </div>

      <MembershipSection />
      <BookingCTA />
    </div>
  );
}
