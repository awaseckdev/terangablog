# Teranga Blog

Mini-blog multipage réalisé avec React 19, Vite et React Router pour le cours React (chapitres 0 à 5).

## Ce que fait l'application

- Navigation sans rechargement (barre avec logo, page courante mise en valeur)
- Liste d'articles avec recherche par titre
- Page de détail d'un article avec ses commentaires
- Formulaire de commentaire validé
- Favoris : bouton sur chaque article, compteur dans la barre, page dédiée
- Liste des auteurs et fiche de chacun avec ses articles
- Messages de chargement et d'erreur, page 404

Les données viennent de l'API JSONPlaceholder (textes en latin : ce sont des données d'essai).

## Lancer le projet

npm install
npm run dev

Puis ouvrir l'adresse affichée dans le terminal.

## Version en ligne

https://terangablog-2ozvtjimy-awa-seck.vercel.app

## Trois choses que j'ai apprises

1. AbortController empêche qu'une ancienne réponse remplace la nouvelle quand on change d'article.
2. Les favoris sont dans LayoutPrincipal pour être partagés entre les pages.
3. Ce qu'on lit dans l'adresse avec useParams est du texte.

