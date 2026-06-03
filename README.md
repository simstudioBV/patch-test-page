# patch-test-page

Minimal Next.js smoke target for the [Patch](https://github.com/simstudioBV/patch)
agent. The root page mirrors the editable content from Patch's local
`apps/web/app/widget-demo/page.tsx` so agent fixes happen against a real App
Router codebase.

## Run locally

```sh
bun install
bun run dev
```

Open:

```txt
http://localhost:3000
```

## What lives here

- `app/page.tsx` - the demo page content copied from Patch's Next.js widget
  demo, without embedding the widget itself.
- `app/globals.css` - Tailwind entrypoint and local theme tokens.
- `DESIGN.md` — visual rules the agent should respect.
- `CLAUDE.md` — engineering rules for agent edits.

## Checks

```sh
bun run type-check
bun run build
```

The point is to exercise the Patch flow end-to-end against a small, predictable
surface without requiring agents to work inside the full Patch monorepo.
