"use client";

import { useScript } from "@/lib/script-context";

/**
 * Two-state pill, kumkum for the active state, always visible in the header,
 * never nested in a menu. CLAUDE.md §6 — the one non-negotiable interaction
 * of the site. Never nest inside a locale/i18n dropdown: this switches the
 * mantra script only, not UI language.
 */
export function ScriptSwitch() {
  const { script, setScript } = useScript();

  return (
    <div
      role="group"
      aria-label="Mantra script"
      className="inline-flex items-center rounded-full border border-hairline bg-canvas-raised p-1 text-sm font-ui"
    >
      <button
        type="button"
        aria-pressed={script === "devanagari"}
        onClick={() => setScript("devanagari")}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          script === "devanagari"
            ? "bg-kumkum text-canvas font-semibold underline underline-offset-4"
            : "text-ink-soft hover:text-ink"
        }`}
      >
        देवनागरी
      </button>
      <button
        type="button"
        aria-pressed={script === "tamil"}
        onClick={() => setScript("tamil")}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          script === "tamil"
            ? "bg-kumkum text-canvas font-semibold underline underline-offset-4"
            : "text-ink-soft hover:text-ink"
        }`}
      >
        தமிழ்
      </button>
    </div>
  );
}
