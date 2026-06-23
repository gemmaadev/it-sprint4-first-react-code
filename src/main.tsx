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
////Components and JSX are ultimately transformed into JavaScript objects that React interprets to build the user interface.



// This is how React elements were created in the early days, before JSX became the standard way of writing components:

// import { createElement } from "react"
// import { createRoot } from "react-dom/client"

// const root = createRoot(document.getElementById("root"))
// const reactElement = createElement("h1", null, "Hello from createElement!") //Null is the prop

// console.log(reactElement)
//the console shows this: {type: 'h1', key: null, props: {children: 'Hello from createElement!'}, _owner: null, _store: {}}

// root.render(
//     reactElement
// )


