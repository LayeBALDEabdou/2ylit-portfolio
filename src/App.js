import Home from "./home";
import Navbar from "./Navbar";
import SocialBar from "./SocialBar";

function App() {
  return (
    <div>
      <Navbar/>
      <SocialBar/>
      <Home/>

      <section id="about" className="h-screen flex items-center justify-center">
        <h1>A propos de moi</h1>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center">
        <h1>Mes projets</h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center">
        <h1>Contactez moi</h1>

      </section>

      
    </div>
  );
}

export default App;