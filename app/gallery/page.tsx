import React from "react";
import Image from "next/image";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { GlassCard } from "@/components/ui/GlassCard";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Camera, Sparkles } from "lucide-react";

export const metadata = {
  title: "Lounge Gallery & Visual Showcase | DPS Gaming Hub Korani",
  description:
    "Explore the high-resolution visual gallery of DPS Gaming Hub Korani. Luxury dark gaming interior, 120Hz displays, DualSense Edge controllers, and VIP recliners.",
};

const GALLERY_IMAGES = [
  {
    title: "Cinematic Lounge Interior",
    category: "Atmosphere",
    src: "/hero-bg.png",
    aspect: "col-span-2 row-span-2",
  },
  {
    title: "DualSense PS5 Controller",
    category: "Hardware",
    src: "/ps5-controller.png",
    aspect: "col-span-1 row-span-1",
  },
  {
    title: "120Hz 4K OLED Setup",
    category: "Display Tech",
    src: "/lounge-setup.png",
    aspect: "col-span-1 row-span-1",
  },
  {
    title: "Official Brand Badge",
    category: "Identity",
    src: "/logo-circle.jpg",
    aspect: "col-span-1 row-span-1",
  },
  {
    title: "Official Brand Emblem",
    category: "Identity",
    src: "/logo.jpg",
    aspect: "col-span-1 row-span-1",
  },
];

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20 bg-[#030712] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <BadgeTag variant="glow" icon={<Camera className="w-3.5 h-3.5 text-[#38BDF8]" />}>
          Visual Showcase
        </BadgeTag>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Apple Store Aesthetics. <br />
          <span className="text-gradient-blue">Captured in Korani.</span>
        </h1>
        <p className="text-[#CBD5E1] text-base sm:text-lg max-w-2xl mx-auto">
          Immerse yourself in high-resolution photography showcasing our luxury dark seating, ambient blue lighting, and PS5 setups.
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <GlassCard key={i} glow className="p-0 overflow-hidden group relative h-80">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#030712]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <BadgeTag variant="glow" className="text-[9px]">
                  {img.category}
                </BadgeTag>
                <h3 className="text-lg font-bold text-white tracking-tight">{img.title}</h3>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
