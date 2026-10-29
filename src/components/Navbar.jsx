import { useState, useEffect } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-2ylit.svg?raw';

// Le SVG utilise currentColor : sa couleur suit la classe text-* (accent).
const Logo = () => (
  <span
    role="img"
    aria-label="2YLIT"
    className="block h-12 w-12 md:h-14 md:w-14 text-accent [&>svg]:h-full [&>svg]:w-full"
    dangerouslySetInnerHTML={{ __html: logo }}
  />
);

const ease = [0.76, 0, 0.24, 1];

// Un rideau qui descend, puis le contenu apparaît en fondu.
const overlay = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  visible: { clipPath: 'inset(0 0 0% 0)', transition: { duration: 0.45, ease } },
  exit: { clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.35, ease, delay: 0.1 } },
};

const fondu = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

// Même boîte pour le bouton menu et la croix : rien ne bouge à l'ouverture.
const boutonBarre = 'relative flex h-11 w-11 items-center justify-center';

const links = [
  { href: '/#home', label: 'Accueil' },
  { href: '/#about', label: 'À propos' },
  { href: '/#projects', label: 'Projets' },
  { href: '/#contact', label: 'Contact' },
  { href: '/cv.pdf', label: 'Mon CV', external: true },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <nav className="absolute top-0 left-0 w-full z-50 px-6 sm:px-10 pt-8 md:pt-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="block" aria-label="2YLIT, retour à l'accueil">
          <Logo />
        </Link>

        <button
          onClick={() => setMenuOpen(true)}
          className={`group ${boutonBarre}`}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          <span className="flex w-9 flex-col items-end gap-[7px]">
            <span className="block h-[2px] w-9 bg-accent" />
            <span className="block h-[2px] w-6 bg-accent transition-all duration-300 group-hover:w-9" />
          </span>
        </button>
        </div>
      </nav>

      <AnimatePresence>
      {menuOpen && (
      <motion.div
        variants={overlay}
        initial="hidden"
        animate="visible"
        exit="exit"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed inset-0 z-[90] bg-carte px-6 sm:px-10 pt-8 md:pt-10 pb-10"
      >
        <div className="max-w-6xl h-full mx-auto flex flex-col">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block" aria-label="2YLIT, retour à l'accueil">
            <Logo />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className={boutonBarre}
            aria-label="Fermer le menu"
          >
            <span className="absolute h-[2px] w-9 bg-accent rotate-45" />
            <span className="absolute h-[2px] w-9 bg-accent -rotate-45" />
          </button>
        </div>

        <motion.ul variants={fondu} className="flex-1 flex flex-col justify-center gap-3 md:gap-4">
          {links.map((link, i) => {
            // lien interne : routeur (pas de rechargement) ; CV : lien classique
            const Lien = link.external ? 'a' : Link;
            const cible = link.external
              ? { href: link.href, target: '_blank', rel: 'noreferrer' }
              : { to: link.href };
            return (
            <li key={link.href} className="overflow-hidden">
              <Lien
                {...cible}
                onClick={() => setMenuOpen(false)}
                className="group inline-flex items-baseline gap-4 text-encre hover:text-accent text-menu font-semibold tracking-tight transition-colors duration-200"
              >
                <span className="w-7 shrink-0 text-discret group-hover:text-accent text-surtitre font-medium tracking-[0.2em] transition-colors duration-200">
                  0{i + 1}
                </span>
                {link.label}
              </Lien>
            </li>
            );
          })}
        </motion.ul>

        <motion.div variants={fondu} className="flex flex-col sm:flex-row justify-between gap-3 pt-8 border-t border-trait text-petit text-sourdine">
          <a href="mailto:twoylit@gmail.com" className="hover:text-accent transition-colors">twoylit@gmail.com</a>
          <p>Dakar, Sénégal</p>
        </motion.div>
        </div>
      </motion.div>
      )}
      </AnimatePresence>
    </MotionConfig>
  );
}

export default Navbar;
