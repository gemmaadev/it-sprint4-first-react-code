import { createRoot } from "react-dom/client";
import { MyAwesomeNavbar } from "./components/navbar";
const root = createRoot(document.getElementById("root"));

export function MainContent() {
  return <h1>React is great!</h1>;
}
/**
 * Challenge:
 * Create your very first custom React component!
 * Call it "MainContent", and have it return a simple
 * h1 element that says "React is great!"
 *
 * Afterward, render it on the line below MyAwesomeNavbar
 */

root.render(
  <div>
    <MyAwesomeNavbar />
    <MainContent />
  </div>,
);
