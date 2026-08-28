"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Pace = "slow" | "normal" | "fast";

/** Milliseconds allotted per estimated syllable, at each pace setting. */
export const PACE_MS_PER_SYLLABLE: Record<Pace, number> = {
  slow: 520,
  normal: 380,
  fast: 260,
};

/** speechSynthesis playback rate approximating each pace. */
export const PACE_SPEECH_RATE: Record<Pace, number> = {
  slow: 0.72,
  normal: 0.88,
  fast: 1.05,
};

const PACE_KEY = "sandhyavandanam:guided-pace";
const SPEECH_KEY = "sandhyavandanam:guided-speech";

interface PlayRequest {
  id: string;
  token: number;
}

interface GuidedPaceContextValue {
  pace: Pace;
  setPace: (p: Pace) => void;
  speechEnabled: boolean;
  setSpeechEnabled: (v: boolean) => void;
  /** The mantra id (if any) that should start or restart playback now. */
  playRequest: PlayRequest | null;
  /** A mantra block calls this from its own Play control, or Guided pace
   *  calls it internally to auto-advance into the next mantra. Every other
   *  mounted block's hook sees the new request and stops itself. */
  requestPlay: (id: string) => void;
}

const GuidedPaceContext = createContext<GuidedPaceContextValue | null>(null);

export function GuidedPaceProvider({ children }: { children: ReactNode }) {
  const [pace, setPaceState] = useState<Pace>("normal");
  const [speechEnabled, setSpeechEnabledState] = useState(false);
  const [playRequest, setPlayRequest] = useState<PlayRequest | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedPace = window.localStorage.getItem(PACE_KEY);
    if (storedPace === "slow" || storedPace === "normal" || storedPace === "fast") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPaceState(storedPace);
    }
    const storedSpeech = window.localStorage.getItem(SPEECH_KEY);
    if (storedSpeech === "1") {
       
      setSpeechEnabledState(true);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(PACE_KEY, pace);
  }, [pace, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(SPEECH_KEY, speechEnabled ? "1" : "0");
  }, [speechEnabled, hydrated]);

  const setPace = useCallback((p: Pace) => setPaceState(p), []);
  const setSpeechEnabled = useCallback((v: boolean) => setSpeechEnabledState(v), []);
  const requestPlay = useCallback((id: string) => {
    setPlayRequest((prev) => ({ id, token: (prev?.token ?? 0) + 1 }));
  }, []);

  return (
    <GuidedPaceContext.Provider
      value={{ pace, setPace, speechEnabled, setSpeechEnabled, playRequest, requestPlay }}
    >
      {children}
    </GuidedPaceContext.Provider>
  );
}

export function useGuidedPaceSettings(): GuidedPaceContextValue {
  const ctx = useContext(GuidedPaceContext);
  if (!ctx) throw new Error("useGuidedPaceSettings must be used within a GuidedPaceProvider");
  return ctx;
}
