"use client";

import Image from "next/image";
import type { GestureEntry } from "@/content/types";
import { ScriptText } from "./ScriptText";

/**
 * Docks beside its mantra block on desktop, below it on mobile — CLAUDE.md
 * §5. Carries the illustration, the gesture's name in the active script, a
 * one-line significance note, and the ritual step it belongs to. Never
 * inserted into the mantra block's own script → meaning → inner meaning →
 * citation order; it sits adjacent to it.
 */
export function GesturePanel({ gestures }: { gestures: GestureEntry[] }) {
  if (gestures.length === 0) return null;

  return (
    <aside
      aria-label={gestures.length > 1 ? "Accompanying gestures" : "Accompanying gesture"}
      className="flex w-full flex-col gap-4 sm:flex-row lg:w-64 lg:flex-none lg:flex-col"
    >
      {gestures.map((g) => (
        <figure
          key={g.id}
          className="flex-1 rounded-lg border border-hairline bg-canvas-raised p-4"
        >
          <div className="mx-auto aspect-square w-32 shrink-0">
            {/* Hand-authored line art — see /public/illustrations/gestures */}
            <Image
              src={g.illustration}
              alt={g.alt}
              width={128}
              height={128}
              className="h-full w-full"
              loading="lazy"
              unoptimized
            />
          </div>
          <figcaption className="mt-3 space-y-1.5 text-center">
            <ScriptText
              as="p"
              devanagari={g.name.devanagari}
              tamil={g.name.tamil}
              className="!text-base !leading-snug text-ink"
            />
            <p className="font-ui text-xs uppercase tracking-wide text-muted-ink">
              {g.name.iast}
            </p>
            <p className="font-body text-sm leading-relaxed text-ink-soft">
              {g.significance}
            </p>
          </figcaption>
        </figure>
      ))}
    </aside>
  );
}
