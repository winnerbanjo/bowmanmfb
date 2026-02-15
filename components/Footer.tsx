"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const services = [
  { label: "Savings Account", href: "/services/savings" },
  { label: "Current Account", href: "/services/current-account" },
  { label: "Personal Loan", href: "/services/personal-loans" },
  { label: "Business Loan", href: "/services/business-loans" },
];

const company = [
  { label: "About Us", href: "/#about" },
  { label: "Careers", href: "#" },
  { label: "Press", href: "#" },
  { label: "News", href: "#" },
];

const contact = {
  address: "42, Montgomery Road, Yaba, Lagos",
  email: "info@bowmanmfb.com.ng",
  phones: ["+234 810 687 4683", "+234 814 081 8189"],
};

const social = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const linkClass =
  "text-white/70 hover:text-white transition-colors text-sm";

export function Footer() {
  return (
    <footer className="relative z-[1] bg-[#003566] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <BrandLogo variant="light" className="inline-flex" />
            <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-xs">
              Empowering Your Financial Journey.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/70" aria-hidden />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-white/70" aria-hidden />
                <a href={`mailto:${contact.email}`} className={linkClass}>
                  {contact.email}
                </a>
              </li>
              {contact.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-white/70" aria-hidden />
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className={linkClass}
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar: divider, copyright left, social right */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/70 order-2 sm:order-1">
            &copy; 2026 Bowman Microfinance Bank. All rights reserved.
          </p>
          <div className="flex items-center gap-4 order-1 sm:order-2">
            {social.map(({ icon: Icon, href: socialHref, label: socialLabel }) => (
              <a
                key={socialLabel}
                href={socialHref}
                aria-label={socialLabel}
                className="text-white/70 hover:text-white transition-colors p-1"
              >
                <Icon className="h-5 w-5" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
