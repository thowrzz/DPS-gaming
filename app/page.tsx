import React from "react";
import { Hero } from "@/components/sections/Hero";
import { RentalSection } from "@/components/sections/RentalSection";
import { ComingSoonSection } from "@/components/sections/ComingSoonSection";
import { Features } from "@/components/sections/Features";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { MembershipSection } from "@/components/sections/MembershipSection";
import { TournamentsSection } from "@/components/sections/TournamentsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { LocationMapSection } from "@/components/sections/LocationMapSection";
import { BookingCTA } from "@/components/sections/BookingCTA";

export default function Home() {
  return (
    <div className="bg-[#030712] overflow-x-hidden">
      {/* Primary Focus: PS5 (₹949) & 43" QLED TV (₹3000) Rental Showcase + Lounge Hero */}
      <Hero />

      {/* Doorstep Delivery Process & Event Use Cases */}
      <RentalSection />

      {/* Opening Soon in Korani Lounge Highlight */}
      <ComingSoonSection />

      {/* Premium Features & Hardware */}
      <Features />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Pricing Section (Rentals & In-Lounge Passes) */}
      <PricingSection />

      {/* Membership Tiers Section */}
      <MembershipSection />

      {/* Esports Tournaments Section */}
      <TournamentsSection />

      {/* Community Testimonials */}
      <TestimonialsSection />

      {/* Local SEO FAQ Section */}
      <FAQSection />

      {/* Google Business & Location Directions */}
      <LocationMapSection />

      {/* Final Booking Call to Action */}
      <BookingCTA />
    </div>
  );
}
