// ============== CONFIGURATION FIREBASE ==============
const firebaseConfig = {
  apiKey: "AIzaSyBGKP7Z5PAgrCilt-e-8X5_8vqHGsUtWUA",

  authDomain: "reussir-code-senegal-70f3d.firebaseapp.com",

  projectId: "reussir-code-senegal-70f3d",

  storageBucket: "reussir-code-senegal-70f3d.firebasestorage.app",

  messagingSenderId: "443909357377",

  appId: "1:443909357377:web:08a65ba9081068fcde6bc0",

};

// Initialisation Firebase
firebase.initializeApp(firebaseConfig);

// Exports
const auth = firebase.auth();
const db = firebase.firestore();

// Configuration locale (français)
auth.languageCode = 'fr';

// Activation persistence
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .catch((error) => {
    console.error("Erreur persistence:", error);
  });
