import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import ProjetDetail from "./pages/ProjetDetail";
import Footer from "./components/Footer";
import GestionDefilement from "./components/GestionDefilement";

const TITRE_SITE = '2YLIT-portfolio';

function Accueil() {
  useEffect(() => {
    document.title = TITRE_SITE;
  }, []);

  return (
    <>
      <Home />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="relative bg-fond min-h-screen">
      <GestionDefilement />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/projets/:slug" element={<ProjetDetail />} />
          <Route path="*" element={<Accueil />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
