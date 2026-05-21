# Engineering rules for the patch-test-page repo

Throwaway demo page used as a smoke target for the Patch agent. Tiny scope —
one HTML file. Keep these rules tight so changes stay predictable.

## Hard rules

1. Do not introduce a build step. The page must remain a single-file `index.html`
   that opens directly in the browser. No `package.json`, no bundler, no `dist/`.
2. Vanilla CSS and vanilla JS only. No frameworks, no libraries via CDN, no
   preprocessors. See `DESIGN.md` for the visual constraints.
3. Keep all styling in the `<style>` block inside `index.html`. Do not split
   into a separate `.css` file.

## Conventions

- Indent with two spaces.
- One blank line between top-level `<section>` blocks.
- Comments explain the *why* when behavior would surprise a reader. Don't
  narrate the markup.
- When asked to change copy: edit the visible text and leave structure alone
  unless the request implies otherwise.
