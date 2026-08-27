"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A click-to-reveal glossary term. Click (not just hover) so it works the
 * same on touch and desktop — CLAUDE.md §7 Glossary tooltip, made explicitly
 * interactive per request.
 */
export function GlossaryTerm({ term, definition, children }: { term: string; definition: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <span ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`Definition of ${term}`}
        className="cursor-help border-b border-dotted border-muted-ink text-inherit underline-offset-4 hover:border-kumkum hover:text-kumkum"
      >
        {children}
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 z-30 mb-2 w-56 -translate-x-1/2 rounded-md border border-hairline bg-canvas-raised p-3 text-left font-ui text-xs font-normal normal-case leading-snug text-ink shadow-lg"
        >
          <span className="mb-1 block font-medium text-kumkum">{term}</span>
          {definition}
        </span>
      )}
    </span>
  );
}
