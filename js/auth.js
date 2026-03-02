// ============== AUTH.JS ==============
// Variables d'état
var _pendingEmail    = null;   // email en attente de vérification
var _pendingPassword = null;   // mdp temporaire pour renvoi email
var _redirecting     = false;  // verrou redirection

// -----------------------------------------------
// FIX PRINCIPAL : onAuthStateChanged UNIQUEMENT
// pour la redirection automatique (pas d'action
// en cours). On utilise un flag _redirecting.
// -----------------------------------------------
auth.onAuthStateChanged(function(user) {
    if (_redirecting) return;

    var isLoginPage = window.location.pathname.includes('login.html')
        || window.location.pathname === '/'
        || window.location.pathname.endsWith('/');

    if (isLoginPage) {
        // Déjà connecté + email vérifié → aller à l'app
        if (user && user.emailVerified) {
            _redirecting = true;
            window.location.href = 'index.html';
        }
    }
    // Note: la protection de index.html est gérée dans index.html lui-même
});

// ================================================
// CONNEXION
// ================================================
async function handleLogin(event) {
    event.preventDefault();
    _redirecting = true; // bloquer le listener pendant l'opération

    var email    = document.getElementById('loginEmail').value.trim();
    var password = document.getElementById('loginPassword').value;
    var btn      = document.getElementById('loginBtn');

    setLoading(btn, true, 'Connexion...');
    hideAlerts();

    try {
        // S'assurer que la persistence est prête avant de se connecter
        await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

        var cred = await auth.signInWithEmailAndPassword(email, password);
        var user = cred.user;

        // Recharger le profil pour avoir l'état emailVerified à jour
        await user.reload();
        user = auth.currentUser;

        if (!user.emailVerified) {
            _pendingEmail    = email;
            _pendingPassword = password;
            await auth.signOut();
            _redirecting = false;
            showVerifyPanel(email);
            setLoading(btn, false, 'Se connecter');
            return;
        }

        // ✔ Connecté et vérifié
        showSuccess('✅ Connexion réussie ! Redirection...');
        setTimeout(function() {
            window.location.replace('index.html');
        }, 1200);

    } catch (err) {
        _redirecting = false;
        console.error('[Login]', err.code, err.message);
        setLoading(btn, false, 'Se connecter');
        showError(loginErrorMessage(err.code));
    }
}

function loginErrorMessage(code) {
    switch (code) {
        // Codes Firebase Auth compat (tous les cas)
        case 'auth/user-not-found':
            return '❌ Aucun compte trouvé avec cet email. Vérifiez l’adresse ou inscrivez-vous.';
        case 'auth/wrong-password':
            return '❌ Mot de passe incorrect. Vérifiez votre saisie ou réinitialisez votre mot de passe.';
        // FIX: Firebase retourne ce code depuis mi-2023 pour user-not-found + wrong-password
        case 'auth/invalid-credential':
        case 'auth/invalid-login-credentials':
            return '❌ Email ou mot de passe incorrect. Vérifiez vos identifiants ou réinitialisez votre mot de passe.';
        case 'auth/invalid-email':
            return '❌ Format d’email invalide.';
        case 'auth/user-disabled':
            return '❌ Ce compte a été désactivé. Contactez le support.';
        case 'auth/too-many-requests':
            return '❌ Trop de tentatives. Compte temporairement bloqué. Attendez ou réinitialisez votre mot de passe.';
        case 'auth/network-request-failed':
            return '❌ Erreur réseau. Vérifiez votre connexion internet.';
        case 'auth/operation-not-allowed':
            return '❌ La connexion par email/mot de passe est désactivée dans Firebase. Contactez l’administrateur.';
        default:
            return '❌ Erreur de connexion (' + (code || 'inconnue') + '). Réessayez.';
    }
}

// ================================================
// INSCRIPTION
// ================================================
async function handleSignup(event) {
    event.preventDefault();
    _redirecting = true;

    var email    = document.getElementById('signupEmail').value.trim();
    var password = document.getElementById('signupPassword').value;
    var confirm  = document.getElementById('signupConfirm').value;
    var btn      = document.getElementById('signupBtn');

    if (password !== confirm) {
        _redirecting = false;
        showError('❌ Les mots de passe ne correspondent pas.');
        return;
    }

    setLoading(btn, true, 'Création...');
    hideAlerts();

    try {
        var cred = await auth.createUserWithEmailAndPassword(email, password);
        var user = cred.user;

        await user.sendEmailVerification({
            url: window.location.origin + '/login.html'
        });

        await auth.signOut();
        _redirecting = false;

        showSuccess('✅ Compte créé ! Un email de confirmation a été envoyé à ' + email + '. Cliquez sur le lien reçu puis connectez-vous.');
        document.getElementById('signupForm').reset();
        setTimeout(function() { switchTab('login'); }, 4500);
        setLoading(btn, false, 'Créer mon compte');

    } catch (err) {
        _redirecting = false;
        console.error('[Signup]', err.code, err.message);
        var msg = '❌ Erreur lors de la création du compte.';
        if (err.code === 'auth/email-already-in-use') {
            msg = '❌ Cet email est déjà utilisé. <a href="#" onclick="switchTab(\'login\')">Connectez-vous</a> ou réinitialisez votre mot de passe.';
        } else if (err.code === 'auth/invalid-email')  { msg = '❌ Email invalide.'; }
          else if (err.code === 'auth/weak-password')  { msg = '❌ Mot de passe trop faible (min. 6 caractères).'; }
        showError(msg);
        setLoading(btn, false, 'Créer mon compte');
    }
}

// ================================================
// RÉINITIALISATION MOT DE PASSE
// ================================================
async function handlePasswordReset(event) {
    event.preventDefault();
    _redirecting = true;

    var email = document.getElementById('resetEmail').value.trim();
    var btn   = document.getElementById('resetBtn');

    setLoading(btn, true, 'Envoi en cours...');
    hideAlerts();

    try {
        await auth.sendPasswordResetEmail(email, {
            url: window.location.origin + '/login.html'
        });
        _redirecting = false;

        showSuccess(
            '✅ Email envoyé ! Consultez la boîte ' + email + ' (vérifiez aussi les spams).\n' +
            'Cliquez sur le lien pour choisir un nouveau mot de passe.'
        );
        document.getElementById('resetEmail').value = '';
        setLoading(btn, false, '📧 Envoyer le lien de réinitialisation');

    } catch (err) {
        _redirecting = false;
        console.error('[Reset]', err.code, err.message);
        var msg = '❌ Erreur lors de l’envoi.';
        if (err.code === 'auth/user-not-found')  { msg = '❌ Aucun compte associé à cet email.'; }
        else if (err.code === 'auth/invalid-email') { msg = '❌ Email invalide.'; }
        else if (err.code === 'auth/too-many-requests') { msg = '❌ Trop de demandes. Attendez quelques minutes.'; }
        showError(msg);
        setLoading(btn, false, '📧 Envoyer le lien de réinitialisation');
    }
}

// ================================================
// RENVOI EMAIL DE VÉRIFICATION
// ================================================
async function resendVerification() {
    var btn = document.getElementById('resendBtn');
    setLoading(btn, true, 'Envoi...');
    hideAlerts();
    _redirecting = true;

    try {
        // Reconnexion temporaire pour pouvoir appeler sendEmailVerification
        var email    = _pendingEmail;
        var password = _pendingPassword;

        if (!email || !password) {
            // Demander le mot de passe si on n'a pas les credentials
            password = window.prompt('Entrez votre mot de passe pour renvoyer l’email :');
            if (!password) {
                _redirecting = false;
                setLoading(btn, false, '🔄 Renvoyer l’email de confirmation');
                return;
            }
            email = document.getElementById('verifyEmailDisplay').textContent;
        }

        var cred = await auth.signInWithEmailAndPassword(email, password);
        await cred.user.sendEmailVerification({
            url: window.location.origin + '/login.html'
        });
        await auth.signOut();
        _redirecting = false;

        showSuccess('✅ Email renvoyé à ' + email + ' ! Cliquez sur le lien dans le mail.');
        setLoading(btn, false, '🔄 Renvoyer l’email de confirmation');

    } catch (err) {
        _redirecting = false;
        console.error('[Resend]', err.code, err.message);
        showError('❌ Impossible de renvoyer : ' + (err.message || err.code));
        setLoading(btn, false, '🔄 Renvoyer l’email de confirmation');
    }
}

// ================================================
// PANNEAU EMAIL NON VÉRIFIÉ
// ================================================
function showVerifyPanel(email) {
    document.getElementById('authTabs').style.display        = 'none';
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('resetPanel').classList.add('hidden');
    document.getElementById('verifyPanel').classList.remove('hidden');
    document.getElementById('verifyEmailDisplay').textContent = email;
    showWarning('⚠️ Email non vérifié. Consultez votre boîte de réception.');
}

// ================================================
// NAVIGATION ENTRE ONGLETS / PANNEAUX
// ================================================
function switchTab(tab) {
    hideAlerts();
    // Tout cacher
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('resetPanel').classList.add('hidden');
    document.getElementById('verifyPanel').classList.add('hidden');
    var tabs = document.getElementById('authTabs');
    tabs.style.display = 'flex';
    document.querySelectorAll('.auth-tab').forEach(function(b) { b.classList.remove('active'); });

    if (tab === 'login') {
        document.querySelectorAll('.auth-tab')[0].classList.add('active');
        document.getElementById('loginForm').classList.remove('hidden');
    } else if (tab === 'signup') {
        document.querySelectorAll('.auth-tab')[1].classList.add('active');
        document.getElementById('signupForm').classList.remove('hidden');
    } else if (tab === 'reset') {
        tabs.style.display = 'none'; // cacher les onglets
        document.getElementById('resetPanel').classList.remove('hidden');
    }
}

// ================================================
// DÉCONNEXION
// ================================================
async function handleLogout() {
    _redirecting = true;
    try {
        await auth.signOut();
        window.location.replace('login.html');
    } catch (err) {
        _redirecting = false;
        console.error('[Logout]', err);
    }
}

// ================================================
// HELPERS UI
// ================================================
function setLoading(btn, loading, text) {
    if (loading) {
        btn.disabled = true;
        btn.innerHTML = '<span class="loader"></span>' + text;
    } else {
        btn.disabled = false;
        btn.textContent = text;
    }
}
function showError(msg) {
    var el = document.getElementById('alertError');
    el.innerHTML = msg; el.classList.add('show');
}
function showSuccess(msg) {
    var el = document.getElementById('alertSuccess');
    el.textContent = msg; el.classList.add('show');
}
function showWarning(msg) {
    var el = document.getElementById('alertWarning');
    el.textContent = msg; el.classList.add('show');
}
function showInfo(msg) {
    var el = document.getElementById('alertInfo');
    el.textContent = msg; el.classList.add('show');
}
function hideAlerts() {
    ['alertError','alertSuccess','alertWarning','alertInfo'].forEach(function(id) {
        document.getElementById(id).classList.remove('show');
    });
}
