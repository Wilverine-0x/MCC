# SOP: Design System & Styling Guidelines

## 1. Objective
Memastikan implementasi frontend mencerminkan desain FigCraft `MCC_Homepage_Design.figcraft` secara presisi, bebas dari *AI-slop*, serta memiliki kontras dan ritme visual berstandar editorial.

## 2. Design Tokens
- **Background**:
  - Main Body: `#F8F9F5` (Warm off-white)
  - Card Light: `#FFFFFF`
  - Card Dark: `#112316` (Deep Botanical)
  - Footer Dark: `#1C1C1C`
- **Brand Colors**:
  - Primary Accent: `#4CC52A` (Electric green)
  - Deep Forest: `#1B7943`
  - Stroke / Border: `#EAEAEA` / `#E4E7EB` (1px solid)
- **Typography (Inter)**:
  - Font scaling menggunakan Tailwind config dengan basis font `Inter`.
  - H1 Hero: `text-[42px] md:text-[52px] font-bold leading-tight`
  - H2 Section: `text-[30px] md:text-[38px] font-bold leading-tight`
  - H3 Card: `text-[18px] md:text-[22px] font-bold`
  - Body: `text-[14px] md:text-[16px] text-gray-600 leading-relaxed`
- **Border Radii**:
  - Buttons: `10px` (`rounded-[10px]`)
  - Cards: `16px` (`rounded-[16px]`)
  - Highlight Container: `20px` (`rounded-[20px]`)
  - Badges: `rounded-full`
- **Elevation**:
  - `shadow-[0_4px_16px_rgba(0,0,0,0.03)]`

## 3. Anti-AI-Slop Rules
1. Jangan pernah menggunakan gradien ungu-biru generik.
2. Semua copy wajib menggunakan teks asli dari FigCraft (StoryBrand 2.0) tanpa kalimat klise seperti "Unlock the future" atau "Next-gen synergy".
3. Gunakan foto nyata komunitas MCC dari folder `Portfolio/`.
