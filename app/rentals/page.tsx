import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { RentalSection } from "@/components/sections/RentalSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { LocationMapSection } from "@/components/sections/LocationMapSection";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "PS5 Rental Trivandrum | 43\" Smart TV for Rent | DPS Gaming Hub",
  description:
    "Rent PS5 Console for ₹949/day and 43\" Smart TV from ₹1,499/day (multi-day from ₹799/day) in Trivandrum, Attingal, Kazhakkoottam, Varkala & Chirayinkeezhu. Free doorstep delivery, setup & installation for events, weddings & birthday parties.",
  keywords: [
    // PS5 Keywords
    "PS5 Rental Trivandrum",
    "PS5 Console Rental Attingal",
    "PS5 Rental Kazhakkoottam",
    "PS5 Rental Technopark",
    "Rent PS5 1 Day Kerala",
    // TV Rental Keywords — Core
    "TV Rental Trivandrum",
    "43 inch TV Rental Trivandrum",
    "Smart TV for rent Trivandrum",
    "Smart TV rental Thiruvananthapuram",
    "television rental Trivandrum",
    "TV on rent Trivandrum",
    "TV hire Trivandrum",
    // TV Rental Keywords — Locations
    "TV rental Attingal",
    "TV rental Alamcode",
    "TV rental Mangalapuram",
    "TV rental Pothencode",
    "TV rental Pallippuram",
    "TV rental Kaniyapuram",
    "TV rental Nedumangad",
    "TV rental Vembayam",
    "TV rental Kadakkavoor",
    "TV rental Navaikulam",
    "TV rental Parippally",
    "TV rental Chirayinkeezhu",
    "TV rental Kazhakkoottam",
    "TV rental Varkala",
    "TV rental Vamanapuram",
    "TV rental Kallambalam",
    "TV rental Kilimanoor",
    "PS5 rental Kaniyapuram",
    "PS5 rental Nedumangad",
    "PS5 rental Vembayam",
    "PS5 rental Kadakkavoor",
    "PS5 rental Navaikulam",
    "PS5 rental Parippally",
    "PS5 rental Pothencode",
    "PS5 rental Mangalapuram",
    "PS5 rental Alamcode",
    "PS5 rental Pallippuram",
    "PS5 rental Kilimanoor",
    // Event TV Keywords
    "Event TV Rental Trivandrum",
    "TV for wedding Trivandrum",
    "TV for birthday party Trivandrum",
    "TV for function Kerala",
    "43 inch Smart TV rental Kerala",
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
