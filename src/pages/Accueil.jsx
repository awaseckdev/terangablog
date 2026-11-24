// Page d'accueil : présentation et les derniers articles.
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { API_URL } from "../constants";
import EtatRequete from "../components/EtatRequete";
import ListeArticles from "../components/ListeArticles";

export default function Accueil() {
  const { favoris, basculerFavori } = useOutletContext();
  const [articles, setArticles] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controleur = new AbortController();

    async function charger() {
      try {
        setChargement(true);
        setErreur(null);
        const reponse = await fetch(`${API_URL}/posts?_limit=3`, {
          signal: controleur.signal,
        });
        if (!reponse.ok) {
          throw new Error("code " + reponse.status);
        }
        setArticles(await reponse.json());
        setChargement(false);
      } catch (e) {
        if (e.name === "AbortError") return;
        setErreur("Impossible de charger les articles (" + e.message + ").");
        setChargement(false);
      }
    }

    charger();

    return () => controleur.abort();
  }, []);

  return (
    <section>
      <h1>Bienvenue sur Teranga Blog</h1>
      <p>Le blog de Teranga Academy : lisez, commentez et gardez vos articles préférés.</p>
      <h2>Derniers articles</h2>
      <EtatRequete chargement={chargement} erreur={erreur}>
        <ListeArticles
          articles={articles}
          favoris={favoris}
          onBasculerFavori={basculerFavori}
        />
      </EtatRequete>
    </section>
  );
}