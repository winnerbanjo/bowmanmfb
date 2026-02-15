"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SLIDES = [
  {
    src: "/images/vertical-shot-man-wearing-turtleneck-looking-his-phone.jpg",
    alt: "Man using phone",
  },
  {
    src: "/images/cheerful-excited-woman-reading-very-good-news-her-mobile-phone.jpg",
    alt: "Woman reading news on phone",
  },
];
const ROTATE_INTERVAL_MS = 4000;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col justify-center">
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.05] text-[#003566]"
            >
              Empower Your Financial Journey.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-6 max-w-lg text-lg text-[#003566]/90 font-medium"
            >
              Banking built for today—secure, simple, and designed around you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="#get-started"
                className="btn-primary btn-glow inline-flex items-center gap-2"
              >
                Open an Account
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/services/current-account"
                className="btn-secondary btn-glow-outline inline-flex items-center gap-2"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-white/40 backdrop-blur-md border border-[#003566]/10 shadow-2xl shadow-blue-900/10"
            >
              {SLIDES.map((slide, i) => (
                <motion.div
                  key={slide.src}
                  initial={false}
                  animate={{ opacity: index === i ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 28rem"
                    priority={i === 0}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
