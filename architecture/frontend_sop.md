# SOP: Frontend Architecture & Component Hierarchy

## 1. Objective
Menentukan struktur komponen React/TypeScript untuk landing page MCC dengan performa tinggi, modular, dan zero console errors.

## 2. Directory Structure
```
src/
├── assets/         # Real images from Portfolio & Desain
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── PartnerBar.tsx
│   ├── ProblemSection.tsx
│   ├── GuideSection.tsx
│   ├── PlanSection.tsx
│   ├── CTASection.tsx
│   ├── TransformationSection.tsx
│   └── Footer.tsx
├── data/
│   ├── events.json
│   ├── metrics.json
│   └── leads.json
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 3. Responsive Breakpoints
- Mobile: `< 640px` (Single column, stacked metrics, drawer/hamburger nav)
- Tablet: `640px - 1024px` (2 columns grid for cards)
- Desktop: `> 1024px` (Full 1440px layout, 3 columns grid for cards, 4 columns footer)

## 4. Component Rules
- Setiap komponen adalah functional component dengan TypeScript typing.
- Menggunakan Lucide icons untuk ikon vektor (Play, Check, ArrowRight, MapPin, etc.).
- Form input terhubung ke handler validasi (Telegram regex / Email regex) dengan feedback visual.
