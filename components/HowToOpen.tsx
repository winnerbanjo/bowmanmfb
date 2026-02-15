import { type LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function HowToOpen({
  title = "How to Open",
  steps,
}: {
  title?: string;
  steps: Step[];
}) {
  return (
    <section className="mb-20" aria-labelledby="how-to-heading">
      <h2
        id="how-to-heading"
        className="text-2xl sm:text-3xl font-bold text-[#003566] tracking-tight mb-8"
      >
        {title}
      </h2>
      <ol className="space-y-6">
        {steps.map(({ icon: Icon, title: stepTitle, description }, i) => (
          <li
            key={i}
            className="flex gap-4 rounded-2xl bg-blue-50/30 border border-[#003566]/10 shadow-lg shadow-blue-900/5 p-6"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#003566] text-white font-bold text-lg">
              {i + 1}
            </span>
            <div className="flex gap-4 flex-1">
              <div className="rounded-lg bg-[#003566]/10 p-2 h-fit">
                <Icon className="h-5 w-5 text-[#003566]" aria-hidden />
              </div>
              <div>
                <h3 className="font-bold text-[#003566]">{stepTitle}</h3>
                <p className="mt-1 text-[#003566]/90 text-sm">{description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
