// Titre de section façon commentaire de code :
//   // 01. mes réalisations
//   Projets
//   Une sélection de projets...
function TitreSection({ numero, commentaire, titre, sousTitre, className = 'max-w-6xl' }) {
  return (
    <header className={`${className} mx-auto mb-12 md:mb-14`}>
      <p className="font-mono text-petit mb-3">
        <span className="text-eclat font-medium">// {numero}.</span>{' '}
        <span className="text-sourdine">{commentaire}</span>
      </p>
      <h2 className="titre-section">{titre}</h2>
      {sousTitre && <p className="sous-titre">{sousTitre}</p>}
    </header>
  );
}

export default TitreSection;
