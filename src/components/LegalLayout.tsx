import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type LegalLayoutProps = {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  children: ReactNode;
};

export function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <main className="min-h-screen">
      <Navbar />

      <header className="bg-[#003566] text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16 lg:py-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-white/75"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden />
            <span className="text-white">{title}</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#F7C948]">
              Legal
            </p>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-white/85">{subtitle}</p>
            {lastUpdated ? (
              <p className="mt-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85">
                Last updated: {lastUpdated}
              </p>
            ) : null}
          </div>
        </div>
      </header>

      <section className="relative z-[1]">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:py-16">
          <div className="space-y-8">{children}</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
