"use client";

import { FadeUp } from "./FadeUp";

export function About() {
  return (
    <section
      id="about"
      className="relative z-[1] py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="about-heading"
              className="headline text-2xl sm:text-3xl md:text-4xl"
            >
              About Bowman
            </h2>
            <p className="mt-6 text-lg text-[#003566]/90 font-medium">
              We are a licensed microfinance bank committed to empowering
              individuals and businesses with accessible, transparent financial
              solutions. Innovation and stability guide everything we do.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
