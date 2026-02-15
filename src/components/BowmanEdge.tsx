"use client";

import { motion } from "framer-motion";
import { Zap, Lightbulb, Heart } from "lucide-react";
import { FadeUp } from "./FadeUp";

const edges = [
  {
    icon: Zap,
    title: "Super Convenient Banking",
    description:
      "Bank from anywhere with our digital channels. Fast, secure, and always available when you need it.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description:
      "We combine technology with trust to deliver products that fit your life and your goals.",
  },
  {
    icon: Heart,
    title: "Customer-Centricity",
    description:
      "You're at the center of everything we do. We listen, adapt, and put your success first.",
  },
];

export function BowmanEdge() {
  return (
    <section
      id="why-bowman"
      className="relative z-[1] py-24 sm:py-32 lg:py-40"
      aria-labelledby="edge-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <h2
            id="edge-heading"
            className="headline text-center text-3xl sm:text-4xl md:text-5xl"
          >
            The Bowman Edge
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-[#003566]/90 font-medium">
            Why thousands trust Bowman for their financial journey.
          </p>
        </FadeUp>
        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
        >
          {edges.map(({ icon: Icon, title, description }, i) => (
            <motion.article
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: [0.25, 0.4, 0.25, 1] },
                },
              }}
              className="rounded-2xl bg-blue-50/30 border border-[#003566]/10 shadow-lg shadow-blue-900/5 p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
            >
              <div className="rounded-2xl bg-[#003566]/10 p-4">
                <Icon className="h-10 w-10 text-[#003566]" aria-hidden />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#003566]">
                {title}
              </h3>
              <p className="mt-3 text-[#003566]/90">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
