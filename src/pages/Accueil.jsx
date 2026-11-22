import { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { articlesDeTest } from "../donnees-test";

// TODO(P502) : Étape 5.
export default function Accueil() {
  const [favoris, setFavoris] = useState([]);

  function basculerFavori(id) {
    setFavoris((f) =>
      f.includes(id) ? f.filter((x) => x !== id) : [...f, id]
    );
  }

  return (
    <section>
      <h1>Bienvenue sur Teranga Blog</h1>
      <p>{favoris.length} article(s) en favori</p>
      <ArticleCard
        article={articlesDeTest[0]}
        estFavori={favoris.includes(articlesDeTest[0].id)}
        onBasculerFavori={basculerFavori}
      />
      <ArticleCard
        article={articlesDeTest[1]}
        estFavori={favoris.includes(articlesDeTest[1].id)}
        onBasculerFavori={basculerFavori}
      />
      <ArticleCard
        article={articlesDeTest[2]}
        estFavori={favoris.includes(articlesDeTest[2].id)}
        onBasculerFavori={basculerFavori}
      />
    </section>
  );
}