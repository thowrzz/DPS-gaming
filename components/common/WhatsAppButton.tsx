"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONFIG.contact.whatsappMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DPS Gaming Hub on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white px-4 py-3 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] border border-[#4ADE80]/30 hover:scale-105 active:scale-95 transition-all duration-300 group"
    >
      <MessageCircle className="w-5 h-5 fill-white text-[#16A34A]" />
      <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
        Chat with Lounge Desk
      </span>
    </a>
  );
}
