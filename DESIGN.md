---
name: Sarayut Portfolio — Arknights Endfield // PRTS Terminal
description: Arknights: Endfield & PRTS tactical UI combining high-contrast industrial grey-white (#E5E6E1), stark carbon-black slabs (#111215), vivid acid yellow (#FFE600), 3D mouse parallax, cipher text scramble, and animated topographic/particle HUD telemetry.
colors:
  industrial-paper: "#e5e6e1"
  white-slab: "#ffffff"
  carbon-slab: "#111215"
  endfield-yellow: "#ffe600"
  prts-cyan: "#00b8ff"
  caution-orange: "#ff4e20"
  ink: "#111215"
  muted: "#4a4d55"
  dark-paper: "#101216"
  dark-slab: "#171a20"
  dark-elevated: "#1e222a"
typography:
  display:
    fontFamily: "DM Sans, Noto Sans Thai, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.8rem, 5.8vw, 5.2rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-.04em"
    textTransform: "uppercase"
  headline:
    fontFamily: "DM Sans, Noto Sans Thai, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.8vw, 3.2rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-.035em"
    textTransform: "uppercase"
  telemetry:
    fontFamily: "Roboto Mono, JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.68rem"
    fontWeight: 700
    letterSpacing: "0.14em"
    textTransform: "uppercase"
motion:
  mechanical-ease: "cubic-bezier(0.16, 1, 0.3, 1)"
  shutter-wipe: "0.18s - 0.22s skewX(-20deg)"
  parallax-tilt: "perspective(1100px) rotateX/Y"
---

# Design System: Arknights: Endfield // PRTS Tactical OS (`SYS//VER.4.8`)

## 1. Core Aesthetic & Color Architecture
- **Endfield Industrial Contrast (Default Theme):**
  - **Base Canvas:** Industrial Cool-Grey (`#E5E6E1`) overlaid with a 56px technical grid, animated SVG topographic contour lines, rotating radar rings, and floating Originium geometric particles.
  - **Layered High-Contrast Slabs:** Crisp Pure-White (`#FFFFFF`) and Stark Carbon-Black (`#111215`) modular blocks with hard offset backing plates (`box-shadow: 8px 8px 0 #111215` or `#FFE600`).
  - **Primary Tactical Accent:** Vivid Endfield Acid Yellow (`#FFE600`) for active headers, diagonal 45° shutter wipes, status badges, and priority frames.
  - **Secondary Telemetry Accents:** Rhodes Island Cyan (`#00B8FF`) and Combat Caution Orange (`#FF4E20`).
- **PRTS Carbon Night (Dark Theme):**
  - Deep Carbon (`#101216`) with smoked-glass dark slabs (`#171A20`) and `#FFE600` yellow offset backing shadows.

## 2. UI Layer & Depth
- **Offset Backing Plates & Slabs:** Cards and buttons feature solid offset shadows that shift and illuminate in `#FFE600` on hover.
- **Oversized Watermarks (`.hud-watermark`):** Giant uppercase ghosted labels (`OPERATOR`, `DEPLOYMENT`, `CHRONICLE`, `SERVICE`) anchor major sections.
- **3D Perspective & Mouse Parallax (`<TiltSlab />`):** Hero briefing and operator portrait panels respond to cursor coordinates with 3D perspective tilt.
- **Locking Corner Reticles (`.reticle-box`):** Corner `[ + ]` crosshairs snap inward and illuminate when hovered.

## 3. Motion & Interactive Effects
- **Cipher Text Scramble (`<ScrambleText />`):** Technical tags, project titles, and navigation items decode through cipher characters on mount and hover.
- **45° Mechanical Shutter Wipe:** Navigation links, filter buttons, and CTAs feature a skewed 45-degree color shutter sweep on hover.
- **HUD Scroll Boot & Telemetry Bars (`<RevealOnScroll />`, `<TelemetryBar />`):** Sections unclip vertically on scroll while telemetry bars animate to their target readiness percentages.
- **Ambient Background & Live Telemetry (`<AnimatedBackground />`, `<LiveClock />`):** Real-time millisecond UTC+7 clock, animated 5-bar audio waveform equalizer, drifting Originium rhombic shards, topographic contours, and radar sweep.
