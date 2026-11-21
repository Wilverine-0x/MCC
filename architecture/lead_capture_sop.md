# SOP: Lead Capture & State Preservation

## 1. Objective
Mengelola pendaftaran anggota baru (Telegram handle / Email) baik secara local-first (browser localStorage + file JSON lokal) yang siap ditransfer ke Supabase/Cloud API.

## 2. Validation Rules
- **Telegram Handle**: Opsional diawali `@`, alfanumerik 5-32 karakter (`^@?[a-zA-Z0-9_]{5,32}$`).
- **Email Address**: Format RFC 5322 standar (`^[^\s@]+@[^\s@]+\.[^\s@]+$`).

## 3. Duplicate Prevention & State Invariant
- Setiap submission diverifikasi agar tidak terjadi duplikasi dalam sesi lokal.
- Memberikan instant success toast notification dengan tautan langsung membuka Telegram MCC (`https://t.me/MedanCryptoCommunity`).
- Data tersimpan persisten di `data/leads.json` dan `localStorage`.
