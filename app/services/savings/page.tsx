import Image from "next/image";
import {
  Percent,
  Wallet,
  Smartphone,
  FileCheck,
  Banknote,
} from "lucide-react";
import { ServiceLayout } from "@/components/ServiceLayout";
import { KeyFeatures } from "@/components/KeyFeatures";
import { HowToOpen } from "@/components/HowToOpen";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Savings" },
];

const features = [
  {
    icon: Percent,
    title: "Competitive interest rates",
    description:
      "Earn more on your money with rates designed to help your savings grow over time.",
  },
  {
    icon: Wallet,
    title: "No monthly fees",
    description:
      "Keep what you save. No hidden charges or monthly maintenance fees on your account.",
  },
  {
    icon: Smartphone,
    title: "Mobile banking access",
    description:
      "Check balances, transfer funds, and track your savings from our app anytime, anywhere.",
  },
];

const steps = [
  {
    icon: FileCheck,
    title: "Choose your savings plan",
    description:
      "Pick the account type that fits your goals—regular savings or a targeted plan.",
  },
  {
    icon: Banknote,
    title: "Make your first deposit",
    description:
      "Open with an amount that works for you. No high minimum required.",
  },
  {
    icon: Wallet,
    title: "Start earning",
    description:
      "Your interest is applied as agreed. Monitor your growth in the app or online.",
  },
];

export default function SavingsPage() {
  return (
    <ServiceLayout
      title="Savings"
      description="Competitive interest rates, no monthly fees, and full mobile banking access. Start building your future with Bowman."
      breadcrumbs={breadcrumbs}
      ctaText="Open a Savings Account"
      ctaHref="#get-started"
      heroVariant="dark"
    >
      <KeyFeatures title="Key Features" features={features} />

      {/* Financial Excitement: accent image */}
      <section className="mb-20 flex flex-col sm:flex-row gap-8 items-center justify-between">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003566] tracking-tight mb-4">
            Financial Excitement
          </h2>
          <p className="text-[#003566]/90 font-medium max-w-xl">
            Join thousands of savers who are growing their money with Bowman.
            Simple accounts, clear terms, and support when you need it.
          </p>
        </div>
        <div className="shrink-0 w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-[#003566]/10 shadow-xl shadow-blue-900/5 bg-white/40 backdrop-blur-sm">
          <Image
            src="/images/hero-woman.jpg"
            alt="Financial excitement with Bowman Savings"
            width={256}
            height={256}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </section>

      <HowToOpen steps={steps} title="How to open a Savings Account" />
    </ServiceLayout>
  );
}
