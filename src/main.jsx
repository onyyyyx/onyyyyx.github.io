import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.jsx";
import { nanoid } from "nanoid";
import Papa from "papaparse";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Charger et parser le fichier CSV
    fetch("/data.csv")
      .then((response) => response.text())
      .then((csv) => {
        const parsed = Papa.parse(csv, {
          header: true, // Considère la première ligne comme en-tête
          skipEmptyLines: true, // Ignore les lignes vides
        });

        // Mapper chaque ligne en un objet avec la structure souhaitée
        const formattedData = parsed.data.map((row) => ({
          id: `img-${nanoid()}`,
          name: row.name,
          location: row.location,
          type: row.type,
        }));

        setData(formattedData);
      })
      .catch((err) => console.error("Erreur lors du chargement du CSV :", err));
  }, []);

  return (
    <StrictMode>
      <App images={data} />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
