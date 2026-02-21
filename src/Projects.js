import { useRef, useEffect } from 'react';

const projects = [
  { num: '01', title: 'Projet Web', desc: 'Application React', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400' },
  { num: '02', title: 'Portfolio', desc: 'React + Tailwind', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400' },
  { num: '03', title: 'Mobile App', desc: 'Flutter + Dart', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400' },
  { num: '04', title: 'API Django', desc: 'Backend Python', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400' },
  { num: '05', title: 'Linux Tools', desc: 'Programmation C', img: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400' },
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
    <section id="projects" className="h-screen bg-white relative overflow-hidden flex items-center justify-center pt-24">

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