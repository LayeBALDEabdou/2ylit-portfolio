import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import TitreSection from '../components/TitreSection';

function Contact() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statut, setStatut] = useState('');
  const [statutType, setStatutType] = useState('');
  const [loading, setLoading] = useState(false);

  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = () => {
    if (!nom || !email || !message) {
      setStatut('Veuillez remplir tous les champs.');
      setStatutType('error');
      return;
    }

    if (!isValidEmail(email)) {
      setStatut('Veuillez entrer un email valide.');
      setStatutType('error');
      return;
    }

    setLoading(true);
    setStatut('');

    emailjs.send(
      'service_l6lj7um',
      'template_kv6lgql',
      { nom, email, message },
      'zomioco6AdrbWYEie'
    )
      .then(() => {
        setStatut('Message envoyé avec succès !');
        setStatutType('success');
        setNom('');
        setEmail('');
        setMessage('');
      })
      .catch(() => {
        setStatut('Erreur lors de l\'envoi. Réessaie plus tard.');
        setStatutType('error');
      })
      .finally(() => setLoading(false));
  };

  const champ = "border-b-2 border-accent/20 py-3 text-corps text-encre outline-none focus:border-accent transition-colors duration-300 placeholder-discret bg-transparent rounded-none appearance-none";

  return (
    <section id="contact" className="px-6 sm:px-10 py-20 md:py-28 isolate">
      <TitreSection
        numero="03"
        commentaire="restons en contact"
        titre="Contact"
        sousTitre="Projet freelance, collaboration ou simple échange : écrivez-moi."
        className="max-w-2xl"
      />

      <div className="max-w-2xl mx-auto carte p-carte flex flex-col gap-7">
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-nom" className="surtitre">Nom</label>
          <input
            id="contact-nom"
            type="text"
            placeholder="Votre nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className={champ}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="contact-email" className="surtitre">Email</label>
          <input
            id="contact-email"
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={champ}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="contact-message" className="surtitre">Message</label>
          <textarea
            id="contact-message"
            rows={5}
            placeholder="Votre message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${champ} resize-none`}
          />
        </div>

        {statut && (
          <p className={statutType === 'success' ? 'text-green-600' : 'text-red-500'}>
            {statut}
          </p>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`self-start inline-flex items-center gap-2 text-lien font-medium border-b-2 pb-1 transition-all duration-200 ${loading ? 'text-discret border-discret cursor-not-allowed' : 'text-accent border-accent hover:gap-3'}`}
        >
          {loading ? 'Envoi en cours...' : <>Envoyer <FiArrowUpRight /></>}
        </button>
      </div>
    </section>
  );
}

export default Contact;
