import {
  DoorOpen,
  Wallet,
  Sliders,
  Building2,
  Users,
  CreditCard,
  FileCheck,
} from "lucide-react";
import Image from "next/image";
import { ServiceLayout } from "@/components/ServiceLayout";
import { KeyFeatures } from "@/components/KeyFeatures";
import { BusinessBenefits } from "@/components/BusinessBenefits";
import { HowToOpen } from "@/components/HowToOpen";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Current Account" },
];

const features = [
  {
    icon: DoorOpen,
    title: "Accessible Opening",
    description:
      "Open your account quickly with minimal paperwork. We keep the process simple so you can start banking without delay.",
  },
  {
    icon: Wallet,
    title: "Low Minimum Balance",
    description:
      "Get started without a large deposit. We keep balance requirements low so your business can grow from day one.",
  },
  {
    icon: Sliders,
    title: "Flexible Limits",
    description:
      "Transaction limits that scale with your needs. Adjust as your business grows.",
  },
];

const businessBenefits = [
  {
    icon: Building2,
    title: "Vendor payments",
    description:
      "Pay suppliers and vendors seamlessly. Set up standing orders and schedule payments to save time.",
  },
  {
    icon: Users,
    title: "Payroll services",
    description:
      "Run payroll with ease. Pay staff on time and keep records in one place.",
  },
  {
    icon: CreditCard,
    title: "Business spending",
    description:
      "Track and manage business expenses. Get clarity on where your money goes.",
  },
];

const steps = [
  {
    icon: FileCheck,
    title: "Submit your details",
    description:
      "Fill our simple form with your business and ID details. No long paperwork.",
  },
  {
    icon: Building2,
    title: "Verify your business",
    description:
      "We verify your business registration and address. This usually takes 1–2 working days.",
  },
  {
    icon: Wallet,
    title: "Fund and start banking",
    description:
      "Make your opening deposit and start using your account immediately.",
  },
];

export default function CurrentAccountPage() {
  return (
    <ServiceLayout
      title="Current Account"
      description="Startup-focused business banking with vendor and payroll services, and a low minimum balance. Built for today’s entrepreneurs."
      breadcrumbs={breadcrumbs}
      ctaText="Open a Current Account"
      ctaHref="#get-started"
      heroVariant="dark"
    >
      <KeyFeatures
        title="Key Features"
        features={features}
      />
      <BusinessBenefits
        title="Business Benefits"
        subtitle="For business owners: manage vendors and payroll from one place."
        benefits={businessBenefits}
      />
      <HowToOpen steps={steps} title="How to open a Current Account" />
    </ServiceLayout>
  );
}
