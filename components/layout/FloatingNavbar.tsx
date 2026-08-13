"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Gamepad2, ChevronRight, ExternalLink } from "lucide-react";
import { MAIN_NAV_ITEMS } from "@/constants/navigation";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function FloatingNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#030712]/90 backdrop-blur-xl border-b border-white/10 py-3 px-4 sm:px-6 z-40 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Parent Company Tag */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-3 group px-2 py-1 rounded-xl transition-all duration-300"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#2563EB]/40 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <Image
                src="/logo-circle.jpg"
                alt="DPS Gaming Hub Logo"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tight text-white group-hover:text-[#38BDF8] transition-colors">
                DPS <span className="text-[#38BDF8] font-bold">GAMING HUB</span>
              </span>
              <span className="text-[10px] text-[#94A3B8] font-medium -mt-0.5">
                Korani • Trivandrum
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-[#0B1220]/80 border border-white/10 px-3 py-1.5 rounded-full shadow-inner">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-semibold transition-colors duration-200 rounded-full ${
                  isActive ? "text-white font-bold" : "text-[#CBD5E1] hover:text-white"
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="ml-1 px-1.5 py-0.5 text-[9px] font-extrabold uppercase bg-[#2563EB] text-white rounded-full">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[#2563EB]/30 rounded-full border border-[#38BDF8]/40 -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Action & Parent Backlink */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://digitalproductsolutions.in"
            target="_blank"
            rel="noopener dofollow"
            className="text-[11px] text-[#94A3B8] hover:text-[#7DD3FC] transition-colors font-medium flex items-center gap-1"
            title="Digital Product Solutions Parent Website"
          >
            <span>DPS Parent</span>
            <ExternalLink className="w-3 h-3 text-[#38BDF8]" />
          </a>
          <Link href="/rentals">
            <MagneticButton variant="primary" size="sm">
              <Gamepad2 className="w-3.5 h-3.5 text-[#7DD3FC]" />
              Rent PS5 &amp; TV
            </MagneticButton>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-[#0B1220] border border-white/10 text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#0B1220]/98 border-b border-white/10 p-5 shadow-2xl z-50"
          >
            <div className="flex flex-col gap-2 max-w-md mx-auto">
              {MAIN_NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-2.5 rounded-xl text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-[#2563EB]/20 text-white border border-[#38BDF8]/30"
                      : "text-[#CBD5E1] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge ? (
                    <span className="px-2 py-0.5 text-[10px] bg-[#2563EB] text-white font-bold rounded-full">
                      {item.badge}
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-[#64748B]" />
                  )}
                </Link>
              ))}

              <div className="pt-3 border-t border-white/10 mt-2 space-y-2">
                <Link href="/rentals" onClick={() => setMobileMenuOpen(false)}>
                  <MagneticButton variant="primary" className="w-full justify-center">
                    <Gamepad2 className="w-4 h-4" />
                    Rent PS5 &amp; 43&quot; QLED TV
                  </MagneticButton>
                </Link>
                <a
                  href="https://digitalproductsolutions.in"
                  target="_blank"
                  rel="noopener dofollow"
                  className="block text-center text-xs text-[#7DD3FC] hover:underline pt-1"
                >
                  Visit Digital Product Solutions (Parent Company) →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
