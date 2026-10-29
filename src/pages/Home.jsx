import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import moi from '../assets/moi.webp';

const paragraphes = [
  "Étudiant en Licence Informatique, spécialisé en génie logiciel, je construis des applications web et mobiles avec React, Django, Laravel et Flutter.",
  "Ce qui me passionne vraiment, c'est ce qui se passe sous le capot : Linux, la programmation système en C, la gestion de la mémoire. J'aime comprendre comment les choses fonctionnent avant de les assembler.",
  "Aujourd'hui, je me dirige vers le DevOps : automatiser, déployer et faire tourner des systèmes fiables, du code jusqu'à la production.",
];

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 sm:px-10 pt-32 pb-20">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-center">
      <div className="order-2 lg:order-1">
        <p className="surtitre flex items-center gap-3 text-petit text-texte mb-5">
          <span className="h-[2px] w-8 bg-eclat" aria-hidden="true" />
          Salut, je suis Abdoulaye Balde
        </p>

        <h1 className="text-encre max-w-3xl text-hero font-medium tracking-tight mb-8 md:mb-10">
          Un développeur logiciel{' '}
          <span className="text-accent">passionné par Linux, le C et le web.</span>
        </h1>

        <div className="max-w-2xl flex flex-col gap-5 text-texte text-corps">
          {paragraphes.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <Link
          to="/#contact"
          className="lien-souligne mt-10"
        >
          Contactez-moi <FiArrowUpRight />
        </Link>
      </div>

      <figure
        className="order-1 lg:order-2 relative w-40 sm:w-52 lg:w-full select-none"
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="absolute inset-0 translate-x-3 translate-y-3 lg:translate-x-5 lg:translate-y-5 border-2 border-eclat" aria-hidden="true" />
        <img
          src={moi}
          alt="Portrait d'Abdoulaye Balde"
          width="640"
          height="800"
          fetchPriority="high"
          draggable="false"
          className="relative w-full aspect-[4/5] object-cover pointer-events-none"
        />
        <div className="absolute inset-0" aria-hidden="true" />
      </figure>
      </div>
    </section>
  );
}

export default Home;
