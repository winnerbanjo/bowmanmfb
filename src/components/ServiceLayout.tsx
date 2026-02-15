import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "./Breadcrumb";
import { ArrowRight } from "lucide-react";

type BreadcrumbItem = { label: string; href?: string };

type ServiceLayoutProps = {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  children: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
  heroVariant?: "default" | "dark";
};

export function ServiceLayout({
  title,
  description,
  breadcrumbs,
  children,
  ctaText = "Apply Now",
  ctaHref = "#apply",
  heroVariant = "default",
}: ServiceLayoutProps) {
  const isDarkHero = heroVariant === "dark";
  return (
    <main className="min-h-screen">
      <Navbar />
      {isDarkHero ? (
        <header className="bg-[#003566] text-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Breadcrumb items={breadcrumbs} light />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mt-6">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-lg text-white/90 font-medium max-w-2xl">
                {description}
              </p>
            )}
          </div>
        </header>
      ) : null}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {!isDarkHero && <Breadcrumb items={breadcrumbs} />}
        {!isDarkHero && (
          <header className="mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-[#003566]">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-lg text-[#003566]/90 font-medium max-w-2xl">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
        <section className="clear-both mt-20 py-16 text-center rounded-2xl bg-blue-50/30 border border-[#003566]/10 shadow-lg shadow-blue-900/5">
          <h2 className="text-2xl font-bold text-[#003566] mb-4">
            Ready to get started?
          </h2>
          <p className="text-[#003566]/90 font-medium mb-8 max-w-xl mx-auto">
            Open your account or apply in minutes. We&apos;re here to help.
          </p>
          <Link
            href={ctaHref}
            className="btn-primary btn-glow inline-flex items-center gap-2"
          >
            {ctaText}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </section>
      </div>
      <Footer />
    </main>
  );
}
