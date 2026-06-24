import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import SecondaryContent from "./components/SecondaryContent";
import Footer from "./components/Footer";

// App és el component principal: aquí s'ajunten tots els altres
// components per formar la pàgina sencera.
export default function App() {
  return (
    // Tot ha d'anar dins UN sol element pare (aquí, un <div>).
    // Un component de React no pot retornar dos elements germans solts.
    <div className="page-layout">
      <Navbar />
      {/* Aquest div agrupa el contingut principal i el secundari*/}
      <div className="main-container">
        <MainContent />
        <SecondaryContent />
      </div>
      <Footer />
    </div>
  );
}

//  Es podria fer fragment en lloc de div: <> </>: agrupa elements sense crear cap div extra al HTML final 