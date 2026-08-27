import type { RitualStep } from "./types";
import { doubleVerified } from "./citation";

/**
 * Steps that are identical across all three sandhyās (only Saṅkalpam,
 * Prāśanam, Arghyapradānam, and Sūryopasthānam genuinely differ by time of
 * day — see sandhya-specific.ts). Reused verbatim by pratah/madhyahnika/sayam
 * in sandhyas.ts. Ācamanam, Gaṇapati Dhyānam, and Prāṇāyāmam are each
 * recited three times across the full rite (opening Pūrvāṅgam, opening
 * Uttarāṅgam, and — Ācamanam only — closing); rather than rendering three
 * near-identical blocks, each step's description notes the repetition.
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
  summary:
    "Three names are swallowed, then all twelve Keśava-names are recited while touching specific points on the hand and body. Recited three times across the full rite — opening Pūrvāṅgam, opening Uttarāṅgam, and closing.",
  mantras: [
    {
      id: "achamanam-1",
      devanagari: "ॐ अच्युताय नमः । ॐ अनन्ताय नमः । ॐ गोविन्दाय नमः ।",
      tamil: "ௐ அச்யுதாய நமஃ । ௐ அநந்தாய நமஃ । ௐ கோவிந்தாய நமஃ ।",
      iast: "oṃ acyutāya namaḥ, oṃ anantāya namaḥ, oṃ govindāya namaḥ",
      englishMeaning: "Om, to Achyuta, salutations. Om, to Ananta, salutations. Om, to Govinda, salutations.",
      innerMeaning:
        "Water is swallowed three times, once on each of these three names — traditionally held to cure the ills of body and mind, a purification that opens the rite before anything else is said or asked for.",
      gestures: ["gokarna-mudra"],
      citation: doubleVerified(13, 1),
    },
    {
      id: "achamanam-2",
      devanagari:
        "ॐ केशवाय नमः । ॐ नारायणाय नमः । ॐ माधवाय नमः । ॐ गोविन्दाय नमः । ॐ विष्णवे नमः । ॐ मधुसूदनाय नमः । ॐ त्रिविक्रमाय नमः । ॐ वामनाय नमः । ॐ श्रीधराय नमः । ॐ हृषीकेशाय नमः । ॐ पद्मनाभाय नमः । ॐ दामोदराय नमः ।",
      tamil:
        "ௐ கேஶவாய நமஃ । ௐ நாராயணாய நமஃ । ௐ மாதவாய நமஃ । ௐ கோவிந்தாய நமஃ । ௐ விஷ்ணவே நமஃ । ௐ மதுஸூதநாய நமஃ । ௐ த்ரிவிக்ரமாய நமஃ । ௐ வாமநாய நமஃ । ௐ ஶ்ரீதராய நமஃ । ௐ ஹ்ருஷீகேஶாய நமஃ । ௐ பத்மநாபாய நமஃ । ௐ தாமோதராய நமஃ ।",
      iast:
        "oṃ keśavāya namaḥ, oṃ nārāyaṇāya namaḥ, oṃ mādhavāya namaḥ, oṃ govindāya namaḥ, oṃ viṣṇave namaḥ, oṃ madhusūdanāya namaḥ, oṃ trivikramāya namaḥ, oṃ vāmanāya namaḥ, oṃ śrīdharāya namaḥ, oṃ hṛṣīkeśāya namaḥ, oṃ padmanābhāya namaḥ, oṃ dāmodarāya namaḥ",
      englishMeaning:
        "Salutations to Keshava, Narayana, Madhava, Govinda, Vishnu, Madhusudana, Trivikrama, Vamana, Sridhara, Hrishikesha, Padmanabha, and Damodara.",
      innerMeaning:
        "Each name is touched to a specific point — thumb to right then left cheek, ring finger to right then left eye, index finger to right then left nostril, little finger to right then left ear, middle finger to right then left shoulder, then all four fingers to navel and to the crown of the head. Twelve names, twelve places: the whole body is addressed by name before a word of the rite proper has been spoken.",
      citation: doubleVerified(13, 2),
    },
  ],
};

export const ganapatiDhyanam: RitualStep = {
  id: "ganapati-dhyanam",
  order: 2,
  name: {
    devanagari: "गणपति ध्यानम्",
    tamil: "கணபதி த்யானம்",
    iast: "gaṇapati dhyānam",
    english: "Meditation on Gaṇapati",
  },
  summary:
    "A short, widely-known verse invoking Gaṇapati to clear obstacles before the rite continues. Recited at the opening of both Pūrvāṅgam and Uttarāṅgam.",
  mantras: [
    {
      id: "ganapati-dhyanam-1",
      devanagari:
        "ॐ शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् । प्रसन्नवदनं ध्यायेत् सर्वविघ्नोपशान्तये ॥",
      tamil:
        "ௐ ஶுக்லாம்பரதரம் விஷ்ணும் ஶஶிவர்ணம் சதுர்புஜம் । ப்ரஸந்நவதநம் த்யாயேத் ஸர்வவிக்நோபஶாந்தயே ॥",
      iast:
        "oṃ śuklāmbaradharaṃ viṣṇuṃ śaśivarṇaṃ caturbhujam, prasannavadanaṃ dhyāyet sarvavighnopaśāntaye",
      englishMeaning:
        "I meditate on the all-pervading one who wears a white garment, is fair as the moon, four-armed, and cheerful of countenance, so that all obstacles may be pacified.",
      innerMeaning:
        "Before the breath is steadied or the resolve spoken, whatever might obstruct the rite is addressed first — a single verse, cheerful rather than austere in tone, asking only that the way be cleared.",
      citation: doubleVerified(14, 3),
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
  summary:
    "The breath is held through a formula naming all seven worlds, the Gāyatrī mantra, and a closing invocation — steadying body and mind before anything else is attempted. Recited (in some form) several times across the rite.",
  mantras: [
    {
      id: "pranayamam-1",
      devanagari:
        "ॐ भूः । ॐ भुवः । ॐ सुवः । ॐ महः । ॐ जनः । ॐ तपः । ॐ सत्यम् । ॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् । ॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवस्सुवरोम् ।",
      tamil:
        "ௐ பூஃ । ௐ புவஃ । ௐ ஸுவஃ । ௐ மஹஃ । ௐ ஜநஃ । ௐ தபஃ । ௐ ஸத்யம் । ௐ தத்ஸவிதுர்வரேண்யம் பர்கோ தேவஸ்ய தீமஹி தியோ யோ நஃ ப்ரசோதயாத் । ௐ ஆபோ ஜ்யோதீ ரஸோம்ருதம் ப்ரஹ்ம பூர்புவஸ்ஸுவரோம் ।",
      iast:
        "oṃ bhūḥ, oṃ bhuvaḥ, oṃ suvaḥ, oṃ mahaḥ, oṃ janaḥ, oṃ tapaḥ, oṃ satyam, oṃ tatsaviturvareṇyaṃ bhargo devasya dhīmahi dhiyo yo naḥ pracodayāt, oṃ āpo jyotī raso'mṛtaṃ brahma bhūrbhuvassuvarom",
      englishMeaning:
        "Om, earth. Om, atmosphere. Om, heaven. Om, the world beyond. Om, the world of the born. Om, the world of austerity. Om, the world of truth. Om, let us meditate on the excellent glory of the divine Savitr (the Sun); may he inspire our understanding. Om, water, light, essence, immortal, the absolute — earth, atmosphere, heaven, Om.",
      innerMeaning:
        "On a single held breath, all seven traditional worlds are named — from the earth underfoot to the world of ultimate truth — followed by the Gāyatrī mantra itself in miniature and a closing formula naming water, light, and the immortal essence. Practiced fully, it is a timed cycle: inhale through the first section, hold through the second, exhale through the third, in a 1:3:2 ratio of breath. The breath is made to hold the whole of the cosmos before it holds anything smaller.",
      gestures: ["pranayama-hasta"],
      citation: doubleVerified(15, 4),
    },
  ],
};

export const prokshanamMarjanam: RitualStep = {
  id: "prokshanam-marjanam",
  order: 5,
  name: {
    devanagari: "प्रोक्षणम् / मार्जनम्",
    tamil: "ப்ரோக்ஷணம் / மார்ஜனம்",
    iast: "prokṣaṇam / mārjanam",
    english: "Purificatory sprinkling",
  },
  summary:
    "Nine lines from the Rigveda address the waters directly as nurturing mothers, while water is sprinkled on the head with each line — one line sprinkled on the feet instead.",
  mantras: [
    {
      id: "prokshanam-marjanam-1",
      devanagari:
        "आपो हि ष्ठा मयोभुवः ता न ऊर्जे दधातन । महे रणाय चक्षसे । यो वः शिवतमो रसः तस्य भाजयतेह नः । उशतीरिव मातरः । तस्मा अरं गमाम वो यस्य क्षयाय जिन्वथ । आपो जनयथा च नः । ॐ भूर्भुवस्सुवः ॥",
      tamil:
        "ஆபோ ஹி ஷ்டா மயோபுவஃ தா ந ஊர்ஜே ததாதந । மஹே ரணாய சக்ஷஸே । யோ வஃ ஶிவதமோ ரஸஃ தஸ்ய பாஜயதேஹ நஃ । உஶதீரிவ மாதரஃ । தஸ்மா அரம் கமாம வோ யஸ்ய க்ஷயாய ஜிந்வத । ஆபோ ஜநயதா ச நஃ । ௐ பூர்புவஸ்ஸுவஃ ॥",
      iast:
        "āpo hi ṣṭhā mayobhuvaḥ tā na ūrje dadhātana, mahe raṇāya cakṣase, yo vaḥ śivatamo rasaḥ tasya bhājayateha naḥ, uśatīriva mātaraḥ, tasmā araṃ gamāma vo yasya kṣayāya jinvatha, āpo janayathā ca naḥ, oṃ bhūrbhuvassuvaḥ",
      englishMeaning:
        "Waters, you who are truly beneficial, grant us nourishment and the vision of great delight. Let us share here in that most auspicious essence that is yours, as loving mothers share theirs. May we go readily to that house to which you send us, and, waters, give us new life. Om, earth, atmosphere, heaven.",
      innerMeaning:
        "The waters are spoken to, not merely used — this Rigvedic sequence (10.9.1–3) names them as loving mothers and asks for renewed life. Each line is sprinkled on the head with the right hand's fingers as it's recited; one line ('for the sake of that abode you quicken') is sprinkled on the feet instead, and the final line circles the water around the head. The sprinkling that follows each phrase is the physical half of a relationship the verse has already established in words.",
      gestures: ["marjana-mudra"],
      citation: doubleVerified(18, 7),
    },
  ],
};

export const punahProkshanam: RitualStep = {
  id: "punah-prokshanam",
  order: 7,
  name: {
    devanagari: "पुनःप्रोक्षणम्",
    tamil: "புநஃப்ரோக்ஷணம்",
    iast: "punaḥ prokṣaṇam",
    english: "Sprinkling again",
  },
  summary:
    "A second sprinkling — first invoking Dadhikrāvṇa (identified here with Hayagrīva, seat of knowledge), then repeating the Prokṣaṇam verses in full.",
  mantras: [
    {
      id: "punah-prokshanam-1",
      devanagari:
        "ॐ दधिक्राव्णो अकारिषं जिष्णोरश्वस्य वाजिनः । सुरभि नो मुखाकरत् प्रण आयूंषि तारिषत् । आपो हि ष्ठा मयोभुवः ता न ऊर्जे दधातन । महे रणाय चक्षसे । यो वः शिवतमो रसः तस्य भाजयतेह नः । उशतीरिव मातरः । तस्मा अरं गमाम वो यस्य क्षयाय जिन्वथ । आपो जनयथा च नः । ॐ भूर्भुवस्सुवः ॥",
      tamil:
        "ௐ ததிக்ராவ்ணோ அகாரிஷம் ஜிஷ்ணோரஶ்வஸ்ய வாஜிநஃ । ஸுரபி நோ முகாகரத் ப்ரண ஆயூம்ஷி தாரிஷத் । ஆபோ ஹி ஷ்டா மயோபுவஃ தா ந ஊர்ஜே ததாதந । மஹே ரணாய சக்ஷஸே । யோ வஃ ஶிவதமோ ரஸஃ தஸ்ய பாஜயதேஹ நஃ । உஶதீரிவ மாதரஃ । தஸ்மா அரம் கமாம வோ யஸ்ய க்ஷயாய ஜிந்வத । ஆபோ ஜநயதா ச நஃ । ௐ பூர்புவஸ்ஸுவஃ ॥",
      iast:
        "oṃ dadhikrāvṇo akāriṣaṃ jiṣṇorśvasya vājinaḥ, surabhi no mukhākarat praṇa āyūṃṣi tāriṣat, āpo hi ṣṭhā mayobhuvaḥ...",
      englishMeaning:
        "I have praised Dadhikrāvṇa, the victorious, spirited steed — may he make our faces fragrant and lengthen our lives. (Followed by the Prokṣaṇam verses in full.)",
      innerMeaning:
        "Dadhikrāvṇa here is read as Hayagrīva, the horse-headed form associated with the seat of all knowledge — a second invocation before the same purifying verses are repeated, this time ending with water circled clockwise around the head rather than sprinkled once.",
      citation: doubleVerified(21, 14),
    },
  ],
};

export const sandhyopasanam: RitualStep = {
  id: "sandhyopasanam",
  order: 9,
  name: {
    devanagari: "सन्ध्योपासनम्",
    tamil: "ஸந்த்யோபாஸனம்",
    iast: "sandhyopāsanam",
    english: "Contemplation of unity",
  },
  summary:
    "Standing with joined palms facing the sun, a brief meditation on the identity of the sun and the self — held quietly for a moment, not rushed.",
  mantras: [
    {
      id: "sandhyopasanam-1",
      devanagari: "ॐ असावादित्यो ब्रह्म । ब्रह्मैवाहमस्मि ॥",
      tamil: "ௐ அஸாவாதித்யோ ப்ரஹ்ம । ப்ரஹ்மைவாஹமஸ்மி ॥",
      iast: "oṃ asāvādityo brahma, brahmaivāhamasmi",
      englishMeaning: "That sun is Brahman. I am indeed that Brahman.",
      innerMeaning:
        "Also called Aikyānusandhānam — \"contemplation of oneness\" — in at least one source. Two hands touch the chest, the eyes close, and the identity of the visible sun and one's own self is held in mind for a moment before moving on: the shortest step in the entire rite, and one of the few not primarily about purification or request.",
      gestures: ["anjali-mudra-urdhva"],
      citation: doubleVerified(27, 16),
    },
  ],
};

export const adityadiTarpanam: RitualStep = {
  id: "adityadi-tarpanam",
  order: 10,
  name: {
    devanagari: "आदित्यादि तर्पणम्",
    tamil: "ஆதித்யாதி தர்பணம்",
    iast: "ādityādi tarpaṇam",
    english: "Offering thanks to the nine planets and twelve names",
  },
  summary:
    "Water let run from the fingertips to the ground while thanking the nine graha and, again, the twelve names of Viṣṇu — the twelve months' tutelary forms.",
  mantras: [
    {
      id: "adityadi-tarpanam-1",
      devanagari:
        "ॐ आदित्यं तर्पयामि । सोमं तर्पयामि । अङ्गारकं तर्पयामि । बुधं तर्पयामि । बृहस्पतिं तर्पयामि । शुक्रं तर्पयामि । शनैश्चरं तर्पयामि । राहुं तर्पयामि । केतुं तर्पयामि ॥ केशवं तर्पयामि । नारायणं तर्पयामि । माधवं तर्पयामि । गोविन्दं तर्पयामि । विष्णुं तर्पयामि । मधुसूदनं तर्पयामि । त्रिविक्रमं तर्पयामि । वामनं तर्पयामि । श्रीधरं तर्पयामि । हृषीकेशं तर्पयामि । पद्मनाभं तर्पयामि । दामोदरं तर्पयामि ॥",
      tamil:
        "ௐ ஆதித்யம் தர்பயாமி । ஸோமம் தர்பயாமி । அங்காரகம் தர்பயாமி । புதம் தர்பயாமி । ப்ருஹஸ்பதிம் தர்பயாமி । ஶுக்ரம் தர்பயாமி । ஶநைஶ்சரம் தர்பயாமி । ராஹும் தர்பயாமி । கேதும் தர்பயாமி ॥ கேஶவம் தர்பயாமி । நாராயணம் தர்பயாமி । மாதவம் தர்பயாமி । கோவிந்தம் தர்பயாமி । விஷ்ணும் தர்பயாமி । மதுஸூதநம் தர்பயாமி । த்ரிவிக்ரமம் தர்பயாமி । வாமநம் தர்பயாமி । ஶ்ரீதரம் தர்பயாமி । ஹ்ருஷீகேஶம் தர்பயாமி । பத்மநாபம் தர்பயாமி । தாமோதரம் தர்பயாமி ॥",
      iast:
        "oṃ ādityaṃ tarpayāmi, somaṃ tarpayāmi, aṅgārakaṃ tarpayāmi, budhaṃ tarpayāmi, bṛhaspatiṃ tarpayāmi, śukraṃ tarpayāmi, śanaiścaraṃ tarpayāmi, rāhuṃ tarpayāmi, ketuṃ tarpayāmi; keśavaṃ tarpayāmi...dāmodaraṃ tarpayāmi",
      englishMeaning:
        "I satisfy the Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu. I satisfy Keshava, Narayana, Madhava, Govinda, Vishnu, Madhusudana, Trivikrama, Vamana, Sridhara, Hrishikesha, Padmanabha, and Damodara.",
      innerMeaning:
        "The same twelve names touched in Ācamanam return here as an offering rather than a purification — each is traditionally read as presiding over one month of the year. Water runs from the fingertips to the ground rather than being sprinkled or sipped: a gesture of release, thanking rather than asking.",
      citation: doubleVerified(28, 17),
    },
  ],
};

export const gayatriAvahanam: RitualStep = {
  id: "gayatri-avahanam",
  order: 13,
  name: {
    devanagari: "गायत्री आवाहनम्",
    tamil: "காயத்ரீ ஆவாஹனம்",
    iast: "gāyatrī āvāhanam",
    english: "Invoking the Gāyatrī",
  },
  summary: "A verse invites the Gāyatrī, imagined as manifesting in the lotus of the heart, before the mantra itself is taken up.",
  mantras: [
    {
      id: "gayatri-avahanam-1",
      devanagari:
        "ॐ आयातु वरदा देवी अक्षरं ब्रह्मसम्मितम् । गायत्रीं छन्दसां मातेदं ब्रह्म जुषस्व नः । ओजोऽसि सहोऽसि बलमसि भ्राजोऽसि देवानां धाम नामासि । विश्वमसि विश्वायुः सर्वमसि सर्वायुरभिभूरोम् । गायत्रीमावाहयामि सावित्रीमावाहयामि सरस्वतीमावाहयामि ॥",
      tamil:
        "ௐ ஆயாது வரதா தேவீ அக்ஷரம் ப்ரஹ்மஸம்மிதம் । காயத்ரீம் சந்தஸாம் மாதேதம் ப்ரஹ்ம ஜுஷஸ்வ நஃ । ஓஜோஅஸி ஸஹோஅஸி பலமஸி ப்ராஜோஅஸி தேவாநாம் தாம நாமாஸி । விஶ்வமஸி விஶ்வாயுஃ ஸர்வமஸி ஸர்வாயுரபிபூரோம் । காயத்ரீம் ஆவாஹயாமி ஸாவித்ரீம் ஆவாஹயாமி ஸரஸ்வதீம் ஆவாஹயாமி ॥",
      iast:
        "oṃ āyātu varadā devī akṣaraṃ brahmasammitam, gāyatrīṃ chandasāṃ mātedaṃ brahma juṣasva naḥ, ojo'si saho'si balamasi bhrājo'si devānāṃ dhāma nāmāsi, viśvamasi viśvāyuḥ sarvamasi sarvāyurabhibhūrom, gāyatrīm āvāhayāmi sāvitrīm āvāhayāmi sarasvatīm āvāhayāmi",
      englishMeaning:
        "Om. May the boon-granting goddess come — the imperishable syllable equal to the absolute. Gāyatrī, mother of the metres, be pleased to accept this offering of ours. You are vigor, you are strength, you are power, you are radiance; you are the abode and the very name of the gods. You are the universe, you are all life; you are everything, you are all life, all-pervading. I invoke Gāyatrī, I invoke Sāvitrī, I invoke Sarasvatī.",
      innerMeaning:
        "Before the mantra is recited, it is invited and pictured arriving in the lotus of the heart — addressed as a goddess asked to come, not merely a verse to be pronounced correctly, and named in three aspects (Gāyatrī, Sāvitrī, Sarasvatī) rather than one. The distinction matters for what follows: the japa is framed as an encounter with a presence that has been welcomed, not a technical exercise in repeating fixed syllables.",
      gestures: ["anjali-mudra-hridaya"],
      citation: doubleVerified(35, 20),
    },
  ],
};

export const gayatriJapa: RitualStep = {
  id: "gayatri-japa",
  order: 14,
  name: {
    devanagari: "गायत्री जपः",
    tamil: "காயத்ரி ஜபம்",
    iast: "gāyatrī japaḥ",
    english: "Repetition of the Gāyatrī mantra",
  },
  summary:
    "The Gāyatrī mantra is repeated — standing and facing the sun for prātaḥ and mādhyāhnika, seated and facing away for sāyam — the center of gravity of the entire rite.",
  mantras: [
    {
      id: "gayatri-japa-1",
      devanagari: "ॐ भूर्भुवः स्वः । तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥",
      tamil: "ௐ பூர்புவஃ ஸ்வஃ । தத்ஸவிதுர்வரேண்யம் பர்கோ தேவஸ்ய தீமஹி தியோ யோ நஃ ப்ரசோதயாத் ॥",
      iast: "oṃ bhūrbhuvaḥ svaḥ, tatsaviturvareṇyaṃ bhargo devasya dhīmahi dhiyo yo naḥ pracodayāt",
      englishMeaning:
        "Om, earth, atmosphere, heaven. Let us meditate on the excellent glory of the divine Savitr (the Sun); may he direct our understanding.",
      innerMeaning:
        "Everything before this mantra — the breath, the water, the invocation — prepares the body and mind to hold these words; everything after releases and carries them forward. Its request is notably not for wealth, safety, or victory, but for the sun to direct dhī: the practitioner's own faculty of insight. Repetitions are counted on the fingers (traditionally 108, or 54/28 where time is short), the hands held at neck height in the morning, chest height at noon, and navel height in the evening — hidden from view beneath the upper cloth.",
      gestures: ["gayatri-japa-mudra-sumukham", "japa-ganana-mudra"],
      citation: doubleVerified(36, 21),
    },
  ],
};

export const gayatriUpasthanam: RitualStep = {
  id: "gayatri-upasthanam",
  order: 15,
  name: {
    devanagari: "गायत्री उपस्थानम्",
    tamil: "காயத்ரி உபஸ்தானம்",
    iast: "gāyatrī upasthānam",
    english: "Sending the Gāyatrī back",
  },
  summary: "Having been invited to arrive, the Gāyatrī is now asked to return, happily, to her own abode above Mount Meru.",
  mantras: [
    {
      id: "gayatri-upasthanam-1",
      devanagari:
        "ॐ उत्तमे शिखरे देवी भूम्यां पर्वतमूर्धनि । ब्राह्मणेभ्यो ह्यनुज्ञानं गच्छ देवि यथासुखम् ॥",
      tamil:
        "ௐ உத்தமே ஶிகரே தேவீ பூம்யாம் பர்வதமூர்தநி । ப்ராஹ்மணேப்யோ ஹ்யநுஜ்ஞாநம் கச்ச தேவி யதாஸுகம் ॥",
      iast:
        "oṃ uttame śikhare devī bhūmyāṃ parvatamūrdhani, brāhmaṇebhyo hyanujñānaṃ gaccha devi yathāsukham",
      englishMeaning:
        "O goddess, on the excellent peak, on the summit of the mountain on this earth — having given leave to those who worship, go, goddess, as you please, happily.",
      innerMeaning:
        "The same courtesy shown on arrival (Gāyatrī Āvāhanam) is shown on departure: the goddess is not simply finished with, but released, asked to go where she pleases. What was invited in is seen off, not just set aside.",
      gestures: ["anjali-mudra-hridaya"],
      citation: doubleVerified(38, 22),
    },
  ],
};

export const sandhyadiDevataVandanam: RitualStep = {
  id: "sandhyadi-devata-vandanam",
  order: 17,
  name: {
    devanagari: "सन्ध्यादि देवता वन्दनम्",
    tamil: "ஸந்த்யாதி தேவதா வந்தனம்",
    iast: "sandhyādi devatā vandanam",
    english: "Salutation to the Sandhyā deities",
  },
  summary: "Salutations to Sandhyā, Sāvitrī, Gāyatrī, and Sarasvatī, closing with a brief confession that any wrong done was done under the sway of desire or anger, not deliberately.",
  mantras: [
    {
      id: "sandhyadi-devata-vandanam-1",
      devanagari:
        "ॐ सन्ध्यायै नमः । ॐ सावित्रै नमः । ॐ गायत्रै नमः । ॐ सरस्वत्यै नमः । ॐ सर्वाभ्यो देवताभ्यो नमो नमः । ॐ कामोऽकार्षीन्मन्युरकार्षीत् नमो नमः ॥",
      tamil:
        "ௐ ஸந்த்யாயை நமஃ । ௐ ஸாவித்ரை நமஃ । ௐ காயத்ரை நமஃ । ௐ ஸரஸ்வத்யை நமஃ । ௐ ஸர்வாப்யோ தேவதாப்யோ நமோ நமஃ । ௐ காமோ அகார்ஷீந்மந்யுரகார்ஷீத் நமோ நமஃ ॥",
      iast:
        "oṃ sandhyāyai namaḥ, oṃ sāvitrai namaḥ, oṃ gāyatrai namaḥ, oṃ sarasvatyai namaḥ, oṃ sarvābhyo devatābhyo namo namaḥ, oṃ kāmo'kārṣīnmanyurakārṣīt namo namaḥ",
      englishMeaning:
        "Salutations to Sandhyā. Salutations to Sāvitrī. Salutations to Gāyatrī. Salutations to Sarasvatī. Salutations, again and again, to all the deities. Desire did it, anger did it — salutations, again and again.",
      innerMeaning:
        "The closing line is a small, specific admission: whatever was done wrong was done under the compulsion of desire (kāma) or anger (manyu), not from deliberate intent — named plainly, not elaborated on, and immediately followed by salutation rather than self-justification.",
      citation: doubleVerified(41, 36),
    },
  ],
};

export const abhivadanam: RitualStep = {
  id: "abhivadanam",
  order: 18,
  name: {
    devanagari: "अभिवादनम्",
    tamil: "அபிவாதனம்",
    iast: "abhivādanam",
    english: "Self-identification",
  },
  summary:
    "Bent at the waist, palms near the ears, a formula naming one's pravara, gotra, sūtra, and śākhā is spoken — placing the individual inside a named lineage — followed by touching the feet of any elder present.",
  mantras: [
    {
      id: "abhivadanam-1",
      devanagari:
        "अभिवादये अमुकप्रवरान्वित अमुकगोत्रः अमुकसूत्रः अमुकशाखाध्यायी श्री अमुकशर्माऽहम् अस्मि भोः ॥",
      tamil:
        "அபிவாதயே அமுகப்ரவராந்வித அமுககோத்ரஃ அமுகஸூத்ரஃ அமுகஶாகாத்யாயீ ஶ்ரீ அமுகஶர்மா அஹம் அஸ்மி போஃ ॥",
      iast:
        "abhivādaye amuka-pravarānvita amuka-gotraḥ amuka-sūtraḥ amuka-śākhādhyāyī śrī amuka-śarmā'ham asmi bhoḥ",
      englishMeaning:
        "I salute you — belonging to the (named) lineage of sages, of the (named) gotra, the (named) sūtra, a student of the (named) branch of the Veda, I, Śrī (named), am here.",
      innerMeaning:
        "\"अमुक\" (amuka, \"so-and-so\") marks each place where the practitioner's own pravara, gotra, sūtra, śākhā, and name are spoken aloud — traditional practice, not missing text. Identity here is declared as belonging to a chain — a lineage of sages, a textual school, a branch of the Veda — rather than presented as a private, self-made fact; the bow and the touching of an elder's feet that follow make the same point with the body.",
      citation: doubleVerified(42, 37),
    },
  ],
};

export const digdevataNamaskaram: RitualStep = {
  id: "digdevata-namaskaram",
  order: 19,
  name: {
    devanagari: "दिग्देवता वन्दनम्",
    tamil: "திக்தேவதா வந்தனம்",
    iast: "digdevatā vandanam",
    english: "Salutation to the guardian deities of the directions",
  },
  summary:
    "Salutation to the four cardinal directions, then above, below, the atmosphere between, the earth, and finally Brahmā and Viṣṇu.",
  mantras: [
    {
      id: "digdevata-namaskaram-1",
      devanagari:
        "ॐ प्राच्यै दिशे नमः । ॐ दक्षिणायै दिशे नमः । ॐ प्रतीच्यै दिशे नमः । ॐ उदीच्यै दिशे नमः । ॐ ऊर्ध्वाय नमः । ॐ अधराय नमः । ॐ अन्तरिक्षाय नमः । ॐ भूम्यै नमः । ॐ ब्रह्मणे नमः । ॐ विष्णवे नमः ॥",
      tamil:
        "ௐ ப்ராச்யை திஶே நமஃ । ௐ தக்ஷிணாயை திஶே நமஃ । ௐ ப்ரதீச்யை திஶே நமஃ । ௐ உதீச்யை திஶே நமஃ । ௐ ஊர்த்வாய நமஃ । ௐ அதராய நமஃ । ௐ அந்தரிக்ஷாய நமஃ । ௐ பூம்யை நமஃ । ௐ ப்ரஹ்மணே நமஃ । ௐ விஷ்ணவே நமஃ ॥",
      iast:
        "oṃ prācyai diśe namaḥ, oṃ dakṣiṇāyai diśe namaḥ, oṃ pratīcyai diśe namaḥ, oṃ udīcyai diśe namaḥ, oṃ ūrdhvāya namaḥ, oṃ adharāya namaḥ, oṃ antarikṣāya namaḥ, oṃ bhūmyai namaḥ, oṃ brahmaṇe namaḥ, oṃ viṣṇave namaḥ",
      englishMeaning:
        "Salutations to the eastern direction. Salutations to the southern direction. Salutations to the western direction. Salutations to the northern direction. Salutations above. Salutations below. Salutations to the atmosphere. Salutations to the earth. Salutations to Brahmā. Salutations to Viṣṇu.",
      innerMeaning:
        "The body turns through all four cardinal points, then salutes above, below, the space between, and the earth itself, before naming Brahmā and Viṣṇu directly — the salutation is spatial before it is doctrinal, covering the whole of where one stands before naming who is addressed. (One source appends an eleventh salutation, to Mṛtyu/Rudra; another, optionally, to Yama — a minor, unresolved variation between the two sources this entry is checked against.)",
      gestures: ["dish-namaskara-posture"],
      citation: doubleVerified(43, 38),
    },
  ],
};
