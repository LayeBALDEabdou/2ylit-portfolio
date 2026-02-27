import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Terminal from "./components/Terminal";
import { useState, useEffect } from "react";
import { FaTerminal } from 'react-icons/fa';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />

      {!isTerminalOpen && (
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="fixed bottom-6 left-6 z-50 bg-gray-100 text-gray-800 border-2 border-gray-300 border-b-4 rounded-lg px-4 py-2 flex items-center gap-2 text-sm font-mono font-bold hover:bg-gray-200 hover:border-b-2 hover:translate-y-[2px] active:border-b-0 active:translate-y-[4px] transition-all"
          aria-label="Ouvrir le terminal"
        >
          <FaTerminal size={12} /> <span className="opacity-60 text-[10px] mr-1">Ctrl</span> K
        </button>
      )}

      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
}

export default App;