import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const services = [
  { label: "Current Account", href: "#" },
  { label: "Savings", href: "#" },
  { label: "Business Loans", href: "#" },
  { label: "Personal Loans", href: "#" },
  { label: "Fixed Deposit", href: "#" },
];

const company = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Press", href: "#" },
];

const resources = [
  { label: "Blog", href: "#" },
  { label: "Help Center", href: "#" },
  { label: "Contact", href: "#" },
];

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socialIcons = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Instagram, href: "#" },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-white/40 hover:text-white/70 transition-colors text-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <FooterColumn title="Services" links={services} />
          <FooterColumn title="Company" links={company} />
          <FooterColumn title="Resources" links={resources} />
          <FooterColumn title="Legal" links={legal} />
        </div>

        {/* Contact info & social */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8 border-b border-white/10">
          <p className="text-white/40 text-sm max-w-md">
            42, Montgomery Road, Yaba, Lagos
          </p>
          <div className="flex gap-6">
            {socialIcons.map(({ Icon, href }) => (
              <Link
                key={href}
                href={href}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Social link"
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="text-white/30 text-sm mt-8 text-center md:text-left">
          © {new Date().getFullYear()} Bowman. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
