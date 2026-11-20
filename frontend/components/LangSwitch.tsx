"use client";
import type { Lang } from "@/lib/i18n";

export default function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const pill = (on: boolean) =>
    `rounded-lg px-2.5 py-1 text-sm transition-colors ${on ? "bg-indigo-600 font-medium text-white" : "hover:bg-white/50 dark:hover:bg-white/10"}`;
  return (
    <div role="group" aria-label="Language" className="glass flex gap-0.5 rounded-xl p-0.5">
      <button type="button" onClick={() => setLang("en")} aria-pressed={lang === "en"} className={pill(lang === "en")}>EN</button>
      <button type="button" onClick={() => setLang("km")} aria-pressed={lang === "km"} className={pill(lang === "km")}>ខ្មែរ</button>
    </div>
  );
}
