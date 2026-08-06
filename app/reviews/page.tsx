import React from "react";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { Star } from "lucide-react";

export const metadata = {
  title: "Gamer Reviews & Google Ratings | DPS Gaming Hub Korani",
  description:
    "Read verified reviews from console gamers, college students, and Technopark software engineers about DPS Gaming Hub in Korani, Kerala.",
};

export default function ReviewsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#030712] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <BadgeTag variant="glow" icon={<Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}>
          Verified Community Ratings
        </BadgeTag>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          What Gamers Say <br />
          <span className="text-gradient-blue">About DPS Lounge</span>
        </h1>
        <p className="text-[#CBD5E1] text-base sm:text-lg max-w-2xl mx-auto">
          Rated 4.9/5 stars across Google Business reviews for display latency, cleanliness, seating comfort, and hospitality.
        </p>
      </div>

      <TestimonialsSection />
      <BookingCTA />
    </div>
  );
}
