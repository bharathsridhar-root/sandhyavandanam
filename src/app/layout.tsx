import type { Metadata } from "next";
import { Tiro_Devanagari_Sanskrit, Tiro_Tamil, Cormorant, EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ScriptProvider } from "@/lib/script-context";
import { GuidedPaceProvider } from "@/lib/guided-pace-context";

const tiroDevanagari = Tiro_Devanagari_Sanskrit({
  variable: "--font-tiro-devanagari",
  weight: "400",
  subsets: ["devanagari", "latin"],
  display: "swap",
});

const tiroTamil = Tiro_Tamil({
  variable: "--font-tiro-tamil",
  weight: "400",
  subsets: ["tamil", "latin"],
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  weight: ["500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sandhyāvandanam: the thrice-daily prayer, explained",
  description:
    "The Nitya Sandhyāvandanam presented as an explained text: script, literal meaning, inner meaning, and the hand gestures that accompany it, in Devanagari or Tamil.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${tiroDevanagari.variable} ${tiroTamil.variable} ${cormorant.variable} ${ebGaramond.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink font-ui">
        <ScriptProvider>
          <GuidedPaceProvider>{children}</GuidedPaceProvider>
        </ScriptProvider>
      </body>
    </html>
  );
}
