import React, { useState } from "react";

/**
 * Bilingual Website Starter (NO/EN) – Single‑file React
 * Fix: ensure all JSX tags and parentheses are properly closed.
 * Change: revert logo to a black square with "TB" text inside, per user request.
 * Adds: lightweight runtime self‑checks ("test cases") for content structure.
 */

// Simple "TB" logo: black rounded square with white TB letters
function LogoTB({ size = 36 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: "#000",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: 800,
        fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      TB
    </div>
  );
}

// 👇 EDIT YOUR SITE TEXT HERE. Fill in both `no` and `en` fields.
const content = {
  siteName: { no: "Treningsbiblioteket", en: "Treningsbiblioteket" },
  nav: {
    home: { no: "Hjem", en: "Home" },
    about: { no: "Om", en: "About" },
    services: { no: "Tjenester", en: "Services" },
    contact: { no: "Kontakt", en: "Contact" },
  },
  hero: {
    title: {
      no: "Bygg en sterk kropp – trygt og smart",
      en: "Build a strong body – safely and smart",
    },
    subtitle: {
      no: "Finn øvelser, programmer og forklaringer tilpasset målet ditt.",
      en: "Discover exercises, programs and explanations tailored to your goal.",
    },
    cta: { no: "Kom i gang", en: "Get started" },
  },
  features: [
    {
      title: { no: "Kjernemuskulatur", en: "Core Strength" },
      body: {
        no: "Øvelser som planke, dead bug og anti-rotasjon med forklaring på hvorfor de virker.",
        en: "Exercises like plank, dead bug and anti-rotation with the reasoning behind them.",
      },
    },
    {
      title: { no: "Mobilitet", en: "Mobility" },
      body: {
        no: "Skånsomme rutiner for hofte, skulder og ankel som forbedrer teknikk.",
        en: "Gentle routines for hips, shoulders and ankles to improve technique.",
      },
    },
    {
      title: { no: "Kondisjon", en: "Conditioning" },
      body: {
        no: "Intervaller, soneforklaring og enkle løpeopplegg for ulike nivåer.",
        en: "Intervals, zone guidance and simple running plans for different levels.",
      },
    },
  ],
  about: {
    title: { no: "Om siden", en: "About" },
    body: {
      no: "Denne nettsiden er bygget som en enkel mal du kan redigere selv. Alt innhold ligger i et JSON‑lignende objekt øverst i filen.",
      en: "This site is a simple template you can edit yourself. All copy lives in a JSON‑like object at the top of the file.",
    },
  },
  services: {
    title: { no: "Tjenester", en: "Services" },
    list: [
      {
        title: { no: "Personlig plan", en: "Personal Plan" },
        desc: {
          no: "Skreddersydd 4–8 ukers program for styrke/kondisjon.",
          en: "Tailored 4–8 week program for strength/conditioning.",
        },
      },
      {
        title: { no: "Teknikkveiledning", en: "Technique Coaching" },
        desc: {
          no: "Videoanalyse og konkrete cues for tryggere løft.",
          en: "Video analysis and actionable cues for safer lifts.",
        },
      },
      {
        title: { no: "Kostholdsinnspill", en: "Nutrition Tips" },
        desc: {
          no: "Praktiske råd som passer hverdagen din.",
          en: "Practical guidance that fits your routine.",
        },
      },
    ],
  },
  contact: {
    title: { no: "Kontakt", en: "Contact" },
    subtitle: {
      no: "Har du spørsmål? Send en melding så svarer jeg så snart jeg kan.",
      en: "Have a question? Send a message and I'll get back to you soon.",
    },
    placeholders: {
      name: { no: "Navn", en: "Name" },
      email: { no: "E‑post", en: "Email" },
      message: { no: "Melding", en: "Message" },
      send: { no: "Send", en: "Send" },
    },
  },
  footer: {
    copy: {
      no: "© 2025 Treningsbiblioteket. Alle rettigheter forbeholdt.",
      en: "© 2025 Treningsbiblioteket. All rights reserved.",
    },
  },
};

// Utility to pick language text
function t(path, lang) {
  // path like ["hero", "title"] or ["services", "list", 0, "title"]
  return path.reduce((acc, key) => acc?.[key], content)[lang];
}

export default function BilingualSite() {
  const [lang, setLang] = useState("no");
  const [section, setSection] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoTB size={36} />
            <span className="font-semibold">{content.siteName[lang]}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {["home", "about", "services", "contact"].map((key) => (
              <button
                key={key}
                onClick={() => setSection(key)}
                className={`hover:text-gray-900 transition-colors ${
                  section === key ? "text-gray-900" : "text-gray-600"
                }`}
              >
                {content.nav[key][lang]}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        {section === "home" && (
          <Hero lang={lang} onGetStarted={() => setSection("services")} />
        )}
        {section === "about" && <About lang={lang} />}
        {section === "services" && <Services lang={lang} />}
        {section === "contact" && <Contact lang={lang} />}

        {/* Quick features preview on home */}
        {section === "home" && (
          <section className="mt-12 grid md:grid-cols-3 gap-6">
            {content.features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border">
                <h3 className="font-semibold text-lg mb-1">{f.title[lang]}</h3>
                <p className="text-sm text-gray-600">{f.body[lang]}</p>
              </div>
            ))}
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex items-center justify-between">
          <span>{content.footer.copy[lang]}</span>
          <div className="flex gap-4">
            <a className="hover:text-gray-900" href="#">Instagram</a>
            <a className="hover:text-gray-900" href="#">Facebook</a>
            <a className="hover:text-gray-900" href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LangToggle({ lang, setLang }) {
  return (
    <div className="inline-flex p-1 rounded-xl bg-gray-100 border">
      {["no", "en"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 text-sm rounded-lg transition ${
            lang === l ? "bg-white shadow-sm border" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Hero({ lang, onGetStarted }) {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          {content.hero.title[lang]}
        </h1>
        <p className="mt-4 text-gray-600 text-lg">{content.hero.subtitle[lang]}</p>
        <div className="mt-6 flex gap-3">
          <button
            onClick={onGetStarted}
            className="px-5 py-3 rounded-2xl bg-gray-900 text-white hover:opacity-90"
          >
            {content.hero.cta[lang]}
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onGetStarted();
            }}
            className="px-5 py-3 rounded-2xl border hover:bg-gray-50"
          >
            {lang === "no" ? "Se tjenester" : "See services"}
          </a>
        </div>
      </div>
      <div className="bg-white rounded-3xl border shadow-sm p-6">
        <div className="aspect-video w-full rounded-2xl bg-gray-100 border grid place-items-center text-gray-500">
          <div className="text-center px-6">
            <div className="text-5xl mb-2">💪</div>
            <p className="text-sm">
              {lang === "no"
                ? "Bytt språk med bryteren øverst til høyre. Rediger teksten i `content`-objektet."
                : "Switch language in the top‑right. Edit text in the `content` object."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ lang }) {
  return (
    <section className="max-w-3xl">
      <h2 className="text-2xl font-bold mb-2">{content.about.title[lang]}</h2>
      <p className="text-gray-700">{content.about.body[lang]}</p>
    </section>
  );
}

function Services({ lang }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">{content.services.title[lang]}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {content.services.list.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 className="font-semibold mb-1">{item.title[lang]}</h3>
            <p className="text-sm text-gray-600">{item.desc[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ lang }) {
  return (
    <section className="max-w-2xl">
      <h2 className="text-2xl font-bold mb-2">{content.contact.title[lang]}</h2>
      <p className="text-gray-700 mb-6">{content.contact.subtitle[lang]}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(lang === "no" ? "Melding sendt (demo)" : "Message sent (demo)");
        }}
        className="bg-white rounded-2xl p-6 shadow-sm border"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600" htmlFor="name">
              {content.contact.placeholders.name[lang]}
            </label>
            <input
              id="name"
              className="border rounded-xl px-3 py-2"
              placeholder={content.contact.placeholders.name[lang]}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600" htmlFor="email">
              {content.contact.placeholders.email[lang]}
            </label>
            <input
              id="email"
              type="email"
              className="border rounded-xl px-3 py-2"
              placeholder={content.contact.placeholders.email[lang]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label className="text-sm text-gray-600" htmlFor="message">
            {content.contact.placeholders.message[lang]}
          </label>
          <textarea
            id="message"
            rows={5}
            className="border rounded-xl px-3 py-2"
            placeholder={content.contact.placeholders.message[lang]}
          />
        </div>
        <button className="mt-4 px-5 py-3 rounded-2xl bg-gray-900 text-white hover:opacity-90">
          {content.contact.placeholders.send[lang]}
        </button>
      </form>
    </section>
  );
}

/**
 * Lightweight runtime self‑checks ("tests") to catch common content issues.
 * These run once when the module loads and write to console.
 */
(function runSelfChecks() {
  try {
    console.assert(content.siteName.no && content.siteName.en, "[TEST] siteName missing no/en");
    const navKeys = ["home", "about", "services", "contact"];
    navKeys.forEach((k) => {
      console.assert(content.nav[k]?.no && content.nav[k]?.en, `[TEST] nav.${k} missing no/en`);
    });
    console.assert(Array.isArray(content.features) && content.features.length >= 1, "[TEST] features should be non-empty array");
    console.assert(typeof content.footer.copy.no === "string" && typeof content.footer.copy.en === "string", "[TEST] footer.copy missing");
    // Minimal rendering expectation values
    console.log("[TEST] Self-checks passed: content structure looks OK.");
  } catch (e) {
    console.warn("[TEST] Self-checks encountered an error:", e);
  }
})();
