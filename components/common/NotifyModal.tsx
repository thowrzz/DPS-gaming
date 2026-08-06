"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Send, Bell, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotifyModal({ isOpen, onClose }: NotifyModalProps) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const message = `🚀 *VIP LAUNCH WAITING LIST REGISTRATION*
----------------------------------------
*Name:* ${name || "Gamer"}
*Phone:* ${phone}
----------------------------------------
I want to get notified as soon as DPS Gaming Hub Korani opens and claim exclusive launch discounts!`;

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#030712]/80 backdrop-blur-xl"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10 w-full max-w-md bg-[#0B1220] border border-[#38BDF8]/40 rounded-3xl p-8 shadow-[0_0_50px_rgba(37,99,235,0.3)] space-y-6 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <>
                <div className="space-y-2 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/20 text-[#7DD3FC] text-xs font-bold uppercase tracking-wider border border-[#38BDF8]/30 mx-auto">
                    <Bell className="w-3.5 h-3.5 text-[#38BDF8]" />
                    Exclusive Launch Offers
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Join VIP Waiting List
                  </h3>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed">
                    Be among the first gamers to experience Kerala’s next-generation PS5 lounge in Korani between Attingal and Kazhakkoottam.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-[#38BDF8]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38BDF8]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-[#38BDF8]">
                      WhatsApp Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 Phone Number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#38BDF8]"
                    />
                  </div>

                  <MagneticButton variant="primary" size="md" type="submit" className="w-full">
                    <Send className="w-4 h-4 text-[#7DD3FC]" />
                    Get Launch Notification
                  </MagneticButton>
                </form>
              </>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mx-auto border border-[#22C55E]/40">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">You're on the VIP List!</h3>
                <p className="text-xs text-[#CBD5E1]">
                  Redirecting to WhatsApp to register your early access slot for DPS Gaming Hub Korani.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
