"use client";

import { useGuidedPaceSettings, type Pace } from "@/lib/guided-pace-context";
import type { GuidedPaceStatus } from "@/lib/use-guided-pace";

const PACE_LABEL: Record<Pace, string> = { slow: "Slow", normal: "Normal", fast: "Fast" };
const PACE_ORDER: Pace[] = ["slow", "normal", "fast"];

function PlayIcon() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M6 4.5v11l9-5.5-9-5.5Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor" aria-hidden="true">
      <rect x="5" y="4" width="3.2" height="12" rx="0.8" />
      <rect x="11.8" y="4" width="3.2" height="12" rx="0.8" />
    </svg>
  );
}

function SpeakerOnIcon() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 7.5h2.6L10.5 4v12L6.6 12.5H4z" fill="currentColor" stroke="none" />
      <path d="M13 6.8c1.1 1 1.8 2.1 1.8 3.2s-.7 2.2-1.8 3.2" />
      <path d="M15.2 4.6c1.9 1.6 3 3.6 3 5.4s-1.1 3.8-3 5.4" opacity="0.6" />
    </svg>
  );
}

function SpeakerOffIcon() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 7.5h2.6L10.5 4v12L6.6 12.5H4z" fill="currentColor" stroke="none" />
      <path d="M13.5 7.5l4 5M17.5 7.5l-4 5" />
    </svg>
  );
}

/**
 * Guided pace's per-mantra control row: play/pause, the pace and read-aloud
 * settings (global, but reachable from wherever the reader currently is),
 * and — for repeatable mantras like Gāyatrī japa — the repetition-count
 * picker before playback starts and a live countdown once it's running.
 * A thin progress line tracks position through the current repetition.
 */
export function GuidedPaceControls({
  status,
  progress,
  totalReps,
  repsRemaining,
  repeatable,
  onPlay,
  onPause,
  onSetTotalReps,
}: {
  status: GuidedPaceStatus;
  progress: number;
  totalReps: number;
  repsRemaining: number;
  repeatable?: { presets: number[]; default: number };
  onPlay: () => void;
  onPause: () => void;
  onSetTotalReps: (n: number) => void;
}) {
  const { pace, setPace, speechEnabled, setSpeechEnabled } = useGuidedPaceSettings();
  const isPlaying = status === "playing";
  const canPickReps = repeatable && (status === "idle" || status === "done");

  return (
    <div className="not-prose flex flex-col gap-2 rounded-lg border border-hairline/70 bg-canvas-raised/60 px-3 py-2">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <button
          type="button"
          onClick={isPlaying ? onPause : onPlay}
          aria-pressed={isPlaying}
          className="inline-flex items-center gap-1.5 rounded-full bg-kumkum px-3 py-1 font-ui text-xs font-medium text-canvas transition-colors hover:bg-kumkum-soft"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
          {isPlaying ? "Pause" : status === "done" ? "Replay" : "Guided pace"}
        </button>

        {repeatable && !canPickReps && (
          <span className="font-display text-lg font-medium tabular-nums text-kumkum" aria-live="polite">
            {repsRemaining}
            <span className="ml-1 font-ui text-xs font-normal text-muted-ink">of {totalReps} left</span>
          </span>
        )}

        {canPickReps && (
          <fieldset className="flex items-center gap-1.5">
            <legend className="sr-only">Number of repetitions</legend>
            {repeatable.presets.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => onSetTotalReps(n)}
                aria-pressed={totalReps === n}
                className={`rounded-full border px-2 py-0.5 font-ui text-xs transition-colors ${
                  totalReps === n
                    ? "border-kumkum bg-kumkum/10 font-medium text-kumkum"
                    : "border-hairline text-muted-ink hover:border-muted-ink"
                }`}
              >
                {n}×
              </button>
            ))}
          </fieldset>
        )}

        <div className="ml-auto flex items-center gap-3">
          <fieldset className="flex items-center gap-1" aria-label="Reading pace">
            {PACE_ORDER.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPace(p)}
                aria-pressed={pace === p}
                className={`rounded px-1.5 py-0.5 font-ui text-[0.6875rem] uppercase tracking-wide transition-colors ${
                  pace === p ? "font-semibold text-kumkum underline decoration-2 underline-offset-2" : "text-muted-ink hover:text-ink-soft"
                }`}
              >
                {PACE_LABEL[p]}
              </button>
            ))}
          </fieldset>

          <button
            type="button"
            onClick={() => setSpeechEnabled(!speechEnabled)}
            aria-pressed={speechEnabled}
            title={speechEnabled ? "Read aloud: on" : "Read aloud: off"}
            className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-ui text-[0.6875rem] transition-colors ${
              speechEnabled ? "font-semibold text-kumkum" : "text-muted-ink hover:text-ink-soft"
            }`}
          >
            {speechEnabled ? <SpeakerOnIcon /> : <SpeakerOffIcon />}
            <span className="sr-only">Read aloud, currently {speechEnabled ? "on" : "off"}</span>
          </button>
        </div>
      </div>

      {(status === "playing" || status === "paused") && (
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-hairline/70">
          <div
            className="h-full rounded-full bg-kumkum transition-[width] duration-150 ease-linear"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
      )}
    </div>
  );
}
