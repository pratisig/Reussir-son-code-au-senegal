// ============================================================
// PREMIUM.JS — Logique abonnement SaaS
// Paiement manuel Wave — validation par admin
// ============================================================

const FREE_SERIES  = ['B1', 'B2'];
const MAX_DEVICES  = 2;   // ← max 2 appareils simultanés
const WAVE_NUMBER  = '70 946 23 05';
const WAVE_AMOUNT  = 2500;

// ---- Générer un ID d'appareil persistant --------------------
function getDeviceId() {
    let did = localStorage.getItem('deviceId');
    if (!did) {
        did = 'dev_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('deviceId', did);
    }
    return did;
}

// ---- Vérifier et enregistrer l'appareil ---------------------
// Logique :
//  1. Si l'appareil est déjà enregistré → OK
//  2. Si la liste est pleine → on ÉVINCE le plus ancien (devices[0])
//     et on écrit un signal de déconnexion forcée dans Firestore
//  3. On ajoute le nouvel appareil
async function checkAndRegisterDevice(uid) {
    const deviceId = getDeviceId();
    const userRef  = db.collection('users').doc(uid);
    try {
        const doc     = await userRef.get();
        const data    = doc.exists ? doc.data() : {};
        const premium = data.premium || {};

        // Pas premium → accès libre sans limite d'appareils
        if (!premium.active) return { ok: true, premium: false };

        // Premium expiré
        if (premium.expiresAt && premium.expiresAt.toDate() < new Date()) {
            await userRef.update({ 'premium.active': false });
            return { ok: true, premium: false, expired: true };
        }

        let devices = Array.isArray(premium.devices) ? [...premium.devices] : [];

        // Appareil déjà connu → rien à faire
        if (devices.includes(deviceId)) {
            return { ok: true, premium: true, expiresAt: premium.expiresAt };
        }

        // Nouvel appareil : si on dépasse MAX_DEVICES, on évince le plus ancien
        if (devices.length >= MAX_DEVICES) {
            const evictedDeviceId = devices[0]; // le plus ancien
            devices.shift();                    // retirer le plus ancien

            // Écrire le signal de force-déconnexion pour l'appareil évincé
            await userRef.update({
                'premium.devices': firebase.firestore.FieldValue.arrayRemove(evictedDeviceId),
                [`premium.forceLogout.${evictedDeviceId}`]: firebase.firestore.FieldValue.serverTimestamp()
            });
        }

        // Enregistrer le nouvel appareil
        await userRef.update({
            'premium.devices': firebase.firestore.FieldValue.arrayUnion(deviceId)
        });

        return { ok: true, premium: true, expiresAt: premium.expiresAt };
    } catch (e) {
        console.warn('checkAndRegisterDevice error:', e);
        return { ok: true, premium: false };
    }
}

// ---- Écouter en temps réel si cet appareil doit être déconnecté ----
// À appeler après checkAndRegisterDevice, une seule fois par session
function watchForceLogout(uid) {
    const deviceId = getDeviceId();
    const userRef  = db.collection('users').doc(uid);

    return userRef.onSnapshot(function(doc) {
        if (!doc.exists) return;
        const data    = doc.data();
        const premium = data.premium || {};
        const forceLogout = premium.forceLogout || {};

        // Si notre deviceId est dans les signaux de déconnexion forcée
        if (forceLogout[deviceId]) {
            // Nettoyage : retirer le signal pour éviter une boucle
            userRef.update({
                [`premium.forceLogout.${deviceId}`]: firebase.firestore.FieldValue.delete()
            }).catch(() => {});

            // Déconnexion forcée avec message à l'utilisateur
            alert('⚠️ Votre session a été terminée car votre compte vient de se connecter sur un autre appareil. Vous êtes limité à ' + MAX_DEVICES + ' appareils simultanés.');
            auth.signOut().then(function() {
                localStorage.removeItem('deviceId'); // Réinitialiser l'ID appareil
                window.location.replace('login.html');
            });
        }
    }, function(err) {
        console.warn('watchForceLogout error:', err);
    });
}

// ---- Vérifier si une série est accessible -------------------
function canAccessSeries(seriesName, isPremium) {
    if (FREE_SERIES.includes(seriesName)) return true;
    return isPremium === true;
}

// ---- Afficher / Fermer le modal premium ---------------------
function showPremiumModal(seriesName) {
    const el = document.getElementById('premiumModal');
    if (!el) return;
    const seriesEl = document.getElementById('premiumModalSeries');
    if (seriesEl) seriesEl.textContent = seriesName || '';
    showStep('step1');
    const refEl = document.getElementById('waveRef');
    if (refEl) refEl.value = '';
    const statusEl = document.getElementById('payStatus');
    if (statusEl) { statusEl.style.display = 'none'; statusEl.textContent = ''; }
    const submitBtn = document.getElementById('submitRefBtn');
    if (submitBtn) submitBtn.disabled = false;
    el.classList.add('open');
}

function closePremiumModal() {
    const el = document.getElementById('premiumModal');
    if (el) el.classList.remove('open');
}

// ---- Navigation entre étapes du modal ----------------------
function showStep(stepId) {
    ['step1', 'step2', 'step3'].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) el.style.display = (id === stepId) ? 'block' : 'none';
    });
}

// ---- Copier le numéro Wave ----------------------------------
function copyWaveNumber() {
    var num = WAVE_NUMBER.replace(/\s/g, '');
    var btn = document.getElementById('copyBtn');
    var done = function() {
        if (btn) {
            btn.textContent = '✅ Copié !';
            setTimeout(function() { btn.textContent = '📋 Copier le numéro'; }, 2000);
        }
    };
    if (navigator.clipboard) {
        navigator.clipboard.writeText(num).then(done);
    } else {
        var ta = document.createElement('textarea');
        ta.value = num;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        done();
    }
}

// ---- Soumettre la référence de transaction -----------------
async function submitWavePayment() {
    var ref       = document.getElementById('waveRef').value.trim();
    var statusEl  = document.getElementById('payStatus');
    var submitBtn = document.getElementById('submitRefBtn');

    if (!ref || ref.length < 4) {
        statusEl.style.display = 'block';
        statusEl.className     = 'pay-status error';
        statusEl.textContent   = '⚠️ Veuillez entrer votre référence de transaction Wave.';
        return;
    }

    var user = auth.currentUser;
    if (!user) return;

    if (submitBtn) submitBtn.disabled = true;
    statusEl.style.display = 'block';
    statusEl.className     = 'pay-status pending';
    statusEl.textContent   = '⏳ Envoi de votre demande...';

    try {
        await db.collection('payment_requests').add({
            uid:       user.uid,
            email:     user.email || '',
            method:    'Wave',
            amount:    WAVE_AMOUNT,
            ref:       ref,
            status:    'pending',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        showStep('step3');
    } catch (e) {
        statusEl.className   = 'pay-status error';
        statusEl.textContent = '❌ Erreur : ' + e.message;
        if (submitBtn) submitBtn.disabled = false;
    }
}

// ---- Activer l'abonnement (appelé depuis admin) ------------
async function activatePremium() {
    var user = auth.currentUser;
    if (!user) return;
    var deviceId  = getDeviceId();
    var expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);
    try {
        await db.collection('users').doc(user.uid).set({
            premium: {
                active: true,
                activatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                expiresAt:   expiresAt,
                plan:        '2500fcfa_12mois',
                devices:     [deviceId],
                forceLogout: {},
                paymentMethod: 'Wave'
            }
        }, { merge: true });
        setTimeout(function() { closePremiumModal(); window.location.reload(); }, 800);
    } catch (e) {
        console.error('activatePremium error:', e);
    }
}
