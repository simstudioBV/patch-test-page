/**
 * Standalone copy of Patch's local widget demo page content, without embedding
 * the Patch widget itself. The target repo only needs the code the agent edits.
 */
export default function WidgetDemoPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="mb-8">
        <h1 className="text-2xl">Patch widget demo</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Click the FAB at the bottom-right to drop a pin on any element. Open this page with{" "}
          <code className="rounded bg-muted px-1 py-0.5">?token=...</code>.
        </p>
      </header>

      <section className="mb-8 rounded-lg border bg-card p-6">
        <h2 className="mb-2 text-lg">Pricing</h2>
        <p className="text-sm text-muted-foreground">Three tiers, no surprises. Cancel anytime.</p>
        <button
          type="button"
          className="mt-4 rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground"
        >
          Let's go
        </button>
      </section>

      <section className="rounded-lg border bg-card p-6">
        <h2 className="mb-2 text-lg">FAQ</h2>
        <p className="text-sm">
          Question?{" "}
          <a href="#contact" className="underline">
            Get in touch
          </a>
          .
        </p>
      </section>
    </main>
  );
}
