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

// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// function Page() {
//     return (
//         <div>
//             <header>
//                 <img src="react-logo.png" width="40px" alt="React logo" />
//             </header>
//             <main>
//                 <h1>Reason I am excited to learn React</h1>
//                 <ol>
//                     <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
//                     <li>I am more likely to get a job as a front end developer if I know React</li>
//                 </ol>
//             </main>
//             <footer>
//                 <small>© 2024 Ziroll development. All rights reserved.</small>
//             </footer>
//         </div>
//     )
// }

// root.render(
//     <Page />
// )
