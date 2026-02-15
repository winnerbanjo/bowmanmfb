import { GlassCard } from "@/components/GlassCard";
import {
  Wallet,
  Smartphone,
  Shield,
  ArrowRightCircle,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Wallet,
    title: "Savings & Loans",
    description: "Flexible savings plans and quick loan disbursement to help you achieve your financial goals.",
  },
  {
    icon: Smartphone,
    title: "Digital Banking",
    description: "Bank anywhere, anytime with our mobile app. Transfer, pay bills, and manage your accounts on the go.",
  },
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Your money is protected with industry-leading security. Licensed and regulated for your peace of mind.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Soft blue radial gradient - light source behind the glass */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(0, 29, 61, 0.6) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-b from-white via-white to-blue-400/50 bg-clip-text text-transparent">
              Empower Your Financial Journey
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Bowman Microfinance Bank — super convenient banking, innovative
            solutions, and customer-centric services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#get-started"
              className="btn-glass-primary inline-flex items-center justify-center gap-2"
            >
              Open Account
              <ArrowRightCircle className="w-5 h-5" />
            </Link>
            <Link
              href="#services"
              className="btn-glass-primary inline-flex items-center justify-center gap-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Our Services
          </h2>
          <p className="text-white/60 text-center mb-16 max-w-2xl mx-auto">
            Tailored financial solutions designed for your success.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <GlassCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="#get-started"
              className="btn-glass-primary inline-flex items-center justify-center gap-2"
            >
              Learn More
              <ArrowRightCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
