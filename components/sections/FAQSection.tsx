"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, HelpCircle } from "lucide-react";
import { FAQS_LIST } from "@/constants/faqs";
import { GlassCard } from "@/components/ui/GlassCard";
import { BadgeTag } from "@/components/ui/BadgeTag";

export function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(FAQS_LIST[0].id);

  const filteredFaqs = FAQS_LIST.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative py-28 bg-[#030712] border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        <div className="text-center space-y-4">
          <BadgeTag variant="glow" icon={<HelpCircle className="w-3.5 h-3.5 text-[#38BDF8]" />}>
            Everything You Need to Know
          </BadgeTag>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked <span className="text-gradient-blue">Questions</span>
          </h2>
          <p className="text-[#CBD5E1] text-base sm:text-lg">
            Got questions about location, PS5 setups, rates or bookings? Find quick answers below.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
              <input
                type="text"
                placeholder="Search location, games, pricing..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0B1220] border border-white/10 rounded-full pl-12 pr-6 py-3.5 text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#38BDF8]/50 transition-colors shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <GlassCard
                key={faq.id}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="cursor-pointer transition-all duration-300 p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#38BDF8] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#2563EB]/20 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 mt-4 border-t border-white/10 text-sm text-[#CBD5E1] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-[#94A3B8] text-sm">
              No matching questions found. Feel free to contact our lounge desk directly on WhatsApp.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
