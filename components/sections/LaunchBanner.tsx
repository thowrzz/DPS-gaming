"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Bell, ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NotifyModal } from "@/components/common/NotifyModal";

export function LaunchBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#0B1220] border-b border-[#38BDF8]/30 px-4 py-2.5 text-white shadow-md relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-medium">
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-extrabold text-[10px] uppercase tracking-widest flex items-center gap-1 border border-white/30">
              <Sparkles className="w-3 h-3 text-[#7DD3FC] animate-pulse" />
              NOW LAUNCHING
            </span>
            <span className="font-bold text-white">Kerala's Premium PS5 Gaming Lounge</span>
            <span className="hidden md:inline text-[#7DD3FC]">• Experience Next-Level Console Gaming</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setModalOpen(true)}
              className="px-3 py-1 rounded-full bg-white text-[#030712] hover:bg-[#7DD3FC] text-xs font-bold transition-all duration-200 shadow-sm flex items-center gap-1 cursor-pointer"
            >
              <Bell className="w-3.5 h-3.5 text-[#2563EB]" />
              Notify Me
            </button>
            <Link
              href="/gaming"
              className="hidden sm:inline-flex items-center gap-1 text-xs text-[#7DD3FC] hover:text-white font-semibold transition-colors"
            >
              <span>Explore Lounge</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      <NotifyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
