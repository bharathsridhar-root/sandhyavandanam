"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { computeWordDurations } from "./syllables";
import { PACE_MS_PER_SYLLABLE, PACE_SPEECH_RATE, useGuidedPaceSettings } from "./guided-pace-context";
import { useSpeech } from "./use-speech";

export type GuidedPaceStatus = "idle" | "playing" | "paused" | "done";

interface UseGuidedPaceOptions {
  /** Stable id for this mantra — used to coordinate "only one plays at a time". */
  id: string;
  /** Tokenized words of the mantra in whichever script is currently active. */
  words: string[];
  /** The same text, joined, for speech synthesis. */
  text: string;
  lang: "sa-Deva" | "sa-Taml";
  repeatable?: { presets: number[]; default: number };
  /** Called once, after the final repetition's last word finishes. */
  onComplete?: () => void;
}

/**
 * Drives Guided pace playback for one mantra: a wall-clock timer advances a
 * word index at a rate derived from the pace setting and each word's
 * estimated syllable count, looping back to the first word for repeatable
 * (japa) mantras until the chosen repetition count is used up. The timer is
 * always the source of truth for pacing and completion — speechSynthesis
 * (when enabled) plays alongside it as a best-effort audio layer, not the
 * clock, since browser TTS word-boundary support is too inconsistent across
 * browsers and languages to drive timing from.
 */
export function useGuidedPace({ id, words, text, lang, repeatable, onComplete }: UseGuidedPaceOptions) {
  const { pace, speechEnabled, playRequest, requestPlay } = useGuidedPaceSettings();
  const speech = useSpeech();

  const [status, setStatus] = useState<GuidedPaceStatus>("idle");
  const [wordIndex, setWordIndex] = useState(-1);
  const [totalReps, setTotalRepsState] = useState(repeatable?.default ?? 1);
  const [repsRemaining, setRepsRemaining] = useState(repeatable?.default ?? 1);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const durationsRef = useRef<number[]>([]);
  const onCompleteRef = useRef(onComplete);
  // scheduleFromRef holds the current tick function so it can call itself
  // (word-to-word, and rep-to-rep) without a self-referencing useCallback,
  // which the hooks linter treats as an unsafe recursive dependency.
  const scheduleFromRef = useRef<(index: number, remaining: number) => void>(() => {});
  // Read fresh inside scheduleFromRef without widening its effect's deps —
  // needed so a new repetition (japa) re-triggers speech, not just the
  // very first one.
  const speechConfigRef = useRef({ speechEnabled, text, lang, pace });

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    speechConfigRef.current = { speechEnabled, text, lang, pace };
  }, [speechEnabled, text, lang, pace]);

  useEffect(() => {
    durationsRef.current = computeWordDurations(words, PACE_MS_PER_SYLLABLE[pace]);
  }, [words, pace]);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => () => clearTimer(), [clearTimer]);

  useEffect(() => {
    scheduleFromRef.current = (index: number, remaining: number) => {
      if (index >= words.length) {
        const nextRemaining = remaining - 1;
        if (nextRemaining <= 0) {
          setStatus("done");
          setWordIndex(-1);
          setRepsRemaining(0);
          speech.stop();
          onCompleteRef.current?.();
          return;
        }
        setRepsRemaining(nextRemaining);
        const cfg = speechConfigRef.current;
        if (cfg.speechEnabled) {
          speech.speak(cfg.text, cfg.lang, PACE_SPEECH_RATE[cfg.pace]);
        }
        scheduleFromRef.current(0, nextRemaining);
        return;
      }
      setWordIndex(index);
      const duration = durationsRef.current[index] ?? 300;
      timeoutRef.current = setTimeout(() => scheduleFromRef.current(index + 1, remaining), duration);
    };
  }, [words.length, speech]);

  // The single place playback actually starts or resumes, triggered either
  // by this block's own Play button or by another block auto-advancing
  // into this one — both go through requestPlay(id) in guided-pace-context.
  // This is a cross-component signal via context (not locally derivable
  // state), the same external-sync pattern already used in script-context.
  useEffect(() => {
    if (!playRequest) return;
    if (playRequest.id !== id) {
      if (status === "playing" || status === "paused") {
        clearTimer();
        speech.stop();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setStatus("idle");
         
        setWordIndex(-1);
         
        setRepsRemaining(totalReps);
      }
      return;
    }
    if (status === "paused") {
       
      setStatus("playing");
      scheduleFromRef.current(wordIndex, repsRemaining);
    } else if (status !== "playing") {
       
      setRepsRemaining(totalReps);
       
      setStatus("playing");
      scheduleFromRef.current(0, totalReps);
    }
    if (speechEnabled) {
      speech.speak(text, lang, PACE_SPEECH_RATE[pace]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playRequest]);

  const play = useCallback(() => requestPlay(id), [requestPlay, id]);

  const pause = useCallback(() => {
    if (status !== "playing") return;
    clearTimer();
    speech.stop();
    setStatus("paused");
  }, [status, clearTimer, speech]);

  const setTotalReps = useCallback(
    (n: number) => {
      if (status !== "idle" && status !== "done") return;
      setTotalRepsState(n);
      setRepsRemaining(n);
    },
    [status],
  );

  const progress = wordIndex >= 0 && words.length > 0 ? (wordIndex + 1) / words.length : 0;

  return {
    status,
    wordIndex,
    totalReps,
    repsRemaining,
    setTotalReps,
    play,
    pause,
    progress,
  };
}
