import { useState, useEffect } from 'react';
import moi from './assets/moi.jpg';

function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between px-10 py-4 shadow-md">
      <div className="flex items-center gap-3">
        <img src={moi} alt="laye" className="w-20 h-20 rounded-full object-cover" />
        <span className="font-bold text-sm tracking-widest uppercase">2ylit</span>
      </div>
      <ul className="flex items-center gap-10">
        <li><a href="#home" onClick={() => setActive('home')} className={`uppercase text-sm font-bold tracking-widest border-b-2 pb-1 transition-all duration-300 ${active === 'home' ? 'border-black' : 'border-transparent hover:border-black'}`}>Home</a></li>
        <li><a href="#about" onClick={() => setActive('about')} className={`uppercase text-sm font-bold tracking-widest border-b-2 pb-1 transition-all duration-300 ${active === 'about' ? 'border-black' : 'border-transparent hover:border-black'}`}>About</a></li>
        <li><a href="#projects" onClick={() => setActive('projects')} className={`uppercase text-sm font-bold tracking-widest border-b-2 pb-1 transition-all duration-300 ${active === 'projects' ? 'border-black' : 'border-transparent hover:border-black'}`}>Project</a></li>
        <li><a href="#contact" onClick={() => setActive('contact')} className={`uppercase text-sm font-bold tracking-widest border-b-2 pb-1 transition-all duration-300 ${active === 'contact' ? 'border-black' : 'border-transparent hover:border-black'}`}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;