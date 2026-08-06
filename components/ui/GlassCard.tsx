"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassCard({
  children,
  className = "",
  glow = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className={`glass-card relative rounded-3xl p-6 sm:p-8 overflow-hidden backdrop-blur-xl bg-[#111827]/70 border border-white/10 ${
        glow ? "hover:border-[#38BDF8]/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]" : ""
      } ${className}`}
      {...props}
    >
      {glow && (
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
}
