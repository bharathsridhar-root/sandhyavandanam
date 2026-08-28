"use client";

import { useMemo } from "react";
import { useScript } from "@/lib/script-context";
import { tokenizeWords } from "@/lib/syllables";

/**
 * Renders mantra text word-by-word so Guided pace can highlight the word
 * currently being read. Falls back to plain running text when
 * activeWordIndex is -1 (not playing) — identical rendering to ScriptText's
 * mantra-text styling either way.
 */
export function MantraText({
  devanagari,
  tamil,
  activeWordIndex,
  className = "",
}: {
  devanagari: string;
  tamil: string;
  activeWordIndex: number;
  className?: string;
}) {
  const { script } = useScript();
  const text = script === "devanagari" ? devanagari : tamil;
  const lang = script === "devanagari" ? "sa-Deva" : "sa-Taml";
  const words = useMemo(() => tokenizeWords(text), [text]);

  return (
    <p className={`mantra-text ${className}`} lang={lang}>
      {words.map((word, i) => (
        <span
          key={i}
          className={
            i === activeWordIndex
              ? "guided-word-active"
              : activeWordIndex >= 0 && i < activeWordIndex
                ? "guided-word-done"
                : undefined
          }
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
