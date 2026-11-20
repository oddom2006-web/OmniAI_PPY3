"use client";
import { useEffect, useState } from "react";

export type Lang = "en" | "km";

const en = {
  newChat: "New chat",
  search: "Search",
  chats: "Chats",
  tasks: "Tasks",
  language: "Language",
  theme: "Theme",
  light: "Light",
  dark: "Dark",
  logout: "Log out",
  login: "Log in",
  register: "Create account",
  guest: "Guest",
  guestNote: "Guest chats are not saved. Log in to keep your history.",
  heading: "What do you want to work on?",
  sub: "Ask a question, get code explained, translate, or attach a file.",
  placeholder: "Message OmniAI",
  attach: "Attach",
  send: "Send",
  thinking: "Thinking…",
  searchPlaceholder: "Search chats",
  noResults: "No chats found.",
  addTask: "Add a task",
  noTasks: "No tasks yet. Add one above.",
  askAi: "Ask AI",
  premium: "Premium models",
  loginToUse: "Log in",
  needsPlan: "Subscription required",
  upgrade: "Upgrade",
  upgradeTitle: "Upgrade to Pro",
  scanToPay: "Scan with any bank app that supports KHQR.",
  waiting: "Waiting for payment…",
  paidOk: "Payment received. Premium models are unlocked.",
  qrExpired: "This QR code expired.",
  newQr: "Get a new QR",
  proUntil: "Pro until",
  days: "days",
  close: "Close",
  stop: "Stop",
  admin: "Admin dashboard",
  expiresIn: "Expires in",
  navHome: "Home",
  navFeatures: "Features",
  navAbout: "About us",
  navContact: "Contact us",
  startChatting: "Start chatting",
  heroTitle: "Ask once. Pick the model that fits the question.",
  heroSub: "OmniAI puts a fast model and a stronger model in one chat. Attach a PDF or a photo, switch models any time, and keep your history.",
  ctaRegister: "Create free account",
  heroNote: "No account needed to try it. Guests get a few free messages a day.",
  featTitle: "Built for the way you study and work",
  f1t: "Choose the model for each chat",
  f1d: "Use the fast model for quick questions and the balanced one for harder work. Your choice is saved with the conversation.",
  f2t: "Attach photos and documents",
  f2d: "Add an image, PDF or text file and ask about it: lecture notes, an error screenshot, a CSV.",
  f3t: "Your history, your tasks",
  f3d: "Log in to save, search, rename and delete chats, and keep a task list beside them.",
  f4t: "Code and Markdown that read well",
  f4d: "Answers come back formatted, with code in its own block so you can copy it straight into your editor.",
  aboutTitle: "About OmniAI",
  aboutP1: "OmniAI is a university practicum project that makes AI easier to use: one chat, several models.",
  aboutP2: "We want you to focus on your question, not on switching apps. AI answers can be wrong, so check anything important.",
  contactTitle: "Contact us",
  contactSub: "Have a question, feedback or a problem? Send us a message.",
  cName: "Name",
  cEmail: "Your email",
  cMessage: "Message",
  cSend: "Send message",
  ctaBand: "Ready for your first question?",
  ctaOpen: "Open the chat",
  footer: "OmniAI is a university practicum project. AI answers can be wrong, so check anything important.",
  privacy: "Privacy policy",
  terms: "Terms of use",
};

// Khmer wording is a first draft: have a native speaker review it.
const km: Record<keyof typeof en, string> = {
  newChat: "ការសន្ទនាថ្មី",
  search: "ស្វែងរក",
  chats: "ការសន្ទនា",
  tasks: "កិច្ចការ",
  language: "ភាសា",
  theme: "រូបរាង",
  light: "ភ្លឺ",
  dark: "ងងឹត",
  logout: "ចាកចេញ",
  login: "ចូលគណនី",
  register: "បង្កើតគណនី",
  guest: "ភ្ញៀវ",
  guestNote: "ការសន្ទនារបស់ភ្ញៀវមិនត្រូវបានរក្សាទុកទេ។ ចូលគណនីដើម្បីរក្សាប្រវត្តិ។",
  heading: "តើអ្នកចង់ធ្វើអ្វី?",
  sub: "សួរសំណួរ ពន្យល់កូដ បកប្រែ ឬភ្ជាប់ឯកសារ។",
  placeholder: "សួរ OmniAI",
  attach: "ភ្ជាប់ឯកសារ",
  send: "ផ្ញើ",
  thinking: "កំពុងគិត…",
  searchPlaceholder: "ស្វែងរកការសន្ទនា",
  noResults: "រកមិនឃើញការសន្ទនា។",
  addTask: "បន្ថែមកិច្ចការ",
  noTasks: "មិនទាន់មានកិច្ចការទេ។",
  askAi: "សួរ AI",
  premium: "ម៉ូដែលពិសេស",
  loginToUse: "ចូលគណនី",
  needsPlan: "ត្រូវការការជាវ",
  upgrade: "ដំឡើង",
  upgradeTitle: "ដំឡើងទៅ Pro",
  scanToPay: "ស្កេនជាមួយកម្មវិធីធនាគារដែលគាំទ្រ KHQR។",
  waiting: "កំពុងរង់ចាំការទូទាត់…",
  paidOk: "បានទទួលការទូទាត់។ ម៉ូដែលពិសេសត្រូវបានដោះសោ។",
  qrExpired: "កូដ QR នេះផុតកំណត់ហើយ។",
  newQr: "យកកូដ QR ថ្មី",
  proUntil: "Pro រហូតដល់",
  days: "ថ្ងៃ",
  close: "បិទ",
  stop: "បញ្ឈប់",
  admin: "ផ្ទាំងគ្រប់គ្រង",
  expiresIn: "ផុតកំណត់ក្នុង",
  navHome: "ទំព័រដើម",
  navFeatures: "មុខងារ",
  navAbout: "អំពីយើង",
  navContact: "ទំនាក់ទំនង",
  startChatting: "ចាប់ផ្តើមសន្ទនា",
  heroTitle: "សួរម្តង ជ្រើសរើសម៉ូដែលដែលសាកសមនឹងសំណួរ",
  heroSub: "OmniAI ដាក់ម៉ូដែលលឿន និងម៉ូដែលខ្លាំងក្នុងការសន្ទនាតែមួយ។ ភ្ជាប់ឯកសារ PDF ឬរូបថត ប្តូរម៉ូដែលគ្រប់ពេល ហើយរក្សាប្រវត្តិរបស់អ្នក។",
  ctaRegister: "បង្កើតគណនីឥតគិតថ្លៃ",
  heroNote: "មិនចាំបាច់មានគណនីដើម្បីសាកល្បងទេ។ ភ្ញៀវអាចផ្ញើសារឥតគិតថ្លៃបានមួយចំនួនក្នុងមួយថ្ងៃ។",
  featTitle: "បង្កើតឡើងសម្រាប់ការសិក្សា និងការងាររបស់អ្នក",
  f1t: "ជ្រើសរើសម៉ូដែលសម្រាប់ការសន្ទនានីមួយៗ",
  f1d: "ប្រើម៉ូដែលលឿនសម្រាប់សំណួរខ្លី និងម៉ូដែលមានតុល្យភាពសម្រាប់ការងារពិបាក។ ជម្រើសរបស់អ្នកត្រូវបានរក្សាទុកជាមួយការសន្ទនា។",
  f2t: "ភ្ជាប់រូបថត និងឯកសារ",
  f2d: "បន្ថែមរូបភាព PDF ឬឯកសារអត្ថបទ ហើយសួរអំពីវា៖ កំណត់ត្រាមេរៀន រូបថតអេក្រង់កំហុស ឬ CSV។",
  f3t: "ប្រវត្តិ និងកិច្ចការរបស់អ្នក",
  f3d: "ចូលគណនីដើម្បីរក្សាទុក ស្វែងរក ប្តូរឈ្មោះ និងលុបការសន្ទនា ព្រមទាំងមានបញ្ជីកិច្ចការនៅក្បែរ។",
  f4t: "កូដ និង Markdown ដែលងាយអាន",
  f4d: "ចម្លើយត្រូវបានរៀបចំទម្រង់ល្អ ជាមួយកូដក្នុងប្លុកដាច់ដោយឡែក ដើម្បីចម្លងទៅកម្មវិធីកែកូដបានភ្លាមៗ។",
  aboutTitle: "អំពី OmniAI",
  aboutP1: "OmniAI គឺជាគម្រោងអនុវត្តន៍របស់និស្សិតសាកលវិទ្យាល័យ ដែលធ្វើឱ្យ AI ងាយស្រួលប្រើ៖ ការសន្ទនាតែមួយ ជាមួយម៉ូដែលជាច្រើន។",
  aboutP2: "យើងចង់ឱ្យអ្នកផ្តោតលើសំណួររបស់អ្នក មិនមែនលើការប្តូរកម្មវិធីទេ។ ចម្លើយរបស់ AI អាចមានកំហុស ដូច្នេះសូមពិនិត្យអ្វីដែលសំខាន់។",
  contactTitle: "ទាក់ទងមកយើង",
  contactSub: "មានសំណួរ មតិយោបល់ ឬបញ្ហា? សូមផ្ញើសារមកយើង។",
  cName: "ឈ្មោះ",
  cEmail: "អ៊ីមែលរបស់អ្នក",
  cMessage: "សារ",
  cSend: "ផ្ញើសារ",
  ctaBand: "ត្រៀមខ្លួនសម្រាប់សំណួរដំបូងរបស់អ្នកហើយឬនៅ?",
  ctaOpen: "បើកការសន្ទនា",
  footer: "OmniAI គឺជាគម្រោងអនុវត្តន៍របស់សាកលវិទ្យាល័យ។ ចម្លើយរបស់ AI អាចមានកំហុស ដូច្នេះសូមពិនិត្យអ្វីដែលសំខាន់។",
  privacy: "គោលការណ៍ឯកជនភាព",
  terms: "លក្ខខណ្ឌប្រើប្រាស់",
};

const dict = { en, km };
export type Key = keyof typeof en;

export function useLang() {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("omni_lang");
      if (saved === "en" || saved === "km") {
        setLangState(saved);
        document.documentElement.lang = saved;
      }
    } catch {}
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    document.documentElement.lang = l;
    try {
      localStorage.setItem("omni_lang", l);
    } catch {}
  }

  return { lang, setLang, t: (k: Key) => dict[lang][k] };
}
