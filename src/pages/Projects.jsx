import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import projects from '../data/projects';
import TitreSection from '../components/TitreSection';

const numero = (i) => String(i + 1).padStart(2, '0');

function Projects() {
  return (
    <section id="projects" className="px-6 sm:px-10 py-20 md:py-28">
      <TitreSection
        numero="01"
        commentaire="mes réalisations"
        titre="Projets"
        sousTitre="Une sélection de projets que j'ai réalisés."
      />

      {/* Une ligne par projet, comme une table des matières. */}
      <ol className="max-w-6xl mx-auto border-t border-trait">
        {projects.map((project, i) => (
          <li key={project.slug} className="border-b border-trait">
            <Link
              to={`/projets/${project.slug}`}
              className="group grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 sm:gap-6 md:gap-8 py-5"
            >
              <span className="font-mono text-petit text-eclat font-medium">{numero(i)}</span>

              <img
                src={project.img}
                alt=""
                loading="lazy"
                className="w-16 sm:w-24 aspect-[16/10] object-cover object-top rounded-carte bg-trait"
              />

              <span className="min-w-0 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-6">
                <span className="text-encre text-accroche font-semibold tracking-tight truncate group-hover:text-accent">
                  {project.title}
                </span>
                <span className="font-mono text-petit text-sourdine truncate">
                  {project.techs.slice(0, 3).join(' · ')}
                </span>
              </span>

              <FiArrowRight className="text-accent text-xl" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Projects;
