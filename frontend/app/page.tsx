"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";
import LangSwitch from "@/components/LangSwitch";
import { useLang } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";


function DemoChat() {
  return (
    <div className="relative w-full max-w-md" aria-hidden="true">
      <div className="glass-strong rounded-3xl p-4">
        <div className="mb-3 ml-auto w-fit max-w-[92%] rounded-2xl bg-indigo-500/15 px-4 py-2 text-sm">
          <span className="mb-1 flex w-fit items-center gap-1 rounded-md border border-indigo-400/40 px-2 py-0.5 text-xs">
            📄 database-lecture-3.pdf
          </span>
          Summarize this in five bullet points for my exam.
        </div>
        <div className="mb-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
          <p className="mb-2">Here are the key points from lecture 3:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>A primary key uniquely identifies each row.</li>
            <li>Foreign keys link rows across tables.</li>
            <li>Normalization removes duplicated data.</li>
            <li>Indexes speed up reads but slow down writes.</li>
            <li>A transaction is all-or-nothing.</li>
          </ul>
        </div>
        <div className="glass rounded-2xl p-2">
          <p className="px-2 pb-2 text-sm text-slate-500 dark:text-slate-400">Message OmniAI</p>
          <div className="flex items-center gap-2 text-xs">
            <span className="btn-glass rounded-lg px-2 py-1">📎 Attach</span>
            <span className="btn-glass rounded-lg px-2 py-1">OmniAI Balanced ▾</span>
            <span className="flex-1" />
            <span className="btn-primary rounded-lg px-3 py-1 font-medium">Send</span>
          </div>
        </div>
      </div>
      <div className="glass absolute -bottom-6 -left-4 flex items-center gap-2 rounded-2xl px-3 py-2 text-xs shadow-lg sm:-left-10">
        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 font-medium text-emerald-700 dark:text-emerald-300">Fast</span>
        <span className="text-slate-500 dark:text-slate-400">switch to</span>
        <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 font-medium text-indigo-700 dark:text-indigo-300">Balanced</span>
      </div>
    </div>
  );
}

function ContactForm({ t }: { t: ReturnType<typeof useLang>["t"] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // No backend needed: this opens the visitor's email app with the message filled in.
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`OmniAI message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={submit} className="glass-strong space-y-3 rounded-3xl p-6">
      <label className="block text-sm">
        <span className="mb-1 block font-medium">{t("cName")}</span>
        <input className="field" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block font-medium">{t("cEmail")}</span>
        <input className="field" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block font-medium">{t("cMessage")}</span>
        <textarea className="field min-h-28 resize-y" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </label>
      <button className="btn-primary w-full rounded-xl px-4 py-2.5 font-medium">{t("cSend")}</button>
    </form>
  );
}

export default function Landing() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#top", label: t("navHome") },
    { href: "#features", label: t("navFeatures") },
    { href: "#about", label: t("navAbout") },
    { href: "#contact", label: t("navContact") },
  ];
  const linkCls = "rounded-lg px-3 py-2 text-sm hover:bg-white/50 dark:hover:bg-white/10";

  return (
    <div id="top" className="min-h-dvh">
      <header className="sticky top-0 z-20 px-4 pt-4">
        <div className="glass mx-auto max-w-6xl rounded-2xl px-4 py-2.5">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="OmniAI home"><Logo /></Link>
            <nav className="ml-6 hidden items-center gap-1 md:flex" aria-label="Main">
              {links.map((l) => <a key={l.href} href={l.href} className={linkCls}>{l.label}</a>)}
            </nav>
            <div className="ml-auto flex items-center gap-2">
              <LangSwitch lang={lang} setLang={setLang} />
              <Link href="/auth" className="btn-glass hidden rounded-xl px-4 py-2 text-sm md:block">{t("login")}</Link>
              <Link href="/chat" className="btn-primary hidden rounded-xl px-4 py-2 text-sm font-medium md:block">{t("startChatting")}</Link>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label="Menu"
                className="btn-glass rounded-xl p-2 md:hidden"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
                  <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
                </svg>
              </button>
            </div>
          </div>
          {open && (
            <nav className="mt-3 grid gap-1 border-t border-white/40 pt-3 dark:border-white/10 md:hidden" aria-label="Mobile">
              {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={linkCls}>{l.label}</a>)}
              <div className="mt-2 flex gap-2">
                <Link href="/auth" className="btn-glass flex-1 rounded-xl px-4 py-2 text-center text-sm">{t("login")}</Link>
                <Link href="/chat" className="btn-primary flex-1 rounded-xl px-4 py-2 text-center text-sm font-medium">{t("startChatting")}</Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-14 md:grid-cols-[1.1fr_1fr] md:pt-24">
          <div>
            <h1 className="font-display max-w-xl text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">{t("heroTitle")}</h1>
            <p className="mt-6 max-w-md text-lg text-slate-600 dark:text-slate-300">{t("heroSub")}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/chat" className="btn-primary rounded-2xl px-6 py-3 font-medium">{t("startChatting")}</Link>
              <Link href="/auth?mode=register" className="btn-glass rounded-2xl px-6 py-3 font-medium">{t("ctaRegister")}</Link>
            </div>
            <p className="mt-4 max-w-md text-sm text-slate-500 dark:text-slate-400">{t("heroNote")}</p>
          </div>
          <div className="flex justify-center pb-6 md:justify-end"><DemoChat /></div>
        </section>

        <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-20">
          <h2 className="font-display max-w-lg text-3xl font-semibold tracking-tight">{t("featTitle")}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="glass rounded-3xl p-6 md:col-span-2">
              <h3 className="text-lg font-medium">{t("f1t")}</h3>
              <p className="mt-2 max-w-md text-slate-600 dark:text-slate-300">{t("f1d")}</p>
              <div className="mt-5 flex gap-2 text-sm">
                <span className="btn-glass rounded-xl px-3 py-1.5">OmniAI Fast</span>
                <span className="btn-primary rounded-xl px-3 py-1.5">OmniAI Balanced</span>
              </div>
            </div>
            <div className="glass rounded-3xl p-6">
              <h3 className="text-lg font-medium">{t("f2t")}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{t("f2d")}</p>
            </div>
            <div className="glass rounded-3xl p-6">
              <h3 className="text-lg font-medium">{t("f3t")}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{t("f3d")}</p>
            </div>
            <div className="glass rounded-3xl p-6 md:col-span-2">
              <h3 className="text-lg font-medium">{t("f4t")}</h3>
              <p className="mt-2 max-w-md text-slate-600 dark:text-slate-300">{t("f4d")}</p>
              <pre className="mt-4 overflow-x-auto rounded-2xl bg-slate-900/90 p-4 text-sm text-slate-100"><code>{`def factorial(n):\n    return 1 if n <= 1 else n * factorial(n - 1)`}</code></pre>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-20">
          <div className="glass rounded-3xl px-6 py-10 sm:px-10">
            <h2 className="font-display text-3xl font-semibold tracking-tight">{t("aboutTitle")}</h2>
            <div className="mt-4 grid max-w-3xl gap-4 text-lg text-slate-600 dark:text-slate-300">
              <p>{t("aboutP1")}</p>
              <p>{t("aboutP2")}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto grid max-w-6xl scroll-mt-24 items-start gap-8 px-5 pb-20 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">{t("contactTitle")}</h2>
            <p className="mt-3 max-w-sm text-lg text-slate-600 dark:text-slate-300">{t("contactSub")}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 inline-block underline underline-offset-4">{CONTACT_EMAIL}</a>
          </div>
          <ContactForm t={t} />
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="glass-strong flex flex-wrap items-center gap-4 rounded-3xl px-6 py-8 sm:px-10">
            <p className="font-display flex-1 text-2xl font-semibold tracking-tight">{t("ctaBand")}</p>
            <Link href="/chat" className="btn-primary rounded-2xl px-6 py-3 font-medium">{t("ctaOpen")}</Link>
          </div>
        </section>
      </main>
        <footer className="px-4 pb-6">
          <div className="glass mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl px-5 py-4 text-sm">
            <Link href="/" aria-label="OmniAI home"><Logo size={22} /></Link>
            <nav className="flex flex-wrap gap-x-4 gap-y-1" aria-label="Footer">
              {links.slice(1).map((l) => (
                <a key={l.href} href={l.href} className="hover:underline">{l.label}</a>
              ))}
              <Link href="/auth" className="hover:underline">{t("login")}</Link>
              <Link href="/privacy" className="hover:underline">{t("privacy")}</Link>
              <Link href="/terms" className="hover:underline">{t("terms")}</Link>
            </nav>
            <p className="w-full text-slate-600 dark:text-slate-300 md:ml-auto md:w-auto">
              © {new Date().getFullYear()} OmniAI. {t("footerRights")}
            </p>
          </div>
          <p className="mx-auto mt-3 max-w-6xl text-center text-xs text-slate-500 dark:text-slate-400">{t("footer")}</p>
        </footer>
    </div>
  );
}
