import { createRoot } from "react-dom/client";
import { MyAwesomeNavbar } from "./components/navbar";

const root = createRoot(document.getElementById("root"));

export function MainContent() {
  return (
    <main>
      <img src="src/assets/react-logo.png" width="40px" alt="React logo" />
      <h1>Fun facts about React!</h1>
      <ul>
        <li>Was first release in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 *
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 *
 * Render the Page component.
 */

export function SecondaryContent() {
  return (
    <section>
      <h1>Why I am excited to be learning React?</h1>
      <ol>
        <li>Super popular JS library</li>
        <li>Will help me be even more employable</li>
        <li>How widely it’s used in real-world products</li>
      </ol>
    </section>
  );
}

root.render(
  <div>
    <MyAwesomeNavbar />
    <MainContent />
    <SecondaryContent />
  </div>,
);

//  import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// root.render(
//     <main>
//         <img src="react-logo.png" width="40px" alt="React logo" />
//         <h1>Fun facts about React!</h1>
//         <ul>
//             <li>Was first release in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 200K stars on GitHub</li>
//             <li>Is maintained by Meta</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </main>
// )
