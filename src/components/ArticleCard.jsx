import { Link } from "react-router";

export default function ArticleCard({ article, estFavori, onBasculerFavori }) {
  const extrait = article.body.slice(0, 80) + "...";

  return (
    <article className="carte">
      <h3>
        <Link to={`/articles/${article.id}`}>{article.title}</Link>
      </h3>
      <p>{extrait}</p>
      <button
  className={estFavori ? "bouton-favori actif" : "bouton-favori"}
  onClick={() => onBasculerFavori(article)}
>
        {estFavori ? "Retirer des favoris" : "Ajouter aux favoris"}
      </button>
    </article>
  );
}