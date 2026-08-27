"use client";

import { useScript } from "@/lib/script-context";

/**
 * Renders whichever script is active, with the matching font and a correct
 * `lang`/`script` hint — CLAUDE.md §Accessibility. Use for mantra text and
 * for gesture names (gesture names are Sanskrit terms rendered in a script
 * too, so they switch along with the mantras — CLAUDE.md §5).
 */
export function ScriptText({
  devanagari,
  tamil,
  className = "",
  as: Tag = "p",
}: {
  devanagari: string;
  tamil: string;
  className?: string;
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3";
}) {
  const { script } = useScript();
  const text = script === "devanagari" ? devanagari : tamil;
  // BCP-47 language + ISO 15924 script subtag (sa-Deva / sa-Taml) so screen
  // readers and browser find-in-page track the active script — CLAUDE.md
  // §Accessibility.
  const lang = script === "devanagari" ? "sa-Deva" : "sa-Taml";
  return (
    <Tag className={`mantra-text ${className}`} lang={lang}>
      {text}
    </Tag>
  );
}
