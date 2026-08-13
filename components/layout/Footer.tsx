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
              rel="noopener dofollow"
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
