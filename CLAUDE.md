# Sandhyāvandanam — Project Context

A single-purpose devotional website: it presents the Nitya Sandhyāvandanam — the
thrice-daily Vedic prayer performed at dawn, noon, and dusk — not as a
how-to ritual manual, but as an explained text. Every mantra appears with its
original script, its literal English meaning, and its **inner meaning**: why
the line exists, what it is doing to the practitioner, and how it fits the
larger arc of the rite. Alongside the text, the site illustrates the **hand
gestures and postures (mudrās)** that accompany the ritual, because
Sandhyāvandanam is performed with the body as much as it is spoken — the
gestures are part of what's being explained, not decoration around it. This
file is the durable brief for anyone (human or Claude) working on the
codebase. Read it before writing code or content.

## 1. What this site is, and isn't

- **Is:** a calm, readable explanation of Sandhyāvandanam for someone who
  already chants it (and wants to understand what they're saying and doing)
  or wants to understand it before they start.
- **Is not:** a ritual-instruction app, a panchangam/timing calculator, an
  audio-chanting app, or a general Hindu-scripture library. Scope stays
  narrow — Sandhyāvandanam only — so it can be done with real depth.
- **Tone:** reverent, unhurried, precise. No stock-photo mysticism, no
  gradient "spiritual app" clichés, no exclamation points. The design should
  feel closer to a well-set critical edition of a text than to a wellness app.

## 2. Source material

Primary reference: <https://vignanam.org/veda/nitya-sandhya-vandanam-devanagari.html>

**Supporting references:**
- <https://knramesh.blogspot.com/2013/06/sandhyavandanam-its-significance.html> —
  explanatory/significance material; useful for grounding `innerMeaning`
  prose, not a substitute for a primary mantra-text source.
- <https://sanskritdocuments.org/itrans/puja/> (and the itrans-format
  Sandhyāvandanam document it links to) — a scholarly transliteration
  archive; potentially a stronger primary source than vignanam.org if it can
  ever be fetched, since it documents itrans text with editorial care.

**Operational note:** outbound network access from this sandboxed environment
is proxy-restricted to an allowlist, and none of the three URLs above —
including sanskritdocuments.org and the blogspot article — could be fetched
in any session so far (same failure as Wikipedia). No mantra text in this
repo should be treated as sourced from any of these pages until a session
with working access has actually pulled the content, character by character,
and it's been cross-checked. Until then, treat any Sanskrit/Tamil text
committed to this repo as **draft/placeholder** and mark it `TODO(verify)` in
the content files. This is sacred liturgical text recited aloud — silently
"fixing" a visarga, a nasal, or a word boundary from memory is not
acceptable; every mantra needs a citable source before it ships.

**Current status of the content in this repo:** a first implementation pass
populated `content/` with mantra and gesture text drafted from general
knowledge of the standard (Smārta/Yajurveda-common) Sandhyāvandanam
procedure, precisely because none of the three source URLs were reachable —
see the operational note above. Every entry's `citation` field says
`TODO(verify)` for this reason and that is a true, load-bearing warning, not
boilerplate: treat the mantra text as a structurally-correct but
**unverified draft** — good enough to build and design against, not good
enough to chant from or to leave unverified before any real launch. The next
priority whenever fetch access is available is running the actual source
pages/PDF against every entry and clearing those `TODO(verify)` markers one
section at a time.

**Second source (incoming):** the maintainer is adding a PDF of the
Sandhyāvandanam text directly to this repository. Once it's present, treat
it as a primary source alongside — or ahead of, if the two disagree — the
vignanam.org page, since it's a document that can actually be read in this
environment, unlike the network-blocked webpage. Practical handling:

- Store it under a clearly-named path, e.g. `content/sources/` (keep source
  documents out of the app's build/asset pipeline — they're reference
  material, not site assets).
- Cite page/section numbers from the PDF in the `citation` field of both
  mantra entries (§3) and gesture entries (§5) once it's used as a source.
- If the PDF includes its own diagrams of hand gestures, don't assume they
  can be reused verbatim — check what license or provenance the PDF carries
  before embedding its images directly. Default to **redrawing** the
  postures it shows in the site's own line-art style (§6/§7): this keeps
  the visual language consistent across the whole site and sidesteps
  uncertain reuse rights, while still treating the PDF as the accuracy
  source for what the gesture actually is.

**Scoping decision (default, revisit if the source disagrees):** Sandhyāvandanam
mantras differ by Veda śākhā (Ṛgveda, Śukla Yajurveda, Taittirīya/Kṛṣṇa
Yajurveda, Sāmaveda) and by regional sampradāya. Default to whatever single
recension the source presents rather than merging variants — a website that
silently blends traditions produces text nobody should actually chant. If a
source offers multiple śākhā tabs, that becomes a third, independent
switcher (śākhā), not folded into the script switcher.

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
  "gestures": ["gokarna-mudra"],      // optional, ids into the gesture catalog — see §5
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
- English meaning is **always visible** regardless of script toggle — see §6.
- `gestures` is optional and only present where a mantra/step is actually
  paired with a specific hand position or posture in the source — don't
  attach a gesture id to a mantra just to have visual variety.
- Gestures/mudrās themselves are modeled separately, one catalog entry per
  gesture rather than duplicated per mantra — see §5 for that schema.

## 4. Ritual structure (reference outline)

Use this as the section/navigation spine. Confirm against the source
material and adjust rather than treating it as gospel — traditions vary in
exact ordering and inclusion.

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

## 5. Gesture illustrations — mudrās and postures

Sandhyāvandanam isn't only spoken; the hands and body do specific,
prescribed things at specific points — a mudrā at Ācamanam, a different one
through Prāṇāyāmam, another set that precedes Gāyatrī japa. These aren't
incidental habits, they're treated in the tradition as functional: sealing
or directing the act, marking a transition, or embodying what the mantra
says rather than just accompanying it. That's worth showing visually, the
same way `innerMeaning` explains what a mantra line is *doing* — a small
line drawing of the actual hand shape communicates something prose alone
can't, and puts the body on equal footing with the text instead of treating
gesture as an afterthought.

**Working catalog** (draft skeleton — verify names, exact hand positions,
and which gestures the source material actually documents before
finalizing; don't illustrate a gesture the source doesn't support):

- **Gokarṇa mudrā** (Ācamanam) — right hand shaped like a cow's ear; water
  is sipped from the natural hollow at the base of the thumb rather than
  poured straight into the mouth.
- **Prāṇāyāma hasta** (Prāṇāyāmam) — right-hand nostril control (thumb and
  ring/little finger alternately closing each nostril); left hand typically
  resting on the left knee.
- **Mārjana / Aghamarṣaṇa gestures** — water taken and sprinkled, or
  discarded with force, using finger positioning distinct from ordinary
  washing.
- **Añjali mudrā** (Namaskāram, Sūryopasthānam, Abhivādanam) — palms joined;
  the same basic gesture of salutation takes a different meaning depending
  on where it's held (chest height vs. above the head) at each moment — the
  illustrations should make that contextual difference visible, not draw
  one generic "prayer hands" image and reuse it everywhere.
- **Arghya-pradāna posture** — standing, water offered through joined palms
  tilted so it runs off the fingertips toward the sun, distinct from
  pouring water downward for ordinary use.
- **Gāyatrī japa mudrās** — a traditional set of hand positions (commonly
  enumerated as roughly two dozen, e.g. Sumukham, Sampuṭam, Vitatam,
  Vistṛtam, and others) shown before Gāyatrī japa. Because the exact
  set/order/appearance varies by tradition and digest text (e.g.
  Dharmasindhu-style enumerations), this needs its own verified sub-list
  once the source is confirmed — do not invent an order or fill in unclear
  entries from memory.
- **Japa-gaṇanā mudrā** — the finger-counting method used to track Gāyatrī
  repetitions by hand (avoiding the index finger) when a mālā isn't used.
- **Diś-namaskāra postures** — turning to face each cardinal/intermediate
  direction for Digdevatā Namaskāram.

**Illustration style** — extends the site's line-art visual language
(§7) specifically to gestures:
- Single continuous-weight ink-brown (`ink`) line drawing, minimal shading,
  on the page's own canvas background — the register of a diagram in a
  printed ritual manual, not a "yoga app" render.
- Show only what's anatomically specific to the gesture — an abstracted
  hand/forearm or simple seated figure, no facial features or identity. The
  point is the hand shape, not a person.
- Consistent canvas size and line weight across every gesture drawing so
  they read as one plate series, not ad hoc illustrations added over time.

**Content model** — a separate catalog (e.g. `gestures.json`), referenced
by id from a mantra/section entry's optional `gestures` field (§3):

```jsonc
{
  "id": "gokarna-mudra",
  "name": { "devanagari": "गोकर्ण मुद्रा", "tamil": "கோகர்ண முத்திரை", "iast": "gokarṇa mudrā" },
  "usedIn": ["achamanam"],
  "description": "Right hand shaped like a cow's ear; water is sipped from the natural hollow at the base of the thumb rather than poured into the mouth directly.",
  "significance": "The cow-ear shape ties the act of purification to the cow as a symbol of purity in the tradition, and forces a slow, deliberate sip rather than a careless one.",
  "illustration": "/illustrations/gestures/gokarna-mudra.svg",
  "citation": "TODO(verify): source PDF, page/section"
}
```

**Component — Gesture panel:** a small illustration card that docks beside
the relevant mantra block on desktop (below it on mobile), carrying the
drawing, the gesture's name (in whichever script is active — gesture names
are Sanskrit terms too, so this ties into the script switch, §6), a
one-line note on its significance, and which ritual step it belongs to. It
sits adjacent to the mantra block; it doesn't interrupt the fixed
script → English meaning → inner meaning → citation order.

**Accessibility:** every gesture SVG needs real descriptive alt text — not
just the gesture's name — describing the hand position in words, e.g.
`"Right hand cupped like a cow's ear at chin height, left hand resting on
the left knee."` A screen-reader user should come away knowing what the
hands are doing, not just that a drawing exists.

## 6. Core interaction requirement: script switch

A persistent, always-reachable control (header, not buried in a menu) toggles
mantra script between **Devanagari** and **Tamil**. This is the one
non-negotiable interaction of the whole site.

- Switching script **never** hides or changes the English meaning or inner
  meaning — those columns are script-agnostic and stay put.
- Gesture names in the Gesture panel (§5) switch script too, for the same
  reason mantra text does — they're Sanskrit terms rendered in a script.
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

## 7. Design language

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
| `canvas-raised` | `#F4EBD8` | Cards, mantra panels, gesture panels — one step warmer than canvas |
| `ink` | `#2A1E17` | Primary text and gesture-drawing line color — soot-ink brown-black, never pure black |
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
| `body` | EB Garamond, serif | Inner-meaning prose, running explanatory copy, gesture significance notes |
| `ui` | Inter, sans-serif | Navigation, buttons, labels, captions, the script switch itself |

| token | size | weight | leading | use |
|---|---:|---:|---:|---|
| `hero-title` | 3.5rem | 500 | 1.1 | Home page title (Devanagari/Tamil "सन्ध्यावन्दनम्" set in `display` or the active mantra font) |
| `section-title` | 2rem | 500 | 1.2 | Ritual section headers (Ācamanam, Gāyatrī Japa, …) |
| `mantra-text` | 1.75rem | 400 | 1.9 | The verse itself — generous leading, this is read/chanted, not skimmed |
| `meaning-text` | 1.125rem | 400 | 1.6 | English literal meaning, set in `display` italic or `body` |
| `inner-meaning` | 1.0625rem | 400 | 1.65 | Exegesis prose, `body` |
| `gesture-caption` | 0.9375rem | 400 | 1.5 | Gesture significance note inside the Gesture panel, `body` |
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
  site) → citation, in that fixed order every time, with an optional
  Gesture panel (§5) docked beside it when a gesture applies. Repetition of
  a single honest layout, over and over, is the "sacred geometry" here —
  not literal yantra graphics.
- Section dividers are thin `hairline` rules with a small `label`-styled
  section name, echoing a manuscript's marginal chapter markers rather than
  a card-based app UI.
- The three sandhyās can be presented as three long-form sections on one
  page (simplest, works for v1) or three routed pages under a shared shell —
  decide based on total content length once real text is in; don't
  over-architect this before the content exists.

### Visual language

- No stock deity photography, no lotus-and-gradient clipart, no incense-smoke
  stock video. Imagery is limited to the spare line-art described in §5 —
  gesture/mudrā drawings in the `ink`/`kumkum` palette — used functionally,
  the way diagrams appear in a printed ritual manual, not as decorative
  filler. Every drawing on the site should be explaining a specific hand
  position or posture; if it isn't tied to a real gesture, it doesn't belong.
- Motion is deliberate and slow, and always **tied to the ritual's own
  content**, never decorative for its own sake. Two motion systems are in
  scope:
  - A gentle fade/rise on scroll-into-view for mantra blocks and gesture
    panels as the reader reaches them.
  - A **scroll-linked parallax sky** behind the section headers: the
    background gradient drifts from `turmeric` dawn tones through a bright
    noon neutral to `dusk` indigo as the reader scrolls from Prātaḥsandhyā
    through Mādhyāhnika to Sāyaṃsandhya, with a simple line-art sun disc and
    a distant temple-gopuram silhouette moving at slightly different speeds
    to give depth. This is legible as *the sun's actual arc across the
    day* — the one parallax concept that is part of the subject matter
    rather than borrowed marketing-site spectacle — so it's allowed, but
    stays restrained: slow, low-amplitude movement, no bouncing, no
    scroll-jacking, no elements that rush past faster than the reader
    scrolls.
  - No autoplay audio, no confetti/particle effects, and nothing on the
    page should move on its own without a scroll or interaction driving it
    — a static screenshot of any moment should still look calm and
    intentional, the way a paused frame of the sun's motion would.
  - Respect `prefers-reduced-motion`: replace the scroll-linked parallax
    with the same gradient applied as a static per-section background (no
    animated transform) and drop scroll-into-view motion to a plain
    opacity fade with no vertical movement.
- `dusk` sections (if used for Sāyaṃsandhya or the footer) are the one place
  allowed real contrast — same principle as a printed page using a shaded
  box for a specific passage, not a "dark mode toggle."

### Components

- **Script switch** — two-state pill, `kumkum` for the active state, `ui`
  font, positioned in the header, always visible, never nested in a menu.
- **Mantra block** — the core repeating unit described in Layout above.
- **Gesture panel** — the illustration card described in §5, docked beside
  its mantra block.
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
- Gesture panels move below their mantra block on mobile rather than
  disappearing or requiring a tap to reveal.
- Never truncate a mantra, its inner meaning, or a gesture's significance
  note responsively — reflow, don't hide.

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
- Every gesture illustration ships with descriptive alt text per §5 — not
  optional, since the gesture itself is the content, not a decoration.

## 8. Suggested tech stack

Nothing is committed yet beyond this file (no app code exists). Recommended,
but open to revision once work starts:

- **Framework:** Next.js (App Router) + TypeScript — static content site,
  no auth, no backend beyond maybe a future audio asset. SSG is enough.
- **Styling:** Tailwind CSS with the tokens in §7 wired in as theme
  extensions, so `bg-canvas`, `text-kumkum`, `font-mantra-devanagari`, etc.
  are real utility classes instead of ad-hoc values scattered through JSX.
- **Fonts:** `next/font/google` for Tiro Devanagari Sanskrit, Tiro Tamil,
  Cormorant, EB Garamond, Inter — self-hosted via Next's font pipeline
  (no runtime Google Fonts request, better for a text-heavy reading site).
- **Content:** structured JSON or YAML per §3's schema, one file per ritual
  section, imported at build time — not a CMS, not a database. This is
  fixed liturgical text; it doesn't need dynamic authoring infrastructure.
- **Gesture illustrations:** hand-authored/redrawn SVGs under
  `/public/illustrations/gestures/`, cataloged in `gestures.json` per §5 —
  SVG keeps them crisp at any size and small enough to bundle without an
  image pipeline.
- **Script switch state:** a small React context + `localStorage`, no
  external state library needed for one boolean-ish piece of state.

## 9. Practical implementation guidance

**Preserve**
- The fixed per-mantra order: script → English meaning → inner meaning →
  citation, with the Gesture panel docked beside it, not inserted into it.
- English meaning always on screen, regardless of script switch state.
- The warm cream/ink neutral base; let `kumkum`/`turmeric`/`dusk` stay rare
  and purposeful.
- One serif voice for reading (Cormorant/EB Garamond), one sans for UI
  chrome (Inter) — don't let a fourth typeface creep in.
- Gesture drawings as schematic, functional diagrams tied to a real,
  cited posture — not decorative illustration.

**Avoid**
- Merging mantra variants from different śākhās into one "composite" text.
- Treating the script switch as a general i18n/locale switch — it changes
  the liturgical script only.
- Stock "spiritual" visual clichés (gradients, glowing mandalas, lotus
  clipart, incense-smoke hero video).
- Publishing any mantra text, or drawing any gesture, that hasn't been
  checked against a citable source — no content sourced purely from model
  memory, mantra or mudrā alike.
- Inventing the order or appearance of the Gāyatrī japa mudrās (or any
  gesture set) when the source doesn't spell it out — leave a `TODO(verify)`
  rather than filling the gap with a plausible-sounding guess.
- Over-building content tooling (CMS, admin UI) for what is, at this scope,
  a fixed, hand-verified body of text and a small, fixed set of drawings.

**Recommended build order**
1. Get verified source text for at least Prātaḥsandhyā (the most commonly
   practiced of the three) in Devanagari, with English meaning and citation
   — use the incoming PDF (§2) once it's in the repo. Do not proceed to
   design/build with placeholder Sanskrit.
2. Stand up the content schema (§3), the gesture catalog schema (§5), and
   Tailwind theme tokens (§7).
3. Build the mantra block component and one full section (Ācamanam through
   Aghamarṣaṇam) end to end, including the script switch and, if the source
   documents them, the gestures for that section.
4. Extend to the rest of Prātaḥsandhyā, then Mādhyāhnika and Sāyaṃsandhya.
5. Add section nav, citation footer, responsive pass, accessibility pass
   (including gesture alt text).
6. Write inner-meaning prose and gesture-significance notes last for each
   section once the literal text/gesture identification is locked —
   exegesis should follow settled text, not be drafted against text that
   might still change.

## 10. Open questions (need a decision before/while building)

- Which śākhā/tradition does the source material actually present? Confirm
  once the PDF is available and/or vignanam.org can be fetched, and state
  it explicitly on the site (don't leave it implicit) — practitioners from
  a different tradition need to know this isn't necessarily their exact
  text.
- Tamil rendering: transliteration of Sanskrit sounds into Tamil script has
  known ambiguities (retroflex/aspirate distinctions Tamil script doesn't
  natively mark). Decide whether to follow the Grantha-augmented convention
  common in Tamil Brahmin ritual books (adds Grantha letters for missing
  sounds) or plain Tamil script, and note the choice on the site.
- Should Telugu/Kannada be a stated future scope, or explicitly out of
  scope? Affects whether the script-switch component is built for N scripts
  from the start or genuinely just two.
- Does the incoming PDF include gesture/mudrā descriptions or diagrams at
  all? If it doesn't, the gesture catalog in §5 needs an independent,
  citable source before any drawing is finalized — don't fall back to
  general knowledge for something this specific.
- Audio (someone chanting each mantra) is a natural future addition but is
  out of scope for v1 per §1 — revisit only after the text and gesture
  layers are solid.
