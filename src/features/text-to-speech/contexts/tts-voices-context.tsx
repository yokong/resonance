"use client";
import { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "../../../trpc/routers/_app";
import { createContext, useContext } from "react";

// TODO: inferRouterOutpus  mean?
type TTSVoiceItem =
  inferRouterOutputs<AppRouter>["voices"]["getAll"]["custom"][number];

interface TTSVoicesContextValue {
  customVoices: TTSVoiceItem[];
  systemVoices: TTSVoiceItem[];
  allVoices: TTSVoiceItem[];
}
const TTSVoicesContext = createContext<TTSVoicesContextValue | null>(null);
export function TTSVoicesProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: TTSVoicesContextValue;
}) {
  return (
    <TTSVoicesContext.Provider value={value}>
      {children}
    </TTSVoicesContext.Provider>
  );
}

export function useTTSVoices() {
  const context = useContext(TTSVoicesContext);
  console.log(context, "-----------------");
  if (!context) {
    throw new Error("useTTSVoices must be used within a TTSVoicesProvider");
  }
  return context;
}
