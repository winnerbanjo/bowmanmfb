"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#get-started", label: "Accounts" },
  { href: "#why-bowman", label: "Why Bowman" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/70 backdrop-blur-md">
      <nav
        className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <BrandLogo className="shrink-0" />

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#003566] transition-all duration-300 hover:scale-[1.02] hover:bg-[#003566]/5"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="#get-started"
            className="btn-primary flex items-center gap-2 text-sm"
          >
            Get Started
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#003566] hover:bg-[#003566]/5 md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-md transition-all duration-300 ease-out md:hidden ${
          mobileOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <ul className="flex flex-col px-4 py-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-[#003566] hover:bg-[#003566]/5"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="mt-2 border-t border-gray-100 pt-2">
            <Link
              href="#get-started"
              onClick={closeMenu}
              className="btn-primary flex w-full items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
