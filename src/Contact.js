import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-white flex items-center justify-center px-20 pt-24 pb-16">
      <div className="w-full max-w-5xl flex gap-20">

        {/* Côté gauche - Texte + Réseaux */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-6xl font-extrabold uppercase tracking-widest mb-4">
            Contactez <br /> moi
          </h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-10">
            Dakar, Sénégal
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Disponible pour des projets freelance, des collaborations ou simplement pour échanger. N'hésitez pas à me contacter !
          </p>

          {/* Réseaux sociaux */}
          <div className="flex gap-4">
            <a href="https://github.com/LayeBALDEabdou" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 border border-black px-5 py-3 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              <FaGithub size={18} /> Github
            </a>
            <a href="https://www.linkedin.com/in/abdoulaye-balde-708a75377/" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 border border-black px-5 py-3 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              <FaLinkedin size={18} /> LinkedIn
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 border border-black px-5 py-3 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              <FaInstagram size={18} /> Instagram
            </a>
          </div>
        </div>

        {/* Côté droit - Formulaire */}
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="border-b border-gray-300 py-3 text-sm outline-none focus:border-black transition-all duration-300 placeholder-gray-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
              <input
                type="email"
                placeholder="Votre email"
                className="border-b border-gray-300 py-3 text-sm outline-none focus:border-black transition-all duration-300 placeholder-gray-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
              <textarea
                rows={5}
                placeholder="Votre message..."
                className="border-b border-gray-300 py-3 text-sm outline-none focus:border-black transition-all duration-300 placeholder-gray-300 resize-none"
              />
            </div>

            <button className="mt-4 bg-black text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300">
              Envoyer →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;