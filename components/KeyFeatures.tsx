import { type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function KeyFeatures({
  title = "Key Features",
  features,
}: {
  title?: string;
  features: Feature[];
}) {
  return (
    <section className="mb-20" aria-labelledby="key-features-heading">
      <h2
        id="key-features-heading"
        className="text-2xl sm:text-3xl font-bold text-[#003566] tracking-tight mb-8"
      >
        {title}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title: featureTitle, description }) => (
          <article
            key={featureTitle}
            className="rounded-2xl bg-white/40 backdrop-blur-md border border-[#003566]/10 shadow-xl shadow-blue-900/5 p-6 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="rounded-xl bg-[#003566]/10 p-3 w-fit mb-4">
              <Icon className="h-6 w-6 text-[#003566]" aria-hidden />
            </div>
            <h3 className="text-lg font-bold text-[#003566]">{featureTitle}</h3>
            <p className="mt-2 text-[#003566]/90 text-sm">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
