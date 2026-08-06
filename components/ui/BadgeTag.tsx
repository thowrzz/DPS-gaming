import React from "react";

interface BadgeTagProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "blue" | "glow" | "outline";
  className?: string;
}

export function BadgeTag({
  children,
  icon,
  variant = "blue",
  className = "",
}: BadgeTagProps) {
  const variants = {
    blue: "bg-[#2563EB]/15 text-[#7DD3FC] border-[#38BDF8]/30",
    glow: "bg-gradient-to-r from-[#2563EB]/20 to-[#38BDF8]/20 text-white border-[#38BDF8]/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]",
    outline: "bg-white/5 text-[#CBD5E1] border-white/10",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full border backdrop-blur-md transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{icon}</span>}
      {children}
    </span>
  );
}
