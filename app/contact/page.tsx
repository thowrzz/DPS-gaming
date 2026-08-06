import React from "react";
import { LocationMapSection } from "@/components/sections/LocationMapSection";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const metadata = {
  title: "Contact & Directions | DPS Gaming Hub Korani, Kerala",
  description:
    "Get driving directions, Google Maps location, opening hours, and WhatsApp contact for DPS Gaming Hub located at Korani Junction between Attingal and Kazhakkoottam.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-[#030712] space-y-16">
      <LocationMapSection />
      <BookingCTA />
    </div>
  );
}
