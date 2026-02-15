"use client";

import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-bowman", label: "Why Bowman" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-50 
        backdrop-blur-xl bg-blue-950/20 border border-white/10 rounded-full px-8 py-4 
        flex items-center justify-between"
    >
      {/* Logo */}
      <Link href="/" className="text-white font-bold text-xl tracking-tight">
        BOWMAN
      </Link>

      {/* Center nav links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Get Started button */}
      <Link
        href="#get-started"
        className="px-6 py-2.5 rounded-full text-sm font-semibold text-white 
          bg-[#003566] shadow-[0_0_20px_rgba(0,53,102,0.4)]
          hover:bg-[#004074] hover:shadow-[0_0_25px_rgba(0,53,102,0.5)]
          transition-all duration-300"
      >
        Get Started
      </Link>
    </nav>
  );
}
