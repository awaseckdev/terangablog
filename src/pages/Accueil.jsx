import { useState } from "react";
import ListeArticles from "../components/ListeArticles";
import BarreRecherche from "../components/BarreRecherche";
import { articlesDeTest } from "../donnees-test";

// TODO(P502) : Étape 5.
export default function Accueil() {
  const [favoris, setFavoris] = useState([]);
  const [recherche, setRecherche] = useState("");

const articlesFiltres = articlesDeTest.filter((article) =>
  article.title.toLowerCase().includes(recherche.toLowerCase())
);

  function basculerFavori(id) {
    setFavoris((f) =>
      f.includes(id) ? f.filter((x) => x !== id) : [...f, id]
    );
  }

  return (
   
    <section>
      <h1>Bienvenue sur Teranga Blog</h1>
      <p>{favoris.length} article(s) en favori</p>
      <BarreRecherche valeur={recherche} onChangement={setRecherche} />
      <ListeArticles
        articles={articlesFiltres}
        favoris={favoris}
        onBasculerFavori={basculerFavori}
      />
    
    </section>
  );
}