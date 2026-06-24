import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import SecondaryContent from "./components/MainContent";
import Footer from "./components/Footer";

const root = createRoot(document.getElementById("root"));

/**
 * Challenge: move the MainContent and Footer components to their own
 * separate files.
 */

export function Page() {
  return (
    <div className="page-layout">
      <Navbar />
      <div className="main-container">
        <MainContent />
        <SecondaryContent />
      </div>
      <Footer />
    </div>
  );
}

root.render(<Page />);
