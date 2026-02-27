import { useState, useRef, useCallback } from 'react';
import ram_monitor from '../assets/ram_monitor1.jpeg'
import easyTol from '../assets/easyTol1.jpeg'
import portfolio from '../assets/portfolio.png'
import knyxis from '../assets/knyxis.png'

const projects = [
  { num: '01', title: 'Portfolio', desc: 'React + Tailwind', img: portfolio },
  { num: '02', title: 'Ram_monitor', desc: 'C', img: ram_monitor },
  { num: '03', title: 'easyTol', desc: 'Alpine js + Django', img: easyTol },
  { num: '04', title: 'knyxis', desc: 'Electron', img: knyxis },
  { num: '05', title: 'enclos', desc: 'c', img: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400' },
];

function Projects() {
  const [active, setActive] = useState(2);
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
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 30) {
      e.preventDefault();
      if (delta > 0) goNext();
      else goPrev();
      wheelCooldown.current = true;
      setTimeout(() => { wheelCooldown.current = false; }, 400);
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center pt-20 md:pt-24 pb-10">

      {/* Desktop carousel */}
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
              onClick={() => setActive(i)}
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

      {/* Mobile vertical list */}
      <div
        className="flex md:hidden flex-col gap-5 px-4 sm:px-6 w-full"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <h3 className="text-2xl font-extrabold uppercase tracking-widest text-center mb-2">Projets</h3>
        {projects.map((project) => (
          <div
            key={project.num}
            className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-gray-900 shadow-lg"
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

    </section>
  );
}

export default Projects;