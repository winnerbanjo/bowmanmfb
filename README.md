# Bowman Microfinance Bank — Landing Page

High-end, high-performance landing page with **pitch black dark mode**, **glassmorphism** UI, and Apple-inspired aesthetics.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS**
- **Lucide React** (icons)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Design

- **Background:** `#000000`
- **Glass:** `backdrop-filter: blur(20px)`, `bg-white/5`, `border-white/10`
- **Typography:** Inter, headline gradient `from-white` → `to-white/50`
- **Interactions:** `hover:scale-[1.02]`, smooth transitions

## Sections

1. **Sticky nav** — Glass pill: About Us, Services, Accounts, Why Bowman, Get Started
2. **Hero** — “Empower Your Financial Journey” + CTAs
3. **Services** — 5 glass cards (Current Account, Savings, Business Loans, Personal Loans, Fixed Deposit)
4. **The Bowman Edge** — 3 columns (Convenient Banking, Innovative Solutions, Customer-Centricity)
5. **Get Started** — CTA card
6. **Footer** — 4 columns + Lagos contact details
