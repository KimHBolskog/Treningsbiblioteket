// main.jsx (kjøres i nettleseren med Babel Standalone)
import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";
import App from "./App.jsx";

const container = document.getElementById("root");
createRoot(container).render(<App />);
