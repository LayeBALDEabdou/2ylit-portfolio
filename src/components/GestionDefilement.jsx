import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// À chaque changement de page : remonte en haut, ou va à la section
// demandée par l'ancre (/#projects).
function GestionDefilement() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const cible = document.getElementById(hash.slice(1));
      if (cible) {
        cible.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash, key]);

  return null;
}

export default GestionDefilement;
