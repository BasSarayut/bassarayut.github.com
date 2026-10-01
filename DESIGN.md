---
name: Sarayut Portfolio
description: A warm personal studio for a curious software developer.
colors:
  paper: "#f7f5ef"
  surface: "#eeece3"
  ink: "#29372e"
  muted: "#5d675b"
  accent: "#426a4c"
  line: "#d6d8cc"
  soft-green: "#e8ecdf"
  footer: "#e1e7d8"
  dark-paper: "#202720"
  dark-surface: "#29322a"
  dark-ink: "#edece1"
  dark-muted: "#b7bdb0"
  dark-accent: "#b5cea6"
  dark-line: "#465143"
  dark-soft-green: "#303d30"
  dark-footer: "#2a382c"
typography:
  display:
    fontFamily: "DM Sans, Noto Sans Thai, sans-serif"
    fontSize: "clamp(3.5rem, 6.9vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-.04em"
  headline:
    fontFamily: "DM Sans, Noto Sans Thai, sans-serif"
    fontSize: "clamp(2rem, 3.8vw, 3.2rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-.035em"
  title:
    fontFamily: "DM Sans, Noto Sans Thai, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-.02em"
  body:
    fontFamily: "DM Sans, Noto Sans Thai, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  emphasis:
    fontFamily: "Instrument Serif, Noto Sans Thai, serif"
    fontWeight: 400
  label:
    fontFamily: "DM Sans, Noto Sans Thai, sans-serif"
    fontSize: ".9rem"
    fontWeight: 500
rounded:
  control: "5px"
  visual: "12px"
  filter: "24px"
  circle: "50%"
spacing:
  inline-small: "12px"
  inline: "20px"
  grid: "28px"
  reading: "30px"
  section-mobile: "55px"
  section-desktop: "85px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 21px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 21px"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    width: "44px"
    height: "44px"
  work-filter:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.filter}"
    padding: "9px 15px"
  search-input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "8px 0"
  navigation:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted}"
  featured-work:
    backgroundColor: "{colors.soft-green}"
    textColor: "{colors.ink}"
    rounded: "{rounded.visual}"
---

# Design System: Sarayut Portfolio

## Overview

**Creative North Star: "The Tea Notebook"**

A warm personal studio with the quiet character of a tea notebook: paper surfaces, botanical ink, generous space and an occasional italic serif. The visual identity makes room for a real person and readable project evidence. This records the implemented code-led direction; it is not an approved visual comp.

**Key Characteristics:**

- Warm paper and botanical contrast in two themes.
- Sans-serif clarity with restrained serif emphasis.
- Flat reading surfaces; tactile depth reserved for photographs and project illustrations.

Source of truth: `src/index.css`, active routes in `src/pages`, and their shared components. Older unused components do not define this system. `PRODUCT.md` supplies durable privacy and accessibility constraints.

## Colors

One botanical accent supports warm neutrals. Frontmatter values are normative; each `dark-` token replaces the corresponding light token under `data-theme="dark"`.

### Primary

- **Botanical accent:** primary actions, serif emphasis, status dots, icons and focus outlines. Filled primary actions pair accent with paper in either theme.

### Neutral

- **Paper / surface:** page canvas and quiet secondary fills.
- **Ink / muted:** primary hierarchy and supporting readable text.
- **Line:** fine dividers and control outlines, not text.
- **Soft green / footer:** broad background bands that separate related content without floating cards.

**The Readable Paper Rule.** Muted text remains readable on paper, soft-green and footer surfaces in both themes; preserve the corrected muted token.

Project illustrations retain their own fixed pale colors in both themes. These local illustration colors are not additional UI accents.

## Typography

DM Sans carries English and technical names; Noto Sans Thai carries Thai. Instrument Serif adds italic emphasis and personal-interest titles. Fonts are bundled through `@fontsource`.

Display tokens describe the home hero; standard page headings use `clamp(3rem, 6.2vw, 5.6rem)`, with deliberate route-specific variants. Body copy uses a relaxed rhythm, increasing to 1.85–2 line-height for Thai descriptions and case studies. Article copy is constrained to 70ch within an 840px page. Small captions belong to imagery and metadata, never essential explanatory prose.

**The Quiet Emphasis Rule.** Use the serif for short emphasis and personal accents; keep Thai paragraphs and navigation in the sans-serif stack.

## Layout

Use the centered shell: maximum 1160px, with 48px desktop side gutters. At 1000px and below use 32px gutters; at 720px and below use 20px. The body supports 320px and wider viewports.

Home combines an asymmetric two-column introduction, a full-width featured project, a two-column project grid, quiet colored bands and divided career rows. Case-study sections use a 200px heading column with flowing copy; journal entries use date, story and arrow columns. These become stacked reading flows at 720px. Mobile project cards use one column; filters wrap.

Spacing is intentionally contextual rather than a strict numeric scale. The frontmatter records recurring values, not CSS custom properties. Desktop sections generally breathe with 75–96px vertical padding; mobile sections use roughly 44–60px. The sticky header is 86px high, reducing to 72px on mobile; anchor offsets are 105px and 90px respectively.

## Elevation & Depth

The site is mostly flat: borders, whitespace and tonal bands supply hierarchy. Soft shadows are confined to the portrait, tea note and illustrated application frames. The portrait rotates 3 degrees, its note -7 degrees; the about photograph rotates 2 degrees. Preserve this tactile exception without applying rotation or shadows to reading content. Exact shadow and motion values live in the sidecar.

## Shapes

Controls have modest corners; project images and the featured project have softer corners. Filters are pill-shaped, and icon actions are circular. Thin rules separate career, journal and workflow content. Asterisks and outlined icons provide light personal punctuation, never a substitute for labels.

## Components

- **Actions:** primary accent fill or transparent bordered secondary; minimum 48px height, small upward hover shift. Text links use an arrow and underline on hover. Icon controls are usually 44px square; the mobile theme control is 37px wide.
- **Navigation:** opaque sticky paper header, fine bottom rule, understated active underline. At 720px it becomes a labeled disclosure menu with `aria-expanded`, Escape dismissal and focus returned to its toggle.
- **Work filters:** real buttons with a bordered selected state and `aria-pressed`; result count is announced. Technology labels are plain separated text, not filled badges.
- **Project cards:** linked visual and title, category, description and technology list. The first of multiple projects has a green featured surface; other cards remain flat. Illustration controls are decorative.
- **Journal search:** labeled transparent input on a bottom rule; results announce changes and the empty state offers a reset action.
- **Contact:** prominent email link, separate copy action and status feedback; a green footer band closes the page.
- **Accessibility and motion:** preserve the skip link, semantic headings, image descriptions, labeled icon buttons and 2px accent focus outline with 5px offset. Hero entry settles upward by 14px over 0.8–1s; hover motion lasts roughly 0.2–0.5s. Reduced motion disables animations, transitions and smooth scrolling. Theme changes use the current direct toggle.

## Do's and Don'ts

### Do

- Do retain readable Thai with Noto Sans Thai alongside DM Sans.
- Do use theme variables and visible keyboard focus on every interactive surface.
- Do use the existing portrait and public ill. screenshot; label schematic project imagery as a simulation.
- Do preserve the 320px minimum layout, stacked mobile reading flow and reduced-motion override.

### Don't

- Don't reintroduce the unused legacy glass, gradient or glow styling.
- Don't publish employer screenshots, source code, private data or invented metrics.
- Don't make ornamental project controls behave like real application controls.
- Don't lower muted-text contrast or use fine divider colors for body text.

