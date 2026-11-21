import Link from "next/link";

const email = "oddom2006@gmail.com";

const sections = [
  {
    title: "Using OmniAI",
    content: (
      <p>
        You must be at least 13 years old, give accurate information and keep
        your password safe. One account is for one person.
      </p>
    ),
  },
  {
    title: "What OmniAI is",
    content: (
      <p>
        OmniAI is an AI chat app. Answers can be wrong, incomplete or out of
        date. They are not professional medical, legal or financial advice.
        Please check anything important. You are responsible for how you use
        the answers, including following your school's rules on academic
        honesty.
      </p>
    ),
  },
  {
    title: "Acceptable use",
    content: (
      <div className="space-y-4">
        <p>Do not use OmniAI for:</p>
        <ul className="list-disc space-y-3 pl-6">
          <li>Illegal activity, harassment or threats.</li>
          <li>Creating malware or attacking systems.</li>
          <li>Trying to get around limits or break the security of the service.</li>
          <li>Sharing other people's private information without permission.</li>
          <li>Content that harms children.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Your content",
    content: (
      <p>
        You keep ownership of what you write and upload. You allow us to
        process it to provide the service, including sending it to AI providers
        as described in the{" "}
        <Link
          href="/Privacy-policy"
          className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
        >
          Privacy Policy
        </Link>
        . Only upload files you have the right to use.
      </p>
    ),
  },
  {
    title: "Limits and availability",
    content: (
      <p>
        The free service has daily message limits. OmniAI is a student project
        provided "as is", without any guarantee. We may change or stop the
        service or any model at any time.
      </p>
    ),
  },
  {
    title: "Pro plan and payments",
    content: (
      <div className="space-y-4">
        <p>
          Payments are made with Bakong KHQR. The price is shown before you pay.
        </p>
        <p>
          Pro gives access to premium models for the number of days shown at
          checkout. It does not renew automatically.
        </p>
        <p>
          Payments are generally not refundable. If something goes wrong, for
          example you paid but did not receive access, email us with your bill
          number and we will fix it or refund you.
        </p>
      </div>
    ),
  },
  {
    title: "Suspending accounts",
    content: (
      <p>
        We may suspend or delete accounts that break these terms. You can stop
        using OmniAI at any time and ask us to delete your account by email.
      </p>
    ),
  },
  {
    title: "Limits of our responsibility",
    content: (
      <p>
        To the extent the law allows, OmniAI and the people who run it are not
        responsible for losses that come from using the answers or from the
        service being unavailable. These terms are governed by the laws of the
        Kingdom of Cambodia.
      </p>
    ),
  },
  {
    title: "Changes to these terms",
    content: (
      <p>
        We may update these terms. If you keep using OmniAI after a change, you
        accept the new terms.
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <p>
        Questions about these terms? Email us at{" "}
        <a
          href={`mailto:${email}`}
          className="font-semibold text-indigo-600 underline decoration-indigo-400/50 underline-offset-4 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          {email}
        </a>.
      </p>
    ),
  },
];

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* Navigation */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display text-xl font-bold text-indigo-600 dark:text-indigo-400"
          >
            OmniAI
          </Link>

          <Link
            href="/"
            className="btn-glass rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <header className="glass-strong mb-8 overflow-hidden rounded-3xl p-7 sm:p-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
            <span>✦</span> OmniAI Legal Center
          </div>

          <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Terms of Use
          </h1>

          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Last updated: 9 November 2026
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Please read these terms before using OmniAI. By using the service
            you agree to them.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="glass mb-8 rounded-3xl p-6 sm:p-8">
          <h2 className="mb-5 font-display text-xl font-bold text-slate-900 dark:text-white">
            On this page
          </h2>

          <div className="grid gap-3 sm:grid-cols-2">
            {sections.map((section, index) => (
              <a
                key={section.title}
                href={`#terms-${index + 1}`}
                className="flex items-center gap-3 rounded-xl border border-white/40 bg-white/30 px-4 py-3 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-white/70 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-indigo-300"
              >
                <span className="flex h-7 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-xs font-bold text-indigo-600 dark:text-indigo-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Terms Sections */}
        <div className="space-y-5">
          {sections.map((section, index) => (
            <section
              key={section.title}
              id={`terms-${index + 1}`}
              className="glass scroll-mt-8 rounded-3xl p-6 transition duration-300 hover:-translate-y-0.5 sm:p-8"
            >
              <div className="mb-4 flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 font-bold text-indigo-600 dark:text-indigo-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="font-display pt-1 text-xl font-bold text-slate-900 dark:text-white">
                  {section.title}
                </h2>
              </div>

              <div className="pl-0 text-sm leading-8 text-slate-600 dark:text-slate-300 sm:pl-14 sm:text-base">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="glass mt-10 rounded-3xl p-7 text-center">
          <p className="font-display text-lg font-bold text-slate-900 dark:text-white">
            OmniAI
          </p>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} OmniAI. All rights reserved.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm font-medium">
            <Link
              href="/Privacy-policy"
              className="text-indigo-600 hover:underline dark:text-indigo-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/Terms-of-use"
              className="text-indigo-600 hover:underline dark:text-indigo-400"
            >
              Terms of Use
            </Link>
          </div>

          <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
            Contact:{" "}
            <a
              href={`mailto:${email}`}
              className="font-semibold text-indigo-600 underline underline-offset-4 hover:text-indigo-800 dark:text-indigo-400"
            >
              {email}
            </a>
          </p>
        </footer>

      </div>
    </main>
  );
}
