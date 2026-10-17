// ============================================================================
//  FMPC Flashcards — configuration Firebase (projet dédié)
//  Projet : fmpc-flashcards-app | Compte : anzajewls@gmail.com
//  Créé le 2026-10-17. Auth Email/Password + Google activés, Firestore europe-west1.
//  NOTE: le projet s'appelle fmpc-flashcards-app (fmpc-flashcards a été pris
//  par un projet parasite créé par erreur sous l'autre compte — à supprimer).
// ============================================================================
export const firebaseConfig = {
  apiKey: "AIzaSyC0qaxGjyMSolZ1h17m5w3OJ2GMldPISK0",
  authDomain: "fmpc-flashcards-app.firebaseapp.com",
  projectId: "fmpc-flashcards-app",
  storageBucket: "fmpc-flashcards-app.firebasestorage.app",
  messagingSenderId: "626315239545",
  appId: "1:626315239545:web:990071edf9b3a7c355b4a8"
};

// Email de l'administrateur — seul cet email peut générer des codes.
// DOIT correspondre à la valeur isAdmin() dans firestore.rules
export const ADMIN_EMAIL = "anzajewls@gmail.com";

// Google OAuth — identifiant client Web (Cloud Console → API et services → Identifiants).
// TODO: remplir avec le client OAuth Web du projet fmpc-flashcards-app.
// Nécessaire pour le Google Sign-In natif de l'APK unifiée ; le web (popup) marche sans.
export const GOOGLE_WEB_CLIENT_ID = "TODO_FMPC_GOOGLE_WEB_CLIENT_ID";
