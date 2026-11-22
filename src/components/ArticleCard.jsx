// Carte d'un article.
// Props attendues : article (objet avec id, title, body), estFavori, onBasculerFavori.
export default function ArticleCard({ article, estFavori, onBasculerFavori }) {
  const extrait = article.body.slice(0, 80) + "...";

  return (
    <article className="carte">
      <h3>{article.title}</h3>
      <p>{extrait}</p>
      <button onClick={() => onBasculerFavori(article.id)}>
        {estFavori ? "Retirer des favoris" : "Ajouter aux favoris"}
      </button>
    </article>
  );
}