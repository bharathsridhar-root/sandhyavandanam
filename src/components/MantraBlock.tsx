"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { MantraEntry } from "@/content/types";
import { gesturesById } from "@/content/gestures";
import { ScriptText } from "./ScriptText";
import { GesturePanel } from "./GesturePanel";
import { GlossedText } from "./GlossedText";

/**
 * The core repeating unit of the site — CLAUDE.md §7 Layout: script line →
 * English meaning line → inner-meaning paragraph, in that fixed order every
 * time, with an optional Gesture panel docked beside it (below on mobile).
 * Source citations live in the content files and CLAUDE.md rather than in
 * the reading UI itself, kept out of the way of the text. A gentle
 * fade/rise plays once as the block scrolls into view; prefers-reduced-motion
 * drops the vertical movement per CLAUDE.md §7 Motion.
 */
export function MantraBlock({ mantra }: { mantra: MantraEntry }) {
  const gestures = gesturesById(mantra.gestures);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-6 py-8 lg:flex-row lg:items-start"
    >
      <div className="min-w-0 flex-1 space-y-4">
        <ScriptText
          as="p"
          devanagari={mantra.devanagari}
          tamil={mantra.tamil}
          className="text-2xl text-ink sm:text-[1.75rem]"
        />
        {mantra.iast && (
          <p className="font-ui text-sm italic text-muted-ink">{mantra.iast}</p>
        )}
        <p className="font-display text-lg italic leading-relaxed text-ink-soft sm:text-xl">
          {mantra.englishMeaning}
        </p>
        <p className="font-body text-[1.0625rem] leading-relaxed text-ink-soft">
          <GlossedText text={mantra.innerMeaning} />
        </p>
      </div>
      <GesturePanel gestures={gestures} />
    </motion.div>
  );
}
