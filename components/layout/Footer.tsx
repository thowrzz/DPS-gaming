import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_SECTIONS } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#030712] text-[#CBD5E1] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Soft Ambient Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#2563EB]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Intro Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <Image
                  src="/logo-circle.jpg"
                  alt="DPS Gaming Hub Badge"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">
                  DPS <span className="text-[#38BDF8]">GAMING HUB</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#64748B]">
                  Play. Compete. Connect.
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-md">
              Kerala's most premium PS5 gaming lounge experience. Engineered with Ultra High-Definition displays, DualSense Edge technology, and luxury lounge seating at Korani, between Attingal and Kazhakkoottam.
            </p>

            {/* Address & Direct Contact Pill */}
            <div className="space-y-3 pt-2 text-xs text-[#CBD5E1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>{SITE_CONFIG.contact.email}</span>
              </div>
              {/* Social Channels Row */}
              <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-3">
                <a
                  href={SITE_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="DPS Gaming Hub Instagram"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#E1306C] hover:bg-[#E1306C]/20 hover:border-[#E1306C]/40 transition-all"
                  title="Instagram"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a
                  href={SITE_CONFIG.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="DPS Gaming Hub Facebook"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#1877F2] hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40 transition-all"
                  title="Facebook"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href={SITE_CONFIG.contact.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="DPS Gaming Hub X (Twitter)"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#38BDF8] hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/40 transition-all"
                  title="X (Twitter)"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a
                  href={SITE_CONFIG.contact.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="DPS Gaming Hub YouTube"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#FF0000] hover:bg-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all"
                  title="YouTube"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a
                  href={SITE_CONFIG.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="DPS Gaming Hub LinkedIn"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40 transition-all"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </div>




          {/* Nav Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                {section.title}
              </h3>
              <ul className="space-y-2.5 text-xs">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#38BDF8]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} DPS Gaming Hub. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span>Engineered &amp; Powered by</span>
            <a
              href="https://digitalproductsolutions.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7DD3FC] hover:text-white font-bold transition-colors inline-flex items-center gap-1 underline underline-offset-2"
              title="Digital Product Solutions - Web Development & Technology Studio"
            >
              <span>Digital Product Solutions</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
