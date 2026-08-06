import React from "react";
import { Hero } from "@/components/sections/Hero";
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
      {/* Full Viewport Hero */}
      <Hero />

      {/* Opening Soon in Korani Highlight Section */}
      <ComingSoonSection />

      {/* Premium Features Section */}
      <Features />

      {/* Experience Section - Large Apple Style Story Cards */}
      <ExperienceSection />

      {/* Pricing Section */}
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
