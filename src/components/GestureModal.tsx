"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { GestureEntry } from "@/content/types";
import { ScriptText } from "./ScriptText";

/**
 * Larger view of a gesture illustration, opened by clicking its thumbnail
 * in the Gesture panel — the full hand-position description, significance,
 * and citation, which the small panel card doesn't have room for.
 */
export function GestureModal({ gesture, onClose }: { gesture: GestureEntry; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="presentation"
    >
      <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gesture-modal-title"
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg border border-hairline bg-canvas p-6 shadow-xl"
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <ScriptText
                as="p"
                devanagari={gesture.name.devanagari}
                tamil={gesture.name.tamil}
                className="!text-2xl text-ink"
              />
              <p id="gesture-modal-title" className="font-ui text-xs uppercase tracking-wide text-muted-ink">
                {gesture.name.iast}
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full border border-hairline px-3 py-1 font-ui text-sm text-ink-soft hover:border-kumkum hover:text-kumkum"
              aria-label="Close"
            >
              Close
            </button>
          </div>

          <div className="mx-auto w-48">
            <Image
              src={gesture.illustration}
              alt={gesture.alt}
              width={192}
              height={192}
              className="h-full w-full"
              unoptimized
            />
          </div>

          <p className="mt-4 font-ui text-xs uppercase tracking-wide text-muted-ink">Used in</p>
          <p className="font-body text-sm text-ink-soft">{gesture.usedIn.join(", ")}</p>

          <p className="mt-4 font-ui text-xs uppercase tracking-wide text-muted-ink">Hand position</p>
          <p className="font-body text-[0.9375rem] leading-relaxed text-ink-soft">{gesture.description}</p>

          <p className="mt-4 font-ui text-xs uppercase tracking-wide text-muted-ink">Significance</p>
          <p className="font-body text-[0.9375rem] leading-relaxed text-ink-soft">{gesture.significance}</p>

          <p className="sr-only">{gesture.alt}</p>
        </motion.div>
    </motion.div>
  );
}
