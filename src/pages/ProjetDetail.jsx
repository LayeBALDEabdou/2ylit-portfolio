import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import projects from '../data/projects';

const numero = (i) => String(i + 1).padStart(2, '0');

function ProjetDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const projet = projects[index];

  useEffect(() => {
    document.title = projet ? `${projet.title} — 2YLIT` : 'Projet introuvable — 2YLIT';
  }, [projet]);

  if (!projet) {
    return (
      <section className="min-h-screen flex items-center px-6 sm:px-10 pt-32 pb-20">
        <div className="w-full max-w-6xl mx-auto">
          <p className="surtitre mb-5">Erreur 404</p>
          <h1 className="text-encre text-hero font-medium tracking-tight mb-8">
            Ce projet <span className="text-accent">n'existe pas.</span>
          </h1>
          <Link to="/#projects" className="lien-souligne">
            <FiArrowLeft /> Voir tous les projets
          </Link>
        </div>
      </section>
    );
  }

  const precedent = projects[(index - 1 + projects.length) % projects.length];
  const suivant = projects[(index + 1) % projects.length];

  return (
    <article className="px-6 sm:px-10 pt-32 md:pt-40 pb-20 md:pb-28 isolate">
      <div className="max-w-6xl mx-auto">
        <Link to="/#projects" className="lien-souligne mb-12 md:mb-16">
          <FiArrowLeft /> Tous les projets
        </Link>

        <p className="surtitre flex items-center gap-3 text-petit text-texte mb-5">
          <span className="h-[2px] w-8 bg-eclat" aria-hidden="true" />
          Projet {numero(index)} / {numero(projects.length - 1)}
        </p>

        <h1 className="text-encre text-hero font-medium tracking-tight mb-12 md:mb-16">
          {projet.title}
        </h1>

        <div className="carte mb-14 md:mb-20">
          <img
            src={projet.img}
            alt={`Aperçu du projet ${projet.title}`}
            fetchPriority="high"
            className="w-full aspect-video object-cover rounded-carte"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-20">
          <div>
            <h2 className="text-encre text-titre-carte font-bold tracking-tight mb-5">
              À propos du projet
            </h2>
            <p className="text-texte text-corps max-w-2xl">{projet.details}</p>
          </div>

          <aside className="flex flex-col gap-10">
            <div>
              <p className="surtitre mb-4">Technologies</p>
              <ul className="flex flex-wrap gap-2">
                {projet.techs.map((tech) => (
                  <li key={tech} className="bg-carte text-accent text-petit px-3 py-1.5 rounded-carte">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {(projet.github || projet.live) && (
              <div>
                <p className="surtitre mb-4">Liens</p>
                <div className="flex flex-col items-start gap-4">
                  {projet.github && (
                    <a href={projet.github} target="_blank" rel="noreferrer" className="lien-souligne">
                      <FaGithub /> Code source
                    </a>
                  )}
                  {projet.live && (
                    <a href={projet.live} target="_blank" rel="noreferrer" className="lien-souligne">
                      <FaExternalLinkAlt size={14} /> Voir le site
                    </a>
                  )}
                </div>
              </div>
            )}
          </aside>
        </div>

        <nav
          aria-label="Autres projets"
          className="flex items-center justify-between gap-6 mt-20 md:mt-28 pt-10 border-t border-trait"
        >
          <Link to={`/projets/${precedent.slug}`} className="lien-souligne">
            <FiArrowLeft /> {precedent.title}
          </Link>
          <Link to={`/projets/${suivant.slug}`} className="lien-souligne">
            {suivant.title} <FiArrowRight />
          </Link>
        </nav>
      </div>
    </article>
  );
}

export default ProjetDetail;
