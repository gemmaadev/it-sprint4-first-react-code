import { createRoot } from "react-dom/client";
import App from "./App";

// Aquest fitxer és el punt d'entrada de tota l'aplicació.
// És on React "s'enganxa" a la pàgina HTML real.

// Busquem l'element <div id="root"> que hi ha a index.html.
// El "!" li diu a TypeScript: "estic segur que aquest element existeix".
const root = createRoot(document.getElementById("root")!);

// Aquí li diem a React que dibuixi (renderitzi) el component <App />
// dins d'aquell element "root". A partir d'aquí, tota la pàgina
// es controla des de React.
root.render(<App />);
