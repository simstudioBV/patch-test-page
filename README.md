# patch-test-page

Tiny single-file HTML page used as a smoke target for the [Patch](https://github.com/simstudioBV/patch)
agent. Open `index.html` in a browser, embed the Patch widget against a Patch
project's token, leave feedback, click **Run Patch** from the studio dock, and
watch the agent open a PR against this repo.

## What lives here

- `index.html` — the demo page. Sections call out specific elements (hero
  heading, lede, card grid, footer) so annotations can be targeted at known
  selectors during testing.
- `DESIGN.md` — visual rules the agent should respect.
- `CLAUDE.md` — engineering rules (no build step, vanilla CSS/JS).

## Not a real project

There's no test suite, no CI, no deploy target. Edits land via the agent's PRs
and are reviewed by hand. The point is to exercise the Patch flow end-to-end
against a small, predictable surface.
