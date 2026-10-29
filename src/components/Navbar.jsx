import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import moi from '../assets/moi.jpg';

function Navbar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navHeight = 80;
      let current = 'home';

      sections.forEach((section) => {
        const top = section.offsetTop - navHeight - 100;
        if (window.scrollY >= top) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Project' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4 shadow-md">
      <div className="flex items-center gap-3">
        <img src={moi} alt="Abdoulaye Balde" className="w-12 h-12 md:w-20 md:h-20 rounded-full object-cover" />
        <span className="font-bold text-sm tracking-widest uppercase">2ylit</span>
      </div>


      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-black p-2 z-[70] relative"
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>


      <ul className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={() => handleClick(link.id)}
              className={`uppercase text-sm font-bold tracking-widest border-b-2 pb-1 transition-all duration-300 ${active === link.id ? 'border-black' : 'border-transparent hover:border-black'}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>


      <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}>
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => handleClick(link.id)}
            className={`uppercase text-2xl font-bold tracking-widest border-b-2 pb-1 transition-all duration-300 ${active === link.id ? 'border-black' : 'border-transparent'}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;