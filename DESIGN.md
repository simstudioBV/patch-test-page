# Design rules

This page mirrors Patch's local Next.js widget demo. Keep design changes
consistent with these rules so the page stays visually coherent across edits.

## Typography

- System font stack only: `system-ui, -apple-system, sans-serif`. Do not import
  external fonts.
- Body and muted colors come from the CSS variables in `app/globals.css`.
- The page-level `h1` uses the Tailwind `text-2xl` role. Section headings use
  `text-lg`.

## Color

- Background: neutral off-white page, white cards.
- Borders: restrained neutral border token.
- Primary action: dark neutral background with white text.

## Layout

- Single column, `max-width: 720px`, centered.
- Section cards: 24px padding, 8px border-radius, 1px border.
- Spacing should stay on Tailwind's default scale and match the current page
  rhythm.

## Don'ts

- Do not turn this into a landing page or product site.
- Do not add decorative imagery, animation libraries, or unrelated sections.
- Do not hide the page content behind instructions or setup UI.
