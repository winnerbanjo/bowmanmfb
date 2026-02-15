import {
  Briefcase,
  Zap,
  FileText,
  TrendingUp,
  FileCheck,
  Banknote,
} from "lucide-react";
import { ServiceLayout } from "@/components/ServiceLayout";
import { KeyFeatures } from "@/components/KeyFeatures";
import { HowToOpen } from "@/components/HowToOpen";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Business Loans" },
];

const features = [
  {
    icon: Briefcase,
    title: "Tailored for your business",
    description:
      "Loan amounts and tenors designed around your cash flow and growth plans.",
  },
  {
    icon: Zap,
    title: "Quick disbursement",
    description:
      "From application to disbursement, we keep the process fast and transparent.",
  },
  {
    icon: TrendingUp,
    title: "Flexible repayment",
    description:
      "Repayment schedules that align with your business cycle and revenue.",
  },
  {
    icon: FileText,
    title: "Simple documentation",
    description:
      "Clear requirements and minimal paperwork. We guide you through each step.",
  },
];

const steps = [
  {
    icon: FileCheck,
    title: "Apply with your details",
    description:
      "Submit your business and loan requirements. We’ll review and get in touch.",
  },
  {
    icon: FileText,
    title: "Submit documents",
    description:
      "Provide the requested business and ID documents. We keep it minimal.",
  },
  {
    icon: Banknote,
    title: "Get disbursed",
    description:
      "Once approved, funds are sent to your Bowman account or designated account.",
  },
];

export default function BusinessLoansPage() {
  return (
    <ServiceLayout
      title="Business Loans"
      description="Fuel your business with financing that fits. Tailored amounts, flexible terms, and a straightforward process."
      breadcrumbs={breadcrumbs}
      ctaText="Apply for a Business Loan"
      ctaHref="#get-started"
    >
      <aside className="mb-12 rounded-2xl bg-white/40 backdrop-blur-md border border-[#003566]/10 shadow-xl shadow-blue-900/5 p-6 lg:float-right lg:ml-8 lg:max-w-xs">
        <h3 className="font-bold text-[#003566] text-sm uppercase tracking-wider mb-3">
          At a glance
        </h3>
        <ul className="space-y-2 text-sm text-[#003566]/90">
          <li>• Tailored amounts</li>
          <li>• Flexible repayment</li>
          <li>• Quick process</li>
        </ul>
      </aside>

      <KeyFeatures features={features} />
      <HowToOpen steps={steps} title="How to apply for a Business Loan" />
    </ServiceLayout>
  );
}
