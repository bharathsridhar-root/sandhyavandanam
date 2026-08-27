/**
 * Standing sourcing caveat for every mantra/gesture entry in this repo.
 *
 * This is a load-bearing warning, not boilerplate (see CLAUDE.md §2 "Current
 * status of the content in this repo"): the three named sources could not be
 * fetched from this sandboxed build environment, so every entry below is a
 * structurally-correct but unverified first draft, written from general
 * knowledge of the standard (Smārta / Yajurveda-common) Sandhyāvandanam
 * procedure. Good enough to design and build against — not good enough to
 * chant from, and not good enough to leave unverified before any real launch.
 */
export const VERIFY_NOTE =
  "TODO(verify): draft text from general knowledge of the standard Sandhyāvandanam procedure — not yet cross-checked against vignanam.org, sanskritdocuments.org/itrans/puja, knramesh.blogspot.com, or the incoming source PDF (all unreachable from this build session; see CLAUDE.md §2).";

/** For entries containing amuka/"so-and-so" placeholders (gotra, name, date). */
export const VERIFY_NOTE_TEMPLATE =
  `${VERIFY_NOTE} This entry is also a fill-in-the-blank formula — "अमुक/amuka" marks where the practitioner's own gotra, name, or date belongs; that is traditional practice, not an error.`;
