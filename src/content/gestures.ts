import type { GestureEntry } from "./types";
import { VERIFY_NOTE, doubleVerified } from "./citation";

/**
 * Gesture catalog, see CLAUDE.md §5. Most entries are now cross-verified
 * against the two independent sources described in citation.ts (both
 * include photographs or worked descriptions of the hand positions).
 * The Gāyatrī japa mudrā set remains a single illustrative entry
 * (Sumukham), not the full traditional set: neither source spells out
 * the full set, and CLAUDE.md explicitly says not to invent one.
 */
export const gestures: GestureEntry[] = [
  {
    id: "gokarna-mudra",
    name: { devanagari: "गोकर्ण मुद्रा", tamil: "கோகர்ண முத்திரை", iast: "gokarṇa mudrā" },
    usedIn: ["achamanam"],
    description:
      "The right palm twists so the little, ring, and middle fingers stretch out while the index finger bends inward and the thumb stays separate. This forms a narrow hollow at the base of the thumb shaped like a cow's ear. Water is poured into that hollow and swallowed for the first three names; the remaining nine names are then touched, without water, to points on the face, shoulders, and head.",
    significance:
      "The cow-ear shape ties this small purification to the cow, a symbol of purity across the tradition, and the awkward, narrow channel forces a slow, deliberate swallow. What actually happens is that the hand paces the mantra, not the other way around, so the sipping can never be rushed.",
    illustration: "/illustrations/gestures/gokarna-mudra.svg",
    alt: "Right hand held near the chin with the thumb pressed against the base of the index finger, forming a narrow hollow shaped like a cow's ear, with a drop of water in it.",
    citation: doubleVerified(13, 1),
  },
  {
    id: "pranayama-hasta",
    name: { devanagari: "प्राणायाम हस्त", tamil: "பிராணாயாம ஹஸ்த", iast: "prāṇāyāma hasta" },
    usedIn: ["pranayamam"],
    description:
      "The index and middle fingers fold into the palm. The thumb and ring finger rest against the nose on either side, closing one nostril at a time so breath moves in through one side, is held, then released through the other, in a steady 1 to 3 to 2 count of inhale, hold, and exhale.",
    significance:
      "The hand becomes a valve, not a symbol. Its job is entirely functional: metering breath one nostril at a time so the mind has something exact to hold before the more demanding recitation ahead, and the counted rhythm is what actually slows the heartbeat down.",
    illustration: "/illustrations/gestures/pranayama-hasta.svg",
    alt: "Right hand raised beside the nose with the thumb closing the right nostril and the ring finger closing the left nostril, index and middle fingers folded into the palm, left hand resting open on the left knee.",
    citation: doubleVerified(15, 4),
  },
  {
    id: "marjana-mudra",
    name: { devanagari: "मार्जन मुद्रा", tamil: "மார்ஜன முத்திரை", iast: "mārjana mudrā" },
    usedIn: ["prokshanam-marjanam", "punah-prokshanam"],
    description:
      "Water taken into the right palm is sprinkled onto the head with the second finger, line by line, as the verse is recited. One line is sprinkled onto the feet instead. The last line does not sprinkle at all: it circles the water clockwise around the head, a single unbroken sweep.",
    significance:
      "The close, deliberate fingers mark this as an address to the water, not an ordinary wash. The verse recited alongside speaks to the water as a nurturing presence, and the final circling motion is what actually tells the body the purification is finished rather than merely paused.",
    illustration: "/illustrations/gestures/marjana-mudra.svg",
    alt: "Right hand held above the head with fingertips together, water droplets scattering from the fingertips down onto the crown of the head.",
    citation: doubleVerified(18, 7),
  },
  {
    id: "anjali-mudra-hridaya",
    name: { devanagari: "अञ्जलि मुद्रा (हृदय)", tamil: "அஞ்ஜலி முத்திரை (இருதயம்)", iast: "añjali mudrā (hṛdaya)" },
    usedIn: ["gayatri-avahanam", "gayatri-upasthanam"],
    description:
      "Palms are joined flat together, fingers pointing up, and held close to the chest at the level of the heart, turned slightly inward as the Gāyatrī is pictured arriving there.",
    significance:
      "Held at the chest rather than overhead, this is an address to a presence being invited close, whether welcomed at Gāyatrī Āvāhanam or seen off with the same quiet courtesy at Gāyatrī Upasthānam. The same joined hands read here as intimacy, quite different from the more public salutation of the raised form below.",
    illustration: "/illustrations/gestures/anjali-mudra-hridaya.svg",
    alt: "Two palms pressed together with fingers pointing upward, held close against the chest at heart height, elbows relaxed against the body.",
    citation: doubleVerified(35, 20),
  },
  {
    id: "anjali-mudra-urdhva",
    name: { devanagari: "अञ्जलि मुद्रा (ऊर्ध्व)", tamil: "அஞ்ஜலி முத்திரை (ஊர்த்வ)", iast: "añjali mudrā (ūrdhva)" },
    usedIn: ["suryopasthanam", "sandhyopasanam"],
    description:
      "Palms are joined and raised above the head, arms extended upward, facing the sun. For Sandhyopāsanam specifically, the joined hands come down to the chest instead, eyes closed, while the identity of the sun and the self is held quietly in mind.",
    significance:
      "Raised overhead and facing outward, the same joined-palm gesture turns from private address into public witness. What happens is a kind of display: the sun is offered something visibly, not just felt silently.",
    illustration: "/illustrations/gestures/anjali-mudra-urdhva.svg",
    alt: "Two palms pressed together above the head, arms fully extended upward, face tilted up toward the joined hands as if facing the sun.",
    citation: doubleVerified(27, 16),
  },
  {
    id: "arghya-pradana-posture",
    name: { devanagari: "अर्घ्यप्रदान मुद्रा", tamil: "அர்க்யப்ரதான முத்திரை", iast: "arghya-pradāna mudrā" },
    usedIn: ["arghyapradanam"],
    description:
      "Standing, both palms are joined and cupped together, not flat as in Añjali, holding water taken up to face height, then tilted forward so the water runs off the fingertips toward the sun. For the main offerings the heels lift off the ground, weight shifting onto the toes.",
    significance:
      "The tilt is the whole gesture. The same cupped hands that could simply pour water out are angled specifically toward the sun, turning an ordinary action, emptying the palms, into a directed offering, and the raised heels keep the whole body reaching upward through it.",
    illustration: "/illustrations/gestures/arghya-pradana-posture.svg",
    alt: "Standing figure with both cupped palms joined and held forward at face height, tilted downward so a thin stream of water runs off the fingertips toward the horizon, heels lifted.",
    citation: doubleVerified(24, 15),
  },
  {
    id: "gayatri-japa-mudra-sumukham",
    name: { devanagari: "सुमुखं (गायत्री जप मुद्रा)", tamil: "சுமுகம் (காயத்ரி ஜப முத்திரை)", iast: "sumukham (gāyatrī japa mudrā)" },
    usedIn: ["gayatri-japa"],
    description:
      "The first of a traditional set of hand positions shown before Gāyatrī japa. Fingertips of both hands touch lightly, palms cupped and open, held at chest height. Only this one mudrā is drawn here as representative: the full set is commonly counted at roughly two dozen, but its exact order and appearance vary by digest text and neither source used on this site spells it out.",
    significance:
      "Shown before japa begins, this class of gesture is traditionally described as presenting the mantra properly, readying the hands, and through them the body, before the mind takes up the repetition.",
    illustration: "/illustrations/gestures/gayatri-japa-mudra-sumukham.svg",
    alt: "Both hands held at chest height, fingertips of each hand touching lightly, palms cupped and open like a shallow, closed vessel.",
    citation: `${VERIFY_NOTE} Do not extend this single entry into the full mudrā set without a citable, section-numbered source. See CLAUDE.md §9, "Avoid".`,
  },
  {
    id: "japa-ganana-mudra",
    name: { devanagari: "जपगणना मुद्रा", tamil: "ஜபகணனா முத்திரை", iast: "japa-gaṇanā mudrā" },
    usedIn: ["gayatri-japa"],
    description:
      "Repetitions are counted on the joints of the right hand's fingers, the thumb moving in a fixed sequence across the segments of the ring, little, middle, and index fingers, the hand covered by the upper cloth and held at neck height for the dawn rite, chest height at noon, and navel height at dusk.",
    significance:
      "A rosary is not required for daily japa. The hand itself becomes the counting tool, hidden under the cloth, which keeps the practice portable and leaves the eyes free to stay closed for the whole of it.",
    illustration: "/illustrations/gestures/japa-ganana-mudra.svg",
    alt: "Right hand held at chest height with the thumb touching a joint on the ring finger, counting, the index finger visibly curled out of use.",
    citation: doubleVerified(36, 21),
  },
  {
    id: "dish-namaskara-posture",
    name: { devanagari: "दिश् नमस्कार मुद्रा", tamil: "திக் நமஸ்கார முத்திரை", iast: "diś-namaskāra mudrā" },
    usedIn: ["digdevata-namaskaram"],
    description:
      "Standing, the body turns in sequence through the four cardinal directions with palms joined at the chest, then salutes upward, downward, and outward for the atmosphere, before facing forward again for the earth, Brahmā, and Viṣṇu.",
    significance:
      "Turning the whole body, not just the hands, through the compass points makes the salutation spatial. Each direction is greeted by actually facing it, never addressed generically from wherever one happens to be standing.",
    illustration: "/illustrations/gestures/dish-namaskara-posture.svg",
    alt: "Standing figure mid turn with palms joined at the chest, one foot pivoting, facing toward one of the compass directions marked faintly around the figure.",
    citation: doubleVerified(43, 38),
  },
];

export function gesturesById(ids: string[] | undefined): GestureEntry[] {
  if (!ids || ids.length === 0) return [];
  return ids
    .map((id) => gestures.find((g) => g.id === id))
    .filter((g): g is GestureEntry => Boolean(g));
}
