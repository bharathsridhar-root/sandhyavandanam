"use client";

import { useEffect, useRef } from "react";

function safely(fn: () => void) {
  try {
    fn();
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Guided pace: speechSynthesis call failed, continuing without audio.", err);
    }
  }
}

/**
 * Thin wrapper around the browser's speechSynthesis API. It is a best-effort
 * audio layer, not the timing source for Guided pace's word highlight — no
 * browser ships a Sanskrit voice, so this speaks Devanagari/Tamil text with
 * the closest available language voice (Hindi / Tamil) and is meant to
 * accompany the timer-driven highlight, not replace it.
 */
export function useSpeech() {
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      if (supported) safely(() => window.speechSynthesis.cancel());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const speak = (text: string, lang: "sa-Deva" | "sa-Taml", rate: number) => {
    if (!supported) return;
    // Real speechSynthesis implementations are notoriously flaky (can throw
    // if unavailable, restricted before a user gesture, or mid-teardown) —
    // this is a best-effort audio layer, so a failure here must never take
    // down the timer-driven playback it sits alongside.
    safely(() => {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      // No browser ships a Sanskrit voice; Hindi/Tamil voices are the
      // closest available approximation for Devanagari/Tamil text.
      utterance.lang = lang === "sa-Deva" ? "hi-IN" : "ta-IN";
      utterance.rate = rate;
      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    });
  };

  const stop = () => {
    if (!supported) return;
    safely(() => window.speechSynthesis.cancel());
  };

  return { supported, speak, stop };
}
