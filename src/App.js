import About from "./About";
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

      <section id="contact" className="h-screen flex items-center justify-center">
        <h1>Contactez moi</h1>

      </section>

      
    </div>
  );
}

export default App;