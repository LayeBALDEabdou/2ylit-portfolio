import { useRef, useEffect } from 'react';
import ram_monitor from './assets/ram_monitor1.jpeg'
import easyTol from './assets/easyTol1.jpeg'
import portfolio from './assets/portfolio.png'
import knyxis from './assets/knyxis.png'

const projects = [
  { num: '01', title: 'Portfolio', desc: 'React + Tailwind', img: portfolio },
  { num: '02', title: 'Ram_monitor', desc: 'C', img: ram_monitor },
  { num: '03', title: 'easyTol', desc: 'Alpine js + Django', img: easyTol },
  { num: '04', title: 'knyxis', desc: 'Electron', img: knyxis },
  { num: '05', title: 'enclos', desc: 'c', img: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400' },
];

function Projects() {
  const activeRef = useRef(2);
  const itemsRef = useRef([]);

  const animate = (active = activeRef.current) => {
    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      const diff = i - active;
      item.style.transform = `translateX(${diff * 340}px) scale(${diff === 0 ? 1.2 : 0.85})`;
      item.style.zIndex = diff === 0 ? 10 : 5 - Math.abs(diff);
      item.style.opacity = Math.abs(diff) > 2 ? 0 : diff === 0 ? 1 : 0.6;
    });
  };

  useEffect(() => { animate(); }, []);

  return (
    <section id="projects" className=" h-screen bg-white relative overflow-hidden flex items-center justify-center pt-24">

      {projects.map((project, i) => (
        <div
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
          onClick={() => { activeRef.current = i; animate(i); }}
          className="absolute w-80 h-[450px] rounded-xl overflow-hidden cursor-pointer bg-gray-900 shadow-2xl"
          style={{ transition: 'transform .6s cubic-bezier(0, 0.02, 0, 1), opacity .6s ease' }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

          {/* Image */}
          <img src={project.img} alt={project.title} className="w-full h-full object-cover pointer-events-none" />

          {/* Numéro */}
          <div className="absolute z-20 top-2 left-5 text-white font-extrabold opacity-80"
            style={{ fontSize: '70px' }}>
            {project.num}
          </div>

          {/* Titre */}
          <div className="absolute z-20 bottom-8 left-5 text-white font-bold uppercase tracking-widest text-xl">
            {project.title}
          </div>

          {/* Description */}
          <div className="absolute z-20 bottom-3 left-5 text-white/70 uppercase tracking-widest text-xs">
            {project.desc}
          </div>
        </div>
      ))}

    </section>
  );
}

export default Projects;