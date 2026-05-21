# Design rules

This page is a single-file HTML demo. Keep design changes consistent with these
rules so the page stays visually coherent across edits.

## Typography

- System font stack only: `system-ui, -apple-system, sans-serif`. Do not import
  external fonts.
- Body text color is `#111`.
- Secondary / muted text is `#555`.
- Headings are weight 600. The page-level `h1` is 24px; section `h2` defaults
  apply.

## Color

- Background: `#fafafa` (page), `#fff` (cards/sections).
- Borders: `#e5e7eb`.
- Accent (links, interactive): `#2563eb`. Hover: `#1d4ed8`.

## Layout

- Single column, `max-width: 720px`, centered.
- Section cards: 20px padding, 8px border-radius, 1px border in the border
  color above.
- Spacing scale (margins/padding): 4px, 8px, 16px, 24px, 32px. No half-steps.

## Don'ts

- No JS frameworks. The page is intentionally one HTML file with inline CSS.
- No CSS-in-JS, no Tailwind, no preprocessors. Vanilla CSS only.
- No animation libraries. Plain CSS transitions are fine if a change calls for
  one.
