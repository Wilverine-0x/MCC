#!/usr/bin/env python3
"""
tools/prepare_assets.py
Extracts and maps real community photos from Portfolio/ and Desain/ to public/images/
"""

import shutil
from pathlib import Path

def main():
    dest_dir = Path("public/images")
    dest_dir.mkdir(parents=True, exist_ok=True)

    mappings = [
        ("Desain/Logo MCC.jpg", "public/images/logo-mcc.jpg"),
        ("Portfolio/Porto 1/1.jpg", "public/images/hero-community.jpg"),
        ("Portfolio/Porto 1/2.jpg", "public/images/event-flap-tour.jpg"),
        ("Portfolio/Porto 1/3.jpg", "public/images/trans-builders.jpg"),
        ("Portfolio/Porto 1/4.jpg", "public/images/avatar-1.jpg"),
        ("Portfolio/Porto 2/1.jpg", "public/images/event-pizza-day.jpg"),
        ("Portfolio/Porto 2/2.jpg", "public/images/avatar-2.jpg"),
        ("Portfolio/Porto 3/1.jpg", "public/images/event-sunset-beach.jpg"),
        ("Portfolio/Porto 3/2.jpg", "public/images/trans-traders.jpg"),
        ("Portfolio/Porto 3/3.jpg", "public/images/avatar-3.jpg"),
        ("Portfolio/Porto 4/1.jpg", "public/images/trans-partners.jpg"),
        ("Portfolio/Porto 4/2.jpg", "public/images/community-sports.jpg"),
    ]

    print("Copying real community assets into public/images/...")
    for src, dst in mappings:
        src_p = Path(src)
        dst_p = Path(dst)
        if src_p.is_file():
            shutil.copy2(src_p, dst_p)
            print(f"  ✓ {src} -> {dst} ({dst_p.stat().st_size / 1024:.1f} KB)")
        else:
            print(f"  ⚠️ Warning: {src} not found")

    print("\n✅ Assets preparation completed!")

if __name__ == "__main__":
    main()
