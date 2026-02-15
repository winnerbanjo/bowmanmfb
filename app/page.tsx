import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { BowmanEdge } from "@/components/BowmanEdge";
import { GetStarted } from "@/components/GetStarted";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BowmanEdge />
      <GetStarted />
      <Footer />
    </main>
  );
}
