import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/constants/blog";
import { GlassCard } from "@/components/ui/GlassCard";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "DPS Gaming Journal & SEO Blog | PS5 Lounge Trivandrum",
  description:
    "Read guides on best PS5 games, 120Hz display optimizations, esports tournament tips, and gaming lounge reviews near Attingal & Technopark.",
};

export default function BlogHubPage() {
  return (
    <div className="pt-28 pb-20 bg-[#030712] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <BadgeTag variant="glow" icon={<BookOpen className="w-3.5 h-3.5 text-[#38BDF8]" />}>
          Official Gaming Journal
        </BadgeTag>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Articles, Guides & <span className="text-gradient-blue">Local Culture</span>
        </h1>
        <p className="text-[#CBD5E1] text-base sm:text-lg max-w-2xl mx-auto">
          Insights on console technology, competitive strategy, and gaming culture in Kerala.
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <GlassCard key={post.slug} glow className="p-0 overflow-hidden flex flex-col justify-between">
              <div className="relative h-48 w-full">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
                <div className="absolute top-3 left-3">
                  <BadgeTag variant="glow">{post.category}</BadgeTag>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] text-[#94A3B8]">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#38BDF8]" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white tracking-tight leading-snug">{post.title}</h2>
                  <p className="text-xs text-[#CBD5E1] line-clamp-2 leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-[#38BDF8] hover:text-white flex items-center gap-1 group transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
