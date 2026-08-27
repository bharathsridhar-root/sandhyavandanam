import type { RitualStep, SandhyaTime } from "./types";
import { VERIFY_NOTE, VERIFY_NOTE_TEMPLATE } from "./citation";

const sankalpamTime: Record<SandhyaTime, { dn: string; tm: string; iast: string; window: string; english: string }> = {
  pratah: {
    dn: "अद्य पूर्वाह्णे … प्रातःसन्ध्याम् उपासिष्ये",
    tm: "அத்ய பூர்வாஹ்ணே … ப்ராதஃஸந்த்யாம் உபாஸிஷ்யே",
    iast: "adya pūrvāhṇe … prātaḥsandhyām upāsiṣye",
    window: "in the forenoon … I shall perform the dawn sandhyā",
    english: "dawn",
  },
  madhyahnika: {
    dn: "अद्य मध्याह्ने … माध्याह्निकं सन्ध्याम् उपासिष्ये",
    tm: "அத்ய மத்யாஹ்நே … மாத்யாஹ்நிகம் ஸந்த்யாம் உபாஸிஷ்யே",
    iast: "adya madhyāhne … mādhyāhnikaṃ sandhyām upāsiṣye",
    window: "at midday … I shall perform the noon sandhyā",
    english: "noon",
  },
  sayam: {
    dn: "अद्य अपराह्णे … सायंसन्ध्याम् उपासिष्ये",
    tm: "அத்ய அபராஹ்ணே … ஸாயம்ஸந்த்யாம் உபாஸிஷ்யே",
    iast: "adya aparāhṇe … sāyaṃsandhyām upāsiṣye",
    window: "in the afternoon … I shall perform the dusk sandhyā",
    english: "dusk",
  },
};

export function sankalpam(time: SandhyaTime): RitualStep {
  const t = sankalpamTime[time];
  return {
    id: "sankalpam",
    order: 4,
    name: {
      devanagari: "सङ्कल्पम्",
      tamil: "ஸங்கல்பம்",
      iast: "saṅkalpam",
      english: "The formal resolve",
    },
    summary: "A spoken declaration of intent — naming the day, one's lineage, and the specific sandhyā about to be performed.",
    mantras: [
      {
        id: `sankalpam-${time}`,
        devanagari: `ॐ भूर्भुवः स्वः, ${t.dn}, अमुकगोत्रः अमुकशर्मा नामाहं ।`,
        tamil: `ௐ பூர்புவஃ ஸ்வஃ, ${t.tm}, அமுககோத்ரஃ அமுகஶர்மா நாமாஹம் ।`,
        iast: `oṃ bhūrbhuvaḥ svaḥ, ${t.iast}, amuka-gotraḥ amuka-śarmā nāmāhaṃ`,
        englishMeaning: `Om, earth, atmosphere, heaven. Today, ${t.window}, I, (named), of the (named) gotra, resolve to perform this rite.`,
        innerMeaning:
          `This is the one point in the rite that is inherently personal and time-stamped: the practitioner names the day, their own lineage, and which of the three sandhyās is about to follow — here, the ${t.english} sandhyā. Nothing before this step has been optional or occasion-specific; the Saṅkalpam is where the general procedure becomes a single, particular, dated act.`,
        citation: VERIFY_NOTE_TEMPLATE,
      },
    ],
  };
}

const arghyaContent: Record<SandhyaTime, { moment: string; note: string }> = {
  pratah: {
    moment: "the rising sun",
    note:
      "Offered to a sun still low and reddening at the horizon, this is the first arghya of the day — arrival, not yet at strength.",
  },
  madhyahnika: {
    moment: "the sun at its zenith",
    note:
      "Offered with the sun directly overhead, this arghya is given at the one moment the sun casts almost no shadow — offering made face to face, without an angle to hide behind.",
  },
  sayam: {
    moment: "the setting sun",
    note:
      "Offered to a sun already low and departing, this is a valediction rather than a greeting — the same water, the same posture, turned toward an ending instead of a beginning.",
  },
};

export function arghyapradanam(time: SandhyaTime): RitualStep {
  const c = arghyaContent[time];
  return {
    id: "arghyapradanam",
    order: 7,
    name: {
      devanagari: "अर्घ्यप्रदानम्",
      tamil: "அர்க்யப்ரதானம்",
      iast: "arghyapradānam",
      english: "Offering water to Sūrya",
    },
    summary: `Standing, water is offered through joined, cupped palms toward ${c.moment}, reciting the Gāyatrī mantra three times.`,
    mantras: [
      {
        id: `arghyapradanam-${time}`,
        devanagari: "ॐ भूर्भुवः स्वः । तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥ (त्रिः)",
        tamil: "ௐ பூர்புவஃ ஸ்வஃ । தத்ஸவிதுர்வரேண்யம் பர்கோ தேவஸ்ய தீமஹி தியோ யோ நஃ ப்ரசோதயாத் ॥ (த்ரிஃ)",
        iast: "oṃ bhūrbhuvaḥ svaḥ, tatsaviturvareṇyaṃ bhargo devasya dhīmahi dhiyo yo naḥ pracodayāt (repeated three times)",
        englishMeaning:
          "Om, earth, atmosphere, heaven. Let us meditate on the excellent glory of the divine Savitr; may he direct our understanding. (Recited three times while offering water.)",
        innerMeaning: `The same Gāyatrī mantra recited for japa is offered here again, three times, while water runs from the tilted palms toward the sun. Some fuller ritual manuals give distinct verses for each sandhyā's arghya rather than the Gāyatrī alone — that variation has not been confirmed against this project's sources, so the Gāyatrī is shown here as the safely-attested common form. What changes without question by time of day is what the water is offered to: ${c.note}`,
        gestures: ["arghya-pradana-posture"],
        citation: `${VERIFY_NOTE} Whether a distinct arghya-specific verse exists for the ${time} sandhyā beyond the Gāyatrī mantra shown here is unconfirmed — verify with particular care.`,
      },
    ],
  };
}

const suryaContent: Record<
  SandhyaTime,
  { dn: string; tm: string; iast: string; english: string; inner: string }
> = {
  pratah: {
    dn: "मित्रस्य चर्षणीधृतः श्रवो देवस्य सानसिम् । सत्यं चित्रश्रवस्तमम् ॥ मित्रो जनान् यातयति प्रजानन् मित्रो दाधार पृथिवीमुत द्याम् । मित्रः कृष्टीरनिमिषाभि चष्टे सत्याय हव्यं घृतवद्विधेम ॥",
    tm: "மித்ரஸ்ய சர்ஷணீத்ருதஃ ஶ்ரவோ தேவஸ்ய ஸாநஸிம் । ஸத்யம் சித்ரஶ்ரவஸ்தமம் ॥ மித்ரோ ஜநாந் யாதயதி ப்ரஜாநந் மித்ரோ தாதார ப்ருதிவீம் உத த்யாம் । மித்ரஃ க்ருஷ்டீர் அநிமிஷாபி சஷ்டே ஸத்யாய ஹவ்யம் க்ருதவத் விதேம ॥",
    iast:
      "mitrasya carṣaṇīdhṛtaḥ śravo devasya sānasim, satyaṃ citraśravastamam, mitro janān yātayati prajānan mitro dādhāra pṛthivīmuta dyām, mitraḥ kṛṣṭīranimiṣābhi caṣṭe satyāya havyaṃ ghṛtavadvidhema",
    english:
      "Mitra, sustainer of peoples, holds a glory both true and most radiant, granted by the gods. Mitra guides the peoples, knowing them; Mitra upholds the earth and the sky. Mitra watches over all who dwell here, unblinking; let us offer him, the true one, an oblation rich as ghee.",
    inner:
      "Recited as the risen sun stands as witness, this Rigvedic hymn (3.59.1–2) addresses Mitra — a solar deity of covenant and daylight — as the one who watches without blinking. The sun here is invoked less as a source of heat than as an unsleeping witness to whatever the day is about to hold.",
  },
  madhyahnika: {
    dn: "ध्येयः सदा सवितृमण्डलमध्यवर्ती नारायणः सरसिजासनसन्निविष्टः । केयूरवान् मकरकुण्डलवान् किरीटी हारी हिरण्मयवपुर्धृतशङ्खचक्रः ॥",
    tm: "த்யேயஃ ஸதா ஸவித்ருமண்டலமத்யவர்தீ நாராயணஃ ஸரஸிஜாஸநஸந்நிவிஷ்டஃ । கேயூரவாந் மகரகுண்டலவாந் கிரீடீ ஹாரீ ஹிரண்மயவபுர் த்ருதஶங்கசக்ரஃ ॥",
    iast:
      "dhyeyaḥ sadā savitṛmaṇḍalamadhyavartī nārāyaṇaḥ sarasijāsanasanniviṣṭaḥ, keyūravān makarakuṇḍalavān kirīṭī hārī hiraṇmayavapurdhṛtaśaṅkhacakraḥ",
    english:
      "Ever to be meditated upon: Nārāyaṇa, seated at the center of the sun's disc, enthroned on a lotus — wearing armlets and shark-shaped earrings, crowned, garlanded, his form golden, holding conch and discus.",
    inner:
      "At the sun's zenith, when it casts almost no shadow, the meditation turns inward from the disc itself to what the tradition holds is seated at its center — a fully described divine form, ornamented and specific, rather than an abstract force. Confidence in this being the verse used specifically for the noon Sūryopasthānam (as opposed to sun-meditation more generally) is moderate; verify with particular care.",
  },
  sayam: {
    dn: "इमं मे वरुण श्रुधी हवमद्या च मृडय । त्वामवस्युराचके ॥",
    tm: "இமம் மே வருண ஶ்ருதீ ஹவம் அத்யா ச ம்ருடய । த்வாம் அவஸ்யுர் ஆசகே ॥",
    iast: "imaṃ me varuṇa śrudhī havamadyā ca mṛḍaya, tvāmavasyurācake",
    english:
      "Varuna, hear this call of mine; today, be gracious. Seeking your protection, I call upon you.",
    inner:
      "As the sun departs, the address shifts from Mitra (daylight, covenant) to Varuṇa — traditionally the deity who takes up the night's watch. The prayer at dusk asks for nothing elaborate, just to be heard and to be shown grace: fittingly the smallest, plainest request of the entire rite, offered at the day's smallest, plainest hour.",
  },
};

export function suryopasthanam(time: SandhyaTime): RitualStep {
  const s = suryaContent[time];
  return {
    id: "suryopasthanam",
    order: 10,
    name: {
      devanagari: "सूर्योपस्थानम्",
      tamil: "ஸூர்யோபஸ்தானம்",
      iast: "sūryopasthānam",
      english: "Standing prayer to the sun",
    },
    summary: "Standing with joined palms raised toward the sun, a verse specific to this time of day addresses it as witness and sustaining power.",
    mantras: [
      {
        id: `suryopasthanam-${time}`,
        devanagari: s.dn,
        tamil: s.tm,
        iast: s.iast,
        englishMeaning: s.english,
        innerMeaning: s.inner,
        gestures: ["anjali-mudra-urdhva"],
        citation:
          time === "madhyahnika"
            ? `${VERIFY_NOTE} Confidence on this entry is lower than the pratah/sayam forms — verify with particular care whether this is the verse actually used for Mādhyāhnika Sūryopasthānam in the source material.`
            : VERIFY_NOTE,
      },
    ],
  };
}
