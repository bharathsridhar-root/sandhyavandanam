export interface GlossaryEntry {
  term: string;
  definition: string;
}

/**
 * One-line definitions for Sanskrit/ritual terms that recur in the
 * inner-meaning prose, surfaced as click-to-reveal tooltips so paragraphs
 * don't have to over-explain inline — CLAUDE.md §7 "Glossary tooltip".
 * Keys are matched case-insensitively as whole words against running text.
 */
export const glossary: GlossaryEntry[] = [
  { term: "gotra", definition: "The patrilineal clan or lineage, traced to a founding sage, that a practitioner names as part of their identity in ritual." },
  { term: "pravara", definition: "The specific sage or short chain of sages within one's gotra, invoked by name in formulas like Abhivādanam." },
  { term: "sūtra", definition: "The ritual-manual tradition (e.g. Āpastamba) a practitioner's family follows for how Vedic rites are performed." },
  { term: "śākhā", definition: "The specific textual branch or recension of a Veda a practitioner studies and recites from." },
  { term: "arghya", definition: "Water offered upward through cupped palms toward the sun, rather than poured down as for ordinary use." },
  { term: "arghyam", definition: "Water offered upward through cupped palms toward the sun, rather than poured down as for ordinary use." },
  { term: "tarpaṇam", definition: "An offering of water, let run from the fingertips, made to satisfy and thank a deity, planet, or ancestor." },
  { term: "japa", definition: "Repeated recitation of a mantra, here counted on the fingers rather than aloud in full voice." },
  { term: "mudrā", definition: "A specific, prescribed hand or body position that accompanies a mantra or ritual moment." },
  { term: "sandhyā", definition: "Literally \"junction\" — the transitional moments of dawn, noon, and dusk when day and night (or rising and setting sun) meet." },
  { term: "upasthānam", definition: "A standing address or prayer offered directly to a deity, here the sun, as if before a living presence." },
  { term: "saṅkalpa", definition: "The formally spoken resolve that opens a Vedic rite, naming the specific act about to be performed." },
  { term: "prāṇāyāma", definition: "Regulated breath — a timed cycle of inhalation, retention, and exhalation, often carrying a mantra." },
  { term: "ācamanam", definition: "A small, deliberate sipping (and sometimes touching) of water as an act of purification." },
  { term: "vyāhṛti", definition: "One of the seven traditional \"utterances\" naming the worlds (bhūḥ, bhuvaḥ, svaḥ...), recited on the breath during Prāṇāyāma." },
  { term: "ṛta", definition: "Cosmic order or rightness — the underlying rightness of things, prior to and grounding moral or ritual law." },
  { term: "brahman", definition: "The ultimate, all-pervading reality the tradition holds underlies both the visible sun and one's own self." },
];

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Longest term first so multi-word/longer matches win over short substrings.
const sortedTerms = [...glossary].sort((a, b) => b.term.length - a.term.length);

export const glossaryPattern = sortedTerms.length
  ? new RegExp(`\\b(${sortedTerms.map((g) => escapeRegExp(g.term)).join("|")})\\b`, "gi")
  : null;

const byLowerTerm = new Map(glossary.map((g) => [g.term.toLowerCase(), g]));

export function lookupGlossary(term: string): GlossaryEntry | undefined {
  return byLowerTerm.get(term.toLowerCase());
}
