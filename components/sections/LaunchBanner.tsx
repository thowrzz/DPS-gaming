"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Bell, ExternalLink } from "lucide-react";
import { NotifyModal } from "@/components/common/NotifyModal";

export function LaunchBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0F172A] border-b border-[#38BDF8]/30 text-white text-xs py-2 px-4 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
          {/* Left Announcement & Parent Company Backlink */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-medium">
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-white font-extrabold text-[10px] uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#7DD3FC] animate-pulse" />
              NOW RENTING &amp; KORANI LOUNGE
            </span>
            <span className="hidden md:inline text-white/80">|</span>
            <a
              href="https://digitalproductsolutions.in"
              target="_blank"
              rel="noopener dofollow"
              className="inline-flex items-center gap-1 text-[#7DD3FC] hover:text-white font-semibold underline underline-offset-2 transition-colors"
              title="Visit Digital Product Solutions - Parent Company"
            >
              <span>A Unit of Digital Product Solutions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-2.5 py-0.5 rounded-full bg-white text-[#030712] hover:bg-[#7DD3FC] text-[11px] font-bold transition-all duration-200 shadow-sm flex items-center gap-1 cursor-pointer"
            >
              <Bell className="w-3 h-3 text-[#2563EB]" />
              Launch Alerts
            </button>
            <Link
              href="/rentals"
              className="text-[11px] text-[#7DD3FC] hover:text-white font-semibold transition-colors hidden sm:inline-block"
            >
              PS5 &amp; TV Rentals →
            </Link>
          </div>
        </div>
      </div>

      <NotifyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
