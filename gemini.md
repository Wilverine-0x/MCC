# Supreme Project Law: Medan Crypto Community (MCC) Web Platform
<!-- Environment: Google Antigravity | Protocol: B.L.A.S.T. v2.0 -->

## 1. Project Invariants & North Star
- **North Star**: Membangun landing page web resmi Medan Crypto Community (MCC) berstandar produksi (*pixel-perfect* sesuai desain FigCraft `MCC_Homepage_Design.figcraft`, StoryBrand 2.0 framework, mobile-responsive, anti-AI-slop, dan performa tinggi).
- **Core Purpose**: Wadah edukasi Web3 gratis, pusat info kegiatan olahraga (padel & badminton), showcase event offline bertaraf nasional/internasional, dan pintu masuk bagi komunitas lokal serta partner institusi/protokol global.

---

## 2. JSON Data Schemas (Locked Contracts)

### A. Lead Registration / Join Community Schema (`leads.json`)
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "CommunityLead",
  "type": "object",
  "required": ["id", "contact_handle", "type", "created_at"],
  "properties": {
    "id": { "type": "string", "format": "uuid" },
    "contact_handle": { "type": "string", "description": "Telegram handle (@user) or valid email address" },
    "type": { "type": "string", "enum": ["telegram", "email"] },
    "source_section": { "type": "string", "enum": ["hero_input", "direct_cta", "footer"] },
    "created_at": { "type": "string", "format": "date-time" },
    "ip_hash": { "type": "string" },
    "status": { "type": "string", "enum": ["pending", "verified", "contacted"], "default": "pending" }
  }
}
```

### B. Event Showcase Schema (`events.json`)
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "CommunityEvent",
  "type": "object",
  "required": ["id", "title", "tag", "description", "stats", "link_url", "image_src"],
  "properties": {
    "id": { "type": "string" },
    "title": { "type": "string" },
    "tag": { "type": "string" },
    "description": { "type": "string" },
    "stats": { "type": "string" },
    "link_url": { "type": "string" },
    "image_src": { "type": "string" },
    "venue": { "type": "string" },
    "category": { "type": "string", "enum": ["builder_summit", "trading_competition", "partnership_meetup", "sports_club"] }
  }
}
```

### C. Community Metrics Schema (`metrics.json`)
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "CommunityMetrics",
  "type": "object",
  "required": ["members_count", "offline_events", "free_education_percent", "global_partners"],
  "properties": {
    "members_count": { "type": "string", "default": "3,500+" },
    "offline_events": { "type": "string", "default": "45+" },
    "free_education_percent": { "type": "string", "default": "100%" },
    "global_partners": { "type": "string", "default": "12+" }
  }
}
```

---

## 3. Design System & Design Tokens (Extracted from FigCraft)
- **Base Canvas Width**: `1440px` (Desktop Container Max-W `1280px` / `1440px`)
- **Typography**: `Inter`, sans-serif (Weights: 400, 500, 600, 700)
  * Hero Display: `52px` Bold (line-height: 1.15)
  * Section Titles: `38px` Bold (line-height: 1.2)
  * Card Titles: `20px - 24px` Bold
  * Body Text: `14px - 16px` Regular/Medium (line-height: 1.6)
  * Badges & Microcopy: `11px - 13px` SemiBold / Bold
- **Color Palette**:
  * `brand-green-primary`: `#4CC52A` (Vibrant electric green - CTA, highlight)
  * `brand-green-deep`: `#1B7943` & `#166534` (Deep forest green)
  * `brand-dark-botanical`: `#112316` (Card dark background)
  * `brand-dark-footer`: `#1C1C1C` / `#111827`
  * `brand-canvas-light`: `#F8F9F5` / `#F7F9F4` (Warm off-white background)
  * `brand-border`: `#EAEAEA` / `#E4E7EB` (Subtle 1px border)
  * `brand-muted`: `#6B7280` / `#9BA3AE`
- **Border Radii**:
  * Buttons: `10px` (`rounded-[10px]`)
  * Cards: `16px` (`rounded-[16px]`)
  * Highlight Container: `20px` (`rounded-[20px]`)
  * Badges: `9999px` (`rounded-full`)
- **Shadows**:
  * Subtle card elevation: `0 4px 16px rgba(0, 0, 0, 0.03)`

---

## 4. Tech Stack & Execution Commands
- **Frontend Stack**: Vite + React 18 / TypeScript + Tailwind CSS + Lucide Icons
- **Dev Server**: `npm run dev` (Runs locally on `http://localhost:5173`)
- **Build**: `npm run build`
- **Verification / Testing**: Python / Node automated test scripts (`tools/test_connectivity.py`, `tools/test_e2e.py`)

---

## 5. Behavioral Rules & State Invariants
1. **Never wipe existing data**: User submissions and local database files must be appended/updated, never overwritten or deleted.
2. **Anti-AI-Slop Principle**: No generic gradients or lorem ipsum. All copy and imagery must use the real curated assets from the FigCraft file and `Portfolio/`.
3. **Responsive Invariant**: Halaman harus 100% responsif (Desktop 1440px, Tablet 768px, Mobile 375px/393px).
4. **Offline First & Zero-Crash Fallbacks**: Semua link sosial dan form submission harus memiliki validasi client-side yang jelas dan feedback status (toast/modal) yang ramah pengguna.
