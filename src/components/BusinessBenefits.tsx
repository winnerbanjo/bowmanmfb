import { Building2, Users, CreditCard } from "lucide-react";

type Benefit = {
  icon: typeof Building2;
  title: string;
  description: string;
};

export function BusinessBenefits({
  title = "Business Benefits",
  subtitle,
  benefits,
}: {
  title?: string;
  subtitle?: string;
  benefits: Benefit[];
}) {
  return (
    <section className="mb-20" aria-labelledby="business-benefits-heading">
      <h2
        id="business-benefits-heading"
        className="text-2xl sm:text-3xl font-bold text-[#003566] tracking-tight mb-2"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#003566]/90 font-medium mb-8 max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map(({ icon: Icon, title: benefitTitle, description }) => (
          <article
            key={benefitTitle}
            className="rounded-2xl bg-white/40 backdrop-blur-md border border-[#003566]/10 shadow-xl shadow-blue-900/5 p-6 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="rounded-xl bg-[#003566]/10 p-3 w-fit mb-4">
              <Icon className="h-6 w-6 text-[#003566]" aria-hidden />
            </div>
            <h3 className="text-lg font-bold text-[#003566]">{benefitTitle}</h3>
            <p className="mt-2 text-[#003566]/90 text-sm">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
