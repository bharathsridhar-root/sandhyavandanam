"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion, AnimatePresence, MotionValue } from "framer-motion";
import { sandhyaMeta, sandhyaOrder } from "@/content/sandhyas";
import { ScriptText } from "./ScriptText";
import type { SandhyaTime } from "@/content/types";

/**
 * The sun's actual arc across the three sandhyās, told as a scroll-linked
 * background — CLAUDE.md §7 Motion. The one parallax concept in scope
 * because it's part of the subject matter, not borrowed marketing-site
 * spectacle: slow, low-amplitude, no scroll-jacking. Pinned for the length
 * of three viewport heights while a gradient, sun disc, and temple
 * silhouette move at different rates; each sandhyā's title fades in and out
 * as its own third of that scroll range becomes active — exactly one at a
 * time, never two overlapping, driven by a single discrete index rather
 * than independent per-title opacity curves. Falls back to three static,
 * flat-colored bands under prefers-reduced-motion.
 */

const BANDS = sandhyaOrder.length;

export function ParallaxSky() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const background = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.62, 0.78, 1],
    ["#E8B25C", "#F6E3BE", "#F4EBD8", "#5A5E82", "#2C3358", "#232B45"]
  );
  const textColor = useTransform(scrollYProgress, [0, 0.58, 0.68, 1], [
    "#2A1E17",
    "#2A1E17",
    "#EDE3C8",
    "#EDE3C8",
  ]);
  const sunTop = useTransform(scrollYProgress, [0, 0.5, 1], ["72%", "12%", "74%"]);
  const sunLeft = useTransform(scrollYProgress, [0, 1], ["12%", "86%"]);
  const sunGlow = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.55, 0.9, 0.9, 0.5]);
  const silhouetteY = useTransform(scrollYProgress, [0, 1], [0, -56]);
  const silhouetteOpacity = useTransform(scrollYProgress, [0, 0.62, 1], [0.28, 0.22, 0.4]);

  // Which sandhyā's title is showing — a single discrete value rather than
  // three independent scroll-linked opacities, so two titles can never be
  // partially visible at once (that showed up as overlapping, unreadable
  // text at the band boundaries).
  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(BANDS - 1, Math.max(0, Math.floor(v * BANDS)));
    setActiveIndex(idx);
  });

  if (reduceMotion) {
    return (
      <div>
        {sandhyaOrder.map((time) => (
          <StaticBand key={time} time={time} />
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative" style={{ height: `${BANDS * 100}vh` }}>
      <motion.div
        className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden"
        style={{ background }}
      >
        <TempleSilhouette y={silhouetteY} opacity={silhouetteOpacity} />
        <motion.div
          aria-hidden="true"
          className="absolute h-16 w-16 rounded-full"
          style={{
            top: sunTop,
            left: sunLeft,
            translateX: "-50%",
            translateY: "-50%",
            background: "radial-gradient(circle, #FBF6EA 0%, #C98A2C 70%, transparent 100%)",
            opacity: sunGlow,
          }}
        />
        <AnimatePresence mode="wait">
          <SandhyaTitle key={sandhyaOrder[activeIndex]} time={sandhyaOrder[activeIndex]} color={textColor} />
        </AnimatePresence>
        <p className="absolute bottom-6 font-ui text-xs tracking-wide text-muted-ink opacity-70">
          scroll to follow the sun
        </p>
      </motion.div>
    </div>
  );
}

function SandhyaTitle({ time, color }: { time: SandhyaTime; color: MotionValue<string> }) {
  const meta = sandhyaMeta[time];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ color }}
      className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto max-w-xl -translate-y-1/2 px-6 text-center"
    >
      <p className="font-ui text-xs uppercase tracking-[0.2em] opacity-80">{meta.window}</p>
      <ScriptText
        as="h2"
        devanagari={meta.name.devanagari}
        tamil={meta.name.tamil}
        className="mt-2 !text-4xl sm:!text-5xl"
      />
      <p className="mt-1 font-display text-lg italic opacity-90">{meta.name.english}</p>
      <p className="mx-auto mt-3 max-w-md font-body text-sm leading-relaxed opacity-85">
        {meta.description}
      </p>
    </motion.div>
  );
}

function TempleSilhouette({ y, opacity }: { y: MotionValue<number>; opacity: MotionValue<number> }) {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 400 120"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full"
      style={{ y, opacity }}
      fill="#2A1E17"
    >
      <path d="M170,120 L170,70 L178,70 L178,56 L186,56 L186,44 L194,44 L194,32 L200,20 L206,32 L214,44 L222,44 L222,56 L230,56 L230,70 L238,70 L238,120 Z" />
      <rect x="40" y="92" width="14" height="28" />
      <rect x="60" y="80" width="14" height="40" />
      <rect x="326" y="80" width="14" height="40" />
      <rect x="346" y="92" width="14" height="28" />
      <rect x="0" y="112" width="400" height="8" opacity="0.6" />
    </motion.svg>
  );
}

function StaticBand({ time }: { time: SandhyaTime }) {
  const meta = sandhyaMeta[time];
  const bg =
    meta.accent === "turmeric" ? "#F6E3BE" : meta.accent === "dusk" ? "#232B45" : "#F4EBD8";
  const fg = meta.accent === "dusk" ? "#EDE3C8" : "#2A1E17";
  return (
    <div
      className="flex h-[60vh] w-full flex-col items-center justify-center px-6 text-center"
      style={{ background: bg, color: fg }}
    >
      <p className="font-ui text-xs uppercase tracking-[0.2em] opacity-80">{meta.window}</p>
      <ScriptText
        as="h2"
        devanagari={meta.name.devanagari}
        tamil={meta.name.tamil}
        className="mt-2 !text-4xl"
      />
      <p className="mt-1 font-display text-lg italic opacity-90">{meta.name.english}</p>
      <p className="mx-auto mt-3 max-w-md font-body text-sm leading-relaxed opacity-85">
        {meta.description}
      </p>
    </div>
  );
}
