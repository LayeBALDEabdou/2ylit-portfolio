import {
  SiC, SiJavascript, SiPython, SiReact, SiDjango,
  SiLaravel, SiFlutter, SiDart, SiLinux, SiGit, SiPhp
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import TitreSection from '../components/TitreSection';

const stack = {
  'Systèmes & Programmation': [
    { icon: <SiC />, name: 'C' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <SiLinux />, name: 'Linux' },
    { icon: <SiGit />, name: 'Git' },
  ],
  'Développement Web': [
    { icon: <SiReact />, name: 'React' },
    { icon: <SiDjango />, name: 'Django' },
    { icon: <SiLaravel />, name: 'Laravel' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <SiPython />, name: 'Python' },
    { icon: <SiPhp />, name: 'PHP' },
  ],
  'Développement Mobile': [
    { icon: <SiFlutter />, name: 'Flutter' },
    { icon: <SiDart />, name: 'Dart' },
  ],
};

function About() {
  return (
    <section id="about" className="px-6 sm:px-10 py-20 md:py-28 isolate">
      <TitreSection
        numero="02"
        commentaire="mes outils"
        titre="Stack"
        sousTitre="Les outils avec lesquels je travaille au quotidien."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(stack).map(([categorie, techs]) => (
          <div key={categorie} className="carte p-carte">
            <h3 className="text-encre font-semibold mb-6">{categorie}</h3>
            <ul className="flex flex-col gap-3">
              {techs.map((tech) => (
                <li key={tech.name} className="flex items-center gap-3 text-accent">
                  <span className="text-lg">{tech.icon}</span>
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
