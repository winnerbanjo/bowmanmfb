import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bowman | Empower Your Financial Journey",
  description: "Bowman Microfinance Bank - Super convenient banking, innovative solutions, and customer-centric services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#000814] text-white mesh-gradient min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
