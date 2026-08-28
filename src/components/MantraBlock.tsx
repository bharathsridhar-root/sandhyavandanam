"use client";

import { useCallback, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { MantraEntry } from "@/content/types";
import { gesturesById } from "@/content/gestures";
import { useScript } from "@/lib/script-context";
import { tokenizeWords } from "@/lib/syllables";
import { useGuidedPace } from "@/lib/use-guided-pace";
import { useGuidedPaceSettings } from "@/lib/guided-pace-context";
import { findNextMantraId, scrollToMantra } from "@/lib/find-next-mantra";
import { MantraText } from "./MantraText";
import { GuidedPaceControls } from "./GuidedPaceControls";
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
 *
 * Also hosts Guided pace: an opt-in, per-mantra play control that highlights
 * each word on a timer and, on finishing (all japa repetitions included),
 * auto-scrolls into and starts the next mantra on the page — the reader
 * chooses to start the flow; nothing moves on its own before that.
 */
export function MantraBlock({ mantra, uid }: { mantra: MantraEntry; uid: string }) {
  const gestures = gesturesById(mantra.gestures);
  const reduceMotion = useReducedMotion();
  const { script } = useScript();
  const { requestPlay } = useGuidedPaceSettings();

  const activeText = script === "devanagari" ? mantra.devanagari : mantra.tamil;
  const lang = script === "devanagari" ? "sa-Deva" : "sa-Taml";
  const words = useMemo(() => tokenizeWords(activeText), [activeText]);

  const handleComplete = useCallback(() => {
    const nextId = findNextMantraId(uid);
    if (!nextId) return;
    scrollToMantra(nextId, !!reduceMotion);
    window.setTimeout(() => requestPlay(nextId), reduceMotion ? 150 : 500);
  }, [uid, reduceMotion, requestPlay]);

  const guided = useGuidedPace({
    id: uid,
    words,
    text: activeText,
    lang,
    repeatable: mantra.repeatable,
    onComplete: handleComplete,
  });

  const activeWordIndex = guided.status === "playing" || guided.status === "paused" ? guided.wordIndex : -1;

  return (
    <motion.div
      data-mantra-block={uid}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-6 py-8 lg:flex-row lg:items-start"
    >
      <div className="min-w-0 flex-1 space-y-4">
        <MantraText
          devanagari={mantra.devanagari}
          tamil={mantra.tamil}
          activeWordIndex={activeWordIndex}
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
        <GuidedPaceControls
          status={guided.status}
          progress={guided.progress}
          totalReps={guided.totalReps}
          repsRemaining={guided.repsRemaining}
          repeatable={mantra.repeatable}
          onPlay={guided.play}
          onPause={guided.pause}
          onSetTotalReps={guided.setTotalReps}
        />
      </div>
      <GesturePanel gestures={gestures} />
    </motion.div>
  );
}
