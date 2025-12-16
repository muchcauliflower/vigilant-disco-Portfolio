import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Tailwind import - FIRST
import "bootstrap/dist/css/bootstrap.min.css"; // Then Bootstrap
import "./css/colors.css";
import "./css/layout.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
