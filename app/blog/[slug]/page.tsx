import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/constants/blog";
import { GlassCard } from "@/components/ui/GlassCard";
import { BadgeTag } from "@/components/ui/BadgeTag";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Clock, ArrowLeft, Share2 } from "lucide-react";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | DPS Gaming Hub`,
    description: post.excerpt,
    keywords: post.keywords,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 bg-[#030712] space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs text-[#38BDF8] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Journal</span>
        </Link>

        <div className="space-y-4">
          <BadgeTag variant="glow">{post.category}</BadgeTag>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-[#94A3B8] border-b border-white/10 pb-6">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#38BDF8]">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-white/10">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        <GlassCard className="p-8 sm:p-12 space-y-6 prose prose-invert max-w-none text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }} />
        </GlassCard>
      </div>

      <BookingCTA />
    </div>
  );
}
