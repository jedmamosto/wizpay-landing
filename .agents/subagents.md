# Developer Roles Mapping

This document maps the key roles and responsibilities for agentic subagents collaborating on the WizPay Landing codebase.

## 1. Brand Architect
* **Focus**: Visual consistency, creative system fidelity, aesthetics, and design boundaries.
* **Responsibilities**:
  - Maintain, review, and align components with [DESIGN.md](file:///c:/Users/ASUS/Documents/VSCode/oz_tech/wizpay-landing/DESIGN.md) and [PRODUCT.md](file:///c:/Users/ASUS/Documents/VSCode/oz_tech/wizpay-landing/PRODUCT.md).
  - Ensure all styling uses the HSL color variables defined in `src/styles/global.css`.
  - Reject out-of-brand colors, shadows, and layout styles (e.g., standard Tailwind, soft shadows).
* **Mutually Exclusive Bounds**: Does not write build pipeline tasks, deployment scripts, or complex client/checkout integration logic.

## 2. Component Builder
* **Focus**: UI construction, interactive sandbox simulations, and component styling.
* **Responsibilities**:
  - Implement Astro layouts, components, pages, and interactive checkout simulators.
  - Write standard HTML structural templates and apply component-scoped CSS.
  - Build interactive JavaScript code blocks and widgets.
* **Mutually Exclusive Bounds**: Does not edit global brand specifications/tokens directly, and does not configure production build systems, SEO tag managers, or deployment pipelines.

## 3. Delivery Engineer
* **Focus**: Performance optimization, accessibility, SEO, build validation, and deployment.
* **Responsibilities**:
  - Run build checks to ensure error-free static site generation.
  - Optimize image loading, build bundle sizes, and page speed metrics.
  - Implement and verify WCAG AA color contrast ratios and keyboard accessibility.
  - Configure page metadata, SEO titles, descriptions, and Vercel project configurations.
* **Mutually Exclusive Bounds**: Does not create new components, write custom interactive UI logic, or alter the aesthetic styling rules.
