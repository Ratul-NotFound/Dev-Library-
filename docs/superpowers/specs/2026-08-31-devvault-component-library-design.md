# Design Specification: DevVault — Minimalist Developer Component & Pattern Library

**Date**: 2026-08-31  
**Status**: Approved / In Progress  
**Objective**: Build a high-performance, ultra-fast, zero-lag, minimalist web component and pattern library for web developers. Provides instant search, multi-device live sandbox preview, multi-format code copying (Vanilla HTML/CSS/JS & Tailwind), dynamic token customizer, and a personal snippet vault.

---

## 1. Non-Functional Requirements & Performance Budget

1. **Sub-50ms First Contentful Paint (FCP)**: Zero heavy third-party framework runtime overhead in the host app.
2. **Zero-Lag Interactions**: 60–120 FPS transitions, debounced/instant in-memory search, CSS-only micro-animations.
3. **Isolated Sandbox Engine**: Real-time component previews rendered in clean isolated iframes with zero style bleeding.
4. **Clean Swiss Minimalist Aesthetics**:
   - Monochromatic deep carbon dark mode (`#09090b` / `#121215` / `#27272a`) and crisp editorial light mode (`#ffffff` / `#f4f4f5` / `#e4e4e7`).
   - 1px hairline borders, Inter / JetBrains Mono typography, tight tracking, zero tacky AI clichés.

---

## 2. Core Functional Modules

### A. Navigation & Shell Layout
- **Header**: Minimal brand mark (`DevVault`), quick category jump, dark/light theme switch, global search trigger (`⌘K` / `Ctrl+K`), and `+ Custom Snippet` action.
- **Sidebar**: Sticky categorized hierarchy with live item counts, filter badges (Vanilla, Tailwind, Animations, Layouts, E-Commerce, Pages).
- **Responsive Viewport Controls**: 
  - Desktop (`100%`)
  - Laptop (`1200px`)
  - Tablet (`768px`)
  - Mobile (`375px`)
  - Fullscreen standalone modal

### B. Sandboxed Component Viewer & Inspector
- **Live Isolated Iframe**: Injects component HTML, scoped CSS, and minimal JS into an isolated document context.
- **Inspector Tabs**:
  - `Preview` (Live interactive canvas with background grid/dark/light switcher)
  - `HTML` (Syntax highlighted, formatted)
  - `CSS` (Variables-based, clean reset)
  - `JS` (Clean vanilla event listeners & handlers)
  - `Tailwind` (Direct utility markup)
- **1-Click Copy**: Copies code to clipboard with clean toast notifications (`Copied HTML!`, `Copied All Files!`).

### C. Live Token & CSS Variable Customizer
- Visual slider for Border Radius (`0px`, `4px`, `8px`, `16px`, `9999px`).
- Primary Accent Color Picker (`Indigo`, `Emerald`, `Amber`, `Rose`, `Zinc`, `Custom Hex`).
- Density / Spacing scale (`Compact`, `Comfortable`, `Spacious`).
- Changes reflect immediately inside the live iframe AND update the exportable code snippet.

### D. Built-In Production Component Matrix
1. **Navbars & Headers**:
   - Floating Glassmorphic Navbar (Scroll blur, mobile drawer)
   - Minimal Split Header with Action CTA
   - SaaS Mega-Menu Header with animated dropdowns
2. **Hero Sections**:
   - Modern SaaS Hero (Badge + Gradient Headline + App Mockup Frame)
   - Minimal Typography Agency Hero with Live Stats Ticker
   - E-Commerce Split Hero with Floating Product Cards
3. **Sidebars & Drawers**:
   - Collapsible Icon-Rail Navigation Sidebar
   - Smooth Off-Canvas Slide Cart Drawer with quantity counters & subtotal
4. **Data Tables & Grids**:
   - Clean Data Table (Search, Status badges, Sortable columns, Action menus)
   - Bento Grid 6-Card Layout with subtle border glow on hover
5. **Authentication & Forms**:
   - Split-Screen Clean Modern Login & Signup
   - Floating Label Input Group & Segmented Radio Control
6. **Footers**:
   - Multi-Column SaaS Footer with Newsletter form
   - Ultra-Clean 1-Line Minimal Developer Footer
7. **Interactive Elements & Micro-Animations**:
   - Magnetic & Shimmer Buttons
   - Toast Notification Manager
   - Accordion FAQ with height animation
   - Infinite Smooth Marquee / Logo Cloud

### E. Personal Local-First Snippet Vault & Quick-Add Creator
- **Instant "+ New Component" Workflow**:
  - Accessible via global shortcut (`Ctrl+N` / `⌘N`) or top bar action.
  - **Live Sandbox Editor in Modal**: Type or paste HTML, CSS, and JS into split-pane tabs and see the component render live in real-time before saving.
  - **Smart Boilerplate Starters**: Option to start from Blank, Section, Button, or Card templates.
  - **Dynamic Categorization & Custom Tags**: Assign to existing categories or create custom categories on the fly.
  - **Framework & Dependencies Selector**: Mark as Vanilla or Tailwind, specify external CDNs if required (e.g. FontAwesome, Lucide, Tailwind CDN).
  - **Full CRUD Support**: Edit, duplicate, or delete any custom component directly from its card in the main catalog.
  - **Seamless Local Persistence & Sync**:
    - Auto-saved to `localStorage` / `IndexedDB`.
    - **1-Click JSON Backup & Restore**: Export all custom components to a single portable `.json` file or import snippets from other devices.

---

## 3. Data & Component Architecture

- `src/data/components.js`: Master structured registry of all built-in components.
- `src/engine/sandbox.js`: Lightweight iframe sandbox generator and message channel.
- `src/engine/customizer.js`: Real-time CSS variable injector and code transformer.
- `src/engine/storage.js`: Local storage repository for custom user snippets.
- `src/ui/`: Modular UI renderers for Sidebar, Command Menu, Component Cards, and Inspector.
