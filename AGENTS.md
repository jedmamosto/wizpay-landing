# AGENTS.md (WizPay Landing)

## 1. Project Overview
This repository contains the **WizPay Landing Page**, a high-performance, responsive marketing showcase for the WizPay project ecosystem. It displays WizPay's open-source, direct payment overlay checkouts and conversion funnels.

## 2. Core Tech Stack & Tooling
* **Framework**: Astro (Static site generator)
* **Styling**: Vanilla CSS (using custom HSL tokens in `src/styles/global.css`)
* **Languages**: TypeScript (Strict mode, no `any`)
* **Deployment**: Vercel

## 3. Engineering Rules & Boundaries
* **Design Consistency**: Adhere strictly to the brand identity in [DESIGN.md](file:///c:/Users/ASUS/Documents/VSCode/oz_tech/wizpay-landing/DESIGN.md). Always use HSL variables. The electric Brand Emerald (#ccf15a) must be used on <= 10% of any given screen (The Rarity Rule).
* **Borders & Shadows**: Depth is indicated exclusively by transitioning border colors. Drop shadows are forbidden except for the high-intensity emerald glow on primary action buttons (The Border Depth Rule).
* **Contrast & Accessibility**: Ensure contrast ratios match WCAG AA standards (critical for mobile checkouts in direct sunlight). Maintain keyboard navigability.
* **No Tailwind**: Tailwind CSS is explicitly avoided here in favor of Vanilla CSS/Astro styling unless requested.
* **Living Documentation & Evolution Mandate**: 
  - Whenever dependencies, configurations, or designs change, you **MUST** update this `AGENTS.md` (or `.agents/subagents.md`) in the same turn.
  - If the project evolves to require databases, complex APIs, or backend routing, immediately scaffold an `agent_docs/` folder, move deep specifications there, and keep `AGENTS.md` under 150 lines.

## 4. Development Commands
All commands run in Windows PowerShell:
* **Install Dependencies**: `npm install`
* **Development Server**: `npm run dev`
* **Production Build**: `npm run build`
* **Preview Production**: `npm run preview`

## 5. Reference Specification Index
* [PRODUCT.md](file:///c:/Users/ASUS/Documents/VSCode/oz_tech/wizpay-landing/PRODUCT.md) - Product objectives, audience, and features.
* [DESIGN.md](file:///c:/Users/ASUS/Documents/VSCode/oz_tech/wizpay-landing/DESIGN.md) - Creative North Star, color tokens, typography, and layout rules.
* [.agents/subagents.md](file:///c:/Users/ASUS/Documents/VSCode/oz_tech/wizpay-landing/.agents/subagents.md) - Mutually exclusive subagent developer roles.
