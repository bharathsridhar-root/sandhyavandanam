/**
 * Sourcing status for mantra/gesture entries in this repo — see CLAUDE.md §2.
 */

export const PRIMARY_SOURCE =
  "Kaustubha Chakravarthy, \"Yajurveda Sandhyavandanam — detailed procedure with illustrations\" (ver 4.0, Bangalore, 25 March 2010)";

export const BOOK_SOURCE =
  "P. Seshadri Iyer, Sandhya Vandanam (Bhavan's Book University, ed. R. R. Diwakar & S. Ramakrishnan, Bombay, 1974)";

/** Checked against the primary source PDF only. */
export function verified(page: number | string, note?: string): string {
  const base = `${PRIMARY_SOURCE}, p.${page}.`;
  return note ? `${base} ${note}` : base;
}

/** Checked against both independent sources and found to agree — the strongest citation this project can currently give. */
export function doubleVerified(pdfPage: number | string, bookPage: number | string, note?: string): string {
  const base = `Cross-verified against two independent sources: ${PRIMARY_SOURCE}, p.${pdfPage}; and ${BOOK_SOURCE}, p.${bookPage}.`;
  return note ? `${base} ${note}` : base;
}

/**
 * Still-unverified draft text — not yet checked against any source in
 * this repo (sandhyaavandanam.pdf and YajurUpakarma-devanagari.pdf have
 * not yet been cross-checked either).
 */
export const VERIFY_NOTE =
  "TODO(verify): draft text from general knowledge of the standard Sandhyāvandanam procedure — not yet cross-checked against sandhyaavandanam.pdf or YajurUpakarma-devanagari.pdf; see CLAUDE.md §2.";

/** For entries containing amuka/"so-and-so" placeholders (gotra, name, date). */
export const VERIFY_NOTE_TEMPLATE =
  `${VERIFY_NOTE} This entry is also a fill-in-the-blank formula — "अमुक/amuka" marks where the practitioner's own gotra, name, or date belongs; that is traditional practice, not an error.`;
