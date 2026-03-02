// ============== GESTION AUTHENTIFICATION ==============
// Variable pour stocker l'email non vérifié en attente
var pendingVerifyEmail = null;

// FIX: onAuthStateChanged uniquement pour la redirection automatique
// Ne pas interférer avec les actions en cours (login, signup, reset)
var authActionInProgress = false;

auth.onAuthStateChanged(function(user) {
    if (authActionInProgress) return; // Ignorer pendant une action

    if (window.location.pathname.includes('login.html') ||
        window.location.pathname === '/' ||
        window.location.pathname.endsWith('login.html')) {
        // Sur la page login : rediriger vers app si déjà connecté et vérifié
        if (user && user.emailVerified) {
            window.location.href = 'index.html';
        }
    }
    // Sur index.html, la vérification est gérée directement dans index.html
});

// ============== CONNEXION ==============
async function handleLogin(event) {
    event.preventDefault();

    var email = document.getElementById('loginEmail').value.trim();
    var password = document.getElementById('loginPassword').value;
    var btn = document.getElementById('loginBtn');

    btn.disabled = true;
    btn.innerHTML = '<span class="loader"></span>Connexion...';
    hideAlerts();
    authActionInProgress = true;

    try {
        var userCredential = await auth.signInWithEmailAndPassword(email, password);
        var user = userCredential.user;

        if (!user.emailVerified) {
            // FIX: ne pas déconnecter immédiatement, stocker pour renvoi possible
            pendingVerifyEmail = email;
            await auth.signOut();
            // Afficher le panneau de renvoi d'email
            showVerifyPanel(email);
            authActionInProgress = false;
            btn.disabled = false;
            btn.textContent = 'Se connecter';
            return;
        }

        // Succès
        showSuccess('✅ Connexion réussie ! Redirection...');
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 800);

    } catch (error) {
        authActionInProgress = false;
        console.error('Erreur connexion:', error);
        var message = '❌ Erreur de connexion. Vérifiez vos identifiants.';

        switch (error.code) {
            case 'auth/user-not-found':
                message = '❌ Aucun compte trouvé avec cet email. Inscrivez-vous d’abord.';
                break;
            case 'auth/wrong-password':
                message = '❌ Mot de passe incorrect.';
                break;
            // FIX: Firebase compat peut retourner ce code
            case 'auth/invalid-credential':
                message = '❌ Email ou mot de passe incorrect.';
                break;
            case 'auth/invalid-email':
                message = '❌ Adresse email invalide.';
                break;
            case 'auth/user-disabled':
                message = '❌ Ce compte a été désactivé. Contactez le support.';
                break;
            case 'auth/too-many-requests':
                message = '❌ Trop de tentatives échouées. Attendez quelques minutes ou réinitialisez votre mot de passe.';
                break;
            case 'auth/network-request-failed':
                message = '❌ Erreur réseau. Vérifiez votre connexion internet.';
                break;
        }

        showError(message);
        btn.disabled = false;
        btn.textContent = 'Se connecter';
    }
}

// ============== INSCRIPTION ==============
async function handleSignup(event) {
    event.preventDefault();

    var email = document.getElementById('signupEmail').value.trim();
    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('signupPasswordConfirm').value;
    var btn = document.getElementById('signupBtn');

    if (password !== confirmPassword) {
        showError('❌ Les mots de passe ne correspondent pas.');
        return;
    }

    btn.disabled = true;
    btn.innerHTML = '<span class="loader"></span>Création...';
    hideAlerts();
    authActionInProgress = true;

    try {
        var userCredential = await auth.createUserWithEmailAndPassword(email, password);
        var user = userCredential.user;

        // Envoyer email de vérification
        await user.sendEmailVerification({
            url: window.location.origin + '/login.html',
            handleCodeInApp: false
        });

        // Déconnecter (doit vérifier email d'abord)
        await auth.signOut();
        authActionInProgress = false;

        showSuccess('✅ Compte créé ! Un email de vérification a été envoyé à ' + email + '.\nCliquez sur le lien dans l’email puis connectez-vous.');
        document.getElementById('signupForm').reset();

        setTimeout(function() { switchTab('login'); }, 4000);

        btn.disabled = false;
        btn.textContent = 'Créer mon compte';

    } catch (error) {
        authActionInProgress = false;
        console.error('Erreur inscription:', error);
        var message = 'Erreur lors de la création du compte.';

        switch (error.code) {
            case 'auth/email-already-in-use':
                message = '❌ Cet email est déjà utilisé. <a href="#" onclick="switchTab(\'login\')">Connectez-vous</a> ou réinitialisez votre mot de passe.';
                break;
            case 'auth/invalid-email':
                message = '❌ Adresse email invalide.';
                break;
            case 'auth/weak-password':
                message = '❌ Mot de passe trop faible. Utilisez au moins 6 caractères.';
                break;
        }

        showError(message);
        btn.disabled = false;
        btn.textContent = 'Créer mon compte';
    }
}

// ============== RÉINITIALISATION MOT DE PASSE ==============
async function handlePasswordReset(event) {
    event.preventDefault();

    var email = document.getElementById('resetEmail').value.trim();
    var btn = document.getElementById('resetBtn');

    btn.disabled = true;
    btn.innerHTML = '<span class="loader"></span>Envoi en cours...';
    hideAlerts();
    authActionInProgress = true;

    try {
        await auth.sendPasswordResetEmail(email, {
            url: window.location.origin + '/login.html'
        });
        authActionInProgress = false;

        showSuccess('✅ Email envoyé ! Vérifiez votre boîte à l’adresse ' + email + '.\nCliquez sur le lien reçu pour choisir un nouveau mot de passe.');
        document.getElementById('resetEmail').value = '';
        btn.disabled = false;
        btn.textContent = '📧 Envoyer le lien';

    } catch (error) {
        authActionInProgress = false;
        console.error('Erreur reset password:', error);
        var message = '❌ Erreur lors de l’envoi.';

        switch (error.code) {
            case 'auth/user-not-found':
                message = '❌ Aucun compte associé à cet email.';
                break;
            case 'auth/invalid-email':
                message = '❌ Adresse email invalide.';
                break;
            case 'auth/too-many-requests':
                message = '❌ Trop de demandes. Attendez quelques minutes.';
                break;
        }

        showError(message);
        btn.disabled = false;
        btn.textContent = '📧 Envoyer le lien';
    }
}

// ============== RENVOI EMAIL VÉRIFICATION ==============
async function resendVerificationEmail() {
    var btn = document.getElementById('resendBtn');
    btn.disabled = true;
    btn.innerHTML = '<span class="loader"></span>Envoi...';
    hideAlerts();

    // On doit se reconnecter temporairement pour renvoyer l'email
    // (Firebase nécessite un user connecté pour sendEmailVerification)
    // On affiche un prompt discret pour récupérer le mot de passe
    var password = prompt('Entrez votre mot de passe pour renvoyer l’email de vérification :');
    if (!password) {
        btn.disabled = false;
        btn.textContent = '🔄 Renvoyer l’email de vérification';
        return;
    }

    authActionInProgress = true;
    try {
        var email = pendingVerifyEmail || document.getElementById('verifyEmailDisplay').textContent;
        var cred = await auth.signInWithEmailAndPassword(email, password);
        await cred.user.sendEmailVerification({
            url: window.location.origin + '/login.html',
            handleCodeInApp: false
        });
        await auth.signOut();
        authActionInProgress = false;

        showSuccess('✅ Email de vérification renvoyé à ' + email + ' ! Vérifiez votre boîte de réception.');
        btn.disabled = false;
        btn.textContent = '🔄 Renvoyer l’email de vérification';

    } catch (error) {
        authActionInProgress = false;
        showError('❌ Erreur : ' + (error.message || 'impossible de renvoyer l’email.'));
        btn.disabled = false;
        btn.textContent = '🔄 Renvoyer l’email de vérification';
    }
}

// ============== AFFICHER PANNEAU EMAIL NON VÉRIFIÉ ==============
function showVerifyPanel(email) {
    // Cacher les onglets et les formulaires
    document.getElementById('authTabs').style.display = 'none';
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('resetForm').classList.add('hidden');
    document.getElementById('verifyForm').classList.remove('hidden');
    document.getElementById('verifyEmailDisplay').textContent = email;
    showWarning('⚠️ Votre email n’est pas encore vérifié. Consultez votre boîte de réception.');
}

// ============== UTILITAIRES UI ==============
function switchTab(tab) {
    var loginForm = document.getElementById('loginForm');
    var signupForm = document.getElementById('signupForm');
    var resetForm = document.getElementById('resetForm');
    var verifyForm = document.getElementById('verifyForm');
    var tabs = document.getElementById('authTabs');

    hideAlerts();
    tabs.style.display = 'flex';
    loginForm.classList.add('hidden');
    signupForm.classList.add('hidden');
    resetForm.classList.add('hidden');
    verifyForm.classList.add('hidden');

    var btns = document.querySelectorAll('.auth-tab');
    btns.forEach(function(b) { b.classList.remove('active'); });

    if (tab === 'login') {
        btns[0].classList.add('active');
        loginForm.classList.remove('hidden');
    } else if (tab === 'signup') {
        btns[1].classList.add('active');
        signupForm.classList.remove('hidden');
    } else if (tab === 'reset') {
        // Cacher les onglets pour la réinitialisation
        tabs.style.display = 'none';
        resetForm.classList.remove('hidden');
    }
}

function showError(msg) {
    var el = document.getElementById('alertError');
    el.innerHTML = msg;
    el.classList.add('show');
}
function showSuccess(msg) {
    var el = document.getElementById('alertSuccess');
    el.textContent = msg;
    el.classList.add('show');
}
function showWarning(msg) {
    var el = document.getElementById('alertWarning');
    el.textContent = msg;
    el.classList.add('show');
}
function hideAlerts() {
    document.getElementById('alertError').classList.remove('show');
    document.getElementById('alertSuccess').classList.remove('show');
    document.getElementById('alertWarning').classList.remove('show');
}

// ============== DÉCONNEXION ==============
async function handleLogout() {
    try {
        await auth.signOut();
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Erreur déconnexion:', error);
    }
}
