"use client";

import { sandhyaMeta, sandhyaOrder, sandhyaSteps } from "@/content/sandhyas";
import { useScript } from "@/lib/script-context";

/**
 * Slim table of contents — the 13 steps grouped by sandhyā — that
 * scroll-links into the page. CLAUDE.md §7: sticky only if it doesn't
 * crowd the reading column, and it collapses to a top dropdown on mobile
 * rather than disappearing.
 */
export function SectionNav() {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
}

function useLinks() {
  const { script } = useScript();
  return sandhyaOrder.map((time) => ({
    time,
    meta: sandhyaMeta[time],
    steps: sandhyaSteps[time].map((step) => ({
      id: `${time}-${step.id}`,
      label: script === "devanagari" ? step.name.devanagari : step.name.tamil,
      english: step.name.english,
    })),
  }));
}

function MobileNav() {
  const groups = useLinks();
  return (
    <details className="mx-4 mb-2 mt-4 rounded-lg border border-hairline bg-canvas-raised px-4 py-2 lg:hidden">
      <summary className="cursor-pointer select-none font-ui text-sm font-medium text-ink-soft">
        Contents
      </summary>
      <nav className="mt-2 space-y-4 pb-2" aria-label="Ritual sections">
        {groups.map((g) => (
          <div key={g.time}>
            <p className="font-ui text-xs uppercase tracking-wide text-muted-ink">
              {g.meta.name.english}
            </p>
            <ul className="mt-1 space-y-1">
              {g.steps.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="font-ui text-sm text-ink-soft hover:text-kumkum">
                    {s.english}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </details>
  );
}

function DesktopNav() {
  const groups = useLinks();
  return (
    <nav
      aria-label="Ritual sections"
      className="sticky top-20 hidden max-h-[calc(100vh-6rem)] w-56 flex-none overflow-y-auto pr-2 lg:block"
    >
      {groups.map((g) => (
        <div key={g.time} className="mb-6">
          <p className="font-ui text-xs font-medium uppercase tracking-wide text-muted-ink">
            {g.meta.name.english}
          </p>
          <ul className="mt-2 space-y-1.5 border-l border-hairline pl-3">
            {g.steps.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="font-ui text-sm leading-snug text-ink-soft transition-colors hover:text-kumkum"
                >
                  {s.english}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
