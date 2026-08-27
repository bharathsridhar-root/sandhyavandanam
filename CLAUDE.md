# Sandhyāvandanam — Project Context

A single-purpose devotional website: it presents the Nitya Sandhyāvandanam — the
thrice-daily Vedic prayer performed at dawn, noon, and dusk — not as a
how-to ritual manual, but as an explained text. Every mantra appears with its
original script, its literal English meaning, and its **inner meaning**: why
the line exists, what it is doing to the practitioner, and how it fits the
larger arc of the rite. This file is the durable brief for anyone (human or
Claude) working on the codebase. Read it before writing code or content.

## 1. What this site is, and isn't

- **Is:** a calm, readable explanation of Sandhyāvandanam for someone who
  already chants it (and wants to understand what they're saying) or wants to
  understand it before they start.
- **Is not:** a ritual-instruction app, a panchangam/timing calculator, an
  audio-chanting app, or a general Hindu-scripture library. Scope stays
  narrow — Sandhyāvandanam only — so it can be done with real depth.
- **Tone:** reverent, unhurried, precise. No stock-photo mysticism, no
  gradient "spiritual app" clichés, no exclamation points. The design should
  feel closer to a well-set critical edition of a text than to a wellness app.

## 2. Source material

Primary reference: <https://vignanam.org/veda/nitya-sandhya-vandanam-devanagari.html>

**Operational note:** outbound network access from this sandboxed environment
is proxy-restricted, and `vignanam.org` (like most non-allowlisted domains,
including Wikipedia) could not be fetched while writing this document. No
mantra text in this repo should be treated as sourced from that page until a
session with working access has actually pulled it, character by character,
and it's been cross-checked. Until then, treat any Sanskrit/Tamil text
committed to this repo as **draft/placeholder** and mark it `TODO(verify)` in
the content files. This is sacred liturgical text recited aloud — silently
"fixing" a visarga, a nasal, or a word boundary from memory is not
acceptable; every mantra needs a citable source before it ships.

**Scoping decision (default, revisit if the source disagrees):** Sandhyāvandanam
mantras differ by Veda śākhā (Ṛgveda, Śukla Yajurveda, Taittirīya/Kṛṣṇa
Yajurveda, Sāmaveda) and by regional sampradāya. Default to whatever single
recension the vignanam.org page presents rather than merging variants — a
website that silently blends traditions produces text nobody should actually
chant. If the source page itself offers multiple śākhā tabs, that becomes a
third, independent switcher (śākhā), not folded into the script switcher.

## 3. Content model

Every mantra/verse is one content unit with these fields:

```jsonc
{
  "id": "achamanam-1",
  "section": "achamanam",           // see ritual structure below
  "devanagari": "ॐ केशवाय स्वाहा ।",
  "tamil": "ௐ கேசவாய ஸ்வாஹா ।",      // Tamil-script rendering of the same sound
  "iast": "oṃ keśavāya svāhā",       // optional, aids screen readers + search
  "englishMeaning": "Om, to Keshava, svaha (I offer).",
  "innerMeaning": "The twenty-four names sipped/touched here invoke the twenty-four forms of Vishnu presiding over the body's own faculties — the water offered is a symbolic purification of perception before anything is spoken to the divine.",
  "citation": "TODO(verify): vignanam.org nitya-sandhya-vandanam-devanagari.html"
}
```

Rules:
- `devanagari` and `tamil` must be **the same mantra**, script-transliterated
  for pronunciation — not independent translations of each other. Tamil
  readers chanting from Tamil script should produce the same Sanskrit sounds
  a Devanagari reader produces.
- `englishMeaning` is a plain, literal rendering — what the words say.
- `innerMeaning` is the exegesis — what the line *does* (purificatory,
  meditative, cosmological) and why it's placed where it is in the sequence.
  This is the field that makes the site worth building; don't let it become
  filler. Cite the interpretive tradition when one is drawn on (Taittirīya
  Brāhmaṇa commentary, a named commentator, etc.) rather than presenting
  personal gloss as settled doctrine.
- English meaning is **always visible** regardless of script toggle — see §5.

## 4. Ritual structure (reference outline)

Use this as the section/navigation spine. Confirm against the source page and
adjust rather than treating it as gospel — traditions vary in exact ordering
and inclusion.

| Order | Section (IAST) | What it is |
|---|---|---|
| 1 | Prātaḥ-saṅkalpa / Ācamanam | Sipping water while invoking names of Viṣṇu; declares intent to perform the rite |
| 2 | Bhūtocchāṭanam | Clearing inauspicious influences from the space |
| 3 | Prāṇāyāmam | Regulated breath, precedes and steadies everything that follows |
| 4 | Saṅkalpam | The formal, spoken resolve — naming the day, place, and purpose of the act about to be performed |
| 5 | Mārjanam | Sprinkling water on oneself with purificatory verses |
| 6 | Aghamarṣaṇam | Mantra of release from accumulated sin/impurity, followed by another Ācamanam |
| 7 | Prātaḥ / Mādhyāhnika / Sāyaṃ Arghyapradānam | Offering water to Sūrya — the form and mantra shift by time of day (rising, zenith, setting sun) |
| 8 | Gāyatrī Āvāhanam | Invocation of the Gāyatrī as a living presence, not a fixed idol |
| 9 | Gāyatrī Japa | Silent/measured repetition of the Gāyatrī mantra — the ritual's center of gravity |
| 10 | Sūryopasthānam | Standing prayer to the sun as witness and sustaining power |
| 11 | Abhivādanam | Self-identification — gotra, pravara, Veda, śākhā — spoken to elders/the divine |
| 12 | Digdevatā Namaskāram | Salutation to the guardian deities of the directions |
| 13 | Samarpaṇam | Closing offering of the act itself, without claim to its fruit |

Design the site so the **three sandhyās** (prātaḥ/dawn, mādhyāhnika/noon,
sāyam/dusk) are visible as a throughline — arghyapradānam differs across
them and that's a natural place to show the same skeleton with three
different moments of the sun.

## 5. Core interaction requirement: script switch

A persistent, always-reachable control (header, not buried in a menu) toggles
mantra script between **Devanagari** and **Tamil**. This is the one
non-negotiable interaction of the whole site.

- Switching script **never** hides or changes the English meaning or inner
  meaning — those columns are script-agnostic and stay put.
- State persists across navigation within a session (localStorage is fine;
  no account system needed).
- Prefer a simple two-state pill/switch over a full language dropdown — this
  isn't i18n of UI strings (the UI chrome can stay English-only for v1), it's
  a *script* switch on the liturgical text specifically. Don't conflate the
  two in the implementation — keep "UI locale" and "mantra script" as
  separate concerns even though v1 only needs the latter, so a future Telugu
  or Kannada script option is an additive third state, not a refactor.
- Devanagari is the default script on first visit (matches the source
  material and is the most common convention for print editions).

## 6. Design language

Inspired by the material culture *around* the ritual rather than generic
"spiritual app" tropes: the cream of aged palm-leaf and handmade paper, the
soot-black of manuscript ink, the vermillion of kumkum, the turmeric-gold of
dawn light and sandalwood paste, and the deep indigo of dusk — the actual
color arc the three sandhyās move through in a single day. Sacred geometry
(the yantra, the temple gopuram's repeating tiers) informs rhythm and
repetition in layout, not literal ornament plastered on every section.

This section is written with the same rigor as a professional design-system
brief (structured token tables, explicit component behavior) — that rigor is
what's being borrowed from reference material studied for this project, not
any of its actual colors, fonts, or layout choices, which are unrelated to
this site's subject and shouldn't leak in.

### Colors

| token | value | role |
|---|---|---|
| `canvas` | `#FBF6EA` | Page ground — unbleached cotton/palm-leaf cream, never pure white |
| `canvas-raised` | `#F4EBD8` | Cards, mantra panels — one step warmer than canvas |
| `ink` | `#2A1E17` | Primary text — soot-ink brown-black, never pure black |
| `ink-soft` | `#4A392E` | Secondary text, inner-meaning body copy |
| `muted-ink` | `#7A6752` | Captions, citations, metadata |
| `hairline` | `#D8C7A6` | 1px rules, card borders, dividers — sandalwood tone |
| `kumkum` | `#B23A2E` | Primary accent — active states, the script-switch, key emphasis. Used sparingly, like tilaka |
| `turmeric` | `#C98A2C` | Secondary accent — dawn/gold moments, hover states, section markers for Prātaḥ |
| `dusk` | `#232B45` | Dark surface for the Sāyaṃsandhya (evening) sections/footer — deep indigo, not black |
| `dusk-ink` | `#EDE3C8` | Text on `dusk` surfaces — warm off-white, not pure white |

Three accent moments — `turmeric` (dawn), a bright warm neutral for noon
(lean on `canvas-raised` + `kumkum` rather than a fourth hue), and `dusk`
(evening) — are allowed to lightly tint whichever ritual section they
belong to. This is the one place the palette is allowed to shift by
content; the chrome (nav, footer, UI controls) stays on the neutral
cream/ink pair throughout so the site doesn't fragment into three
mismatched skins.

### Typography

Three scripts have to sit on the same page and look like they belong to one
family, not three unrelated fonts stapled together. Anchor on the **Tiro**
family, which Google Fonts publishes in matched serif cuts across scripts
(manuscript-adjacent letterforms, not generic UI Devanagari/Tamil):

| token | family | use |
|---|---|---|
| `mantra-devanagari` | Tiro Devanagari Sanskrit | Mantra text when script switch is set to Devanagari |
| `mantra-tamil` | Tiro Tamil | Mantra text when script switch is set to Tamil |
| `display` | Cormorant, serif | Page/section titles, the mantra's English meaning line when set large |
| `body` | EB Garamond, serif | Inner-meaning prose, running explanatory copy |
| `ui` | Inter, sans-serif | Navigation, buttons, labels, captions, the script switch itself |

| token | size | weight | leading | use |
|---|---:|---:|---:|---|
| `hero-title` | 3.5rem | 500 | 1.1 | Home page title (Devanagari/Tamil "सन्ध्यावन्दनम्" set in `display` or the active mantra font) |
| `section-title` | 2rem | 500 | 1.2 | Ritual section headers (Ācamanam, Gāyatrī Japa, …) |
| `mantra-text` | 1.75rem | 400 | 1.9 | The verse itself — generous leading, this is read/chanted, not skimmed |
| `meaning-text` | 1.125rem | 400 | 1.6 | English literal meaning, set in `display` italic or `body` |
| `inner-meaning` | 1.0625rem | 400 | 1.65 | Exegesis prose, `body` |
| `label` | 0.8125rem | 500 | 1.4 | Section eyebrows, citations, UI labels, slight letter-spacing |

Guidance:
- Never shrink `mantra-text` below a size comfortable for someone chanting
  along; this is the one place legibility beats density.
- Devanagari and Tamil need **different** line-heights to look balanced
  (Tamil vowel signs and Devanagari mātrās have different vertical rhythm) —
  don't hardcode one `line-height` across both scripts; let each script
  token carry its own.
- Load only the Devanagari/Tamil weights actually used (400/500) — these are
  large font files; don't pull the full variable-font range for a static
  text site.

### Layout

- Single column for mantra content, generously wide margins — this is a
  reading/chanting surface, not a dashboard. Max content width around
  `42rem`–`48rem` for the mantra column itself, even on wide viewports.
  Optional side rail on desktop for section navigation, not additional
  content.
- Each mantra is a self-contained block: script line → English meaning line
  → inner-meaning paragraph (initially visible or one soft expand — don't
  bury the inner meaning behind a click by default, it's the point of the
  site) → citation, in that fixed order every time. Repetition of a single
  honest layout, over and over, is the "sacred geometry" here — not literal
  yantra graphics.
- Section dividers are thin `hairline` rules with a small `label`-styled
  section name, echoing a manuscript's marginal chapter markers rather than
  a card-based app UI.
- The three sandhyās can be presented as three long-form sections on one
  page (simplest, works for v1) or three routed pages under a shared shell —
  decide based on total content length once real text is in; don't
  over-architect this before the content exists.

### Visual language

- No stock deity photography, no lotus-and-gradient clipart, no incense-smoke
  stock video. If imagery is used at all, keep it to spare line-art in the
  `ink`/`kumkum` palette (a sun disc, a water vessel, a single diya) used the
  way the Ācamanam/Gāyatrī icons would appear in a printed ritual manual —
  small, functional, not decorative filler.
- Motion is minimal and slow: a gentle fade/rise on scroll-into-view at most.
  Nothing should feel like a marketing site. No parallax, no autoplay audio.
- `dusk` sections (if used for Sāyaṃsandhya or the footer) are the one place
  allowed real contrast — same principle as a printed page using a shaded
  box for a specific passage, not a "dark mode toggle."

### Components

- **Script switch** — two-state pill, `kumkum` for the active state, `ui`
  font, positioned in the header, always visible, never nested in a menu.
- **Mantra block** — the core repeating unit described in Layout above.
- **Section nav** — a slim table of contents (the 13 steps in §4, grouped by
  sandhyā) that scroll-links into the page; sticky only if it doesn't crowd
  the reading column.
- **Citation footer** — every mantra block ends in a small `label`-styled
  citation/source line. This is not optional decoration; it's the site's
  credibility for liturgical accuracy.
- **Glossary tooltip** (optional, nice-to-have) — hovering an unfamiliar term
  (gotra, pravara, arghya) in the inner-meaning prose surfaces a one-line
  definition, so paragraphs don't have to over-explain inline.

### Responsive behavior

- Mobile is the primary target — most people chanting along will use a
  phone. `mantra-text` and touch target sizes (script switch, nav) should be
  tuned for one-handed phone use first, desktop second.
- Section nav collapses to a simple top dropdown or bottom sheet on mobile
  rather than disappearing.
- Never truncate a mantra or its inner meaning responsively — reflow, don't
  hide.

### Accessibility

- Real semantic HTML for mantra blocks (not `div` soup) so screen readers
  navigate section-by-section.
- `lang` attributes set correctly per script (`lang="sa" script="Deva"` /
  `lang="sa" script="Taml"` as appropriate) so screen readers and browser
  find-in-page behave sensibly when the script switch changes.
- Color contrast: `ink` on `canvas` and `dusk-ink` on `dusk` both need
  verification at WCAG AA before shipping; the warm off-black/off-white pair
  was chosen for tone but must still pass contrast checks as implemented.
- `kumkum` accents must never be the *only* signal for interactive state
  (pair with underline/weight change too).

## 7. Suggested tech stack

Nothing is committed yet (repo is currently empty). Recommended, but open to
revision once work starts:

- **Framework:** Next.js (App Router) + TypeScript — static content site,
  no auth, no backend beyond maybe a future audio asset. SSG is enough.
- **Styling:** Tailwind CSS with the tokens in §6 wired in as theme
  extensions, so `bg-canvas`, `text-kumkum`, `font-mantra-devanagari`, etc.
  are real utility classes instead of ad-hoc values scattered through JSX.
- **Fonts:** `next/font/google` for Tiro Devanagari Sanskrit, Tiro Tamil,
  Cormorant, EB Garamond, Inter — self-hosted via Next's font pipeline
  (no runtime Google Fonts request, better for a text-heavy reading site).
- **Content:** structured JSON or YAML per §3's schema, one file per ritual
  section, imported at build time — not a CMS, not a database. This is
  fixed liturgical text; it doesn't need dynamic authoring infrastructure.
- **Script switch state:** a small React context + `localStorage`, no
  external state library needed for one boolean-ish piece of state.

## 8. Practical implementation guidance

**Preserve**
- The fixed per-mantra order: script → English meaning → inner meaning →
  citation. Consistency here is what makes the site trustworthy to use
  while actually chanting.
- English meaning always on screen, regardless of script switch state.
- The warm cream/ink neutral base; let `kumkum`/`turmeric`/`dusk` stay rare
  and purposeful.
- One serif voice for reading (Cormorant/EB Garamond), one sans for UI
  chrome (Inter) — don't let a fourth typeface creep in.

**Avoid**
- Merging mantra variants from different śākhās into one "composite" text.
- Treating the script switch as a general i18n/locale switch — it changes
  the liturgical script only.
- Stock "spiritual" visual clichés (gradients, glowing mandalas, lotus
  clipart, incense-smoke hero video).
- Publishing any mantra text that hasn't been checked against a citable
  source — no text sourced purely from model memory.
- Over-building content tooling (CMS, admin UI) for what is, at this scope,
  a fixed, hand-verified body of text.

**Recommended build order**
1. Get verified source text for at least Prātaḥsandhyā (the most commonly
   practiced of the three) in Devanagari, with English meaning and citation.
   Do not proceed to design/build with placeholder Sanskrit.
2. Stand up the content schema (§3) and Tailwind theme tokens (§6).
3. Build the mantra block component and one full section (Ācamanam through
   Aghamarṣaṇam) end to end, including the script switch.
4. Extend to the rest of Prātaḥsandhyā, then Mādhyāhnika and Sāyaṃsandhya.
5. Add section nav, citation footer, responsive pass, accessibility pass.
6. Write inner-meaning prose last for each section once the literal text is
   locked — exegesis should follow settled text, not be drafted against
   text that might still change.

## 9. Open questions (need a decision before/while building)

- Which śākhā/tradition does the source page actually present? Confirm once
  it can be fetched, and state it explicitly on the site (don't leave it
  implicit) — practitioners from a different tradition need to know this
  isn't necessarily their exact text.
- Tamil rendering: transliteration of Sanskrit sounds into Tamil script has
  known ambiguities (retroflex/aspirate distinctions Tamil script doesn't
  natively mark). Decide whether to follow the Grantha-augmented convention
  common in Tamil Brahmin ritual books (adds Grantha letters for missing
  sounds) or plain Tamil script, and note the choice on the site.
- Should Telugu/Kannada be a stated future scope, or explicitly out of
  scope? Affects whether the script-switch component is built for N scripts
  from the start or genuinely just two.
- Audio (someone chanting each mantra) is a natural future addition but is
  out of scope for v1 per §1 — revisit only after the text layer is solid.
