import { useState } from 'react';
import { FaGlobe, FaGithub, FaLinkedin, FaInstagram, FaTimes } from 'react-icons/fa';

function SocialBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
      
      <button
        onClick={() => setOpen(!open)}
        className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300"
      >
        {open ? <FaTimes size={18} /> : <FaGlobe size={18} />}
      </button>

      <div className={`flex flex-col items-center gap-3 transition-all duration-300 overflow-hidden ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <a href="https://github.com/LayeBALDEabdou/" target="_blank" rel="noreferrer"
          className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300">
          <FaGithub size={18} />
        </a>
        <a href="https://www.linkedin.com/in/abdoulaye-balde-708a75377/" target="_blank" rel="noreferrer"
          className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
          <FaLinkedin size={18} />
        </a>
        <a href="https://www.instagram.com/2ylite__/" target="_blank" rel="noreferrer"
          className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300">
          <FaInstagram size={18} />
        </a>
      </div>

    </div>
  );
}

export default SocialBar;