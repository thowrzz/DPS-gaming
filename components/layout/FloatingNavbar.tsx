"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Gamepad2, ChevronRight } from "lucide-react";
import { MAIN_NAV_ITEMS } from "@/constants/navigation";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function FloatingNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-3 group bg-[#030712]/80 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-300 shadow-lg"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo-circle.jpg"
              alt="DPS Gaming Hub Logo"
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-[#38BDF8] transition-colors">
              DPS <span className="text-[#38BDF8] font-semibold">GAMING HUB</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#64748B] font-medium -mt-0.5">
              Korani • Kerala
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Glass Navigation Pill */}
        <nav className="pointer-events-auto hidden lg:flex items-center gap-1 bg-[#0B1220]/80 backdrop-blur-2xl border border-white/10 px-4 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-xs font-medium transition-colors duration-200 rounded-full ${
                  isActive ? "text-white font-semibold" : "text-[#CBD5E1] hover:text-white"
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-bold uppercase bg-[#2563EB] text-white rounded-full">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/15 -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="pointer-events-auto hidden md:flex items-center gap-3">
          <Link href="/book">
            <MagneticButton variant="primary" size="sm">
              <Gamepad2 className="w-4 h-4 text-[#7DD3FC]" />
              Book Gaming
            </MagneticButton>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="pointer-events-auto lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#0B1220]/80 backdrop-blur-xl border border-white/10 text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto lg:hidden absolute top-20 left-4 right-4 bg-[#0B1220]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden z-50"
          >
            <div className="flex flex-col gap-2">
              {MAIN_NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-2xl text-sm font-medium transition-colors ${
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

              <div className="pt-4 border-t border-white/10 mt-2">
                <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                  <MagneticButton variant="primary" className="w-full">
                    <Gamepad2 className="w-4 h-4" />
                    Reserve PS5 Station
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
