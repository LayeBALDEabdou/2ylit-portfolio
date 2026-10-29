import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const liensPages = [
  { href: '/#projects', label: 'Projets' },
  { href: '/#about', label: 'Stack' },
  { href: '/#contact', label: 'Contact' },
  { href: '/cv.pdf', label: 'Mon CV', external: true },
];

const reseaux = [
  { href: 'https://github.com/LayeBALDEabdou', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/abdoulaye-balde-708a75377/', label: 'LinkedIn' },
  { href: 'https://www.instagram.com/2ylite__/', label: 'Instagram' },
];

function Footer() {
  return (
    <footer className="bg-carte border-t border-trait px-6 sm:px-10 pt-14 md:pt-20 pb-8 mt-12 md:mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-16 pb-12 md:pb-16">
          <div>
            <p className="surtitre mb-4">Dites bonjour</p>
            <p className="text-encre text-accroche font-medium tracking-tight mb-5">
              Un projet en tête ? <span className="text-accent">Parlons-en.</span>
            </p>
            <a
              href="mailto:twoylit@gmail.com"
              className="lien-souligne"
            >
              twoylit@gmail.com <FiArrowUpRight />
            </a>
          </div>

          <div>
            <p className="surtitre mb-4">Navigation</p>
            <ul className="flex flex-col gap-2.5">
              {liensPages.map((lien) => (
                <li key={lien.label}>
                  {lien.external ? (
                    <a href={lien.href} target="_blank" rel="noreferrer" className="text-texte hover:text-accent transition-colors">
                      {lien.label}
                    </a>
                  ) : (
                    <Link to={lien.href} className="text-texte hover:text-accent transition-colors">
                      {lien.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="surtitre mb-4">Réseaux</p>
            <ul className="flex flex-col gap-2.5">
              {reseaux.map((r) => (
                <li key={r.label}>
                  <a href={r.href} target="_blank" rel="noreferrer" className="text-texte hover:text-accent transition-colors">
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-8 border-t border-trait text-petit text-sourdine">
          <p>© Abdoulaye Balde {new Date().getFullYear()}</p>
          <p>Dakar, Sénégal</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
