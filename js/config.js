// ============== CONFIGURATION FIREBASE ==============
const firebaseConfig = {
  apiKey: "AIzaSyBGKP7Z5PAgrCilt-e-8X5_8vqHGsUtWUA",
  authDomain: "reussir-code-senegal-70f3d.firebaseapp.com",
  projectId: "reussir-code-senegal-70f3d",
  storageBucket: "reussir-code-senegal-70f3d.firebasestorage.app",
  messagingSenderId: "443909357377",
  appId: "1:443909357377:web:08a65ba9081068fcde6bc0"
};

// Initialisation
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db   = firebase.firestore();

// Langue française pour les emails Firebase
auth.languageCode = 'fr';

// FIX: setPersistence SANS await au niveau global
// La persistence sera établie avant chaque opération dans auth.js
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .catch(function(err) {
    console.warn('Persistence auth non disponible (mode privé ?):', err.message);
  });
