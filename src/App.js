import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import SocialBar from "./components/SocialBar";

function App() {
  return (
    <div>
      <Navbar />
      <SocialBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;