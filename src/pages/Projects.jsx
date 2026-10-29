import { Link } from 'react-router-dom';
import projects from '../data/projects';
import TitreSection from '../components/TitreSection';

function Projects() {
  return (
    <section id="projects" className="px-6 sm:px-10 py-20 md:py-28 isolate">
      <TitreSection
        numero="01"
        commentaire="mes réalisations"
        titre="Projets"
        sousTitre="Une sélection de projets que j'ai réalisés."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projets/${project.slug}`}
            className="text-left carte flex flex-col"
          >
            <div className="h-48 bg-trait overflow-hidden rounded-t-carte">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-carte">
              <h3 className="text-encre font-semibold">{project.title}</h3>
              <p className="text-accent mt-1">{project.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
