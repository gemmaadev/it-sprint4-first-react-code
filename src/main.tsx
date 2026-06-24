import { createRoot } from "react-dom/client";
import { MyAwesomeNavbar } from "./components/navbar";

const root = createRoot(document.getElementById("root"));

export function MainContent() {
  return (
    <main className="content-card">
      <h1 className="card-title-react">Fun facts about React!</h1>
      <ul className="facts-list">
        <li>Was first released in 2013</li>
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
    <section className="content-card">
      <h2 className="card-title-react">
        Why I am excited to be learning React?
      </h2>
      <ol className="facts-list">
        <li>Super popular JS library</li>
        <li>Will help me be even more employable</li>
        <li>How widely it’s used in real-world products</li>
      </ol>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="main-footer">
      <small>© 2026 Maeso development. All rights reserved.</small>
      <small className="footer-sub">Built with React</small>
    </footer>
  );
}

export function Page() {
  return (
    <div className="page-layout">
      <MyAwesomeNavbar />
      <div className="main-container">
        <MainContent />
        <SecondaryContent />
      </div>
      <Footer />
    </div>
  );
}

root.render(<Page />);
