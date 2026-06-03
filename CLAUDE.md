# Engineering rules for the patch-test-page repo

Tiny Next.js App Router repo used as a smoke target for the Patch agent. Keep
the surface small and close to Patch's local widget demo page so agent fixes are
easy to inspect.

## Hard rules

1. Keep the root page in `app/page.tsx` aligned with Patch's
   `apps/web/app/widget-demo/page.tsx` unless a test explicitly asks for a page
   content change.
2. Do not embed the Patch widget in this repo. This target only contains the
   Next.js page code the agent should edit.
3. Use Tailwind utility classes and the theme tokens in `app/globals.css`. Do
   not add a component library or styling framework unless explicitly asked.
4. Run `bun run type-check` and `bun run build` before opening or updating an
   agent PR.

## Conventions

- Indent with two spaces.
- Comments explain the *why* when behavior would surprise a reader. Don't
  narrate markup or restate these rules.
- When asked to change copy: edit the visible text and leave structure alone
  unless the request implies otherwise.
- Keep this repo intentionally boring: one route, one page, and no backend.
