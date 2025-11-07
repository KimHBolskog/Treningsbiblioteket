// Minimal "entry" som monterer appen uten byggverktøy
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";

// Du har default-eksport i App.jsx – importer som du vil:
import App from "./App.jsx"; // eller: import BilingualSite from "./App.jsx"

const rootEl = document.getElementById("root");
const root = createRoot(rootEl);
root.render(<App />);        // hvis du importerte App
// root.render(<BilingualSite />); // hvis du importerte BilingualSite
