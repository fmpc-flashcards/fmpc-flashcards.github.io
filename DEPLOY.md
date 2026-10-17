# FMPC Flashcards — Guide de mise en ligne

Site statique (GitHub Pages) + Firebase (Auth + Firestore).
Domaine : https://fmpc-flashcards.github.io/

```
fmpc-full/
├── index.html / home.html / discipline.html / topic.html / classement.html /
│   plan.html / profil.html / styles.css / js/ → l'application
├── firebase-config.js                 → config du projet fmpc-flashcards ⚠️ PLACEHOLDER
├── index.json + disc-0..5.json + topics-index.json + plan.json → données
├── icon-192.png / icon-512.png / manifest.json / sw.js → PWA + offline
├── fmpc-logo-circle.jpg / fmpc-logo-banner.jpg → logos (PLACEHOLDER — remplacer
│   par les vrais logos FMPC quand disponibles)
└── firestore.rules                    → règles de sécurité (à publier)
```

⚠️ Ne pas déployer `hidden_files/source-pdfs/` (PDFs sources, ~10 Mo).

## Étape 1 — Créer le projet Firebase

1. **console.firebase.google.com** → *Add project* → nomme-le `fmpc-flashcards`
   (désactive Google Analytics).
2. **Build → Authentication → Get started** → active **Google** et **Email/Password**.
3. **Project Overview → Add app → Web** → nomme-la `fmpc-web` → copie l'objet
   `firebaseConfig` dans `firebase-config.js` (remplace les valeurs REPLACE_WITH_*).
   Remplis aussi `GOOGLE_WEB_CLIENT_ID` avec l'ID client Web du projet.
4. **Build → Firestore Database → Create database** → *Start in production mode*,
   région `europe-west1` (comme FMPA/FMPT).
5. Onglet **Rules** → colle le contenu de **`firestore.rules`** → **Publish**.
6. **Authentication → Settings → Authorized domains** → ajoute
   `fmpc-flashcards.github.io`.

## Étape 2 — Créer le repo GitHub + déployer

1. Organisation GitHub `fmpc-flashcards` → repo `fmpc-flashcards.github.io`.
2. Pousse le contenu de `fmpc-full/` (sauf `hidden_files/`, `firestore.rules`)
   sur la branche `main`.
3. Vérifie https://fmpc-flashcards.github.io/ : connexion, démo 5 cartes/sujet,
   classement, plan, profil.

## Étape 3 — Admin

- Panneau admin : à créer sur le modèle FMPT (`fmpt-admin.pages.dev`) — Cloudflare
  Pages + worker de mint, mint uniquement du tier `full`.
- Codes d'activation : générateur privé (jamais en ligne).

## Checklist de test

- [ ] Créer un compte (Google + email) → arrive sur l'accueil
- [ ] Mode démo : 5 cartes/sujet, classement/plan verrouillés
- [ ] Code d'activation → Profil → Pro activé (toutes les cartes)
- [ ] Parrainage : lien, +15 DH par vente, retrait WhatsApp dès 30 DH
- [ ] Progression synchronisée entre appareils

## Notes

- **Coût : 0.** Firebase Spark (gratuit) + GitHub Pages (gratuit).
- **Offline** : service worker (cache `fmpc-v1`) ; Firestore garde la progression
  en local et synchronise au retour du réseau.
- **Logos** : les logos actuels sont des placeholders générés — remplacer par les
  vrais logos FMPC (mêmes noms de fichiers) dès qu'ils sont disponibles.
