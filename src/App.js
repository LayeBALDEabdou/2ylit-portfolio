import Navbar from "./Navbar";
import SocialBar from "./SocialBar";

function App() {
  return (
    <div className="pt-24">
      <Navbar/>
      <SocialBar/>
      <section id="home" className="h-screen flex items-center justify-center">
        <h1>Bienvenue sur mon portfolio</h1>
      </section>

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