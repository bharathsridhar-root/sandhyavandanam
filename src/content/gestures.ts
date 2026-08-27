import type { GestureEntry } from "./types";
import { VERIFY_NOTE, doubleVerified } from "./citation";

/**
 * Gesture catalog — see CLAUDE.md §5. Most entries are now cross-verified
 * against the two independent sources described in citation.ts (both
 * include photographs or worked descriptions of the hand positions).
 * The Gāyatrī japa mudrā set remains a single illustrative entry
 * (Sumukham), not the full traditional set — neither source spells out
 * the full set, and CLAUDE.md explicitly says not to invent one.
 */
export const gestures: GestureEntry[] = [
  {
    id: "gokarna-mudra",
    name: { devanagari: "गोकर्ण मुद्रा", tamil: "கோகர்ண முத்திரை", iast: "gokarṇa mudrā" },
    usedIn: ["achamanam"],
    description:
      "The right palm is twisted so the little, ring, and middle fingers stretch out while the index finger bends inward, leaving the thumb separate — this forms a narrow hollow at the base of the thumb shaped like a cow's ear. Water is poured into that hollow and swallowed, not sipped, for the first three names; the remaining nine names are then touched, without water, to specific points on the face, shoulders, and head.",
    significance:
      "The cow-ear shape ties the act of purification to the cow as a symbol of purity in the tradition, and the awkward, narrow channel forces a slow, deliberate swallow — the hand shape itself paces the mantra rather than the other way around.",
    illustration: "/illustrations/gestures/gokarna-mudra.svg",
    alt: "Right hand cupped at chin height with the thumb pressed against the base of the index finger, forming a narrow hollow shaped like a cow's ear; a few drops of water rest in the hollow.",
    citation: doubleVerified(13, 1),
  },
  {
    id: "pranayama-hasta",
    name: { devanagari: "प्राणायाम हस्त", tamil: "பிராணாயாம ஹஸ்த", iast: "prāṇāyāma hasta" },
    usedIn: ["pranayamam"],
    description:
      "The index and middle fingers fold into the palm; the thumb and ring finger touch the nose on either side, closing one nostril at a time. Breath is inhaled through the left nostril, held, then released through the right — inhalation, retention, and exhalation kept in a 1:3:2 ratio of time.",
    significance:
      "The hand becomes a valve rather than a symbol — its job is entirely functional, metering breath through one nostril at a time so the mind has something exact to hold onto before the more demanding recitation ahead.",
    illustration: "/illustrations/gestures/pranayama-hasta.svg",
    alt: "Right hand raised beside the nose with the thumb closing the right nostril and the ring and little fingers closing the left nostril, index and middle fingers folded into the palm; left hand rests open, palm up, on the left knee.",
    citation: doubleVerified(15, 4),
  },
  {
    id: "marjana-mudra",
    name: { devanagari: "मार्जन मुद्रा", tamil: "மார்ஜன முத்திரை", iast: "mārjana mudrā" },
    usedIn: ["prokshanam-marjanam", "punah-prokshanam"],
    description:
      "Water is taken into the right palm and sprinkled onto the head with the second finger on each of the first lines of the verse; one line is sprinkled onto the feet instead; the final line circles the water clockwise around the head rather than sprinkling it.",
    significance:
      "The close, deliberate fingers mark this as an address to the water — the verse recited alongside speaks to the water as a nurturing presence — not an ordinary wash; the shift from sprinkling to a full circling motion at the close marks the purification as finished, not just paused.",
    illustration: "/illustrations/gestures/marjana-mudra.svg",
    alt: "Right hand held above the head with fingertips together and slightly cupped, a scatter of water droplets falling from the fingertips onto the crown of the head.",
    citation: doubleVerified(18, 7),
  },
  {
    id: "anjali-mudra-hridaya",
    name: { devanagari: "अञ्जलि मुद्रा (हृदय)", tamil: "அஞ்ஜலி முத்திரை (இருதயம்)", iast: "añjali mudrā (hṛdaya)" },
    usedIn: ["gayatri-avahanam", "gayatri-upasthanam"],
    description:
      "Palms joined flat together, fingers pointing up, held close to the chest at the level of the heart, turned inward as the Gāyatrī is pictured arriving there.",
    significance:
      "Held here — at the chest rather than overhead — this is an address to a presence being invited close (Gāyatrī Āvāhanam) or seen off with the same quiet courtesy (Gāyatrī Upasthānam): the same joined hands read as intimacy rather than the more public salutation of the raised form below.",
    illustration: "/illustrations/gestures/anjali-mudra-hridaya.svg",
    alt: "Two palms pressed together with fingers pointing upward, held close against the chest at heart height, elbows relaxed and close to the body.",
    citation: doubleVerified(35, 20),
  },
  {
    id: "anjali-mudra-urdhva",
    name: { devanagari: "अञ्जलि मुद्रा (ऊर्ध्व)", tamil: "அஞ்ஜலி முத்திரை (ஊர்த்வ)", iast: "añjali mudrā (ūrdhva)" },
    usedIn: ["suryopasthanam", "sandhyopasanam"],
    description:
      "Palms joined and raised above the head, arms extended upward, facing the sun. For Sandhyopāsanam specifically, the joined hands are held instead at the chest, eyes closed, while the identity of the sun and the self is contemplated.",
    significance:
      "Raised overhead and facing outward, the same joined-palm gesture becomes public witness rather than private address — offered to the sun as something seen, not just felt.",
    illustration: "/illustrations/gestures/anjali-mudra-urdhva.svg",
    alt: "Two palms pressed together above the head, arms fully extended upward, face tilted up toward the joined hands as if facing the sun.",
    citation: doubleVerified(27, 16),
  },
  {
    id: "arghya-pradana-posture",
    name: { devanagari: "अर्घ्यप्रदान मुद्रा", tamil: "அர்க்யப்ரதான முத்திரை", iast: "arghya-pradāna mudrā" },
    usedIn: ["arghyapradanam"],
    description:
      "Standing, both palms joined and cupped together (not flat as in Añjali), the tumbler held between the left thumb and forefinger, water taken up and held at face height, then tilted forward so the water runs off the fingertips toward the sun — heels raised, weight on the toes, for the main offerings.",
    significance:
      "The tilt is the whole gesture: the same cupped hands that could simply pour water out are angled specifically toward the sun's direction, turning a practical action — emptying the palms — into a directed offering, and the raised heels keep the body itself reaching upward through it.",
    illustration: "/illustrations/gestures/arghya-pradana-posture.svg",
    alt: "Standing figure, both cupped palms joined and held forward at chest height, tilted downward so a thin stream of water runs off the fingertips toward the horizon.",
    citation: doubleVerified(24, 15),
  },
  {
    id: "gayatri-japa-mudra-sumukham",
    name: { devanagari: "सुमुखं (गायत्री जप मुद्रा)", tamil: "சுமுகம் (காயத்ரி ஜப முத்திரை)", iast: "sumukham (gāyatrī japa mudrā)" },
    usedIn: ["gayatri-japa"],
    description:
      "The first of a traditional set of hand positions shown before Gāyatrī japa: fingertips of both hands touch lightly, palms slightly cupped and open, held at chest height. Only this one mudrā is illustrated here as representative — the traditional set is commonly counted at roughly two dozen, but its exact order and appearance vary by digest text and have not been confirmed by either source in this project.",
    significance:
      "Shown before japa begins, this class of gesture is traditionally described as \"presenting\" the mantra properly — readying the hands, and through them the body, before the mind takes up the repetition.",
    illustration: "/illustrations/gestures/gayatri-japa-mudra-sumukham.svg",
    alt: "Both hands held at chest height, fingertips of each hand touching lightly together, palms slightly cupped and open like a shallow, closed vessel.",
    citation: `${VERIFY_NOTE} Do not extend this single entry into the full mudrā set without a citable, section-numbered source — see CLAUDE.md §9 "Avoid".`,
  },
  {
    id: "japa-ganana-mudra",
    name: { devanagari: "जपगणना मुद्रा", tamil: "ஜபகணனா முத்திரை", iast: "japa-gaṇanā mudrā" },
    usedIn: ["gayatri-japa"],
    description:
      "Repetitions are counted on the joints of the right hand's fingers — the thumb moving in a fixed sequence across the segments of the ring, little, middle, and index fingers — the hand covered by the upper cloth and held at neck height for the dawn rite, chest height at noon, and navel height at dusk.",
    significance:
      "A mālā is not required for daily japa; the hand itself becomes the counting tool, hidden under the cloth, which keeps the practice portable and keeps the eyes free to stay closed.",
    illustration: "/illustrations/gestures/japa-ganana-mudra.svg",
    alt: "Right hand held at chest height with the thumb touching a joint on the ring finger, counting; the index finger is visibly curled out of use.",
    citation: doubleVerified(36, 21),
  },
  {
    id: "dish-namaskara-posture",
    name: { devanagari: "दिश् नमस्कार मुद्रा", tamil: "திக் நமஸ்கார முத்திரை", iast: "diś-namaskāra mudrā" },
    usedIn: ["digdevata-namaskaram"],
    description:
      "Standing, turning in sequence through the four cardinal directions with palms joined at the chest, then saluting upward, downward, and outward for the atmosphere, before facing forward again for the earth, Brahmā, and Viṣṇu.",
    significance:
      "Turning the body itself — not just the hands — through the compass points makes the salutation spatial: each direction is greeted by facing it, not addressed generically from wherever one happens to be standing.",
    illustration: "/illustrations/gestures/dish-namaskara-posture.svg",
    alt: "Standing figure mid-turn with palms joined at the chest, one foot pivoting, facing outward toward one of the compass directions marked faintly around the figure.",
    citation: doubleVerified(43, 38),
  },
];

export function gesturesById(ids: string[] | undefined): GestureEntry[] {
  if (!ids || ids.length === 0) return [];
  return ids
    .map((id) => gestures.find((g) => g.id === id))
    .filter((g): g is GestureEntry => Boolean(g));
}
