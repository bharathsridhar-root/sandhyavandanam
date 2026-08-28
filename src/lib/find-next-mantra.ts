/**
 * Finds the next mantra block after the given one, in document order —
 * used by Guided pace to auto-scroll and auto-continue into whatever comes
 * next, mantra or step or sandhyā boundary alike, since the page lays all
 * three sandhyās out as one continuous scroll.
 */
export function findNextMantraId(currentId: string): string | null {
  if (typeof document === "undefined") return null;
  const all = Array.from(document.querySelectorAll<HTMLElement>("[data-mantra-block]"));
  const index = all.findIndex((el) => el.dataset.mantraBlock === currentId);
  if (index === -1) return null;
  const next = all[index + 1];
  return next?.dataset.mantraBlock ?? null;
}

export function scrollToMantra(id: string, instant: boolean) {
  if (typeof document === "undefined") return;
  const all = Array.from(document.querySelectorAll<HTMLElement>("[data-mantra-block]"));
  const el = all.find((node) => node.dataset.mantraBlock === id);
  el?.scrollIntoView({ behavior: instant ? "auto" : "smooth", block: "center" });
}
