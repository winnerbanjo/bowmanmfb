import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumb({
  items,
  light = false,
}: {
  items: BreadcrumbItem[];
  light?: boolean;
}) {
  const linkClass = light
    ? "text-white/80 hover:text-white transition-colors"
    : "text-[#003566]/80 hover:text-[#003566] transition-colors";
  const currentClass = light ? "font-medium text-white" : "font-medium text-[#003566]";
  const chevronClass = light ? "text-white/50" : "text-[#003566]/50";
  return (
    <nav aria-label="Breadcrumb" className={light ? "mb-0" : "mb-8"}>
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && (
              <ChevronRight className={`h-4 w-4 ${chevronClass}`} aria-hidden />
            )}
            {item.href ? (
              <Link href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ) : (
              <span className={currentClass}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
