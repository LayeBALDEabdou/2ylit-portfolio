import portfolio from '../assets/projet-portfolio.webp'
import ram_monitor from '../assets/projet-ram-monitor.webp'
import easyTol from '../assets/projet-easytol.webp'
import knyxis from '../assets/projet-knyxis.webp'
import enclos from '../assets/projet-enclos.webp'

// slug : utilisé dans l'adresse de la page (/projets/<slug>)
const projects = [
  {
    slug: 'portfolio',
    title: 'Portfolio',
    desc: 'React + Tailwind',
    img: portfolio,
    details: "Mon site portfolio personnel construit avec React et Tailwind CSS. Design responsive, animations fluides et formulaire de contact fonctionnel.",
    techs: ['React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    github: 'https://github.com/LayeBALDEabdou/2ylit-portfolio',
    live: '',
  },
  {
    slug: 'ram-monitor',
    title: 'Ram_monitor',
    desc: 'C',
    img: ram_monitor,
    details: "Un outil de monitoring de la mémoire RAM en temps réel, développé en C. Permet de visualiser l'utilisation mémoire du système.",
    techs: ['C', 'Linux', 'System Programming'],
    github: 'https://github.com/LayeBALDEabdou/',
    live: '',
  },
  {
    slug: 'easytol',
    title: 'easyTol',
    desc: 'Alpine js + Django',
    img: easyTol,
    details: "Application web full-stack avec un backend Django et un frontend dynamique utilisant Alpine.js pour une expérience utilisateur réactive.",
    techs: ['Django', 'Alpine.js', 'Python', 'HTML/CSS'],
    github: 'https://github.com/LayeBALDEabdou/',
    live: '',
  },
  {
    slug: 'knyxis',
    title: 'knyxis',
    desc: 'Electron',
    img: knyxis,
    details: "Application desktop développée avec Electron. Interface moderne et fonctionnalités natives du système.",
    techs: ['Electron', 'JavaScript', 'Node.js'],
    github: 'https://github.com/LayeBALDEabdou/',
    live: '',
  },
  {
    slug: 'enclos',
    title: 'enclos',
    desc: 'C',
    img: enclos,
    details: "Projet système en C explorant les concepts de gestion mémoire et de programmation bas niveau sous Linux.",
    techs: ['C', 'Linux', 'Makefile'],
    github: 'https://github.com/LayeBALDEabdou/',
    live: '',
  },
];

export default projects;
