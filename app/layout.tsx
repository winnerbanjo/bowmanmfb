import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bowman Microfinance Bank | Empower Your Financial Journey",
  description:
    "Innovation and stability. Banking that works for you—current accounts, savings, business and personal loans, fixed deposits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased bg-[#FFFFFF] text-[#003566]">
        {children}
      </body>
    </html>
  );
}
