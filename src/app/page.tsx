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
              Three times a day, at dawn, at noon, and at dusk, the same
              short sequence of Sanskrit is spoken to the sun. Say it
              without knowing what it means and it is a habit. Say it
              knowing what it means, and what each line is actually doing
              rather than just what it says, and it becomes something closer
              to a conversation held with the sky. That is what this page
              tries to give you: every mantra in its script, a literal
              English meaning that never disappears no matter which script
              is on screen, and an inner meaning that tries to say what
              happens when the line is spoken, not just what the words
              translate to. Use the switch above to read the text in
              Devanagari or Tamil.
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
