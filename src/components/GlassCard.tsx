"use client";

import { LucideIcon } from "lucide-react";

interface GlassCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function GlassCard({ icon: Icon, title, description }: GlassCardProps) {
  return (
    <div
      className="group relative p-8 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] 
        border border-white/[0.1] hover:border-white/30 
        transition-all duration-500 ease-out
        hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
    >
      <div className="mb-6">
        <Icon className="w-12 h-12 text-white/80 group-hover:text-white transition-colors" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
