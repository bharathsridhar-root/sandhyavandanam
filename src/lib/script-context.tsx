"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Script = "devanagari" | "tamil";

const STORAGE_KEY = "sandhyavandanam:script";

interface ScriptContextValue {
  script: Script;
  setScript: (script: Script) => void;
  toggleScript: () => void;
}

const ScriptContext = createContext<ScriptContextValue | null>(null);

export function ScriptProvider({ children }: { children: ReactNode }) {
  // Devanagari is the default on first visit — CLAUDE.md §6.
  const [script, setScriptState] = useState<Script>("devanagari");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // One-time read of a client-only external source (localStorage) to
    // reconcile the server-rendered default with the visitor's saved
    // preference; unavoidable inside an effect given SSR.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "devanagari" || stored === "tamil") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setScriptState(stored);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-script", script);
    if (hydrated) {
      window.localStorage.setItem(STORAGE_KEY, script);
    }
  }, [script, hydrated]);

  const setScript = (next: Script) => setScriptState(next);
  const toggleScript = () => setScriptState((s) => (s === "devanagari" ? "tamil" : "devanagari"));

  return (
    <ScriptContext.Provider value={{ script, setScript, toggleScript }}>
      {children}
    </ScriptContext.Provider>
  );
}

export function useScript(): ScriptContextValue {
  const ctx = useContext(ScriptContext);
  if (!ctx) throw new Error("useScript must be used within a ScriptProvider");
  return ctx;
}
