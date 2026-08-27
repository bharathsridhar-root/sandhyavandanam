import type { RitualStep } from "./types";
import { VERIFY_NOTE } from "./citation";

/**
 * Steps that are identical across all three sandhyās (only Saṅkalpam,
 * Arghyapradānam, and Sūryopasthānam genuinely differ by time of day — see
 * sandhya-specific.ts). Reused verbatim by pratah/madhyahnika/sayam in
 * sandhyas.ts so the three sections stay self-contained without inventing
 * three near-identical copies of the same text.
 */

export const achamanam: RitualStep = {
  id: "achamanam",
  order: 1,
  name: {
    devanagari: "आचमनम्",
    tamil: "ஆசமனம்",
    iast: "ācamanam",
    english: "Sipping water, invoking the names of Viṣṇu",
  },
  summary: "Water is sipped and touched to the body while twelve names of Viṣṇu are recited, opening the rite with an act of purification.",
  mantras: [
    {
      id: "achamanam-1",
      devanagari: "ॐ केशवाय स्वाहा । ॐ नारायणाय स्वाहा । ॐ माधवाय स्वाहा ।",
      tamil: "ௐ கேஶவாய ஸ்வாஹா । ௐ நாராயணாய ஸ்வாஹா । ௐ மாதவாய ஸ்வாஹா ।",
      iast: "oṃ keśavāya svāhā, oṃ nārāyaṇāya svāhā, oṃ mādhavāya svāhā",
      englishMeaning:
        "Om, to Keshava, svaha. Om, to Narayana, svaha. Om, to Madhava, svaha. (\"Svaha\" — I offer; so be it.)",
      innerMeaning:
        "Water is sipped three times, once on each name — Keshava, Narayana, Madhava, the first three of twelve names traditionally used here. The rite doesn't open with a request; it opens with an offering of the most ordinary substance there is, water, before anything else is said or asked for. Sipping rather than drinking keeps the act deliberate, not functional.",
      gestures: ["gokarna-mudra"],
      citation: VERIFY_NOTE,
    },
    {
      id: "achamanam-2",
      devanagari:
        "ॐ गोविन्दाय नमः । ॐ विष्णवे नमः । ॐ मधुसूदनाय नमः । ॐ त्रिविक्रमाय नमः । ॐ वामनाय नमः । ॐ श्रीधराय नमः । ॐ हृषीकेशाय नमः । ॐ पद्मनाभाय नमः । ॐ दामोदराय नमः ।",
      tamil:
        "ௐ கோவிந்தாய நமஃ । ௐ விஷ்ணவே நமஃ । ௐ மதுஸூதநாய நமஃ । ௐ த்ரிவிக்ரமாய நமஃ । ௐ வாமநாய நமஃ । ௐ ஶ்ரீதராய நமஃ । ௐ ஹ்ருஷீகேஶாய நமஃ । ௐ பத்மநாபாய நமஃ । ௐ தாமோதராய நமஃ ।",
      iast:
        "oṃ govindāya namaḥ, oṃ viṣṇave namaḥ, oṃ madhusūdanāya namaḥ, oṃ trivikramāya namaḥ, oṃ vāmanāya namaḥ, oṃ śrīdharāya namaḥ, oṃ hṛṣīkeśāya namaḥ, oṃ padmanābhāya namaḥ, oṃ dāmodarāya namaḥ",
      englishMeaning:
        "Salutations to Govinda, Vishnu, Madhusudana, Trivikrama, Vamana, Sridhara, Hrishikesha, Padmanabha, and Damodara.",
      innerMeaning:
        "No water accompanies these nine; each name is instead touched to a specific part of the hand or body. Where the first three names were sipped, these are worn — the remaining nine of the traditional twelve names wrap the body itself in the divine name before a word of the rite proper has been spoken.",
      citation: VERIFY_NOTE,
    },
  ],
};

export const bhutocchatanam: RitualStep = {
  id: "bhutocchatanam",
  order: 2,
  name: {
    devanagari: "भूतोच्चाटनम्",
    tamil: "பூதோச்சாடனம்",
    iast: "bhūtocchāṭanam",
    english: "Clearing the space",
  },
  summary: "A short verse, said while striking the ground behind oneself, asks any unseen disturbance to withdraw before the rite continues.",
  mantras: [
    {
      id: "bhutocchatanam-1",
      devanagari:
        "उत्तिष्ठन्तु । भूतपिशाचाः । ते ततोऽन्यत्र प्रक्रामन्तु । ये भूता विघ्नकर्तारः तेऽनुज्ञाप्य वाल्खिल्यैः सह गच्छन्तु ।",
      tamil:
        "உத்திஷ்டந்து । பூதபிஶாசாஃ । தே ததோ அன்யத்ர ப்ரக்ராமந்து । யே பூதா விக்நகர்தாரஃ தே அனுஜ்ஞாப்ய வால்கில்யைஃ ஸஹ கச்சந்து ।",
      iast:
        "uttiṣṭhantu, bhūtapiśācāḥ, te tato'nyatra prakrāmantu, ye bhūtā vighnakartāraḥ te'nujñāpya vālkhilyaiḥ saha gacchantu",
      englishMeaning:
        "Let them rise. Spirits and disturbances — let them go elsewhere from here. Whatever unseen beings would obstruct this act, having been given leave, let them depart together with the Valkhilyas.",
      innerMeaning:
        "Before the rite is formally resolved upon (the Saṅkalpam that follows), the space itself is addressed directly — not banished by force but asked to clear, and sent off in the company of the Vālkhilyas, small sages of Vedic legend associated with the sun's retinue. It functions as a threshold: what follows is meant to happen in a settled place.",
      citation: VERIFY_NOTE,
    },
  ],
};

export const pranayamam: RitualStep = {
  id: "pranayamam",
  order: 3,
  name: {
    devanagari: "प्राणायामम्",
    tamil: "பிராணாயாமம்",
    iast: "prāṇāyāmam",
    english: "Regulated breath",
  },
  summary: "The breath is held through a formula naming all seven worlds, the Gāyatrī mantra, and a closing invocation — steadying body and mind before anything else is attempted.",
  mantras: [
    {
      id: "pranayamam-1",
      devanagari:
        "ॐ भूः । ॐ भुवः । ॐ स्वः । ॐ महः । ॐ जनः । ॐ तपः । ॐ सत्यम् । ॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् । ॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवस्सुवरोम् ।",
      tamil:
        "ௐ பூஃ । ௐ புவஃ । ௐ ஸ்வஃ । ௐ மஹஃ । ௐ ஜநஃ । ௐ தபஃ । ௐ ஸத்யம் । ௐ தத்ஸவிதுர்வரேண்யம் பர்கோ தேவஸ்ய தீமஹி தியோ யோ நஃ ப்ரசோதயாத் । ௐ ஆபோ ஜ்யோதீ ரஸோம்ருதம் ப்ரஹ்ம பூர்புவஸ்ஸுவரோம் ।",
      iast:
        "oṃ bhūḥ, oṃ bhuvaḥ, oṃ svaḥ, oṃ mahaḥ, oṃ janaḥ, oṃ tapaḥ, oṃ satyam, oṃ tatsaviturvareṇyaṃ bhargo devasya dhīmahi dhiyo yo naḥ pracodayāt, oṃ āpo jyotī raso'mṛtaṃ brahma bhūrbhuvassuvarom",
      englishMeaning:
        "Om, earth. Om, atmosphere. Om, heaven. Om, the world beyond. Om, the world of the born. Om, the world of austerity. Om, the world of truth. Om, let us meditate on the excellent glory of the divine Savitr (the Sun); may he inspire our understanding. Om, water, light, essence, immortal, the absolute — earth, atmosphere, heaven, Om.",
      innerMeaning:
        "On a single held breath, all seven traditional worlds are named — from the earth underfoot to the world of ultimate truth — followed by the Gāyatrī mantra itself in miniature and a closing formula naming water, light, and the immortal essence. The breath is made to hold the whole of the cosmos before it holds anything smaller; everything that follows in the rite happens inside a mind that has, at least for this one breath, been made spacious enough to contain it.",
      gestures: ["pranayama-hasta"],
      citation: VERIFY_NOTE,
    },
  ],
};

export const marjanam: RitualStep = {
  id: "marjanam",
  order: 5,
  name: {
    devanagari: "मार्जनम्",
    tamil: "மார்ஜனம்",
    iast: "mārjanam",
    english: "Purificatory sprinkling",
  },
  summary: "Three verses from the Rigveda address the waters directly as nurturing mothers, while water drawn from a vessel is sprinkled on the head and shoulders.",
  mantras: [
    {
      id: "marjanam-1",
      devanagari:
        "आपो हि ष्ठा मयोभुवः ता न ऊर्जे दधातन । महे रणाय चक्षसे ॥ यो वः शिवतमो रसः तस्य भाजयतेह नः । उशतीरिव मातरः ॥ तस्मा अरं गमाम वो यस्य क्षयाय जिन्वथ । आपो जनयथा च नः ॥",
      tamil:
        "ஆபோ ஹி ஷ்டா மயோபுவஃ தா ந ஊர்ஜே ததாதந । மஹே ரணாய சக்ஷஸே ॥ யோ வஃ ஶிவதமோ ரஸஃ தஸ்ய பாஜயதேஹ நஃ । உஶதீரிவ மாதரஃ ॥ தஸ்மா அரம் கமாம வோ யஸ்ய க்ஷயாய ஜிந்வத । ஆபோ ஜநயதா ச நஃ ॥",
      iast:
        "āpo hi ṣṭhā mayobhuvaḥ tā na ūrje dadhātana, mahe raṇāya cakṣase, yo vaḥ śivatamo rasaḥ tasya bhājayateha naḥ, uśatīriva mātaraḥ, tasmā araṃ gamāma vo yasya kṣayāya jinvatha, āpo janayathā ca naḥ",
      englishMeaning:
        "Waters, you who are truly beneficial, grant us nourishment, and the vision of great delight. Let us share here in that most auspicious essence that is yours, as loving mothers share theirs. May we go readily to that house to which you send us, and, waters, give us new life.",
      innerMeaning:
        "The waters are spoken to, not merely used — an old Rigvedic hymn (10.9.1–3) that names them as mothers, asks to share in their essence, and asks for renewed life, all before a single drop touches the head. The sprinkling that follows is the physical half of a relationship the verse has already established in words.",
      gestures: ["marjana-mudra"],
      citation: VERIFY_NOTE,
    },
  ],
};

export const aghamarshanam: RitualStep = {
  id: "aghamarshanam",
  order: 6,
  name: {
    devanagari: "अघमर्षणम्",
    tamil: "அகமர்ஷணம்",
    iast: "aghamarṣaṇam",
    english: "Release from accumulated wrong",
  },
  summary: "A cosmogonic hymn is recited on a held breath, then the water in the palm is thrown sharply aside, followed by a second Ācamanam.",
  mantras: [
    {
      id: "aghamarshanam-1",
      devanagari:
        "ऋतं च सत्यं चाभीद्धात्तपसोऽध्यजायत । ततो रात्र्यजायत ततः समुद्रो अर्णवः ॥ समुद्रादर्णवादधि संवत्सरो अजायत । अहोरात्राणि विदधद्विश्वस्य मिषतो वशी ॥ सूर्याचन्द्रमसौ धाता यथापूर्वमकल्पयत् । दिवं च पृथिवीं चान्तरिक्षमथो स्वः ॥",
      tamil:
        "ருதம் ச ஸத்யம் ச அபீத்தாத் தபஸோ அத்யஜாயத । ததோ ராத்ர்யஜாயத ததஃ ஸமுத்ரோ அர்ணவஃ ॥ ஸமுத்ராத் அர்ணவாத் அதி ஸம்வத்ஸரோ அஜாயத । அஹோராத்ராணி விததத் விஶ்வஸ்ய மிஷதோ வஶீ ॥ ஸூர்யாசந்த்ரமஸௌ தாதா யதாபூர்வம் அகல்பயத் । திவம் ச ப்ருதிவீம் ச அந்தரிக்ஷம் அதோ ஸ்வஃ ॥",
      iast:
        "ṛtaṃ ca satyaṃ cābhīddhāttapaso'dhyajāyata, tato rātryajāyata tataḥ samudro arṇavaḥ, samudrādarṇavādadhi saṃvatsaro ajāyata, ahorātrāṇi vidadhadviśvasya miṣato vaśī, sūryācandramasau dhātā yathāpūrvamakalpayat, divaṃ ca pṛthivīṃ cāntarikṣamatho svaḥ",
      englishMeaning:
        "From heated austerity, cosmic order (ṛta) and truth (satya) were kindled and born. From that, night was born; from that, the surging ocean. From the surging ocean, the year was born, ordaining day and night, ruling over all that blinks. The Ordainer set the sun and moon in place as before — the sky, the earth, the atmosphere, and heaven.",
      innerMeaning:
        "This is Rigveda 10.190, a hymn about how the cosmos itself first came to be — order and truth born from heat, before night, the ocean, the year, or even the sun and moon existed. Reciting it while releasing the water held from Mārjanam sets one small, personal act of purification inside the largest frame the tradition has: what is being cleared here is being cleared the same way everything else once came into being, out of heat and toward order.",
      gestures: ["aghamarshana-mudra"],
      citation: VERIFY_NOTE,
    },
    {
      id: "aghamarshanam-2",
      devanagari: "ॐ केशवाय स्वाहा । ॐ नारायणाय स्वाहा । ॐ माधवाय स्वाहा ।",
      tamil: "ௐ கேஶவாய ஸ்வாஹா । ௐ நாராயணாய ஸ்வாஹா । ௐ மாதவாய ஸ்வாஹா ।",
      iast: "oṃ keśavāya svāhā, oṃ nārāyaṇāya svāhā, oṃ mādhavāya svāhā",
      englishMeaning: "Om, to Keshava, svaha. Om, to Narayana, svaha. Om, to Madhava, svaha.",
      innerMeaning:
        "The same three-name sipping that opened the rite (Ācamanam) is repeated here — a second, smaller purification closing the sequence that began with Bhūtocchāṭanam, before the rite moves on to the Saṅkalpam proper.",
      gestures: ["gokarna-mudra"],
      citation: VERIFY_NOTE,
    },
  ],
};

export const gayatriAvahanam: RitualStep = {
  id: "gayatri-avahanam",
  order: 8,
  name: {
    devanagari: "गायत्री आवाहनम्",
    tamil: "காயத்ரீ ஆவாஹனம்",
    iast: "gāyatrī āvāhanam",
    english: "Invoking the Gāyatrī",
  },
  summary: "A verse invites the Gāyatrī not as a fixed meter or idol but as a living, gracious presence, before the mantra itself is taken up.",
  mantras: [
    {
      id: "gayatri-avahanam-1",
      devanagari: "ॐ आयातु वरदा देवी अक्षरं ब्रह्मसंमितम् । गायत्रीं छन्दसां मातेदं ब्रह्म जुषस्व नः ॥",
      tamil: "ௐ ஆயாது வரதா தேவீ அக்ஷரம் ப்ரஹ்மஸம்மிதம் । காயத்ரீம் சந்தஸாம் மாதேதம் ப்ரஹ்ம ஜுஷஸ்வ நஃ ॥",
      iast:
        "oṃ āyātu varadā devī akṣaraṃ brahmasaṃmitam, gāyatrīṃ chandasāṃ mātedaṃ brahma juṣasva naḥ",
      englishMeaning:
        "Om. May the boon-granting goddess come — the imperishable syllable equal to the absolute. Gāyatrī, mother of the metres, be pleased to accept this offering of ours.",
      innerMeaning:
        "Before the mantra is recited, it is invited — addressed as \"devī,\" a goddess asked to arrive, not merely a verse to be pronounced correctly. The distinction matters for what follows: the japa is framed as an encounter with a presence that has been welcomed, not a technical exercise in repeating fixed syllables.",
      gestures: ["anjali-mudra-hridaya"],
      citation: VERIFY_NOTE,
    },
  ],
};

export const gayatriJapa: RitualStep = {
  id: "gayatri-japa",
  order: 9,
  name: {
    devanagari: "गायत्री जपः",
    tamil: "காயத்ரி ஜபம்",
    iast: "gāyatrī japaḥ",
    english: "Repetition of the Gāyatrī mantra",
  },
  summary: "The Gāyatrī mantra is repeated silently or in a measured voice — the center of gravity of the entire rite.",
  mantras: [
    {
      id: "gayatri-japa-1",
      devanagari: "ॐ भूर्भुवः स्वः । तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥",
      tamil: "ௐ பூர்புவஃ ஸ்வஃ । தத்ஸவிதுர்வரேண்யம் பர்கோ தேவஸ்ய தீமஹி தியோ யோ நஃ ப்ரசோதயாத் ॥",
      iast: "oṃ bhūrbhuvaḥ svaḥ, tatsaviturvareṇyaṃ bhargo devasya dhīmahi dhiyo yo naḥ pracodayāt",
      englishMeaning:
        "Om, earth, atmosphere, heaven. Let us meditate on the excellent glory of the divine Savitr (the Sun); may he direct our understanding.",
      innerMeaning:
        "Everything before this mantra — the breath, the water, the invocation — prepares the body and mind to hold these words; everything after releases and carries them forward. Its request is notably not for wealth, safety, or victory, but for the sun to direct dhī: the practitioner's own faculty of insight. The prayer is for a better instrument of understanding, not a better outcome handed down from outside it.",
      gestures: ["gayatri-japa-mudra-sumukham", "japa-ganana-mudra"],
      citation: VERIFY_NOTE,
    },
  ],
};

export const abhivadanam: RitualStep = {
  id: "abhivadanam",
  order: 11,
  name: {
    devanagari: "अभिवादनम्",
    tamil: "அபிவாதனம்",
    iast: "abhivādanam",
    english: "Self-identification",
  },
  summary: "A formula naming one's gotra, pravara, sūtra, and śākhā is spoken aloud, placing the individual inside a named lineage.",
  mantras: [
    {
      id: "abhivadanam-1",
      devanagari:
        "चतुःसागरपर्यन्तं गोब्राह्मणेभ्यः शुभं भवतु । अमुकप्रवरान्वित अमुकगोत्रः अमुकसूत्रः अमुकशाखाध्यायी अमुकशर्माऽहं भो अभिवादये ।",
      tamil:
        "சதுஃஸாகரபர்யந்தம் கோப்ராஹ்மணேப்யஃ ஶுபம் பவது । அமுகப்ரவராந்வித அமுககோத்ரஃ அமுகஸூத்ரஃ அமுகஶாகாத்யாயீ அமுகஶர்மா அஹம் போ அபிவாதயே ।",
      iast:
        "catuḥsāgaraparyantaṃ gobrāhmaṇebhyaḥ śubhaṃ bhavatu, amuka-pravarānvita amuka-gotraḥ amuka-sūtraḥ amuka-śākhādhyāyī amuka-śarmā'haṃ bho abhivādaye",
      englishMeaning:
        "As far as the four oceans, may there be well-being for cattle and for brahmins. Belonging to the (named) lineage of sages, of the (named) gotra, the (named) sūtra, a student of the (named) branch of the Veda, I, (named), salute you.",
      innerMeaning:
        "\"अमुक\" (amuka, \"so-and-so\") marks each place where the practitioner's own gotra, lineage of sages (pravara), textual school (sūtra), Vedic branch (śākhā), and name are spoken aloud — this is a traditional fill-in-the-blank formula, not missing text. Identity here is declared as belonging to a chain — a lineage, a textual transmission, a geography reaching to the four oceans — rather than presented as a private, self-made fact.",
      citation:
        `${VERIFY_NOTE} "अमुक/amuka" placeholders mark the practitioner's own gotra, pravara, sūtra, śākhā, and name — traditional practice, not an omission.`,
    },
  ],
};

export const digdevataNamaskaram: RitualStep = {
  id: "digdevata-namaskaram",
  order: 12,
  name: {
    devanagari: "दिग्देवता नमस्कारम्",
    tamil: "திக்தேவதா நமஸ்காரம்",
    iast: "digdevatā namaskāram",
    english: "Salutation to the guardian deities of the directions",
  },
  summary: "Turning to face each of the eight directions in turn, a short salutation names the deity who presides over it.",
  mantras: [
    {
      id: "digdevata-namaskaram-1",
      devanagari:
        "ॐ इन्द्राय नमः पूर्वस्याम् । ॐ अग्नये नमः आग्नेय्याम् । ॐ यमाय नमः दक्षिणस्याम् । ॐ निर्ऋतये नमः नैर्ऋत्याम् । ॐ वरुणाय नमः पश्चिमायाम् । ॐ वायवे नमः वायव्याम् । ॐ कुबेराय नमः उत्तरस्याम् । ॐ ईशानाय नमः ऐशान्याम् ।",
      tamil:
        "ௐ இந்த்ராய நமஃ பூர்வஸ்யாம் । ௐ அக்நயே நமஃ ஆக்நேய்யாம் । ௐ யமாய நமஃ தக்ஷிணஸ்யாம் । ௐ நிர்ருதயே நமஃ நைர்ருத்யாம் । ௐ வருணாய நமஃ பஶ்சிமாயாம் । ௐ வாயவே நமஃ வாயவ்யாம் । ௐ குபேராய நமஃ உத்தரஸ்யாம் । ௐ ஈஶாநாய நமஃ ஐஶாந்யாம் ।",
      iast:
        "oṃ indrāya namaḥ pūrvasyām, oṃ agnaye namaḥ āgneyyām, oṃ yamāya namaḥ dakṣiṇasyām, oṃ nirṛtaye namaḥ nairṛtyām, oṃ varuṇāya namaḥ paścimāyām, oṃ vāyave namaḥ vāyavyām, oṃ kuberāya namaḥ uttarasyām, oṃ īśānāya namaḥ aiśānyām",
      englishMeaning:
        "Salutations to Indra in the east; to Agni in the southeast; to Yama in the south; to Nirṛti in the southwest; to Varuṇa in the west; to Vāyu in the northwest; to Kubera in the north; to Īśāna in the northeast.",
      innerMeaning:
        "The body turns through all eight points of the compass, greeting each guardian deity from the direction they preside over rather than addressing all of them at once facing a single way — the salutation is spatial before it is verbal.",
      gestures: ["dish-namaskara-posture"],
      citation: VERIFY_NOTE,
    },
  ],
};

export const samarpanam: RitualStep = {
  id: "samarpanam",
  order: 13,
  name: {
    devanagari: "समर्पणम्",
    tamil: "ஸமர்ப்பணம்",
    iast: "samarpaṇam",
    english: "Closing offering of the act itself",
  },
  summary: "A closing verse offers up the entire preceding act — body, speech, and mind — without claim to whatever result it may have produced.",
  mantras: [
    {
      id: "samarpanam-1",
      devanagari:
        "कायेन वाचा मनसेन्द्रियैर्वा बुद्ध्यात्मना वा प्रकृतिस्वभावात् । करोमि यद्यत् सकलं परस्मै श्रीमन्नारायणायेति समर्पयामि ॥",
      tamil:
        "காயேந வாசா மநஸேந்த்ரியைர் வா புத்த்யாத்மநா வா ப்ரக்ருதிஸ்வபாவாத் । கரோமி யத்யத் ஸகலம் பரஸ்மை ஶ்ரீமந்நாராயணாயேதி ஸமர்பயாமி ॥",
      iast:
        "kāyena vācā manasendriyairvā buddhyātmanā vā prakṛtisvabhāvāt, karomi yadyat sakalaṃ parasmai śrīmannārāyaṇāyeti samarpayāmi",
      englishMeaning:
        "Whatever I do — by body, speech, mind, or senses, by intellect or by the very nature of my being — all of it, entirely, I offer to the supreme Nārāyaṇa.",
      innerMeaning:
        "The rite doesn't close by asking for anything; it closes by handing over everything that was just done, down to the level of one's own nature acting through the body — a relinquishing rather than a request, and the last word spoken before the sequence ends.",
      gestures: ["anjali-mudra-hridaya"],
      citation: VERIFY_NOTE,
    },
  ],
};
