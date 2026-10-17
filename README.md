# fmpc-flashcards.github.io

Flashcards FMPC — Faculté de Médecine et de Pharmacie de Casablanca.
Préparation Internat / Résidanat : 384 sujets, 11 520 flashcards (30 par sujet).

## Disciplines

| Discipline | Sujets | Cartes |
|---|---|---|
| Anatomie | 34 | 1 020 |
| Biologie | 56 | 1 680 |
| Pathologie médicale | 129 | 3 870 |
| Pathologie chirurgicale | 40 | 1 200 |
| Urgences médicales | 80 | 2 400 |
| Urgences chirurgicales | 45 | 1 350 |
| **Total** | **384** | **11 520** |

Source : programme officiel FMPC « Guide de préparation des concours d'internat
et de résidanat, filière Médecine » (édition juin 2021) + polycopiés de cours.
Couverture des sujets vérifiée à 100 % contre le programme (voir
`hidden_files/source-pdfs/sujets-canonical.json`).

## Modèle

- Flashcards uniquement (pas de QCM).
- Une seule formule Pro : 100 DH, paiement unique, à vie.
- Parrainage : 15 DH par vente, retrait WhatsApp dès 30 DH.
- Comptes démo : 5 premières cartes par sujet.
- Fallback auth 8 s (les cartes s'affichent même si auth/Firestore tarde).

## Structure

- `index.json` — sommaire des 6 disciplines
- `disc-0.json` … `disc-5.json` — cartes par discipline
- `topics-index.json` — index plat des sujets (t0…t383)
- `plan.json` — plan de révision 32 semaines
- `firebase-config.js` — ⚠️ PLACEHOLDER : remplir avec les clés du projet
  Firebase `fmpc-flashcards` avant tout déploiement (voir DEPLOY.md).
- `firestore.rules` — règles Firestore (admin : anzajewls@gmail.com)
- `hidden_files/source-pdfs/` — PDFs sources + sujets canoniques (non déployés)

## Déploiement

Voir DEPLOY.md. Ne pas déployer tant que `firebase-config.js` est un placeholder.
