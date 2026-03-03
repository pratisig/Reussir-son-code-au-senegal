// ============================================================
// PREMIUM.JS — Logique abonnement SaaS
// B1 & B2 : gratuites
// B3 → B12 : payantes (2500 FCFA, 12 mois, 3 appareils max)
// ============================================================

const FREE_SERIES = ['B1', 'B2'];
const MAX_DEVICES = 3;

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
async function checkAndRegisterDevice(uid) {
    const deviceId = getDeviceId();
    const userRef = db.collection('users').doc(uid);

    try {
        const doc = await userRef.get();
        const data = doc.exists ? doc.data() : {};
        const premium = data.premium || {};

        // Pas premium
        if (!premium.active) return { ok: true, premium: false };

        // Expiration
        if (premium.expiresAt && premium.expiresAt.toDate() < new Date()) {
            await userRef.update({ 'premium.active': false });
            return { ok: true, premium: false, expired: true };
        }

        // Gestion appareils
        const devices = premium.devices || [];
        if (!devices.includes(deviceId)) {
            if (devices.length >= MAX_DEVICES) {
                return { ok: false, premium: true, reason: 'max_devices' };
            }
            // Enregistrer cet appareil
            await userRef.update({
                'premium.devices': firebase.firestore.FieldValue.arrayUnion(deviceId)
            });
        }
        return { ok: true, premium: true, expiresAt: premium.expiresAt };
    } catch (e) {
        console.warn('checkAndRegisterDevice error:', e);
        return { ok: true, premium: false };
    }
}

// ---- Vérifier si une série est accessible -------------------
function canAccessSeries(seriesName, isPremium) {
    if (FREE_SERIES.includes(seriesName)) return true;
    return isPremium === true;
}

// ---- Afficher le modal premium ------------------------------
function showPremiumModal(seriesName) {
    const el = document.getElementById('premiumModal');
    if (el) {
        document.getElementById('premiumModalSeries').textContent = seriesName || '';
        el.classList.add('open');
    }
}
function closePremiumModal() {
    const el = document.getElementById('premiumModal');
    if (el) el.classList.remove('open');
}

// ---- Initier un paiement (simulation) -----------------------
// En production : appeler votre backend ou l'API Orange Money / Wave / Jammu
function initPayment(method) {
    const btn = document.getElementById('payBtn');
    const status = document.getElementById('payStatus');
    if (btn) btn.disabled = true;
    if (status) {
        status.style.display = 'block';
        status.textContent = '⏳ Connexion à ' + method + ' en cours...';
        status.className = 'pay-status pending';
    }

    // ---- SIMULATION : remplacer par vraie intégration --------
    // Orange Money Sénégal : https://developer.orange.com/
    // Wave : https://wave.com/en/business/api/
    // Jammu Pay : API locale
    // ----------------------------------------------------------
    // Pour test : activer après 3 secondes
    setTimeout(function() {
        if (status) {
            status.textContent = '✅ Paiement confirmé ! Activation en cours...';
            status.className = 'pay-status success';
        }
        activatePremium();
    }, 3000);
}

// ---- Activer l'abonnement premium dans Firestore ------------
async function activatePremium() {
    const user = auth.currentUser;
    if (!user) return;
    const deviceId = getDeviceId();
    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);

    try {
        await db.collection('users').doc(user.uid).set({
            premium: {
                active: true,
                activatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                expiresAt: expiresAt,
                plan: '2500fcfa_12mois',
                devices: [deviceId],
                paymentMethod: window._selectedPayMethod || 'unknown'
            }
        }, { merge: true });

        // Rafraîchir la page pour appliquer
        setTimeout(function() {
            closePremiumModal();
            window.location.reload();
        }, 1500);
    } catch (e) {
        console.error('activatePremium error:', e);
        const status = document.getElementById('payStatus');
        if (status) {
            status.textContent = '❌ Erreur activation. Contactez le support.';
            status.className = 'pay-status error';
        }
    }
}
