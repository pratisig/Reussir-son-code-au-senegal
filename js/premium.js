// ============================================================
// PREMIUM.JS — Logique abonnement SaaS
// Paiement manuel Wave — validation par admin
// ============================================================

const FREE_SERIES = ['B1', 'B2'];
const MAX_DEVICES = 3;
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
async function checkAndRegisterDevice(uid) {
    const deviceId = getDeviceId();
    const userRef = db.collection('users').doc(uid);
    try {
        const doc = await userRef.get();
        const data = doc.exists ? doc.data() : {};
        const premium = data.premium || {};
        if (!premium.active) return { ok: true, premium: false };
        if (premium.expiresAt && premium.expiresAt.toDate() < new Date()) {
            await userRef.update({ 'premium.active': false });
            return { ok: true, premium: false, expired: true };
        }
        const devices = premium.devices || [];
        if (!devices.includes(deviceId)) {
            if (devices.length >= MAX_DEVICES) {
                return { ok: false, premium: true, reason: 'max_devices' };
            }
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

// ---- Afficher / Fermer le modal premium ---------------------
function showPremiumModal(seriesName) {
    const el = document.getElementById('premiumModal');
    if (!el) return;
    document.getElementById('premiumModalSeries').textContent = seriesName || '';
    // Reset état
    showStep('step1');
    document.getElementById('waveRef').value = '';
    document.getElementById('payStatus').style.display = 'none';
    document.getElementById('payStatus').textContent = '';
    el.classList.add('open');
}
function closePremiumModal() {
    const el = document.getElementById('premiumModal');
    if (el) el.classList.remove('open');
}

// ---- Navigation entre étapes du modal ----------------------
function showStep(stepId) {
    ['step1','step2','step3'].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) el.style.display = (id === stepId) ? 'block' : 'none';
    });
}

// ---- Copier le numéro Wave dans le presse-papiers ----------
function copyWaveNumber() {
    var num = WAVE_NUMBER.replace(/\s/g,'');
    if (navigator.clipboard) {
        navigator.clipboard.writeText(num).then(function() {
            var btn = document.getElementById('copyBtn');
            if (btn) { btn.textContent = '✅ Copié !'; setTimeout(function(){ btn.textContent = '📋 Copier le numéro'; }, 2000); }
        });
    } else {
        var ta = document.createElement('textarea');
        ta.value = num;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        var btn = document.getElementById('copyBtn');
        if (btn) { btn.textContent = '✅ Copié !'; setTimeout(function(){ btn.textContent = '📋 Copier le numéro'; }, 2000); }
    }
}

// ---- Soumettre la référence de transaction ----------------
async function submitWavePayment() {
    var ref = document.getElementById('waveRef').value.trim();
    var status = document.getElementById('payStatus');
    if (!ref || ref.length < 4) {
        status.style.display = 'block';
        status.className = 'pay-status error';
        status.textContent = '⚠️ Veuillez entrer votre référence de transaction Wave.';
        return;
    }
    var user = auth.currentUser;
    if (!user) return;
    var submitBtn = document.getElementById('submitRefBtn');
    if (submitBtn) submitBtn.disabled = true;
    status.style.display = 'block';
    status.className = 'pay-status pending';
    status.textContent = '⏳ Envoi de votre demande...';
    try {
        // Enregistrer la demande de paiement dans Firestore
        await db.collection('payment_requests').add({
            uid:       user.uid,
            email:     user.email || '',
            method:    'Wave',
            amount:    WAVE_AMOUNT,
            ref:       ref,
            status:    'pending',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        // Afficher étape de confirmation
        showStep('step3');
    } catch(e) {
        status.className = 'pay-status error';
        status.textContent = '❌ Erreur : ' + e.message;
        if (submitBtn) submitBtn.disabled = false;
    }
}

// ---- Activer l'abonnement premium (appelé par l'admin) -----
async function activatePremium(uid) {
    var targetUid = uid || (auth.currentUser ? auth.currentUser.uid : null);
    if (!targetUid) return;
    var deviceId = getDeviceId();
    var expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);
    try {
        await db.collection('users').doc(targetUid).set({
            premium: {
                active: true,
                activatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                expiresAt: expiresAt,
                plan: '2500fcfa_12mois',
                devices: [deviceId],
                paymentMethod: 'Wave'
            }
        }, { merge: true });
        setTimeout(function() {
            closePremiumModal();
            window.location.reload();
        }, 1000);
    } catch(e) {
        console.error('activatePremium error:', e);
    }
}
