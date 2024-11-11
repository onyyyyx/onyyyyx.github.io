import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.jsx";
import { nanoid } from "nanoid";

const DATA = [
  {id: `todo-${nanoid()}`, location: "deepsky/Andromede.png", type: 2},
]

const TYPES = [
  "Moon",
  "Stars",
  "Deep Sky",
  "Open Field",
  "Planetary"
]

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App images={DATA} />
  </StrictMode>
);
