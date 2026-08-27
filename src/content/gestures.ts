import type { GestureEntry } from "./types";
import { VERIFY_NOTE } from "./citation";

/**
 * Draft gesture catalog — see CLAUDE.md §5. Names, hand positions, and which
 * gestures the source material actually documents all need verification;
 * the Gāyatrī japa mudrā set in particular is represented by a single
 * illustrative entry (Sumukham), not the full traditional set, per the
 * explicit instruction in CLAUDE.md not to invent an order from memory.
 */
export const gestures: GestureEntry[] = [
  {
    id: "gokarna-mudra",
    name: { devanagari: "गोकर्ण मुद्रा", tamil: "கோகர்ண முத்திரை", iast: "gokarṇa mudrā" },
    usedIn: ["achamanam"],
    description:
      "The right hand is cupped so the thumb presses against the base of the index finger, forming a narrow hollow at the base of the thumb shaped like a cow's ear. Water is sipped from that hollow rather than poured straight into the mouth.",
    significance:
      "The cow-ear shape ties the act of purification to the cow as a symbol of purity in the tradition, and the awkward, narrow channel forces a slow, deliberate sip — the hand shape itself paces the mantra rather than the other way around.",
    illustration: "/illustrations/gestures/gokarna-mudra.svg",
    alt: "Right hand cupped at chin height with the thumb pressed against the base of the index finger, forming a narrow hollow shaped like a cow's ear; a few drops of water rest in the hollow.",
    citation: VERIFY_NOTE,
  },
  {
    id: "pranayama-hasta",
    name: { devanagari: "प्राणायाम हस्त", tamil: "பிராணாயாம ஹஸ்த", iast: "prāṇāyāma hasta" },
    usedIn: ["pranayamam"],
    description:
      "The right thumb closes the right nostril, and the ring and little fingers together close the left nostril, alternating to regulate the breath; the index and middle fingers fold into the palm. The left hand rests open on the left knee, palm up.",
    significance:
      "The hand becomes a valve rather than a symbol — its job is entirely functional, metering breath through one nostril at a time so the mind has something exact to hold onto before the more demanding recitation ahead.",
    illustration: "/illustrations/gestures/pranayama-hasta.svg",
    alt: "Right hand raised beside the nose with the thumb closing the right nostril and the ring and little fingers closing the left nostril, index and middle fingers folded into the palm; left hand rests open, palm up, on the left knee.",
    citation: VERIFY_NOTE,
  },
  {
    id: "marjana-mudra",
    name: { devanagari: "मार्जन मुद्रा", tamil: "மார்ஜன முத்திரை", iast: "mārjana mudrā" },
    usedIn: ["marjanam"],
    description:
      "Water is taken into the right palm and sprinkled on the head and shoulders with the fingertips held close together, a controlled flick rather than a splash.",
    significance:
      "The close, deliberate fingers mark this as an address to the water — the verse recited alongside speaks to the water as a nurturing presence — not an ordinary wash; the gesture keeps the act from collapsing into a reflexive habit.",
    illustration: "/illustrations/gestures/marjana-mudra.svg",
    alt: "Right hand held above the head with fingertips together and slightly cupped, a scatter of water droplets falling from the fingertips onto the crown of the head.",
    citation: VERIFY_NOTE,
  },
  {
    id: "aghamarshana-mudra",
    name: { devanagari: "अघमर्षण मुद्रा", tamil: "அகமர்ஷண முத்திரை", iast: "aghamarṣaṇa mudrā" },
    usedIn: ["aghamarshanam"],
    description:
      "The breath is held while the right palm covers the nose and mouth through the recitation; at the close of the verse the water held in the right palm is thrown sharply to the left and slightly behind, away from the body, with an open, snapping motion of the fingers.",
    significance:
      "The sharp discard — distinct from the gentle sprinkle of Mārjanam just before it — makes the release physical: what the mantra names as impurity is not sipped or absorbed but thrown clear of the body, decisively and once.",
    illustration: "/illustrations/gestures/aghamarshana-mudra.svg",
    alt: "Right arm extended to the left and slightly back at shoulder height, fingers spread open mid-throw, with droplets of water flung away from the body.",
    citation: VERIFY_NOTE,
  },
  {
    id: "anjali-mudra-hridaya",
    name: { devanagari: "अञ्जलि मुद्रा (हृदय)", tamil: "அஞ்ஜலி முத்திரை (இருதயம்)", iast: "añjali mudrā (hṛdaya)" },
    usedIn: ["gayatri-avahanam", "samarpanam"],
    description:
      "Palms joined flat together, fingers pointing up, held close to the chest at the level of the heart.",
    significance:
      "Held here — at the chest rather than overhead — this is an address to a presence being invited close (Gāyatrī Āvāhanam) or a closing offering made quietly, without display (Samarpaṇam): the same joined hands read as intimacy rather than the more public salutation of the raised form below.",
    illustration: "/illustrations/gestures/anjali-mudra-hridaya.svg",
    alt: "Two palms pressed together with fingers pointing upward, held close against the chest at heart height, elbows relaxed and close to the body.",
    citation: VERIFY_NOTE,
  },
  {
    id: "anjali-mudra-urdhva",
    name: { devanagari: "अञ्जलि मुद्रा (ऊर्ध्व)", tamil: "அஞ்ஜலி முத்திரை (ஊர்த்வ)", iast: "añjali mudrā (ūrdhva)" },
    usedIn: ["suryopasthanam"],
    description:
      "Palms joined and raised above the head, arms extended upward, facing the sun.",
    significance:
      "Raised overhead and facing outward rather than held at the chest, the same joined-palm gesture becomes public witness rather than private address — offered to the sun as something seen, not just felt.",
    illustration: "/illustrations/gestures/anjali-mudra-urdhva.svg",
    alt: "Two palms pressed together above the head, arms fully extended upward, face tilted up toward the joined hands as if facing the sun.",
    citation: VERIFY_NOTE,
  },
  {
    id: "arghya-pradana-posture",
    name: { devanagari: "अर्घ्यप्रदान मुद्रा", tamil: "அர்க்யப்ரதான முத்திரை", iast: "arghya-pradāna mudrā" },
    usedIn: ["arghyapradanam"],
    description:
      "Standing, both palms joined and cupped together (not flat as in Añjali), holding water, then tilted forward and slightly down so the water runs off the fingertips in a thin stream toward the sun — never poured downward the way water is discarded for ordinary use.",
    significance:
      "The tilt is the whole gesture: the same cupped hands that could simply pour water out are angled specifically toward the sun's direction, turning a practical action — emptying the palms — into a directed offering.",
    illustration: "/illustrations/gestures/arghya-pradana-posture.svg",
    alt: "Standing figure, both cupped palms joined and held forward at chest height, tilted downward so a thin stream of water runs off the fingertips toward the horizon.",
    citation: VERIFY_NOTE,
  },
  {
    id: "gayatri-japa-mudra-sumukham",
    name: { devanagari: "सुमुखं (गायत्री जप मुद्रा)", tamil: "சுமுகம் (காயத்ரி ஜப முத்திரை)", iast: "sumukham (gāyatrī japa mudrā)" },
    usedIn: ["gayatri-japa"],
    description:
      "The first of a traditional set of hand positions shown before Gāyatrī japa: fingertips of both hands touch lightly, palms slightly cupped and open, held at chest height. Only this one mudrā is illustrated here as representative — the traditional set is commonly counted at roughly two dozen, but its exact order and appearance vary by digest text and have not been verified against this project's sources.",
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
      "Repetitions are counted on the joints and tips of the right hand's fingers, moving in a fixed order across the ring, middle, and little fingers and back — the index finger is never used for counting.",
    significance:
      "A mālā is not required for daily japa; the hand itself becomes the counting tool, which keeps the practice portable and keeps the eyes free to stay closed.",
    illustration: "/illustrations/gestures/japa-ganana-mudra.svg",
    alt: "Right hand held at chest height with the thumb touching a joint on the ring finger, counting; the index finger is visibly curled out of use.",
    citation: VERIFY_NOTE,
  },
  {
    id: "dish-namaskara-posture",
    name: { devanagari: "दिश् नमस्कार मुद्रा", tamil: "திக் நமஸ்கார முத்திரை", iast: "diś-namaskāra mudrā" },
    usedIn: ["digdevata-namaskaram"],
    description:
      "Standing, turning in sequence to face each cardinal and intermediate direction, palms joined at the chest at each turn.",
    significance:
      "Turning the body itself — not just the hands — through all eight directions makes the salutation spatial: each guardian deity is greeted from the direction they preside over, not addressed generically.",
    illustration: "/illustrations/gestures/dish-namaskara-posture.svg",
    alt: "Standing figure mid-turn with palms joined at the chest, one foot pivoting, facing outward toward one of eight compass directions marked faintly around the figure.",
    citation: VERIFY_NOTE,
  },
];

export function gesturesById(ids: string[] | undefined): GestureEntry[] {
  if (!ids || ids.length === 0) return [];
  return ids
    .map((id) => gestures.find((g) => g.id === id))
    .filter((g): g is GestureEntry => Boolean(g));
}
