/**
 * Splits mantra text into words for Guided pace's word-by-word highlight
 * and per-word timing. Splits on whitespace only, so punctuation marks
 * (danda ।, double danda ॥) stay as their own short tokens rather than
 * being glued to the word before them — they read as brief pauses.
 */
export function tokenizeWords(text: string): string[] {
  return text.split(/\s+/).filter(Boolean);
}

const DEVANAGARI_INDEPENDENT_VOWEL = /[ऄ-औॠ-ॡ]/;
const DEVANAGARI_CONSONANT = /[क-हक़-य़]/;
const DEVANAGARI_VIRAMA = "्";
const DEVANAGARI_OM = "ॐ";

const TAMIL_INDEPENDENT_VOWEL = /[அ-ஔ]/;
const TAMIL_CONSONANT = /[க-ஹ]/;
const TAMIL_VIRAMA = "்";
const TAMIL_OM = "ௐ";

/**
 * Estimates a word's akshara (syllable) count from its script rather than
 * its raw character length, so a short word with a conjunct consonant
 * (e.g. क्ष) isn't timed as if it were as long as it looks. A consonant
 * counts as a syllable unless it's immediately hushed by a following
 * virama (it's then part of the next consonant's conjunct); vowel signs
 * (mātrās) replace the inherent vowel of the same syllable, so they don't
 * add one. Punctuation-only tokens (।, ॥) get a small fixed weight so they
 * read as a brief pause rather than a full beat.
 */
export function estimateSyllableWeight(word: string): number {
  let count = 0;
  let sawLetter = false;

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    const next = word[i + 1];

    if (ch === DEVANAGARI_OM || ch === TAMIL_OM) {
      count += 1;
      sawLetter = true;
      continue;
    }

    if (DEVANAGARI_INDEPENDENT_VOWEL.test(ch) || TAMIL_INDEPENDENT_VOWEL.test(ch)) {
      count += 1;
      sawLetter = true;
      continue;
    }

    if (DEVANAGARI_CONSONANT.test(ch) || TAMIL_CONSONANT.test(ch)) {
      sawLetter = true;
      const suppressed = next === DEVANAGARI_VIRAMA || next === TAMIL_VIRAMA;
      if (!suppressed) count += 1;
    }
  }

  if (!sawLetter) {
    // Pure punctuation (।, ॥) or a stray mark — a brief pause, not a beat.
    return 0.4;
  }

  return Math.max(count, 1);
}

/** Per-word durations in milliseconds for a set of tokenized words. */
export function computeWordDurations(words: string[], msPerSyllable: number): number[] {
  return words.map((w) => Math.round(estimateSyllableWeight(w) * msPerSyllable));
}
