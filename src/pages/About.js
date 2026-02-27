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

const codeLines = [
  { num: 1, code: 'while (alive) {' },
  { num: 2, code: '\u00a0\u00a0try {' },
  { num: 3, code: '\u00a0\u00a0\u00a0\u00a0learn();' },
  { num: 4, code: '\u00a0\u00a0\u00a0\u00a0build();' },
  { num: 5, code: '\u00a0\u00a0\u00a0\u00a0innovate();' },
  { num: 6, code: '\u00a0\u00a0\u00a0\u00a0share();' },
  { num: 7, code: '\u00a0\u00a0} catch (failure) {' },
  { num: 8, code: '\u00a0\u00a0\u00a0\u00a0learn_from_mistakes();' },
  { num: 9, code: '\u00a0\u00a0\u00a0\u00a0retry();' },
  { num: 10, code: '\u00a0\u00a0}' },
  { num: 11, code: '}' },
];

const infos = [
  { label: 'Formation', value: 'Licence Informatique' },
  { label: 'Spécialité', value: 'Génie logiciel' },
  { label: 'Email', value: 'twoylit@gmail.com' },
];

function About() {
  return (
    <section id="about" className="min-h-screen bg-white px-6 sm:px-10 md:px-20 pt-24 md:pt-32 pb-16 md:pb-24">

      {/* Texte + Stats */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center mb-12">
        <p className="text-gray-600 leading-relaxed text-base md:text-lg flex-1">
          Passionné par <strong>Linux</strong> et la <strong>programmation système en C</strong>,
          je développe des applications web et mobiles tout en explorant l'univers du développement bas niveau.
        </p>
        <div className="flex gap-8 md:gap-12">
          {[
            { num: '5+', label: 'Projets réalisés' },
            { num: '3+', label: 'Langages maîtrisés' },
          ].map((stat) => (
            <div key={stat.label} className="border-l-2 border-black pl-4">
              <div className="text-3xl md:text-4xl font-extrabold">{stat.num}</div>
              <div className="text-xs uppercase tracking-widest text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal */}
      <div className="rounded-xl overflow-hidden mb-12">
        <div className="bg-gray-200 px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-400" />
          <div className="w-3 h-3 rounded-full bg-gray-500" />
          <div className="w-3 h-3 rounded-full bg-gray-600" />
          <span className="ml-4 text-gray-500 text-xs tracking-widest hidden sm:inline">~/portfolio/abdoulaye.js</span>
        </div>

        <div className="bg-black flex flex-col md:flex-row">
          <div className="flex-1 p-6 md:p-8 md:border-r border-b md:border-b-0 border-gray-700 flex flex-col justify-center gap-4 md:gap-5">
            {infos.map((info) => (
              <div key={info.label}>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{info.label}</p>
                <p className="text-white font-bold text-sm md:text-base">{info.value}</p>
              </div>
            ))}
          </div>

          <div className="flex-1 p-4 md:p-6 font-mono text-xs md:text-sm leading-loose">
            {codeLines.map((line) => (
              <div key={line.num} className="flex gap-4 md:gap-6">
                <span className="text-gray-600 select-none w-5 text-right">{line.num}</span>
                <span className="text-white whitespace-pre">{line.code}</span>
              </div>
            ))}
            <div className="flex gap-4 md:gap-6 mt-1">
              <span className="text-gray-600 select-none w-5 text-right">12</span>
              <span className="text-white">█</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stack */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(stack).map(([categorie, techs]) => (
          <div key={categorie} className="border border-gray-100 rounded-2xl p-5 md:p-6">
            <h4 className="font-bold text-xs tracking-widest uppercase mb-4 text-gray-400">{categorie}</h4>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <div key={tech.name} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1 text-sm font-medium cursor-default">
                  <span className="text-base">{tech.icon}</span>
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