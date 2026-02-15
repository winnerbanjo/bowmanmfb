"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "./FadeUp";

export function GetStarted() {
  return (
    <section
      id="get-started"
      className="relative z-[1] py-24 sm:py-32"
      aria-labelledby="get-started-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="glass-card mx-auto max-w-3xl text-center">
            <h2
              id="get-started-heading"
              className="headline text-2xl sm:text-3xl md:text-4xl"
            >
              Ready to get started?
            </h2>
            <p className="mt-4 text-[#003566]/90 font-medium">
              Open an account in minutes. We&apos;re here to help you every step
              of the way.
            </p>
            <Link href="#" className="btn-primary mt-8 inline-flex">
              Open an Account
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
