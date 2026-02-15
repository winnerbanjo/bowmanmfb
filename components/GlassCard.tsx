"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface GlassCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const GlassCard = ({
  icon: Icon,
  title,
  description,
}: GlassCardProps) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className="group relative p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
  >
    <div className="mb-6">
      <Icon
        className="w-12 h-12 text-white/80 group-hover:text-white transition-colors"
        strokeWidth={1.5}
      />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/60 text-sm leading-relaxed">{description}</p>
  </motion.div>
);
