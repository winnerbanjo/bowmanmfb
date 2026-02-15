import {
  UserCircle,
  Eye,
  Clock,
  Shield,
  FileCheck,
  Banknote,
} from "lucide-react";
import { ServiceLayout } from "@/components/ServiceLayout";
import { KeyFeatures } from "@/components/KeyFeatures";
import { HowToOpen } from "@/components/HowToOpen";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Personal Loans" },
];

const features = [
  {
    icon: UserCircle,
    title: "Personalised for you",
    description:
      "Loan options that match your needs and repayment capacity. No one-size-fits-all.",
  },
  {
    icon: Eye,
    title: "Transparent terms",
    description:
      "Clear interest rates and fees from the start. No hidden charges or surprises.",
  },
  {
    icon: Clock,
    title: "Quick decisions",
    description:
      "Fast assessment and feedback. Get an answer so you can plan with confidence.",
  },
  {
    icon: Shield,
    title: "Secure process",
    description:
      "Your data is protected. We’re a licensed institution you can trust.",
  },
];

const steps = [
  {
    icon: FileCheck,
    title: "Apply online or in-branch",
    description:
      "Share your details and how much you need. Our form is simple and quick.",
  },
  {
    icon: Banknote,
    title: "Get assessed",
    description:
      "We review your application and may request a few documents for verification.",
  },
  {
    icon: UserCircle,
    title: "Receive your funds",
    description:
      "Once approved, funds are disbursed to your Bowman account. Use them when you need.",
  },
];

export default function PersonalLoansPage() {
  return (
    <ServiceLayout
      title="Personal Loans"
      description="Quick, transparent personal loans when you need them. Clear terms, fast decisions, and flexible repayment."
      breadcrumbs={breadcrumbs}
      ctaText="Apply for a Personal Loan"
      ctaHref="#get-started"
    >
      <aside className="mb-12 rounded-2xl bg-white/40 backdrop-blur-md border border-[#003566]/10 shadow-xl shadow-blue-900/5 p-6 lg:float-right lg:ml-8 lg:max-w-xs">
        <h3 className="font-bold text-[#003566] text-sm uppercase tracking-wider mb-3">
          At a glance
        </h3>
        <ul className="space-y-2 text-sm text-[#003566]/90">
          <li>• Transparent rates</li>
          <li>• Fast assessment</li>
          <li>• Flexible repayment</li>
        </ul>
      </aside>

      <KeyFeatures features={features} />
      <HowToOpen steps={steps} title="How to apply for a Personal Loan" />
    </ServiceLayout>
  );
}
