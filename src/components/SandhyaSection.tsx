import type { SandhyaTime } from "@/content/types";
import { sandhyaMeta, sandhyaSteps } from "@/content/sandhyas";
import { MantraBlock } from "./MantraBlock";
import { ScriptText } from "./ScriptText";

const accentClass: Record<SandhyaTime, string> = {
  pratah: "border-turmeric",
  madhyahnika: "border-hairline",
  sayam: "border-dusk",
};

/**
 * One full sandhyā, self-contained: a section divider re-announcing its
 * name, then every ritual step (§4) in order as its own divider followed
 * by the step's MantraBlock(s). CLAUDE.md §7 Layout — three long-form
 * sections on one page, each a complete, honest repetition of the same
 * skeleton rather than a cross-referenced summary.
 */
export function SandhyaSection({ time }: { time: SandhyaTime }) {
  const meta = sandhyaMeta[time];
  const steps = sandhyaSteps[time];

  return (
    <section id={time} aria-labelledby={`${time}-heading`} className="scroll-mt-20">
      <div className={`border-t-2 pt-6 ${accentClass[time]}`}>
        <p className="font-ui text-xs uppercase tracking-[0.2em] text-muted-ink">{meta.window}</p>
        <ScriptText
          as="h2"
          devanagari={meta.name.devanagari}
          tamil={meta.name.tamil}
          className="!text-3xl mt-1"
        />
        <h3 id={`${time}-heading`} className="sr-only">
          {meta.name.english}
        </h3>
      </div>

      {steps.map((step) => (
        <div key={step.id} id={`${time}-${step.id}`} className="scroll-mt-20 border-b border-hairline py-6">
          <div className="mb-2">
            <p className="font-ui text-[0.8125rem] font-medium uppercase tracking-wide text-muted-ink">
              {step.order}. {step.name.english}
            </p>
            <ScriptText
              as="h3"
              devanagari={step.name.devanagari}
              tamil={step.name.tamil}
              className="!text-xl !leading-snug text-ink-soft"
            />
            <p className="mt-1 max-w-2xl font-body text-sm leading-relaxed text-muted-ink">
              {step.summary}
            </p>
          </div>
          <div className="divide-y divide-hairline/60">
            {step.mantras.map((mantra) => (
              <MantraBlock key={mantra.id} mantra={mantra} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
