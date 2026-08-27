import type { RitualStep, SandhyaTime } from "./types";
import { doubleVerified } from "./citation";

const sankalpamTime: Record<SandhyaTime, { dn: string; tm: string; iast: string; window: string; english: string }> = {
  pratah: {
    dn: "प्रातः सन्ध्यामुपासिष्ये",
    tm: "ப்ராதஃ ஸந்த்யாமுபாஸிஷ்யே",
    iast: "prātaḥ sandhyām upāsiṣye",
    window: "I begin to worship the dawn Sandhyā",
    english: "dawn",
  },
  madhyahnika: {
    dn: "माध्याह्निकं करिष्ये",
    tm: "மாத்யாஹ்நிகம் கரிஷ்யே",
    iast: "mādhyāhnikaṃ kariṣye",
    window: "I begin the noon rite",
    english: "noon",
  },
  sayam: {
    dn: "सायं सन्ध्यामुपासिष्ये",
    tm: "ஸாயம் ஸந்த்யாமுபாஸிஷ்யே",
    iast: "sāyaṃ sandhyām upāsiṣye",
    window: "I begin to worship the dusk Sandhyā",
    english: "dusk",
  },
};

const gayatriSankalpamTime: Record<SandhyaTime, { dn: string; tm: string; iast: string }> = {
  pratah: {
    dn: "प्रातःसन्ध्या गायत्रीमहामन्त्रजपं करिष्ये",
    tm: "ப்ராதஃஸந்த்யா காயத்ரீமஹாமந்த்ரஜபம் கரிஷ்யே",
    iast: "prātaḥsandhyā gāyatrī-mahāmantra-japaṃ kariṣye",
  },
  madhyahnika: {
    dn: "माध्याह्निक गायत्रीमहामन्त्रजपं करिष्ये",
    tm: "மாத்யாஹ்நிக காயத்ரீமஹாமந்த்ரஜபம் கரிஷ்யே",
    iast: "mādhyāhnika gāyatrī-mahāmantra-japaṃ kariṣye",
  },
  sayam: {
    dn: "सायंसन्ध्या गायत्रीमहामन्त्रजपं करिष्ये",
    tm: "ஸாயம்ஸந்த்யா காயத்ரீமஹாமந்த்ரஜபம் கரிஷ்யே",
    iast: "sāyaṃsandhyā gāyatrī-mahāmantra-japaṃ kariṣye",
  },
};

/**
 * The resolve is spoken twice, once opening Pūrvāṅgam (naming the sandhyā)
 * and once opening the Gāyatrī japa proper (naming the repetition count),
 * rendered here as one step with two mantra entries rather than two
 * separate step blocks; see CLAUDE.md §4.
 *
 * Two independent sources agree on the wording but differ on one word: one
 * names "śrīmannārāyaṇa" as the one to whom merit accrues, the other
 * "śrīparameśvara", a real Vaiṣṇava/Smārta phrasing difference, not an
 * error in either source. Shown here with "parameśvara" per the more
 * commonly attested form; the variant is worth surfacing, not silently
 * resolved.
 */
export function sankalpam(time: SandhyaTime): RitualStep {
  const t = sankalpamTime[time];
  const g = gayatriSankalpamTime[time];
  return {
    id: "sankalpam",
    order: 4,
    name: {
      devanagari: "सङ्कल्पम्",
      tamil: "ஸங்கல்பம்",
      iast: "saṅkalpam",
      english: "The formal resolve",
    },
    summary: "A spoken declaration of intent, held with the right palm covering the left on the right thigh. It is spoken twice: once naming the sandhyā, once naming how many Gāyatrī repetitions are about to follow.",
    mantras: [
      {
        id: `sankalpam-${time}`,
        devanagari: `ॐ ममोपात्त समस्त दुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं ${t.dn} ।`,
        tamil: `ௐ மமோபாத்த ஸமஸ்த துரிதக்ஷயத்வாரா ஶ்ரீபரமேஶ்வரப்ரீத்யர்தம் ${t.tm} ।`,
        iast: `oṃ mamopātta samasta duritakṣayadvārā śrī-parameśvara-prītyarthaṃ ${t.iast}`,
        englishMeaning: `By the destruction of all sins that have accrued in me, to be worthy of the grace of the Supreme Lord: ${t.window}.`,
        innerMeaning:
          `This is the one moment in the whole rite that is stamped with a particular day and hour. Before it, every step could belong to any morning, noon, or evening: this is the general shape of the practice itself, repeatable and interchangeable. Here, for one sentence, that changes. The practitioner names which of the three sandhyās is beginning, here the ${t.english} sandhyā, and does so by first naming the sins that have accrued and asking for their destruction, so as to become worthy of grace. What happens is a kind of dating stamp: the general procedure becomes, for a moment, one particular, dated act, spoken by one particular person choosing to stop and turn toward the sky.`,
        citation: doubleVerified(16, 6),
      },
      {
        id: `sankalpam-gayatri-${time}`,
        devanagari: `ॐ ममोपात्त समस्त दुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं ${g.dn} ।`,
        tamil: `ௐ மமோபாத்த ஸமஸ்த துரிதக்ஷயத்வாரா ஶ்ரீபரமேஶ்வரப்ரீத்யர்தம் ${g.tm} ।`,
        iast: `oṃ mamopātta samasta duritakṣayadvārā śrī-parameśvara-prītyarthaṃ ${g.iast}`,
        englishMeaning: "By the destruction of all sins that have accrued in me, to be worthy of the grace of the Supreme Lord: I shall now do the japa of the great Gāyatrī mantra.",
        innerMeaning:
          "A second, narrower resolve opens Uttarāṅgam specifically, the same opening formula, now naming the act of japa itself rather than the sandhyā as a whole. Where the first Saṅkalpam named an entire sandhyā, this one names something far more specific: the exact number of times the Gāyatrī mantra is about to be repeated (108, or 54 or 28 where time is short, depending on the practitioner and occasion). Nothing about japa is left vague here. A number is committed to out loud before the counting even begins.",
        citation: doubleVerified(19, 6),
      },
    ],
  };
}

const prashanamTime: Record<
  SandhyaTime,
  { dn: string; tm: string; iast: string; english: string; inner: string }
> = {
  pratah: {
    dn: "ॐ सूर्यश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः । पापेभ्यो रक्षन्ताम् । यद्रात्र्या पापमकार्षम् । मनसा वाचा हस्ताभ्याम् । पद्भ्यामुदरेण शिश्ना । रात्रिस्तदवलुम्पतु । यत्किञ्च दुरितं मयि । इदमहं माममृतयोनौ । सूर्ये ज्योतिषि जुहोमि स्वाहा ॥",
    tm: "ௐ ஸூர்யஶ்ச மா மந்யுஶ்ச மந்யுபதயஶ்ச மந்யுக்ருதேப்யஃ । பாபேப்யோ ரக்ஷந்தாம் । யத்ராத்ர்யா பாபமகார்ஷம் । மநஸா வாசா ஹஸ்தாப்யாம் । பத்ப்யாமுதரேண ஶிஶ்நா । ராத்ரிஸ்ததவலும்பது । யத்கிஞ்ச துரிதம் மயி । இதமஹம் மாமம்ருதயோநௌ । ஸூர்யே ஜ்யோதிஷி ஜுஹோமி ஸ்வாஹா ॥",
    iast: "oṃ sūryaśca mā manyuśca manyupatayaśca manyukṛtebhyaḥ, pāpebhyo rakṣantām, yadrātryā pāpamakārṣam, manasā vācā hastābhyām, padbhyāmudareṇa śiśnā, rātristadavalumpatu, yatkiñca duritaṃ mayi, idamahaṃ māmamṛtayonau, sūrye jyotiṣi juhomi svāhā",
    english:
      "May the Sun, and Anger, and the lords of Anger, protect me from the sins born of anger. Whatever sin I have committed at night, by mind, speech, hands, feet, belly, or organ, may the deity of night remove it from me. Whatever wrong is in me, I offer myself, purified, into the immortal source: I make this offering into the light that is the Sun. Svāhā.",
    inner:
      "This is a distinct kind of purification from the sprinkling either side of it: not water applied to the outside of the body but a full palmful sipped and taken in. The morning verse names anger and its lord directly and asks the sun to protect against whatever sins were committed in anger through the night, by mind, by speech, by hand, by foot, by appetite. Nothing here is softened or made abstract. What happens is a naming of specific faculties, one at a time, each asked to be cleared before the day's arghya is offered.",
  },
  madhyahnika: {
    dn: "ॐ आपः पुनन्तु पृथिवीं पृथिवी पूता पुनातु माम् । पुनन्तु ब्रह्मणस्पतिर्ब्रह्म पूता पुनातु माम् । यदुच्छिष्टमभोज्यं यद्वा दुश्चरितं मम । सर्वं पुनन्तु मामापोऽसतां च प्रतिग्रहꣳ स्वाहा ॥",
    tm: "ௐ ஆபஃ புநந்து ப்ருதிவீம் ப்ருதிவீ பூதா புநாது மாம் । புநந்து ப்ரஹ்மணஸ்பதிர்ப்ரஹ்ம பூதா புநாது மாம் । யதுச்சிஷ்டமபோஜ்யம் யத்வா துஶ்சரிதம் மம । ஸர்வம் புநந்து மாமாபோஅஸதாம் ச ப்ரதிக்ரஹம் ஸ்வாஹா ॥",
    iast: "oṃ āpaḥ punantu pṛthivīṃ pṛthivī pūtā punātu mām, punantu brahmaṇaspatirbrahma pūtā punātu mām, yaducchiṣṭamabhojyaṃ yadvā duścaritaṃ mama, sarvaṃ punantu māmāpo'satāṃ ca pratigrahaṃ svāhā",
    english:
      "May the waters purify the earth; may the purified earth purify me. May Brahmaṇaspati purify the ever-pure Veda; may that purify me. Whatever forbidden remnant I have eaten, whatever I have done wrong, whatever I have accepted from the unworthy, may the waters purify me of all of it. Svāhā.",
    inner:
      "At noon the sipped water turns from night's residue to the day's own accumulations: food eaten carelessly, wrong done since waking, gifts accepted from those one should not have accepted from. The verse asks the same waters that purify the earth itself to purify the one drinking them, and asks the ever pure Veda, through one's own teacher, to do the same. What happens at this hour is a midday accounting, smaller in scale than the morning or evening confession but no less specific about what it names.",
  },
  sayam: {
    dn: "ॐ अग्निश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः । पापेभ्यो रक्षन्ताम् । यदह्ना पापमकार्षम् । मनसा वाचा हस्ताभ्याम् । पद्भ्यामुदरेण शिश्ना । अहस्तदवलुम्पतु । यत्किञ्च दुरितं मयि । इदमहं माममृतयोनौ । सत्ये ज्योतिषि जुहोमि स्वाहा ॥",
    tm: "ௐ அக்நிஶ்ச மா மந்யுஶ்ச மந்யுபதயஶ்ச மந்யுக்ருதேப்யஃ । பாபேப்யோ ரக்ஷந்தாம் । யதஹ்நா பாபமகார்ஷம் । மநஸா வாசா ஹஸ்தாப்யாம் । பத்ப்யாமுதரேண ஶிஶ்நா । அஹஸ்ததவலும்பது । யத்கிஞ்ச துரிதம் மயி । இதமஹம் மாமம்ருதயோநௌ । ஸத்யே ஜ்யோதிஷி ஜுஹோமி ஸ்வாஹா ॥",
    iast: "oṃ agniśca mā manyuśca manyupatayaśca manyukṛtebhyaḥ, pāpebhyo rakṣantām, yadahnā pāpamakārṣam, manasā vācā hastābhyām, padbhyāmudareṇa śiśnā, ahastadavalumpatu, yatkiñca duritaṃ mayi, idamahaṃ māmamṛtayonau, satye jyotiṣi juhomi svāhā",
    english:
      "May Agni, and Anger, and the lords of Anger, protect me from the sins born of anger. Whatever sin I have committed by day, by mind, speech, hands, feet, belly, or organ, may the deity of day remove it from me. I offer myself, purified, into the light that is truth itself. Svāhā.",
    inner:
      "The evening form mirrors the morning one almost word for word, night's guardian traded for day's guardian, Agni standing where the sun stood at dawn. What happens here closes the day's ledger the way the morning opened it: sins named plainly, by faculty, and released rather than carried into sleep.",
  },
};

export function prashanam(time: SandhyaTime): RitualStep {
  const p = prashanamTime[time];
  return {
    id: "prashanam",
    order: 6,
    name: {
      devanagari: "प्राशनम्",
      tamil: "ப்ராஶனம்",
      iast: "prāśanam",
      english: "Sipping purification",
    },
    summary: "A full palmful of water is sipped while reciting a verse specific to this sandhyā, a distinct purification from the sprinkling on either side of it.",
    mantras: [
      {
        id: `prashanam-${time}`,
        devanagari: p.dn,
        tamil: p.tm,
        iast: p.iast,
        englishMeaning: p.english,
        innerMeaning: p.inner,
        citation: doubleVerified(20, 9),
      },
    ],
  };
}

export function arghyapradanam(time: SandhyaTime): RitualStep {
  const moment = time === "pratah" ? "the rising sun" : time === "madhyahnika" ? "the sun at its zenith" : "the setting sun";
  const posture =
    time === "pratah"
      ? "standing, facing east, offered three times"
      : time === "madhyahnika"
        ? "standing, facing north, offered twice"
        : "seated, thumbs held apart, offered once";
  return {
    id: "arghyapradanam",
    order: 8,
    name: {
      devanagari: "अर्घ्यप्रदानम्",
      tamil: "அர்க்யப்ரதானம்",
      iast: "arghyapradānam",
      english: "Offering water to Sūrya",
    },
    summary: `Water is offered through joined, cupped palms toward ${moment} while reciting the Gāyatrī mantra, ${posture}, followed by a fourth "apology" arghya asking pardon for any delay.`,
    mantras: [
      {
        id: `arghyapradanam-${time}`,
        devanagari: "ॐ भूर्भुवः स्वः । तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥",
        tamil: "ௐ பூர்புவஃ ஸ்வஃ । தத்ஸவிதுர்வரேண்யம் பர்கோ தேவஸ்ய தீமஹி தியோ யோ நஃ ப்ரசோதயாத் ॥",
        iast: "oṃ bhūrbhuvaḥ svaḥ, tatsaviturvareṇyaṃ bhargo devasya dhīmahi dhiyo yo naḥ pracodayāt",
        englishMeaning:
          "Om, earth, atmosphere, heaven. Let us meditate on the excellent glory of the divine Savitr; may he direct our understanding.",
        innerMeaning: `The same Gāyatrī mantra recited for japa returns here, spoken aloud with real sound rather than silently, while water runs from tilted, cupped palms toward the sun, heels lifted off the ground. One source explains the meaning this way: Āditya presides over the vitality of every living soul, bright and light by nature, and the arghya cultivates that same quality already present, dormant, within the one offering it: lustre, clear intellect, memory, intuition. The water thrown skyward is described in the same source as aimed at the demons who would otherwise cloud the sun both outside and within, and it notes that the word for those demons, mandeha, can also be read as mama deha, my own body, so what is being driven off reads as inner darkness as much as anything external. What changes without question by time of day is the count and the posture, ${posture}, and what the water is offered to: ${moment}.`,
        gestures: ["arghya-pradana-posture"],
        citation: doubleVerified(24, 15),
      },
      {
        id: `arghyapradanam-apology-${time}`,
        devanagari:
          "ॐ भूः । ॐ भुवः । ॐ सुवः । ॐ महः । ॐ जनः । ॐ तपः । ॐ सत्यम् । ॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् । ॐ भूः । ॐ भुवः । ॐ सुवः । ॐ महः । ॐ जनः । ॐ तपः । ॐ सत्यम् ॥",
        tamil:
          "ௐ பூஃ । ௐ புவஃ । ௐ ஸுவஃ । ௐ மஹஃ । ௐ ஜநஃ । ௐ தபஃ । ௐ ஸத்யம் । ௐ தத்ஸவிதுர்வரேண்யம் பர்கோ தேவஸ்ய தீமஹி தியோ யோ நஃ ப்ரசோதயாத் । ௐ பூஃ । ௐ புவஃ । ௐ ஸுவஃ । ௐ மஹஃ । ௐ ஜநஃ । ௐ தபஃ । ௐ ஸத்யம் ॥",
        iast:
          "oṃ bhūḥ, oṃ bhuvaḥ, oṃ suvaḥ, oṃ mahaḥ, oṃ janaḥ, oṃ tapaḥ, oṃ satyam, oṃ tatsaviturvareṇyaṃ bhargo devasya dhīmahi dhiyo yo naḥ pracodayāt, oṃ bhūḥ, oṃ bhuvaḥ, oṃ suvaḥ, oṃ mahaḥ, oṃ janaḥ, oṃ tapaḥ, oṃ satyam",
        englishMeaning:
          "The seven worlds, the Gāyatrī mantra, and the seven worlds again, offered once, as a fourth arghya.",
        innerMeaning:
          "A single extra offering, given once regardless of how many arghyas came before it, exists for one purpose only: to apologise for beginning the rite later than its proper hour. What happens here is small but telling. The tradition does not expect perfect timing from every practitioner every day. It simply asks that the lapse be named and offered rather than quietly ignored.",
        citation: doubleVerified(25, 15),
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
      "Recited as the newly risen sun stands as witness to whatever the day is about to hold, this Rigvedic hymn (3.59.1 to 2) addresses Mitra, a deity of daylight and of covenants kept, as the one who watches every creature without ever blinking. The sun here is invoked less for its heat than for its attention. What happens at this moment is less a request than a registering: the day's actions are about to be observed by something that does not look away, and the practitioner says so aloud before the day properly begins.",
  },
  madhyahnika: {
    dn: "आ सत्येन रजसा वर्तमानो निवेशयन्नमृतं मर्त्यं च । हिरण्ययेन सविता रथेनाऽऽदेवो याति भुवना विपश्यन् ॥ उद्वयं तमसस्परि पश्यन्तो ज्योतिरुत्तरम् । देवं देवत्रा सूर्यमगन्म ज्योतिरुत्तमम् ॥ उदुत्यं जातवेदसं देवं वहन्ति केतवः । दृशे विश्वाय सूर्यम् ॥ चित्रं देवानामुदगादनीकं चक्षुर्मित्रस्य वरुणस्याग्नेः । आ प्रा द्यावापृथिवी अन्तरिक्षꣳ सूर्य आत्मा जगतस्तस्थुषश्च ॥ तच्चक्षुर्देवहितं पुरस्ताच्छुक्रमुच्चरत् । पश्येम शरदः शतं जीवेम शरदः शतम् ॥",
    tm: "ஆ ஸத்யேந ரஜஸா வர்தமாநோ நிவேஶயந்நம்ருதம் மர்த்யம் ச । ஹிரண்யயேந ஸவிதா ரதேநா தேவோ யாதி புவநா விபஶ்யந் ॥ உத்வயம் தமஸஸ்பரி பஶ்யந்தோ ஜ்யோதிருத்தரம் । தேவம் தேவத்ரா ஸூர்யமகந்ம ஜ்யோதிருத்தமம் ॥ உதுத்யம் ஜாதவேதஸம் தேவம் வஹந்தி கேதவஃ । த்ருஶே விஶ்வாய ஸூர்யம் ॥ சித்ரம் தேவாநாமுதகாதநீகம் சக்ஷுர்மித்ரஸ்ய வருணஸ்யாக்நேஃ । ஆ ப்ரா த்யாவாப்ருதிவீ அந்தரிக்ஷம் ஸூர்ய ஆத்மா ஜகதஸ்தஸ்துஷஶ்ச ॥ தச்சக்ஷுர்தேவஹிதம் புரஸ்தாச்சுக்ரமுச்சரத் । பஶ்யேம ஶரதஃ ஶதம் ஜீவேம ஶரதஃ ஶதம் ॥",
    iast:
      "ā satyena rajasā vartamāno niveśayannamṛtaṃ martyaṃ ca, hiraṇyayena savitā rathenā(ā)devo yāti bhuvanā vipaśyan, udvayaṃ tamasaspari paśyanto jyotiruttaram, devaṃ devatrā sūryamaganma jyotiruttamam, udutyaṃ jātavedasaṃ devaṃ vahanti ketavaḥ, dṛśe viśvāya sūryam, citraṃ devānāmudagādanīkaṃ cakṣurmitrasya varuṇasyāgneḥ, ā prā dyāvāpṛthivī antarikṣaṃ sūrya ātmā jagatastasthuṣaśca, taccakṣurdevahitaṃ purastācchukramuccarat, paśyema śaradaḥ śataṃ jīvema śaradaḥ śatam",
    english:
      "Moving by the real, the visible order, setting both the immortal and the mortal in place, the god Savitr travels in his golden chariot, seeing all the worlds. Rising up out of the darkness, seeing the higher light, we have come to Sūrya, a god among gods, the highest light. The rays carry the shining, all-knowing god upward, that all may see the sun. The gods' own bright banner has risen: the eye of Mitra, Varuṇa, and Agni; he has filled sky, earth, and atmosphere. The Sun is the self of all that moves and stands still. May we see a hundred autumns; may we live a hundred autumns.",
    inner:
      "At the sun's zenith, when it casts almost no shadow and there is nowhere left to hide from it, the meditation turns unusually expansive. The sun is named the shared eye of three deities at once, Mitra, Varuṇa, and Agni together, and then as the self animating everything that moves and everything that merely stands still. The hymn closes with one of the most repeated lines in the whole Veda, the wish to see, and to live, a hundred autumns: not a request for anything unusual, only for enough ordinary time to keep doing this.",
  },
  sayam: {
    dn: "इमं मे वरुण श्रुधी हवमद्या च मृडय । त्वामवस्युराचके ॥",
    tm: "இமம் மே வருண ஶ்ருதீ ஹவம் அத்யா ச ம்ருடய । த்வாம் அவஸ்யுர் ஆசகே ॥",
    iast: "imaṃ me varuṇa śrudhī havamadyā ca mṛḍaya, tvāmavasyurācake",
    english:
      "Varuna, hear this call of mine; today, be gracious. Seeking your protection, I call upon you.",
    inner:
      "As the sun departs, the address changes from Mitra, who kept the day's watch, to Varuṇa, who is traditionally understood to take up the night's. The prayer asks for almost nothing: only to be heard, and to be shown some grace. It is the smallest, plainest request in the entire rite, offered, fittingly, at the day's smallest and plainest hour, the hinge between light and dark rather than a moment that belongs fully to either. Both sources agree this hymn continues considerably further in full liturgical use; the opening verse is shown here as representative.",
  },
};

export function suryopasthanam(time: SandhyaTime): RitualStep {
  const s = suryaContent[time];
  return {
    id: "suryopasthanam",
    order: 16,
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
          time === "sayam"
            ? doubleVerified("41 (opening line)", "13 (opening line)")
            : doubleVerified(time === "pratah" ? 39 : 40, time === "pratah" ? 11 : 12),
      },
    ],
  };
}
