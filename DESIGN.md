---
name: WizPay Landing
description: Static marketing showcase of WizPay's open-source direct payment checkout overlays.
colors:
  brand-dark: "#001208"
  brand-deepGreen: "#022113"
  brand-emerald: "#ccf15a"
  brand-emeraldHover: "#b0d440"
  brand-emeraldText: "#161e00"
  brand-mint: "#a6d0b5"
  brand-neonMint: "#6dfe9c"
  brand-borderGreen: "#112f21"
  brand-lightGreen: "#062517"
  brand-darkBg: "#00180c"
typography:
  display:
    fontFamily: "'Inter', sans-serif"
    fontWeight: 900
    lineHeight: "1.05"
  body:
    fontFamily: "'Inter', sans-serif"
    fontWeight: 400
    lineHeight: "1.6"
  mono:
    fontFamily: "'Fira Code', 'Courier New', monospace"
    fontWeight: 400
---

# Design System: WizPay Landing

## 1. Overview

**Creative North Star: "The Developer-Empowered Payment Interface"**

This system is designed to evoke a modern, vibrant, and developer-friendly terminal feel. It utilizes a high-contrast dark green canvas accented with electric neon mint and bright lime-emerald colors to signify direct, fast, and secure fintech integration. This interface explicitly rejects the bland, warm-neutral cream backgrounds and safe generic SaaS structures of typical fintech pages. Instead, it positions WizPay as a premium, cutting-edge utility for Philippine merchants.

Key Characteristics:
- High contrast electric lime/emerald accents against a deep green canvas.
- Bold, capitalized sans-serif headings with tight tracking.
- Modular, interactive UI elements showcasing sandbox simulations.

## 2. Colors

The WizPay palette uses high-energy primary accents on a dark green base to indicate active state and technical precision.

### Primary
- **Brand Emerald** (#ccf15a): The primary accent color for active buttons, badges, and focal states. Represents speed and value.
- **Brand Emerald Hover** (#b0d440): Hover state color for primary actions.

### Neutral
- **Brand Dark** (#001208): The primary background color. Provides maximum contrast for neon components.
- **Brand Deep Green** (#022113): Card container backgrounds and distinct block elements.
- **Brand Mint** (#a6d0b5): The primary body text color, providing soft yet accessible readability against dark canvases.
- **Brand Neon Mint** (#6dfe9c): Secondary accent highlight, used for online status badges and developer sub-labels.
- **Brand Border Green** (#112f21): Standard borders for layouts and container boundaries.
- **Brand Light Green** (#062517): Highlighting alternate dark surfaces.
- **Brand Dark Bg** (#00180c): Alternative background shading.
- **Brand Emerald Text** (#161e00): High contrast dark ink for text placed directly on Brand Emerald backgrounds.

### Named Rules
**The Rarity Rule.** The electric Brand Emerald accent is used on <= 10% of any given screen. Its sparseness emphasizes key call-to-actions.

## 3. Typography

**Display Font:** 'Inter', sans-serif
**Body Font:** 'Inter', sans-serif
**Label/Mono Font:** 'Fira Code', 'Courier New', monospace

### Hierarchy
- **Display** (Bold 900, clamp(2.5rem, 7vw, 3.375rem), 1.05): Used for main page headers and section titles. Capitalized and tracked tight.
- **Headline** (Bold 700, 1.5rem, 1.2): Section sub-headings.
- **Body** (Regular 400, 1.125rem, 1.6): Standard reading text. Max line length capped at 65ch for reading ease.
- **Label** (Bold 700, 0.75rem, normal): Badges, buttons, and system status indicators. Tracked wide and uppercase.

## 4. Elevation

The visual system is designed to be flat and tactile, referencing modern code editors and terminal workspaces. Depth is created through contrasting backgrounds and borders rather than drop shadows.

### Named Rules
**The Border Depth Rule.** Elevation is indicated exclusively by transitioning border colors (e.g. from `#112f21` to `#ccf15a`/`#6dfe9c`) and background tint adjustments. Drop shadows are forbidden except for a high-intensity emerald glow on the primary action button.

## 5. Components

### Buttons
- **Shape:** Rounded corners with 8px radius (`rounded-lg`).
- **Primary:** `bg-brand-emerald` background, `text-brand-dark` text, bold and uppercase tracking, padding of 1rem 2rem (`py-4 px-8`).
- **Hover/Focus:** Scales up to `scale-[1.02]`, changes background to `bg-brand-emeraldHover` and adds an emerald-tinted drop shadow (`shadow-[0_4px_20px_rgba(204,241,90,0.2)]`).
- **Secondary:** Transparent background with `border border-[#1d3a2c]` and `text-white`. On hover, transitions to `bg-brand-borderGreen`.

### Cards / Containers
- **Corner Style:** Rounded corners with 8px/12px radius.
- **Background:** `bg-brand-deepGreen` or `bg-brand-darkBg` for inner containers.
- **Border:** Solid border using `border-brand-borderGreen` (`#112f21`).

### Badges / Eyebrows
- **Style:** Compact pill layout with `bg-brand-emerald/5` background, `border-brand-emerald/30` border, and `text-brand-emerald` text.

## 6. Do's and Don'ts

### Do:
- **Do** keep headings short, uppercase, and tracked tight (`tracking-tight`).
- **Do** use `font-mono` for technical values, API parameters, and code blocks.
- **Do** maintain a strict WCAG contrast ratio by using `text-brand-emeraldText` on primary emerald buttons.

### Don't:
- **Don't** use generic cream, sand, or white backgrounds. The canvas must remain deep green (`#001208`).
- **Don't** use standard blur-heavy glassmorphism or drop shadows for layout containers.
- **Don't** add colored side-stripe borders as accent panels on cards or alerts.
