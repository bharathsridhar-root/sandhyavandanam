import type { RitualStep, SandhyaMeta, SandhyaTime } from "./types";
import {
  achamanam,
  bhutocchatanam,
  pranayamam,
  marjanam,
  aghamarshanam,
  gayatriAvahanam,
  gayatriJapa,
  abhivadanam,
  digdevataNamaskaram,
  samarpanam,
} from "./shared-steps";
import { sankalpam, arghyapradanam, suryopasthanam } from "./sandhya-specific";

export const sandhyaMeta: Record<SandhyaTime, SandhyaMeta> = {
  pratah: {
    time: "pratah",
    name: { devanagari: "प्रातःसन्ध्या", tamil: "ப்ராதஃஸந்த்யா", iast: "prātaḥsandhyā", english: "Dawn Sandhyā" },
    window: "performed before sunrise",
    accent: "turmeric",
    description:
      "The most commonly practiced of the three, performed as night gives way to light — the full thirteen-step sequence in its most complete traditional form.",
  },
  madhyahnika: {
    time: "madhyahnika",
    name: { devanagari: "माध्याह्निक सन्ध्या", tamil: "மாத்யாஹ்நிக ஸந்த்யா", iast: "mādhyāhnika sandhyā", english: "Noon Sandhyā" },
    window: "performed near midday",
    accent: "noon",
    description:
      "The same skeleton performed with the sun directly overhead — offering and prayer made at the one moment the sun casts almost no shadow.",
  },
  sayam: {
    time: "sayam",
    name: { devanagari: "सायंसन्ध्या", tamil: "ஸாயம்ஸந்த்யா", iast: "sāyaṃsandhyā", english: "Dusk Sandhyā" },
    window: "performed at sunset",
    accent: "dusk",
    description:
      "The same sequence closing the day, turned toward a departing rather than an arriving sun — a valediction rather than a greeting.",
  },
};

function buildSteps(time: SandhyaTime): RitualStep[] {
  return [
    achamanam,
    bhutocchatanam,
    pranayamam,
    sankalpam(time),
    marjanam,
    aghamarshanam,
    arghyapradanam(time),
    gayatriAvahanam,
    gayatriJapa,
    suryopasthanam(time),
    abhivadanam,
    digdevataNamaskaram,
    samarpanam,
  ].sort((a, b) => a.order - b.order);
}

export const sandhyaSteps: Record<SandhyaTime, RitualStep[]> = {
  pratah: buildSteps("pratah"),
  madhyahnika: buildSteps("madhyahnika"),
  sayam: buildSteps("sayam"),
};

export const sandhyaOrder: SandhyaTime[] = ["pratah", "madhyahnika", "sayam"];
