# Developer Roles Mapping

This document maps the key roles and responsibilities for agentic developers collaborating on the WizPay Landing codebase.

## 1. Brand Designer
- **Focus**: Visual consistency, accessibility compliance, and design system fidelity.
- **Responsibilities**:
  - Maintain [DESIGN.md](file:///c:/Users/ASUS/Documents/VSCode/oz_tech/wizpay-landing/DESIGN.md) and [PRODUCT.md](file:///c:/Users/ASUS/Documents/VSCode/oz_tech/wizpay-landing/PRODUCT.md).
  - Review and refine UI pages/components to ensure contrast matches WCAG AA standards.
  - Reject out-of-brand elements (e.g. gradients, cream palettes, card side-stripes).

## 2. Frontend Developer
- **Focus**: Building and styling interactive web interfaces.
- **Responsibilities**:
  - Implement Astro pages, layouts, and interactive sandbox simulations.
  - Align layouts with CSS variables defined in `@theme` inside `src/styles/global.css`.
  - Maintain high performance and responsive conversion paths for mobile checkouts.

## 3. Lead Architect
- **Focus**: Code quality, structure, and integrations.
- **Responsibilities**:
  - Review typescript definitions and imports.
  - Manage build pipeline validation and error-free compilation.
  - Define integration points for payment widgets and sandboxes.
