// ============== AUTH.JS ==============
// Variables d'état
var _pendingEmail    = null;
var _pendingPassword = null;
var _redirecting     = false;

// UID administrateur
var ADMIN_UID = 'MMRZK9Dpe4dDTnrU3cTmi32bWb82';

// -----------------------------------------------
// onAuthStateChanged pour redirection automatique
// -----------------------------------------------
auth.onAuthStateChanged(function(user) {
    if (_redirecting) return;

    var isLoginPage = window.location.pathname.includes('login.html')
        || window.location.pathname === '/'
        || window.location.pathname.endsWith('/');

    if (isLoginPage && user && user.emailVerified) {
        _redirecting = true;
        var dest = (user.uid === ADMIN_UID) ? 'admin.html' : 'index.html';
        window.location.href = dest;
    }
});

// ================================================
// CONNEXION
// ================================================
async function handleLogin(event) {
    event.preventDefault();
    _redirecting = true;

    var email    = document.getElementById('loginEmail').value.trim();
    var password = document.getElementById('loginPassword').value;
    var btn      = document.getElementById('loginBtn');

    setLoading(btn, true, 'Connexion...');
    hideAlerts();

    try {
        await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        var cred = await auth.signInWithEmailAndPassword(email, password);
        var user = cred.user;
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

        showSuccess('Connexion reussie ! Redirection...');
        
        var dest = (user.uid === ADMIN_UID) ? 'admin.html' : 'index.html';
        
        setTimeout(function() {
            window.location.replace(dest);
        }, 1200);

    } catch (err) {
        _redirecting = false;
        console.error('[Login]', err.code, err.message);
        setLoading(btn, false, 'Se connecter');
        showError(getLoginError(err.code));
    }
}

function getLoginError(code) {
    if (code === 'auth/user-not-found') {
        return 'Aucun compte trouve avec cet email.';
    }
    if (code === 'auth/wrong-password') {
        return 'Mot de passe incorrect.';
    }
    if (code === 'auth/invalid-credential' || code === 'auth/invalid-login-credentials') {
        return 'Email ou mot de passe incorrect.';
    }
    if (code === 'auth/invalid-email') {
        return 'Format email invalide.';
    }
    if (code === 'auth/user-disabled') {
        return 'Ce compte a ete desactive.';
    }
    if (code === 'auth/too-many-requests') {
        return 'Trop de tentatives. Attendez ou reinitialisez votre mot de passe.';
    }
    if (code === 'auth/network-request-failed') {
        return 'Erreur reseau. Verifiez votre connexion.';
    }
    return 'Erreur de connexion. Reessayez.';
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
        showError('Les mots de passe ne correspondent pas.');
        return;
    }

    setLoading(btn, true, 'Creation...');
    hideAlerts();

    try {
        var cred = await auth.createUserWithEmailAndPassword(email, password);
        var user = cred.user;

        await user.sendEmailVerification({
            url: window.location.origin + '/login.html'
        });

        await auth.signOut();
        _redirecting = false;

        showSuccess('Compte cree ! Email de confirmation envoye a ' + email);
        document.getElementById('signupForm').reset();
        setTimeout(function() { switchTab('login'); }, 4500);
        setLoading(btn, false, 'Creer mon compte');

    } catch (err) {
        _redirecting = false;
        console.error('[Signup]', err.code, err.message);
        var msg = 'Erreur lors de la creation du compte.';
        if (err.code === 'auth/email-already-in-use') {
            msg = 'Cet email est deja utilise.';
        } else if (err.code === 'auth/invalid-email') {
            msg = 'Email invalide.';
        } else if (err.code === 'auth/weak-password') {
            msg = 'Mot de passe trop faible (min. 6 caracteres).';
        }
        showError(msg);
        setLoading(btn, false, 'Creer mon compte');
    }
}

// ================================================
// REINITIALISATION MOT DE PASSE
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

        showSuccess('Email envoye ! Consultez ' + email);
        document.getElementById('resetEmail').value = '';
        setLoading(btn, false, 'Envoyer le lien de reinitialisation');

    } catch (err) {
        _redirecting = false;
        console.error('[Reset]', err.code, err.message);
        var msg = 'Erreur lors de envoi.';
        if (err.code === 'auth/user-not-found') {
            msg = 'Aucun compte associe a cet email.';
        } else if (err.code === 'auth/invalid-email') {
            msg = 'Email invalide.';
        } else if (err.code === 'auth/too-many-requests') {
            msg = 'Trop de demandes. Attendez quelques minutes.';
        }
        showError(msg);
        setLoading(btn, false, 'Envoyer le lien de reinitialisation');
    }
}

// ================================================
// RENVOI EMAIL VERIFICATION
// ================================================
async function resendVerification() {
    var btn = document.getElementById('resendBtn');
    setLoading(btn, true, 'Envoi...');
    hideAlerts();
    _redirecting = true;

    try {
        var email    = _pendingEmail;
        var password = _pendingPassword;

        if (!email || !password) {
            password = window.prompt('Entrez votre mot de passe :');
            if (!password) {
                _redirecting = false;
                setLoading(btn, false, 'Renvoyer email de confirmation');
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

        showSuccess('Email renvoye a ' + email);
        setLoading(btn, false, 'Renvoyer email de confirmation');

    } catch (err) {
        _redirecting = false;
        console.error('[Resend]', err.code, err.message);
        showError('Impossible de renvoyer : ' + err.message);
        setLoading(btn, false, 'Renvoyer email de confirmation');
    }
}

// ================================================
// PANNEAU EMAIL NON VERIFIE
// ================================================
function showVerifyPanel(email) {
    document.getElementById('authTabs').style.display = 'none';
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('resetPanel').classList.add('hidden');
    document.getElementById('verifyPanel').classList.remove('hidden');
    document.getElementById('verifyEmailDisplay').textContent = email;
    showWarning('Email non verifie. Consultez votre boite de reception.');
}

// ================================================
// NAVIGATION ONGLETS
// ================================================
function switchTab(tab) {
    hideAlerts();
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
        tabs.style.display = 'none';
        document.getElementById('resetPanel').classList.remove('hidden');
    }
}

// ================================================
// DECONNEXION
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
function showInfo(msg) {
    var el = document.getElementById('alertInfo');
    el.textContent = msg;
    el.classList.add('show');
}
function hideAlerts() {
    ['alertError','alertSuccess','alertWarning','alertInfo'].forEach(function(id) {
        document.getElementById(id).classList.remove('show');
    });
}
