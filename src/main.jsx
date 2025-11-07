// src/main.jsx
import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

// App settes globalt i App.jsx: window.App = App
const container = document.getElementById("root");
createRoot(container).render(React.createElement(window.App));
