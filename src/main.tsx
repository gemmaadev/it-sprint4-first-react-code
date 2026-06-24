import { createRoot } from "react-dom/client";
import { MyAwesomeNavbar } from "./components/navbar";

const root = createRoot(document.getElementById("root"));

export function MainContent() {
  return (
    <main>
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

export function SecondaryContent() {
  return (
    <section>
      <h2>Why I am excited to be learning React?</h2>
      <ol>
        <li>Super popular JS library</li>
        <li>Will help me be even more employable</li>
        <li>How widely it’s used in real-world products</li>
      </ol>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <small>© 2026 Maeso development. All rights reserved.</small>
    </footer>
  );
}

root.render(
  <div>
    <MyAwesomeNavbar />
    <MainContent />
    <SecondaryContent />
    <Footer />
  </div>,
);

 
//QUIZ

// 1. What is a React component?
// A function that returns React elements. (UI)

// 2. What's wrong with this code?
// ```
// function myComponent() {  >>>>>  MyComponent()
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```

// 3. What's wrong with this code?
// ```
// function Header() {
//     return (
//         <header>
//             <img src="./react-logo.png" width="40px" alt="React logo" />
//         </header>
//     )
// }

// root.render(Header())  >>>>>  <Header />
// ```
