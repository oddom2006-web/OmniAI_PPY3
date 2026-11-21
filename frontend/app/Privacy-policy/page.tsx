
import Link from "next/link";

const email = "oddom2006@gmail.com";

const sections = [
  {
    title: "Who we are",
    content: (
      <p>
        OmniAI is a university practicum project run by the OmniAI project
        team. You can contact us at{" "}
        <a href={`mailto:${email}`} className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
          {email}
        </a>.
      </p>
    ),
  },
  {
    title: "What we collect",
    content: (
      <div className="space-y-4">
        <p><strong>Account:</strong> Your name, email and password. The password is stored only as a one-way hash, so nobody can read it. If you sign in with Google, we receive your name, email and Google account ID.</p>
        <p><strong>Chats:</strong> The messages you send, the AI's answers, and any files you attach (images, PDFs or text files) while you are logged in. Guest chats are not saved.</p>
        <p><strong>Usage:</strong> The number of messages and AI tokens, the model used, and times, so we can enforce daily limits and run the service.</p>
        <p><strong>Payments:</strong> When you pay with KHQR we record the amount, currency, bill number, status and the Bakong transaction reference. We never see your bank login or card details.</p>
        <p><strong>Technical:</strong> Your IP address is used to limit guest messages and to prevent abuse. Server logs may record errors.</p>
        <p><strong>Camera and images:</strong> Pictures you upload to the Tools, and camera frames you choose to send, are analysed on our server and are not stored.</p>
      </div>
    ),
  },
  {
    title: "How we use it",
    content: (
      <p>
        We use your information to provide the chat, save your history, enforce
        limits, process payments, send password reset emails and keep the
        service secure. We do not sell your data and we do not show advertising.
      </p>
    ),
  },
  {
    title: "AI providers",
    content: (
      <div className="space-y-4">
        <p>
          To answer you, your messages and attachments are sent to third-party
          AI providers. Depending on the model you choose, these are:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Google (Gemini models)</li>
          <li>Groq</li>
          <li>OpenRouter (which forwards your request to the company hosting the selected model)</li>
          <li>DeepSeek (premium models)</li>
        </ul>
        <p>
          We may add more providers over time. They process your content under
          their own terms, and some free tiers may use data to improve their
          products. Please do not send passwords, ID numbers, health records or
          other sensitive information.
        </p>
      </div>
    ),
  },
  {
    title: "Other services",
    content: (
      <ul className="list-disc space-y-2 pl-6">
        <li>Google Sign-In, if you choose to use it.</li>
        <li>The National Bank of Cambodia's Bakong system, to confirm that a payment was made.</li>
        <li>An email service, to send password reset links.</li>
      </ul>
    ),
  },
  {
    title: "Storage in your browser",
    content: (
      <p>
        We keep your login token, theme, language, sidebar state and task list
        in your browser's local storage. We do not use advertising or tracking
        cookies.
      </p>
    ),
  },
  {
    title: "How long we keep data",
    content: (
      <p>
        Your chats are kept until you delete them. Deleting a conversation from
        the sidebar removes its messages and attached files from our server.
        Account information is kept until you ask us to delete it. Payment
        records are kept as long as needed for accounting. Data may remain
        briefly in logs or backups.
      </p>
    ),
  },
  {
    title: "Your choices",
    content: (
      <p>
        You can delete your conversations at any time. To see, correct or
        delete your account data, email us at{" "}
        <a href={`mailto:${email}`} className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
          {email}
        </a>{" "}
        and we will reply within a reasonable time.
      </p>
    ),
  },
  {
    title: "Security",
    content: (
      <p>
        Passwords are stored as one-way hashes. We use HTTPS when the site is
        public and limit who can access the data. No system is completely
        secure, so please choose a strong, unique password.
      </p>
    ),
  },
  {
    title: "Children",
    content: (
      <p>OmniAI is not meant for children under 13.</p>
    ),
  },
  {
    title: "Changes",
    content: (
      <p>
        We may update this policy. The date at the top shows when it was last
        changed.
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <p>
        Questions? Email us at{" "}
        <a href={`mailto:${email}`} className="font-semibold text-indigo-600 underline decoration-indigo-400/50 underline-offset-4 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
          {email}
        </a>.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Last updated: 9 November 2026
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            This page explains what information OmniAI collects, why we collect
            it, and the choices you have.
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
                href={`#privacy-${index + 1}`}
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

        {/* Privacy Policy Sections */}
        <div className="space-y-5">
          {sections.map((section, index) => (
            <section
              key={section.title}
              id={`privacy-${index + 1}`}
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
