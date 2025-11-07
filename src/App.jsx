import React, { useState } from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

/**
 * ✅ Bilingual Website Starter (NO/EN) – Single‑file React (WORKING VERSION)
 * - No build system required
 * - Works with Netlify using index.html + main.jsx
 * - All JSX is valid and closes correctly
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
        fontFamily:
          "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      TB
    </div>
  );
}

// TEXT CONTENT — EDIT HERE ✅
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
        no: "Øvelser som planke, dead bug og anti-rotasjon.",
        en: "Exercises like plank, dead bug and anti-rotation.",
      },
    },
    {
      title: { no: "Mobilitet", en: "Mobility" },
      body: {
        no: "Rutiner som forbedrer teknikk og bevegelse.",
        en: "Routines that improve technique and movement.",
      },
    },
    {
      title: { no: "Kondisjon", en: "Conditioning" },
      body: {
        no: "Intervaller og enkle løpeopplegg.",
        en: "Intervals and simple running programs.",
      },
    },
  ],
  footer: {
    copy: {
      no: "© 2025 Treningsbiblioteket. Alle rettigheter forbeholdt.",
      en: "© 2025 Treningsbiblioteket. All rights reserved.",
    },
  },
};

export default function App() {
  const [lang, setLang] = useState("no");
  const [section, setSection] = useState("home");

  return (
    <div style={{ fontFamily: "Inter, sans-serif", padding: 24 }}>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <LogoTB />
        <nav style={{ display: "flex", gap: 12 }}>
          {Object.keys(content.nav).map((key) => (
            <button key={key} onClick={() => setSection(key)}>
              {content.nav[key][lang]}
            </button>
          ))}
        </nav>
        <button onClick={() => setLang(lang === "no" ? "en" : "no")}>{lang.toUpperCase()}</button>
      </header>

      {section === "home" && (
        <section>
          <h1>{content.hero.title[lang]}</h1>
          <p>{content.hero.subtitle[lang]}</p>
          <button onClick={() => setSection("services")}>{content.hero.cta[lang]}</button>
        </section>
      )}

      {section === "services" && (
        <section>
          <h2>{content.nav.services[lang]}</h2>
          <ul>
            {content.features.map((f, i) => (
              <li key={i}>
                <strong>{f.title[lang]}</strong>: {f.body[lang]}
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer style={{ marginTop: 40, borderTop: "1px solid #ddd", paddingTop: 12 }}>
        {content.footer.copy[lang]}
      </footer>
    </div>
  );
}

// ✅ Make App available to main.jsx
window.App = App;
