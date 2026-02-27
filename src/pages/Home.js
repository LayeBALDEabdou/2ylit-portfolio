import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clavier from '../assets/clavier.jpg';

const textes = [
  'Computer Scientist',
  'Junior Developer',
  'Web & Mobile Developer',
  'Linux & C Enthusiast',
  'Aspiring DevOps Engineer'
];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="h-screen h-screen-safe bg-white flex flex-col justify-start pt-16 md:pt-24">
      <div className="relative w-full h-full overflow-hidden">

        <img src={clavier} alt="Clavier d'ordinateur en arrière-plan" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

        <div className="relative z-10 h-full flex items-center px-6 sm:px-10 md:px-20">
          <div className="text-white border-l-4 border-white pl-4 sm:pl-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-widest uppercase">
              Abdoulaye <br />Balde
            </h1>

            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-base sm:text-lg md:text-2xl tracking-widest uppercase mt-3 md:mt-4"
              >
                {textes[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-8 right-4 sm:right-6 md:right-10 border-b-2 border-white text-white text-xs sm:text-sm tracking-widest uppercase hover:opacity-70 transition-all duration-300 active:opacity-50"
          >
            Voir mon CV →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Home;