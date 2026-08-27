"use client";

import { ScriptSwitch } from "./ScriptSwitch";
import { ScriptText } from "./ScriptText";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-canvas/90 backdrop-blur supports-[backdrop-filter]:bg-canvas/75">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="no-underline text-ink">
          <ScriptText
            as="span"
            devanagari="सन्ध्यावन्दनम्"
            tamil="ஸந்த்யாவந்தனம்"
            className="!leading-none text-lg sm:text-xl"
          />
        </a>
        <ScriptSwitch />
      </div>
    </header>
  );
}
