import {
  SiC, SiJavascript, SiPython, SiReact, SiDjango,
  SiLaravel, SiFlutter, SiDart, SiLinux, SiGit, SiPhp
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

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
    <section id="about" className="min-h-screen bg-white  px-20 pt-32">

      {/* Présentation */}
      <div className="mb-20">
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Passionné par <strong>Linux</strong> et la <strong>programmation système en C</strong>,
          je développe des applications web et mobiles tout en explorant l'univers du développement bas niveau.
        </p>
        <pre className="bg-gray-900  text-white text-sm p-4 rounded-lg leading-relaxed">
{`while (alive) {
    try {
        learn();
        build();
        innovate();
        share();
    } catch (failure) {
        learn_from_mistakes();
        retry();
    }
}`}
        </pre>
      </div>

      {/* Stack technique */}
      <div className="grid grid-cols-3 gap-8">
        {Object.entries(stack).map(([categorie, techs]) => (
          <div key={categorie} className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-sm tracking-widest uppercase mb-4 text-gray-500">{categorie}</h4>
            <div className="flex flex-wrap gap-3">
              {techs.map((tech) => (
                <div key={tech.name} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1 text-sm font-medium shadow-sm">
                  <span className="text-lg">{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default About;