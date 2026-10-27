---
name: Sarayut Portfolio — Arknights Endfield Official Industrial Editorial
description: Extracted directly from https://endfield.hypergryph.com/ and dsh-theme-endfield: Warm Cream Paper (#e8e8e2), Ink Black (#101110), Valley Signal Yellow (#fff500) & Wuling Cyan (#14d0d0), 1px hairline technical blueprint grids, 0px rectangular geometry, Marching-Squares dynamic topographic contour field, and the official OVER THE FRONTIER / INTO THE FRONT boot plate.
colors:
  paper-light: "#e8e8e2"
  surface-light: "#f2f2ec"
  surface-2-light: "#dcddd6"
  line-light: "#d8d9d5"
  line-2-light: "#b6b8b3"
  ink-light: "#101110"
  muted-light: "#4a4c48"
  paper-dark: "#101110"
  surface-dark: "#181a18"
  surface-2-dark: "#1e201d"
  line-dark: "#343633"
  line-2-dark: "#4a4d49"
  ink-dark: "#f5f5f0"
  muted-dark: "#898d89"
  valley-yellow: "#fff500"
  valley-deep: "#e8e000"
  valley-status-light: "#6b5d00"
  wuling-cyan: "#14d0d0"
  wuling-deep: "#10b8b8"
  wuling-status-light: "#006a6a"
typography:
  edge-font: "Arial, Helvetica Neue, DM Sans, Noto Sans Thai, PingFang SC, Microsoft YaHei, sans-serif"
  condensed: "Arial Narrow, DM Sans, Arial, sans-serif"
  mono: "Roboto Mono, JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
  numeric: "tabular-nums (tnum)"
geometry:
  border-radius: "0px (except status dots and Endfield confirmation capsules)"
  borders: "1px solid hairline technical blueprint dividers"
---

# Design System: Arknights: Endfield Official Website Style (`https://endfield.hypergryph.com/`)

## 1. Core Philosophy: Industrial Editorial Style (工业编辑风)
Unlike generic dark sci-fi UIs or heavy drop-shadow brutalism, the official *Arknights: Endfield* website is built on **Print & Industrial Blueprint Editorial** principles:
1. **Paper & Ink Are the Body; Accent Color Is the Signal (~93% Neutral / ~6% Signal):**
   - Light mode uses warm tactile paper (`#e8e8e2`), panels (`#f2f2ec`), sunken blocks (`#dcddd6`), and deep olive-black ink (`#101110`).
   - Dark mode uses deep carbon-olive (`#101110`), panels (`#181a18`), and off-white ink (`#f5f5f0`).
   - Two switchable official signal palettes: **Valley Yellow (谷地黄 `#fff500`)** and **Wuling Cyan (武陵青 `#14d0d0`)**.
   - On light paper, signal text shifts to measured AA-compliant dark stops (`#6b5d00` for Valley / `#006a6a` for Wuling) while solid fills use `#fff500` with `#101110` ink (16.50:1 contrast).
2. **100% Orthogonal Right Angles (`border-radius: 0`):**
   - Every card, table, filter, and badge uses `0px` corners and `1px solid` blueprint rules (`#d8d9d5` / `#b6b8b3`), reserving circular/stadium shapes strictly for live status dots and Endfield confirmation capsules (`.endfield-capsule` with `inset: 3px` white keyline and trailing `◎` target disc).
3. **Tabular Numerals (`tnum`):**
   - Fractions (`01 / 04`, `Sr 01 / 01`), boot percentages (`0%`–`100%`), and dates align on fixed-width digit slots.

## 2. Signature Visual & Interactive Layers
- **Marching-Squares Dynamic Topographic Contour Field (`[data-endfield-contour]`):**
  - A real-time scalar field of 20 Gaussian peaks/basins + 3 long sine ridges extracted across 18 elevation levels via Marching Squares, stitched into continuous smooth curves, and locally deformed by the user's cursor trail.
- **Official Endfield Boot Sequence (`[data-endfield-loader]`):**
  - Full-screen `#101110` boot plate with a `10px` left-edge `#fff500` progress rail, sliding tick/percentage/`Updating...` meter, and right-aligned `END` / `FIELD` poster block (`OVER THE FRONTIER / INTO THE FRONT`) that sweeps across the screen at 100%.
- **Official Section Archetypes:**
  - **`#operator` (`[干员情报]`):** `ENDFIELD // [REC]` header, `Sr 01 / 01` counter, `[Sarayut]` bracketed designation, 2×2 Faction/Class/Stack/Sector blueprint grid, and operator quote.
  - **`#aic` / `#gameplay` (`[集成工业知识]`):** Indexed `01 / 03` topbar cards with `[Category]` brackets and telemetry bars.
  - **`#notice` (`[// 公告]`):** Fixed-slot hairline rows (`// Category`, date, `[[Title]]`) with signal-yellow hover tinting.
