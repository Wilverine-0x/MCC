#!/usr/bin/env python3
"""
tools/test_connectivity.py
Lightweight probe script verifying environment, runtime, local assets, and links.
Phase 2 (Link) of B.L.A.S.T. Framework.
"""

import sys
import os
import json
import subprocess
from pathlib import Path

def test_runtimes():
    print("[1/5] Testing runtimes...")
    node_res = subprocess.run(["node", "-v"], capture_output=True, text=True)
    assert node_res.returncode == 0, "Node.js is not available"
    npm_res = subprocess.run(["npm", "-v"], capture_output=True, text=True)
    assert npm_res.returncode == 0, "npm is not available"
    print(f"  ✓ Node.js ({node_res.stdout.strip()}) and npm ({npm_res.stdout.strip()}) available.")

def test_directories():
    print("[2/5] Testing project directory structure...")
    required_dirs = ["architecture", "tools", ".tmp", "Desain", "Portfolio"]
    for d in required_dirs:
        p = Path(d)
        assert p.is_dir(), f"Missing required directory: {d}"
    print("  ✓ All required architecture and data directories exist.")

def test_assets():
    print("[3/5] Testing source assets and photos...")
    logo_path = Path("Desain/Logo MCC.jpg")
    assert logo_path.is_file(), "Missing Logo MCC.jpg in Desain/"
    assert logo_path.stat().st_size > 10000, "Logo MCC.jpg file size invalid"

    porto_dirs = ["Portfolio/Porto 1", "Portfolio/Porto 2", "Portfolio/Porto 3", "Portfolio/Porto 4"]
    for pd in porto_dirs:
        p = Path(pd)
        assert p.is_dir(), f"Missing {pd}"
        images = list(p.glob("*.jpg"))
        assert len(images) > 0, f"No images found in {pd}"
    print(f"  ✓ Brand logo and real community portfolio photos verified.")

def test_figcraft_source():
    print("[4/5] Testing FigCraft source file...")
    fc_path = Path("Desain/MCC_Homepage_Design.figcraft")
    assert fc_path.is_file(), "Missing MCC_Homepage_Design.figcraft"
    assert fc_path.stat().st_size > 1000000, "MCC_Homepage_Design.figcraft seems corrupted or incomplete"
    print(f"  ✓ FigCraft document verified ({fc_path.stat().st_size / (1024*1024):.2f} MB).")

def test_data_store():
    print("[5/5] Testing local-first data directory setup...")
    data_dir = Path("public/data")
    data_dir.mkdir(parents=True, exist_ok=True)
    leads_file = data_dir / "leads.json"
    if not leads_file.exists():
        with open(leads_file, "w") as f:
            json.dump([], f)
    assert leads_file.is_file(), "Failed to initialize leads.json"
    print("  ✓ Local-first data directory and leads.json ready.")

def main():
    print("=== B.L.A.S.T. Phase 2 (Link): Handshake & Connectivity Probe ===")
    try:
        test_runtimes()
        test_directories()
        test_assets()
        test_figcraft_source()
        test_data_store()
        print("\n✅ 100% Handshake tests PASSED! Ready for Phase 3 (Architect).")
        return 0
    except AssertionError as err:
        print(f"\n❌ Handshake assertion failed: {err}")
        return 1
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")
        return 1

if __name__ == "__main__":
    sys.exit(main())
