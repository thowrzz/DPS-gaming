"use client";

import React, { useState } from "react";
import { MessageCircle, X, Gamepad2, Tv, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const getWhatsAppUrl = (messageText: string) => {
    return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
      messageText
    )}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Quick Select Popup Drawer */}
      {open && (
        <div className="w-72 sm:w-80 rounded-2xl p-4 bg-[#0B132B]/95 border border-[#2563EB]/40 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-white space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between border-b border-[#1E293B] pb-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Quick WhatsApp Booking</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#CBD5E1]">Select what you want to book or rent in Trivandrum:</p>

          <div className="space-y-2">
            <a
              href={getWhatsAppUrl(SITE_CONFIG.contact.whatsappPs5Message)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#030712]/80 border border-[#2563EB]/40 hover:border-[#38BDF8] text-xs font-medium text-white transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <Gamepad2 className="w-4 h-4 text-[#38BDF8]" />
                <span>Rent PS5 Console</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#2563EB]/20 text-[#38BDF8] font-bold text-[10px]">
                ₹949/day
              </span>
            </a>

            <a
              href={getWhatsAppUrl(SITE_CONFIG.contact.whatsappTvMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#030712]/80 border border-[#06B6D4]/40 hover:border-[#22D3EE] text-xs font-medium text-white transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <Tv className="w-4 h-4 text-[#22D3EE]" />
                <span>Rent 43&quot; QLED TV</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#06B6D4]/20 text-[#22D3EE] font-bold text-[10px]">
                from ₹499/day
              </span>
            </a>

            <a
              href={getWhatsAppUrl(SITE_CONFIG.contact.whatsappLoungeMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#030712]/80 border border-[#1E293B] hover:border-white/40 text-xs font-medium text-[#CBD5E1] transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#A855F7]" />
                <span>Book Korani Lounge Station</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold text-[10px]">
                from ₹89/hr
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat with DPS Gaming Hub on WhatsApp"
        className="flex items-center gap-2.5 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white px-4 py-3 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] border border-[#4ADE80]/30 hover:scale-105 active:scale-95 transition-all duration-300 group"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#16A34A]" />
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
          Instant WhatsApp Rental
        </span>
      </button>
    </div>
  );
}
