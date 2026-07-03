# Handoff: Grocery App Styleguide — "Harvest"

## Overview
A visual styleguide / design system for a **mobile grocery shopping app**. It defines the brand's color tokens, typography scale, and the core UI components (buttons, chips, form inputs, quantity stepper, toggle, checkbox, product cards, order summary, iconography). The aesthetic direction is **"Harvest": warm, wholesome, playful, and very rounded**, built on a friendly green primary over a cream base.

## About the Design Files
The file in this bundle (`Grocery Styleguide.dc.html`) is a **design reference created in HTML** — a prototype showing intended look, spacing, and behavior. It is **not production code to ship directly**. The task is to **recreate these designs in the target codebase's existing environment** (React Native, SwiftUI, Flutter, React web, etc.) using that project's established patterns, component library, and theming system. If no environment exists yet, choose the most appropriate framework for a mobile grocery app and implement there.

`support.js` is only the runtime that lets the `.dc.html` reference file render in a browser — it is **not** part of the design and should not be ported.

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, radii, and shadows are final and intentional. Recreate the UI faithfully using the codebase's libraries. Exact values are listed under Design Tokens below.

## Screens / Views
This is a **single reference sheet**, not a user flow. It presents each component group in isolation so they can be lifted into the real app. One screen:

### Styleguide Sheet
- **Purpose:** Reference for engineers/designers building app screens.
- **Layout:** Vertical stack, 600px content column, 36px padding, sections separated by 30px vertical gaps. Section headers are uppercase labels (see type). On a real device the components are intended for a standard mobile width (~375–430px); the 600px column is just the reference frame.
- **Component groups:** Color, Typography, Buttons, Inputs & controls, Cards, Iconography.

## Components

### Buttons
- **Primary CTA (text-heavy):** background `#23543A` (forest), text `#FFFFFF`, Fredoka 700, 15px. Padding 14px/26px, radius 16px, shadow `0 10px 22px -8px rgba(35,84,58,.5)`. Hover: `translateY(-3px) scale(1.03)`, 150ms `cubic-bezier(.34,1.56,.64,1)` (bouncy).
  - NOTE: forest is used for primary text buttons (not `#3DA35D`) because white-on-`#3DA35D` is only ~3.2:1 — insufficient for small text. Reserve `#3DA35D` fills for large glyphs/icons.
- **Full-width checkout:** background `#23543A`, text white, Fredoka 700 18px, padding 18px, radius 18px, shadow `0 14px 28px -10px rgba(35,84,58,.6)`.
- **Secondary:** background `#FFFFFF`, text `#23543A`, Fredoka 700 15px, radius 16px, shadow `0 4px 12px -6px rgba(42,42,36,.25)`.
- **Outline:** transparent, 2px border `#3DA35D`, text `#3DA35D`, radius 16px.
- **Disabled:** background `#F2ECDF`, text `#6f6a58`, radius 16px.
- **Filter chips:** selected = `#23543A` bg / white text; unselected = `#FFFFFF` bg / `#2A2A24` text with shadow `0 3px 8px -5px rgba(42,42,36,.3)`. Radius 12px, 700 14px, padding 9px/18px.
- **Icon "+" buttons (add to cart):** 44×44, radius 12px, `#3DA35D` bg, white `+` glyph 22px 700. Needs `aria-label` (e.g. "Add Avocado").

### Inputs & controls
- **Search field:** `#FFFFFF` bg, radius 16px, padding 14px/18px, inset border `inset 0 0 0 1px #ece5d6`. Leading search icon (stroke `#6f6a58`). Placeholder text `#6f6a58`.
- **Text input:** white bg, 2px border `#ece5d6`, radius 16px, padding 14px/18px, Nunito 600 15px. Focus: border → `#3DA35D`. Label above: 700 13px `#6b6656`.
- **Quantity stepper:** white pill container radius 14px, inset border. Buttons 44×44 radius 10px — decrement `#F2ECDF` bg / `#23543A` glyph, increment `#3DA35D` bg / white glyph. Count: 800 18px, min-width 44px, centered. Functional state: integer, clamped at 0 minimum.
- **Toggle switch:** 52×30 track radius full, `#3DA35D` when on, 24px white knob. IMPLEMENTATION: build as a real `role="switch"` with `aria-checked`; do not convey state by color/position alone — add a text/icon affordance.
- **Checkbox:** 26×26 radius 8px, `#3DA35D` bg, white check glyph. Implement as real checkbox input.

### Cards
- **Product card:** surface `#FFFDF8`, 1px border `#ece5d6`, radius 24px, padding 12px. Image area: 120px tall, radius 16px (placeholder = striped gradient; drop real product photo here). Badge top-left (see badges). Name: 800 15px. Sub: 700 12px `#6f6a58`. Price: Fredoka 700 18px `#23543A`. Add button (see icon "+").
- **Badges:** "-20%" = `#D9503A` (tomato) bg / white; "Fresh" = `#23543A` bg / white. 800 11px, padding 5px/10px, radius 10px.
- **Order summary card:** white bg, radius 24px, padding 18px, inset border. Title Fredoka 700 16px. Rows: 700 14px, space-between. Divider: 1px dashed `#ece5d6`. Total row: label 800 15px, amount Fredoka 700 20px `#23543A`.

### Iconography
- Rounded outline set, stroke-width ~1.75–2px, round caps & joins, drawn in forest `#23543A`. Tiles: white, radius 16px, inset border. Set shown: cart, search, heart, user, leaf (from the Lucide icon family — feel free to use Lucide or an equivalent rounded set in-app). Mark decorative icons `aria-hidden`; give functional/interactive icons `aria-label`.

## Interactions & Behavior
- **Buttons:** bouncy hover lift `translateY(-3px) scale(1.03)`, 150ms `cubic-bezier(.34,1.56,.64,1)`. Full-width buttons scale only (`scale(1.02)`).
- **Steppers:** increment/decrement quantity; decrement clamps at 0.
- **Inputs:** focus changes border to primary green.
- **Focus ring (accessibility):** all interactive elements get `outline: 3px solid #23543A; outline-offset: 3px` on `:focus-visible`.
- No page navigation in the reference — it is a static component catalog.

## State Management
Minimal, per-component:
- Quantity stepper: integer count, clamp ≥ 0.
- Toggle: boolean on/off.
- Checkbox: boolean.
- Filter chips: single-select active category.
- Search / text inputs: controlled string values.
Real screens (product list, cart, checkout) will add product data fetching and cart totals — out of scope for this styleguide.

## Design Tokens

### Colors
- Primary green `#3DA35D` (fills, accents, large glyphs)
- Forest green `#23543A` (primary text buttons, prices, headings-on-cards, focus ring)
- Cream (page) `#FBF7EF`
- Surface `#FFFDF8`
- Sand `#F2ECDF`
- Hairline / border `#ece5d6`
- Ink (text) `#2A2A24`
- Muted text `#6b6656`
- Label / placeholder text `#6f6a58`
- Berry `#B03A6E` · Citrus `#E8952B` (use dark text on citrus) · Tomato `#D9503A`
- White `#FFFFFF`

### Typography
- Display / Headings: **Fredoka** (weights 500–700)
- Body / UI text: **Nunito** (weights 400–800)
- Mono (spec labels only): system monospace
- Scale (mobile px): Display 32 · Heading 22 · Body 16 · Caption 13. Section labels: 13px 700 uppercase, letter-spacing .14em, color `#6f6a58`.

### Radius
- Buttons/inputs 16px · chips/badges 10–12px · stepper 10–14px · cards 24px · sheet 36px · avatar/circle 50% · pills 999px.

### Shadows
- CTA `0 10px 22px -8px rgba(35,84,58,.5)`
- Checkout `0 14px 28px -10px rgba(35,84,58,.6)`
- Secondary `0 4px 12px -6px rgba(42,42,36,.25)`
- Chip `0 3px 8px -5px rgba(42,42,36,.3)`
- Inset borders `inset 0 0 0 1px #ece5d6`

### Spacing
- Sheet padding 36px · section gap 30px · component gap 10–18px · card padding 12px · input padding 14px/18px.

## Accessibility notes (already applied in the reference)
- Muted greys darkened to meet WCAG AA (`#6b6656` / `#6f6a58` ≈ 5:1 on cream).
- Primary text buttons use forest `#23543A` (white-on-`#3DA35D` fails AA for small text).
- Touch targets ≥ 44px (steppers, add buttons).
- `:focus-visible` outline on all interactive elements.
- Add-to-cart buttons carry `aria-label`.
- TODO in real app: implement toggle as `role="switch"` and don't rely on color alone; label functional icons, hide decorative ones.

## Assets
- Icons: rounded stroke set matching the **Lucide** family (cart, search, heart, user, leaf). Use Lucide or equivalent in-app.
- Product images: placeholders only (striped gradients labeled "product shot") — supply real photography.
- Fonts: Fredoka + Nunito (Google Fonts).

## Files
- `Grocery Styleguide.dc.html` — the full design reference (all components inline).
- `support.js` — browser runtime for the reference file only; do not port.
