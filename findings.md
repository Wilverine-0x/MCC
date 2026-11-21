# Findings & System Research

## 1. FigCraft Document Analysis (`MCC_Homepage_Design.figcraft`)
- **Structure**: Native FigCraft zip archive containing `document.json` (145.9 KB), 10 high-resolution images, and `thumbnail.png`.
- **Root Dimensions**: 1440px wide by 4858px high desktop layout.
- **Node Hierarchy**: 211 layers, 9 primary sections.
- **Framework**: Explicit StoryBrand 2.0 structure (`Navbar`, `Hero`, `PartnerBar`, `TheProblem`, `TheGuide`, `ThePlan`, `DirectTransitionalCTA`, `EndsInSuccess`, `CleanModernFooter`).
- **Typography**: Single typeface family (`Inter`) used across all hierarchy levels with precise mathematical scale (11px, 12px, 13px, 14px, 16px, 18px, 20px, 22px, 38px, 52px).
- **Color System**:
  - Primary Green: `#4CC52A`
  - Deep Botanical Green: `#112316`, `#1B7943`
  - Off-white Canvas: `#F8F9F5`, `#F7F9F4`
  - Dark Charcoal Footer: `#1C1C1C`
  - Subtle Stroke: `#EAEAEA` / `#E4E7EB`

## 2. Real Community Assets Audit
- **Logo**: `Desain/Logo MCC.jpg` (SHA256: `063c22c4169b60200765af0d964c7c090db0e7cbcef70d1b3c7f4b1e851ea082`) exactly matches Node 12 and Node 225.
- **Porto 1 (FLAP Indonesia Tour @ Baqa Cafe + Padel)**:
  - `1.jpg` (163 KB) -> Hero image
  - `2.jpg` (327 KB) -> Guide card 1 image
  - `Caption Porto 1.txt` -> "FLAP Indonesia tour medan, kolaborasi sama kita MCC. Disini kita ngebahas terkait AI... 150 peserta... tournament padel..."
- **Porto 2 (Bitcoin Pizza Day × Bybit)**:
  - `1.jpg` (621 KB), `2.jpg` (477 KB) -> Guide card 3 image & assets
  - `Caption Porto 2.txt` -> "Event bitcoin pizza day, kolaborasi sama bybit... 120 orang... pizza gratis..."
- **Porto 3 (Crypto Sunset Beach @ Tenank Ngumban)**:
  - `1.jpg` (220 KB), `2.jpg` (134 KB) -> Guide card 2 image
  - `Caption Porto 3.txt` -> "Event kita sendiri crypto sunset beach... Tenank Ngumban... live trading cup..."
- **Porto 4 (Casual Badminton & Sports Meetup)**:
  - `1.jpg` (867 KB), `2.jpg` (737 KB) -> Transformation / community assets
  - `Caption Porto 4.txt` -> "Badminton session bareng temen-temen MCC"
- **Official Social Channels**:
  - Instagram: `https://www.instagram.com/medancrypto_community/`
  - Telegram Group: `https://t.me/MedanCryptoCommunity`
  - X / Twitter: `https://x.com/MedanCrypto`

## 3. Runtime & Tools Environment
- macOS environment with Python 3 and Node.js.
- Local-first architecture: In-browser state / local JSON store (`data/leads.json`) easily migratable to Supabase if desired.
