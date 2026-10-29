/** @type {import('tailwindcss').Config} */

// Les valeurs se règlent dans src/styles/theme.css : ce fichier ne fait que
// les brancher sur Tailwind.
const couleur = (nom) => `rgb(var(--couleur-${nom}) / <alpha-value>)`;
const taille = (nom, interligne) => [`var(--taille-${nom})`, { lineHeight: interligne }];

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fond: couleur('fond'),
        carte: couleur('carte'),
        encre: couleur('encre'),
        texte: couleur('texte'),
        sourdine: couleur('sourdine'),
        discret: couleur('discret'),
        trait: couleur('trait'),
        accent: couleur('accent'),
        eclat: couleur('eclat'),
        profond: couleur('profond'),
      },
      fontFamily: {
        sans: 'var(--police)',
        mono: 'var(--police-code)',
      },
      fontSize: {
        hero: taille('hero', '1.15'),
        titre: taille('titre', '1.2'),
        'titre-carte': taille('titre-carte', '1.2'),
        menu: taille('menu', '1.1'),
        accroche: taille('accroche', '1.3'),
        'sous-titre': taille('sous-titre', '1.6'),
        corps: taille('corps', '1.65'),
        lien: taille('lien', '1.5'),
        petit: taille('petit', '1.5'),
        surtitre: taille('surtitre', '1.4'),
      },
      borderRadius: {
        carte: 'var(--carte-rayon)',
      },
      padding: {
        carte: 'var(--carte-padding)',
      },
    },
  },
  plugins: [],
}
