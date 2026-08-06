import React from "react";
import { FAQSection } from "@/components/sections/FAQSection";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const metadata = {
  title: "Frequently Asked Questions | DPS Gaming Hub Korani",
  description:
    "Got questions about PS5 gaming rates, location near Attingal & Kazhakkoottam, parking, or tournaments? Read our comprehensive FAQ.",
};

export default function FAQPage() {
  return (
    <div className="pt-28 pb-20 bg-[#030712] space-y-16">
      <FAQSection />
      <BookingCTA />
    </div>
  );
}
