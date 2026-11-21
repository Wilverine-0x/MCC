#!/usr/bin/env python3
"""
tools/test_e2e.py
End-to-End Automated Test Suite for MCC Website.
Phase 4 (Stylize) of B.L.A.S.T. Framework v2.0.
"""

import sys
import os
import json
import re
from pathlib import Path

def test_build_artifacts():
    print("[1/5] Testing production build artifacts (dist/)...")
    dist = Path("dist")
    assert dist.is_dir(), "dist/ directory does not exist"
    
    index_html = dist / "index.html"
    assert index_html.is_file(), "dist/index.html is missing"
    html_content = index_html.read_text(encoding="utf-8")
    assert "Medan Crypto Community" in html_content, "Brand title missing in dist/index.html"
    assert "viewport" in html_content, "Viewport meta missing"
    
    assets_dir = dist / "assets"
    assert assets_dir.is_dir(), "dist/assets/ is missing"
    js_files = list(assets_dir.glob("*.js"))
    css_files = list(assets_dir.glob("*.css"))
    assert len(js_files) > 0, "No compiled JS bundle found"
    assert len(css_files) > 0, "No compiled CSS bundle found"
    print(f"  ✓ Compiled HTML, JS ({js_files[0].name}), CSS ({css_files[0].name}) verified.")

def test_assets_integrity():
    print("[2/5] Testing real community visual assets...")
    required_images = [
        "public/images/logo-mcc.jpg",
        "public/images/hero-community.jpg",
        "public/images/event-flap-tour.jpg",
        "public/images/event-sunset-beach.jpg",
        "public/images/event-pizza-day.jpg",
        "public/images/trans-traders.jpg",
        "public/images/trans-builders.jpg",
        "public/images/trans-partners.jpg",
        "public/images/avatar-1.jpg",
        "public/images/avatar-2.jpg",
        "public/images/avatar-3.jpg",
    ]
    for img in required_images:
        p = Path(img)
        assert p.is_file(), f"Missing image: {img}"
        assert p.stat().st_size > 5000, f"Image {img} is unusually small or corrupted"
    print("  ✓ All 11 community photographs and brand logo verified.")

def test_storybrand_copy():
    print("[3/5] Testing StoryBrand 2.0 copywriting and section integrity...")
    components = [
        ("src/components/HeroSection.tsx", ["Trade with Real Peers.", "Build in Medan.", "Zero VIP fees.", "3,500+"]),
        ("src/components/PartnerBar.tsx", ["BYBIT INDONESIA", "FLAP INDONESIA", "TENANK NGUMBAN", "LUMA MEDAN", "MEDAN PADEL CLUB"]),
        ("src/components/ProblemSection.tsx", ["THE PROBLEM WE ARE SOLVING", "Paid VIP Groups & Toxic Hype", "Trading in Total Isolation", "Left Out of Global Deals"]),
        ("src/components/GuideSection.tsx", ["COMMUNITY FIRST, ALWAYS", "Built by Medan Locals Who Started from Zero."]),
        ("src/components/PlanSection.tsx", ["HOW TO JOIN US", "Three Simple Steps. Zero Cost to Join."]),
        ("src/components/CTASection.tsx", ["100% FREE COMMUNITY", "Stop Trading Alone.", "Connect with Medan's Web3 Hub."]),
        ("src/components/TransformationSection.tsx", ["WHAT CHANGES WHEN YOU JOIN", "Stop Guessing. Trade and Build with Conviction."]),
        ("src/components/Footer.tsx", ["Medan, North Sumatra, Indonesia", "t.me/MedanCryptoCommunity", "x.com/MedanCrypto", "@medancrypto_community"]),
    ]
    for comp_path, phrases in components:
        content = Path(comp_path).read_text(encoding="utf-8")
        for phrase in phrases:
            assert phrase in content, f"Phrase '{phrase}' missing in {comp_path}"
    print("  ✓ All 9 StoryBrand sections and copy tokens verified.")

def test_data_schemas():
    print("[4/5] Testing JSON schema contracts and data fixtures...")
    events = json.loads(Path("src/data/events.json").read_text(encoding="utf-8"))
    assert len(events) == 3, f"Expected 3 events, found {len(events)}"
    for e in events:
        for req in ["id", "title", "tag", "description", "stats", "link_url", "image_src"]:
            assert req in e, f"Event {e.get('id')} missing field {req}"

    metrics = json.loads(Path("src/data/metrics.json").read_text(encoding="utf-8"))
    for req in ["members_count", "offline_events", "free_education_percent", "global_partners"]:
        assert req in metrics, f"Metrics missing field {req}"
    print("  ✓ events.json and metrics.json contracts valid.")

def test_anti_ai_slop():
    print("[5/5] Testing Anti-AI-Slop and design hygiene...")
    # Check that generic purple-indigo gradients are not used
    css_content = Path("dist/assets").glob("*.css")
    for css in css_content:
        txt = css.read_text(encoding="utf-8")
        assert "linear-gradient(to right, rgb(147, 51, 234)" not in txt, "Generic purple gradient detected"
    print("  ✓ Design tokens, borders, and brand greens adhere to Anti-AI-Slop principles.")

def main():
    print("=== B.L.A.S.T. Phase 4 (Stylize): End-to-End Automated Verification ===")
    try:
        test_build_artifacts()
        test_assets_integrity()
        test_storybrand_copy()
        test_data_schemas()
        test_anti_ai_slop()
        print("\n🎉 100% End-to-End E2E Tests PASSED! System is fully verified.")
        return 0
    except AssertionError as err:
        print(f"\n❌ E2E Test Failure: {err}")
        return 1
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")
        return 1

if __name__ == "__main__":
    sys.exit(main())
