// ============== GESTION AUTHENTIFICATION ==============

// Vérifier si utilisateur connecté au chargement
auth.onAuthStateChanged((user) => {
  if (window.location.pathname.includes('login.html')) {
    if (user && user.emailVerified) {
      // Utilisateur connecté et email vérifié → rediriger vers app
      window.location.href = 'index.html';
    }
  } else {
    // Sur index.html, vérifier connexion
    if (!user) {
      window.location.href = 'login.html';
    } else if (!user.emailVerified) {
      // Email non vérifié → déconnecter et rediriger
      auth.signOut();
      alert('Veuillez vérifier votre email avant de continuer.');
      window.location.href = 'login.html';
    }
  }
});

// ============== FONCTION CONNEXION ==============
async function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const btn = document.getElementById('loginBtn');
  
  // Désactiver bouton
  btn.disabled = true;
  btn.innerHTML = '<span class="loader"></span>Connexion...';
  hideAlerts();
  
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    
    // Vérifier email
    if (!user.emailVerified) {
      await auth.signOut();
      showError('❌ Veuillez vérifier votre email avant de vous connecter. Consultez votre boîte de réception.');
      btn.disabled = false;
      btn.textContent = 'Se connecter';
      return;
    }
    
    // Succès → redirection automatique via onAuthStateChanged
    showSuccess('✅ Connexion réussie !');
    
  } catch (error) {
    console.error('Erreur connexion:', error);
    let message = 'Erreur de connexion.';
    
    if (error.code === 'auth/user-not-found') {
      message = '❌ Aucun compte trouvé avec cet email.';
    } else if (error.code === 'auth/wrong-password') {
      message = '❌ Mot de passe incorrect.';
    } else if (error.code === 'auth/invalid-email') {
      message = '❌ Email invalide.';
    } else if (error.code === 'auth/too-many-requests') {
      message = '❌ Trop de tentatives. Réessayez dans quelques minutes.';
    }
    
    showError(message);
    btn.disabled = false;
    btn.textContent = 'Se connecter';
  }
}

// ============== FONCTION INSCRIPTION ==============
async function handleSignup(event) {
  event.preventDefault();
  
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupPasswordConfirm').value;
  const btn = document.getElementById('signupBtn');
  
  // Vérifier correspondance mots de passe
  if (password !== confirmPassword) {
    showError('❌ Les mots de passe ne correspondent pas.');
    return;
  }
  
  // Désactiver bouton
  btn.disabled = true;
  btn.innerHTML = '<span class="loader"></span>Création...';
  hideAlerts();
  
  try {
    // Créer compte Firebase Auth
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    
    // Envoyer email de vérification
    await user.sendEmailVerification({
      url: window.location.origin + '/login.html',
      handleCodeInApp: false
    });
    
    // Créer document Firestore (sera fait à la tâche 3)
    // Pour l'instant, juste afficher succès
    
    // Déconnecter l'utilisateur (doit vérifier email d'abord)
    await auth.signOut();
    
    showSuccess('✅ Compte créé ! Un email de vérification a été envoyé à ' + email + '. Consultez votre boîte de réception.');
    
    // Réinitialiser formulaire
    document.getElementById('signupForm').reset();
    
    // Revenir à l'onglet connexion après 3 secondes
    setTimeout(() => {
      switchTab('login');
    }, 3000);
    
    btn.disabled = false;
    btn.textContent = 'Créer mon compte';
    
  } catch (error) {
    console.error('Erreur inscription:', error);
    let message = 'Erreur lors de la création du compte.';
    
    if (error.code === 'auth/email-already-in-use') {
      message = '❌ Cet email est déjà utilisé. Essayez de vous connecter.';
    } else if (error.code === 'auth/invalid-email') {
      message = '❌ Email invalide.';
    } else if (error.code === 'auth/weak-password') {
      message = '❌ Mot de passe trop faible. Utilisez au moins 6 caractères.';
    }
    
    showError(message);
    btn.disabled = false;
    btn.textContent = 'Créer mon compte';
  }
}

// ============== FONCTION DÉCONNEXION ==============
async function handleLogout() {
  try {
    await auth.signOut();
    window.location.href = 'login.html';
  } catch (error) {
    console.error('Erreur déconnexion:', error);
    alert('Erreur lors de la déconnexion.');
  }
}

// ============== UTILITAIRES UI ==============
function switchTab(tab) {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const tabs = document.querySelectorAll('.auth-tab');
  
  hideAlerts();
  
  tabs.forEach(t => t.classList.remove('active'));
  
  if (tab === 'login') {
    tabs[0].classList.add('active');
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
  } else {
    tabs[1].classList.add('active');
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
  }
}

function showError(message) {
  const alert = document.getElementById('alertError');
  alert.textContent = message;
  alert.classList.add('show');
}

function showSuccess(message) {
  const alert = document.getElementById('alertSuccess');
  alert.textContent = message;
  alert.classList.add('show');
}

function hideAlerts() {
  document.getElementById('alertError').classList.remove('show');
  document.getElementById('alertSuccess').classList.remove('show');
}
