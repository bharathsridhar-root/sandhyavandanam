export type SandhyaTime = "pratah" | "madhyahnika" | "sayam";

export interface LocalizedName {
  devanagari: string;
  tamil: string;
  iast: string;
  english: string;
}

export interface GestureEntry {
  id: string;
  name: { devanagari: string; tamil: string; iast: string };
  /** Ritual step ids (RitualStep["id"]) this gesture accompanies. */
  usedIn: string[];
  description: string;
  significance: string;
  illustration: string;
  /** Real descriptive alt text for the SVG — required per CLAUDE.md §5. */
  alt: string;
  citation: string;
}

export interface MantraEntry {
  id: string;
  devanagari: string;
  tamil: string;
  iast?: string;
  englishMeaning: string;
  innerMeaning: string;
  /** Optional ids into the gesture catalog (gestures.ts). */
  gestures?: string[];
  citation: string;
}

export interface RitualStep {
  id: string;
  order: number;
  name: LocalizedName;
  /** One-line description used in section dividers and nav. */
  summary: string;
  mantras: MantraEntry[];
}

export interface SandhyaMeta {
  time: SandhyaTime;
  name: LocalizedName;
  /** Rough time-of-day window, for the section subheading. */
  window: string;
  /** Design accent for this sandhya, per CLAUDE.md §7 Colors. */
  accent: "turmeric" | "noon" | "dusk";
  description: string;
}
