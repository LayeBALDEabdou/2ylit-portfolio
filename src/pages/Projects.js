import { useState, useRef, useCallback } from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ram_monitor from '../assets/ram_monitor1.jpeg'
import easyTol from '../assets/easyTol1.jpeg'
import portfolio from '../assets/portfolio.png'
import knyxis from '../assets/knyxis.png'

const projects = [
  {
    num: '01',
    title: 'Portfolio',
    desc: 'React + Tailwind',
    img: portfolio,
    details: "Mon site portfolio personnel construit avec React et Tailwind CSS. Design responsive, animations fluides et formulaire de contact fonctionnel.",
    techs: ['React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    github: 'https://github.com/LayeBALDEabdou/2ylit-portfolio',
    live: '',
  },
  {
    num: '02',
    title: 'Ram_monitor',
    desc: 'C',
    img: ram_monitor,
    details: "Un outil de monitoring de la mémoire RAM en temps réel, développé en C. Permet de visualiser l'utilisation mémoire du système.",
    techs: ['C', 'Linux', 'System Programming'],
    github: 'https://github.com/LayeBALDEabdou/',
    live: '',
  },
  {
    num: '03',
    title: 'easyTol',
    desc: 'Alpine js + Django',
    img: easyTol,
    details: "Application web full-stack avec un backend Django et un frontend dynamique utilisant Alpine.js pour une expérience utilisateur réactive.",
    techs: ['Django', 'Alpine.js', 'Python', 'HTML/CSS'],
    github: 'https://github.com/LayeBALDEabdou/',
    live: '',
  },
  {
    num: '04',
    title: 'knyxis',
    desc: 'Electron',
    img: knyxis,
    details: "Application desktop développée avec Electron. Interface moderne et fonctionnalités natives du système.",
    techs: ['Electron', 'JavaScript', 'Node.js'],
    github: 'https://github.com/LayeBALDEabdou/',
    live: '',
  },
  {
    num: '05',
    title: 'enclos',
    desc: 'C',
    img: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400',
    details: "Projet système en C explorant les concepts de gestion mémoire et de programmation bas niveau sous Linux.",
    techs: ['C', 'Linux', 'Makefile'],
    github: 'https://github.com/LayeBALDEabdou/',
    live: '',
  },
];

function Projects() {
  const [active, setActive] = useState(2);
  const [selectedProject, setSelectedProject] = useState(null);
  const touchStartX = useRef(0);
  const wheelCooldown = useRef(false);

  const goNext = useCallback(() => {
    setActive((prev) => Math.min(prev + 1, projects.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setActive((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const handleWheel = (e) => {
    if (wheelCooldown.current) return;
    if (Math.abs(e.deltaX) > 30 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      if (e.deltaX > 0) goNext();
      else goPrev();
      wheelCooldown.current = true;
      setTimeout(() => { wheelCooldown.current = false; }, 400);
    }
  };

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="projects" className="min-h-screen bg-white relative overflow-hidden flex flex-col items-center justify-center pt-20 md:pt-24 pb-12 md:pb-16">


      <div
        className="hidden md:flex items-center justify-center w-full h-[500px] relative"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project, i) => {
          const diff = i - active;
          return (
            <div
              key={project.num}
              onClick={() => {
                if (diff === 0) openProject(project);
                else setActive(i);
              }}
              className="absolute w-72 lg:w-80 h-[400px] lg:h-[450px] rounded-xl overflow-hidden cursor-pointer bg-gray-900 shadow-2xl"
              style={{
                transform: `translateX(${diff * 320}px) scale(${diff === 0 ? 1.1 : 0.85})`,
                zIndex: diff === 0 ? 10 : 5 - Math.abs(diff),
                opacity: Math.abs(diff) > 2 ? 0 : diff === 0 ? 1 : 0.6,
                transition: 'transform .6s cubic-bezier(0, 0.02, 0, 1), opacity .6s ease',
              }}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
              <img src={project.img} alt={project.title} className="w-full h-full object-cover pointer-events-none" />
              <div className="absolute z-20 top-2 left-5 text-white font-extrabold opacity-80" style={{ fontSize: '70px' }}>
                {project.num}
              </div>
              <div className="absolute z-20 bottom-8 left-5 text-white font-bold uppercase tracking-widest text-xl">
                {project.title}
              </div>
              <div className="absolute z-20 bottom-3 left-5 text-white/70 uppercase tracking-widest text-xs">
                {project.desc}
              </div>
            </div>
          );
        })}
      </div>


      <div className="hidden md:flex items-center justify-center gap-2 mt-6">
        {projects.map((project, i) => (
          <button
            key={project.num}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${i === active ? 'w-8 h-2.5 bg-black' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-500'}`}
            aria-label={`Voir projet ${project.title}`}
          />
        ))}
      </div>


      <div className="flex md:hidden flex-col gap-5 px-4 sm:px-6 w-full">
        <h3 className="text-2xl font-extrabold uppercase tracking-widest text-center mb-2">Projets</h3>
        {projects.map((project) => (
          <div
            key={project.num}
            onClick={() => openProject(project)}
            className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-gray-900 shadow-lg cursor-pointer active:scale-[0.98] transition-transform duration-200"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
            <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute z-20 top-2 left-4 text-white font-extrabold opacity-80 text-4xl">
              {project.num}
            </div>
            <div className="absolute z-20 bottom-7 left-4 text-white font-bold uppercase tracking-widest text-lg">
              {project.title}
            </div>
            <div className="absolute z-20 bottom-2 left-4 text-white/70 uppercase tracking-widest text-xs">
              {project.desc}
            </div>
          </div>
        ))}
      </div>


      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          onClick={closeProject}
        >

          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />


          <div
            className="relative bg-white rounded-2xl overflow-hidden w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'modalIn .3s ease-out' }}
          >

            <button
              onClick={closeProject}
              className="absolute top-4 right-4 z-30 bg-black/60 text-white p-2.5 rounded-full hover:bg-black/80 active:bg-black transition-all duration-200"
              aria-label="Fermer"
            >
              <FaTimes size={18} />
            </button>


            <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
              <div className="absolute bottom-4 left-6 z-10 flex items-end gap-3">
                <span className="text-white/60 font-extrabold text-5xl sm:text-6xl md:text-7xl">{selectedProject.num}</span>
                <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl uppercase tracking-widest pb-1 sm:pb-2">{selectedProject.title}</span>
              </div>
            </div>


            <div className="p-5 sm:p-8 md:p-10">

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techs.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 border border-gray-200 text-gray-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>


              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg mb-8">
                {selectedProject.details}
              </p>


              <div className="flex flex-wrap gap-3">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border-2 border-black px-5 py-2.5 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white active:bg-gray-800 transition-all duration-300"
                  >
                    <FaGithub size={16} /> Code source
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-black text-white px-5 py-2.5 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 active:bg-gray-700 transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={14} /> Voir le site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}


      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

    </section>
  );
}

export default Projects;