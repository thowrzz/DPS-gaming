import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { RentalSection } from "@/components/sections/RentalSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { LocationMapSection } from "@/components/sections/LocationMapSection";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "PS5 Console & 43\" QLED TV Rentals in Trivandrum",
  description:
    "Rent PS5 Console for ₹949/day and 43\" QLED TV with Tripod Stand for ₹3000/day in Trivandrum, Attingal & Kazhakkoottam. Free doorstep transport & setup for events, weddings & parties.",
  keywords: [
    "PS5 Rental Trivandrum",
    "TV Rental Trivandrum",
    "43 inch QLED TV Rental Trivandrum",
    "PS5 Console Rental Attingal",
    "PS5 Rental Kazhakkoottam",
    "PS5 Rental Technopark",
    "Rent PS5 1 Day Kerala",
    "Event TV Rental Trivandrum",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/rentals`,
  },
};

export default function RentalsPage() {
  return (
    <div className="bg-[#030712] pt-12 overflow-x-hidden">
      <Hero />
      <RentalSection />
      <PricingSection />
      <FAQSection />
      <LocationMapSection />
    </div>
  );
}
