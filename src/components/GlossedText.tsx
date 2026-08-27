import { Fragment } from "react";
import { glossaryPattern, lookupGlossary } from "@/lib/glossary";
import { GlossaryTerm } from "./GlossaryTerm";

/**
 * Renders plain prose with recognized glossary terms made clickable —
 * only the first occurrence of each term per block, so the paragraph
 * doesn't turn into a field of underlines.
 */
export function GlossedText({ text }: { text: string }) {
  if (!glossaryPattern) return <>{text}</>;

  const seen = new Set<string>();
  const parts = text.split(glossaryPattern);

  return (
    <>
      {parts.map((part, i) => {
        const entry = lookupGlossary(part);
        if (entry && !seen.has(entry.term.toLowerCase())) {
          seen.add(entry.term.toLowerCase());
          return (
            <GlossaryTerm key={i} term={entry.term} definition={entry.definition}>
              {part}
            </GlossaryTerm>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
