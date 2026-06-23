import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom/client"

// ReactDOM.createRoot(document.querySelector("#root")).render(<p>Hello from the world of React!</p>)
// createRoot(document.querySelector("#root")).render(<p>Hello from the world of React!</p>)
const root = createRoot(document.getElementById("root"));
root.render(
  <ul>
    <li>Super popular JS library</li>
    <li>Will help me be even more employable</li>
    <li>How widely it’s used in real-world products</li>
  </ul>,
);
