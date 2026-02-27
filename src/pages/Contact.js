import { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statut, setStatut] = useState('');

  const handleSubmit = () => {
    if (!nom || !email || !message) {
      setStatut('Veuillez remplir tous les champs.');
      return;
    }

    emailjs.send(
      'service_l6lj7um',
      'template_kv6lgql',
      { nom, email, message },
      'zomioco6AdrbWYEie'
    )
      .then(() => {
        setStatut('Message envoyé avec succès !');
        setNom('');
        setEmail('');
        setMessage('');
      })
      .catch(() => setStatut('Erreur, réessaie plus tard.'));
  };

  return (
    <section id="contact" className="min-h-screen bg-white flex items-center justify-center px-6 sm:px-10 md:px-20 pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 md:gap-20">

        {/* Côté gauche */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-widest mb-4">
            Contactez <br />moi
          </h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-6 md:mb-10">
            Dakar, Sénégal
          </p>
          <p className="text-gray-600 leading-relaxed mb-6 md:mb-10 text-sm md:text-base">
            Disponible pour des projets freelance, des collaborations ou simplement pour échanger. N'hésitez pas à me contacter !
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <a href="https://github.com/LayeBALDEabdou" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 border border-black px-4 md:px-5 py-2.5 md:py-3 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              <FaGithub size={16} /> Github
            </a>
            <a href="https://www.linkedin.com/in/abdoulaye-balde-708a75377/" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 border border-black px-4 md:px-5 py-2.5 md:py-3 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <a href="https://www.instagram.com/2ylite__/" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 border border-black px-4 md:px-5 py-2.5 md:py-3 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              <FaInstagram size={16} /> Instagram
            </a>
          </div>
        </div>

        {/* Côté droit - Formulaire */}
        <div className="flex-1">
          <div className="flex flex-col gap-5 md:gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="contact-nom" className="text-xs font-bold uppercase tracking-widest text-gray-500">Nom</label>
              <input
                id="contact-nom"
                type="text"
                placeholder="Votre nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="border-b border-gray-300 py-3 text-sm outline-none focus:border-black transition-all duration-300 placeholder-gray-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
              <input
                id="contact-email"
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b border-gray-300 py-3 text-sm outline-none focus:border-black transition-all duration-300 placeholder-gray-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Votre message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-b border-gray-300 py-3 text-sm outline-none focus:border-black transition-all duration-300 placeholder-gray-300 resize-none"
              />
            </div>

            {statut && (
              <p className="text-sm tracking-widest uppercase text-gray-500">{statut}</p>
            )}

            <button
              onClick={handleSubmit}
              className="mt-2 md:mt-4 bg-black text-white py-3.5 md:py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300"
            >
              Envoyer →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;