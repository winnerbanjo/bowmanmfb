"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wallet,
  PiggyBank,
  Briefcase,
  UserCircle,
  Landmark,
} from "lucide-react";
import { FadeUp } from "./FadeUp";

const services = [
  {
    icon: Wallet,
    title: "Current Account",
    description:
      "Everyday banking with seamless transactions and instant access.",
    href: "/services/current-account",
  },
  {
    icon: PiggyBank,
    title: "Savings",
    description: "Grow your money with competitive rates and flexible options.",
    href: "/services/savings",
  },
  {
    icon: Briefcase,
    title: "Business Loans",
    description: "Fuel your business with tailored financing solutions.",
    href: "/services/business-loans",
  },
  {
    icon: UserCircle,
    title: "Personal Loans",
    description: "Quick, transparent personal loans when you need them.",
    href: "/services/personal-loans",
  },
  {
    icon: Landmark,
    title: "Fixed Deposit",
    description: "Lock in attractive returns with secure fixed deposits.",
    href: "/#services",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.45, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export function Services() {
  return (
    <section
      id="services"
      className="relative z-[1] py-24 sm:py-32 lg:py-40"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <h2
            id="services-heading"
            className="headline text-center text-3xl sm:text-4xl md:text-5xl"
          >
            Our Services
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-[#003566]/90 font-medium">
            Everything you need to manage, grow, and protect your finances.
          </p>
        </FadeUp>
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{}}
        >
          {services.map(({ icon: Icon, title, description, href }, i) => (
            <motion.article
              key={title}
              variants={cardVariants}
              custom={i}
              className="rounded-2xl bg-blue-50/30 border border-[#003566]/10 shadow-lg shadow-blue-900/5 p-6 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-2"
            >
              <Link href={href} className="w-full flex flex-col h-full group">
                <div className="flex items-start justify-between gap-3 w-full">
                  <div className="rounded-xl bg-[#003566]/10 p-3 shrink-0">
                    <Icon className="h-6 w-6 text-[#003566]" aria-hidden />
                  </div>
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#003566]/5 shrink-0" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#003566] group-hover:underline">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-[#003566]/90">{description}</p>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
