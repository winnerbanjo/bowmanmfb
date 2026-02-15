"use client";

import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

type FadeUpProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof typeof motion;
  delayIndex?: number;
};

export function FadeUp({
  children,
  className = "",
  as = "div",
  delayIndex = 0,
}: FadeUpProps) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={defaultVariants}
      custom={delayIndex}
      className={className}
    >
      {children}
    </Component>
  );
}
