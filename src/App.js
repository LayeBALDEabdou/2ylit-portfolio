import About from "./About";
import Contact from "./Contact";
import Home from "./home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import SocialBar from "./SocialBar";

function App() {
  return (
    <div>
      <Navbar/>
      <SocialBar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;