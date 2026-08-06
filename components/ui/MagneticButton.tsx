"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function MagneticButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: MagneticButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 shadow-sm cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/50 active:scale-95";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-2",
    md: "px-6 py-3 text-sm gap-2.5",
    lg: "px-8 py-4 text-base gap-3 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#3B82F6] hover:to-[#2563EB] text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] hover:shadow-[0_15px_35px_rgba(56,189,248,0.45)] border border-[#38BDF8]/30",
    secondary:
      "bg-[#0B1220] hover:bg-[#111827] text-white border border-white/10 hover:border-white/25 shadow-md",
    outline:
      "bg-transparent hover:bg-white/5 text-[#CBD5E1] hover:text-white border border-white/15 hover:border-white/30",
    whatsapp:
      "bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#4ADE80] hover:to-[#22C55E] text-white shadow-[0_10px_25px_rgba(34,197,94,0.3)] border border-[#4ADE80]/30",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
