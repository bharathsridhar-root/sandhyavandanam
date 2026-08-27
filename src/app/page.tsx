import { Header } from "@/components/Header";
import { ParallaxSky } from "@/components/ParallaxSky";
import { SectionNav } from "@/components/SectionNav";
import { SandhyaSection } from "@/components/SandhyaSection";
import { SiteFooter } from "@/components/SiteFooter";
import { sandhyaOrder } from "@/content/sandhyas";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <ParallaxSky />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:py-10">
        <SectionNav />
        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-2xl">
            <p className="font-body text-base leading-relaxed text-ink-soft">
              The Nitya Sandhyāvandanam is performed three times a day — at
              dawn, at noon, and at dusk. Each mantra below appears with its
              script, a literal English meaning that stays on screen
              regardless of script, and an inner meaning: what the line is
              doing, not just what it says. Use the switch above to read the
              text in Devanagari or Tamil.
            </p>
            {sandhyaOrder.map((time) => (
              <div key={time} className="mt-10">
                <SandhyaSection time={time} />
              </div>
            ))}
          </div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
