/**
 * Closing band on `dusk`, the one place allowed real contrast, same
 * principle as a printed page using a shaded box for a specific passage,
 * not a "dark mode toggle." CLAUDE.md §7 Visual language.
 */
export function SiteFooter() {
  return (
    <footer className="bg-dusk px-6 py-12 text-dusk-ink">
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <p className="font-display text-lg italic">
          कायेन वाचा मनसेन्द्रियैर्वा, यद्यत् करोमि तत् समर्पयामि
        </p>
        <p className="font-ui text-sm leading-relaxed opacity-80">
          This is an in-progress explanation of the Nitya Sandhyāvandanam,
          not a certified ritual guide. Most mantra text and gesture
          descriptions on this site are now cross-verified against two
          independent published sources, kept in the project&rsquo;s own
          content files and documented in{" "}
          <code className="rounded bg-white/10 px-1 py-0.5 text-xs">CLAUDE.md</code>{" "}
          rather than printed under every mantra. See that file in the
          repository for the full sourcing status.
        </p>
        <p className="font-ui text-xs uppercase tracking-wide opacity-60">
          Prātaḥ · Mādhyāhnika · Sāyaṃ
        </p>
      </div>
    </footer>
  );
}
