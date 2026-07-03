# Migronline

A web prototype of an iOS grocery-shopping app. Built to preview screens and
flows in the browser with a native-feeling iOS look.

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** + **Konsta UI** (iOS-style scaffolding)
- **lucide-react** icons

## Design

Implements the **"Harvest"** design system (warm, rounded, forest-green on
cream) from `design_handoff_grocery_styleguide/`. All surfaces use the Harvest
palette, Fredoka/Nunito type, and the shared component kit in
`src/components/ui.tsx`. The floating tab bar + detached search button keep an
iOS 26 **Liquid Glass** treatment (`src/components/Glass.tsx`).

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Screens

Discover · Products · Cook · Basket · Search — routed via `react-router-dom`
(hash routing), wrapped in an on-screen iPhone frame (`src/PhoneFrame.tsx`).
