// ========== QUIZ DATA ==========
const quizData = {
    "B1": [{"n":4,"a":[1,3]},{"n":4,"a":[0,3]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":3,"a":[2]},{"n":4,"a":[1,2]},{"n":4,"a":[0,3]},{"n":4,"a":[0,2]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]}],
    "B2": [{"n":4,"a":[0,3]},{"n":4,"a":[1,3]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":4,"a":[0,3]},{"n":2,"a":[0]},{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[1,3]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":4,"a":[0,2]},{"n":4,"a":[1,3]},{"n":4,"a":[1,2]}],
    "B3": [{"n":4,"a":[1,3]},{"n":4,"a":[0,2]},{"n":2,"a":[1]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":3,"a":[0]},{"n":4,"a":[0,2]},{"n":4,"a":[0,3]},{"n":2,"a":[1]}],
    "B4": [{"n":4,"a":[1,3]},{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":4,"a":[0,2]},{"n":4,"a":[0,2]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":4,"a":[0,3]},{"n":3,"a":[2]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":4,"a":[1,3]},{"n":4,"a":[1,2]}],
    "B5": [{"n":4,"a":[0,3]},{"n":4,"a":[1,3]},{"n":4,"a":[1,3]},{"n":4,"a":[1,2]},{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":3,"a":[2]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":4,"a":[0,3]},{"n":4,"a":[0,3]}],
    "B6": [{"n":4,"a":[0,3]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[0,3]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":4,"a":[1,3]},{"n":4,"a":[0,2]},{"n":4,"a":[1,2]},{"n":4,"a":[0,3]},{"n":4,"a":[0,2]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":4,"a":[0,3]}],
    "B7": [{"n":4,"a":[0,3]},{"n":4,"a":[1,3]},{"n":4,"a":[1,3]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[0,3]},{"n":4,"a":[0,2]}],
    "B8": [{"n":4,"a":[1,3]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":4,"a":[1,2]},{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":4,"a":[0,3]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":4,"a":[1,3]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]}],
    "B9": [{"n":4,"a":[0,2]},{"n":4,"a":[1,3]},{"n":4,"a":[0,2]},{"n":2,"a":[1]},{"n":4,"a":[1,3]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":4,"a":[0,3]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":2,"a":[0]}],
    "B10": [{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":4,"a":[1,2]},{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":4,"a":[1,3]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":4,"a":[1,3]}],
    "B11": [{"n":4,"a":[0,3]},{"n":4,"a":[1,3]},{"n":4,"a":[1,3]},{"n":4,"a":[0,3]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":4,"a":[0,2]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":2,"a":[0]}],
    "B12": [{"n":4,"a":[0,3]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":4,"a":[0,2]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[1]}]
};

// ========== STATE ==========
let state = {
    series: null,
    qIndex: 0,
    questions: [],
    answers: [],
    locked: [],
    startTime: null,
    timerInterval: null,
    isPremium: false,
    premiumExpiry: null,
    progress: JSON.parse(localStorage.getItem('quizProgress') || '{}'),
    history: [],
    mode: 'normal',
    forceLogoutUnsubscribe: null
};

// ========== INIT ==========
window.addEventListener('load', function() {
    if (typeof firebase !== 'undefined' && typeof auth !== 'undefined') {
        auth.onAuthStateChanged(async function(user) {
            if (!user) { window.location.href = 'login.html'; return; }
            if (!user.emailVerified) { auth.signOut(); window.location.href = 'login.html'; return; }
            document.getElementById('headerUser').style.display = 'flex';
            document.getElementById('userEmailDisplay').textContent = user.email;
            await loadUserData(user.uid);
        });
    } else {
        initApp();
    }
});

async function loadUserData(uid) {
    try {
        const doc = await db.collection('users').doc(uid).get();
        if (doc.exists) {
            const data = doc.data();
            if (data.progress) { state.progress = data.progress; localStorage.setItem('quizProgress', JSON.stringify(state.progress)); }
            if (data.history) { state.history = data.history; }
        }
        const result = await checkAndRegisterDevice(uid);
        if (result.ok) {
            state.isPremium = result.premium === true;
            state.premiumExpiry = result.expiresAt || null;
            if (result.expired) alert('⚠️ Votre abonnement Premium a expiré. Vous avez accès à B1 et B2 uniquement.');
            if (state.forceLogoutUnsubscribe) state.forceLogoutUnsubscribe();
            state.forceLogoutUnsubscribe = watchForceLogout(uid);
        } else {
            state.isPremium = false;
        }
        if (state.isPremium) document.getElementById('premiumBadge').style.display = 'inline-block';
    } catch (e) { console.warn('loadUserData error:', e); }
    initApp();
}

function saveProgress() {
    localStorage.setItem('quizProgress', JSON.stringify(state.progress));
    if (typeof auth !== 'undefined' && auth.currentUser) {
        db.collection('users').doc(auth.currentUser.uid).set({ progress: state.progress }, { merge: true }).catch(e => console.warn('save error:', e));
    }
}

function saveHistory() {
    if (typeof auth !== 'undefined' && auth.currentUser) {
        db.collection('users').doc(auth.currentUser.uid)
            .set({ history: state.history }, { merge: true })
            .catch(e => console.warn('save history error:', e));
    }
}

function handleLogout() {
    if (state.forceLogoutUnsubscribe) { state.forceLogoutUnsubscribe(); state.forceLogoutUnsubscribe = null; }
    if (typeof auth !== 'undefined') {
        const uid = auth.currentUser ? auth.currentUser.uid : null;
        const deviceId = getDeviceId();
        const cleanup = uid ? db.collection('users').doc(uid).update({ 'premium.devices': firebase.firestore.FieldValue.arrayRemove(deviceId) }).catch(() => {}) : Promise.resolve();
        cleanup.then(() => { auth.signOut().then(() => window.location.href = 'login.html'); });
    }
}

function initApp() {
    renderSeriesGrid();
    showScreen('screen-welcome');
    
    // Attacher l'événement du bouton principal UNE SEULE FOIS
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.onclick = handleNextBtnClick;
    }
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if (id === 'screen-history') renderHistory();
    if (id === 'screen-stats') renderStats();
    if (id === 'screen-revision') renderRevision();
    window.scrollTo(0, 0);
}

// ========== SERIES GRID ==========
function renderSeriesGrid() {
    const grid = document.getElementById('seriesGrid');
    grid.innerHTML = '';
    const bannerContainer = document.getElementById('expBannerContainer');
    bannerContainer.innerHTML = '';
    if (state.isPremium && state.premiumExpiry) {
        const expDate = state.premiumExpiry.toDate ? state.premiumExpiry.toDate() : new Date(state.premiumExpiry);
        const daysLeft = Math.ceil((expDate - new Date()) / (1000 * 60 * 60 * 24));
        bannerContainer.innerHTML = daysLeft <= 30
            ? `<div class="exp-banner">⏳ Abonnement Premium expire dans <strong>${daysLeft} jours</strong> (${expDate.toLocaleDateString('fr-SN')})</div>`
            : `<div class="exp-banner">⭐ Premium actif jusqu'au ${expDate.toLocaleDateString('fr-SN')}</div>`;
    }
    Object.keys(quizData).forEach(s => {
        const isFree = FREE_SERIES.includes(s);
        const isLocked = !isFree && !state.isPremium;
        const btn = document.createElement('button');
        const p = state.progress[s];
        if (isLocked) {
            btn.className = 'series-btn locked';
            btn.innerHTML = s + '<span class="lock-icon">🔒</span>';
            btn.onclick = () => showPremiumModal(s);
        } else {
            btn.className = 'series-btn' + (p ? ' done' : '');
            btn.innerHTML = s + (isFree ? '<span class="free-badge">GRATUIT</span>' : '') + (p ? `<span class="serie-score">${p.score}/25</span>` : '');
            btn.onclick = () => startQuiz(s);
        }
        grid.appendChild(btn);
    });
}

// ========== REVISION MODE ==========
function renderRevision() {
    const container = document.getElementById('revisionContent');
    const mistakes = [];
    state.history.forEach(h => {
        if (h.userAnswers && h.series) {
            const seriesData = quizData[h.series];
            if (!seriesData) return;
            h.userAnswers.forEach((ua, idx) => {
                if (!seriesData[idx]) return;
                const correct = seriesData[idx].a.slice().sort().toString();
                const user = ua.slice().sort().toString();
                if (correct !== user) mistakes.push({ series: h.series, qNum: idx + 1 });
            });
        }
    });
    if (mistakes.length === 0) {
        container.innerHTML = '<div class="history-empty"><div class="history-empty-icon">✅</div><p>Aucune erreur enregistrée !</p></div>';
        return;
    }
    const grouped = {};
    mistakes.forEach(m => { if (!grouped[m.series]) grouped[m.series] = []; grouped[m.series].push(m.qNum); });
    let html = `<div class="info-box">📊 Total : <strong>${mistakes.length} erreurs</strong> à revoir</div>`;
    Object.keys(grouped).sort().forEach(s => {
        const isLocked = !FREE_SERIES.includes(s) && !state.isPremium;
        html += isLocked
            ? `<div class="stat-card" style="opacity:0.6;cursor:not-allowed;"><div style="font-weight:700;font-size:1.1rem;margin-bottom:.5rem;">${s} 🔒</div><div style="color:var(--text-muted);font-size:.85rem;">${grouped[s].length} erreurs (Premium requis)</div></div>`
            : `<div class="stat-card" style="cursor:pointer;" onclick="startRevisionMode('${s}')"><div style="font-weight:700;font-size:1.1rem;margin-bottom:.5rem;">${s}</div><div style="color:var(--error);font-size:.85rem;">${grouped[s].length} erreurs à revoir</div></div>`;
    });
    container.innerHTML = html;
}

function startRevisionMode(series) {
    const mistakes = [];
    state.history.forEach(h => {
        if (h.series === series && h.userAnswers) {
            const seriesData = quizData[series];
            h.userAnswers.forEach((ua, idx) => {
                if (!seriesData[idx]) return;
                const correct = seriesData[idx].a.slice().sort().toString();
                const user = ua.slice().sort().toString();
                if (correct !== user && !mistakes.find(m => m.qNum === idx + 1))
                    mistakes.push({ series, qNum: idx + 1, data: seriesData[idx] });
            });
        }
    });
    if (mistakes.length === 0) { alert('Aucune erreur à revoir !'); return; }
    _startQuizSession('revision', series, mistakes);
}

// ========== TEST DE CONNAISSANCE ==========
function startExamBlanc() {
    const allQuestions = [];
    Object.keys(quizData).forEach(s => {
        if (FREE_SERIES.includes(s) || state.isPremium)
            quizData[s].forEach((q, idx) => allQuestions.push({ series: s, qNum: idx + 1, data: q }));
    });
    if (allQuestions.length < 25) { alert('⚠️ Pas assez de questions. Abonnez-vous Premium.'); return; }
    const shuffled = allQuestions.sort(() => Math.random() - 0.5).slice(0, 25);
    _startQuizSession('exam', 'EXAM', shuffled);
}

// ========== QUIZ NORMAL ==========
function startQuiz(series) {
    if (!canAccessSeries(series, state.isPremium)) { showPremiumModal(series); return; }
    const questions = quizData[series].map((q, idx) => ({ series, qNum: idx + 1, data: q }));
    _startQuizSession('normal', series, questions);
}

// ========== SESSION COMMUNE ==========
function _startQuizSession(mode, series, questions) {
    state.mode = mode;
    state.series = series;
    state.questions = questions;
    state.qIndex = 0;
    state.answers = questions.map(() => []);
    state.locked = questions.map(() => false);
    state.startTime = Date.now();
    const labels = { revision: `📔 Révision ${series}`, exam: '🎯 Test de Connaissance', normal: `Série ${series}` };
    document.getElementById('quizSerieName').textContent = labels[mode];
    document.getElementById('qTotal').textContent = questions.length;
    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(updateTimer, 1000);
    showScreen('screen-quiz');
    renderQuestion();
}

function quitQuiz() {
    if (confirm('Quitter ? La progression sera perdue.')) {
        clearInterval(state.timerInterval);
        showScreen(state.mode === 'revision' ? 'screen-revision' : state.mode === 'exam' ? 'screen-exam' : 'screen-series');
    }
}

function updateTimer() {
    const s = Math.floor((Date.now() - state.startTime) / 1000);
    document.getElementById('timer').textContent = String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
}

// ========== RENDU QUESTION ==========
function renderQuestion() {
    const i = state.qIndex;
    const qObj = state.questions[i];
    const q = qObj.data;
    const locked = state.locked[i];
    const isMulti = q.a.length > 1;
    const currentSel = state.answers[i];
    const isLast = (i === state.questions.length - 1);

    document.getElementById('progressBar').style.width = ((i + 1) / state.questions.length * 100) + '%';
    document.getElementById('qNum').textContent = i + 1;
    document.getElementById('alertAnswer').classList.remove('show');

    // Hint multi-choix
    const hintEl = document.getElementById('hintMulti');
    if (isMulti && !locked) {
        hintEl.style.display = 'block';
        const hasTop = currentSel.some(x => x <= 1);
        const hasBot = currentSel.some(x => x >= 2);
        if (currentSel.length === 0)                hintEl.textContent = 'ℹ️ Choisissez 1 réponse en haut (A/B) ET 1 en bas (C/D)';
        else if (currentSel.length === 1 && hasTop)  hintEl.textContent = '👇 Choisissez maintenant une réponse en bas (C ou D)';
        else if (currentSel.length === 1 && hasBot)  hintEl.textContent = '👆 Choisissez maintenant une réponse en haut (A ou B)';
        else                                         hintEl.textContent = '✅ 2 réponses sélectionnées — cliquez Valider';
    } else {
        hintEl.style.display = 'none';
    }

    // Image
    const imgEl = document.getElementById('questionImg');
    imgEl.src = `images/${qObj.series}_Q${qObj.qNum}.jpg`;
    imgEl.style.display = 'block';
    document.getElementById('imgPlaceholder').style.display = 'none';

    // Options
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];
    for (let idx = 0; idx < q.n; idx++) {
        const div = document.createElement('div');
        div.className = 'option';
        const selected = currentSel.indexOf(idx) > -1;
        const isCorrect = q.a.indexOf(idx) > -1;
        let sameLineSelected = false;
        if (isMulti && !locked && !selected) {
            const myLine = (idx <= 1) ? 'top' : 'bot';
            sameLineSelected = currentSel.some(x => (myLine === 'top') ? (x <= 1) : (x >= 2));
        }
        if (locked) {
            div.classList.add('locked');
            if (isCorrect) div.classList.add('correct');
            else if (selected) div.classList.add('incorrect');
        } else if (selected) {
            div.classList.add('selected');
        } else if (sameLineSelected) {
            div.classList.add('disabled-max');
        }
        div.innerHTML = `<div class="opt-letter">${labels[idx]}</div>`;
        if (!locked && !sameLineSelected) div.onclick = () => toggleOption(idx);
        container.appendChild(div);
    }

    // ===== BOUTON PRINCIPAL — on ne fait que mettre à jour son texte =====
    const btn = document.getElementById('nextBtn');
    if (isLast) {
        btn.textContent = locked ? '🏁 Voir les résultats' : 'Valider & Terminer';
    } else {
        btn.textContent = locked ? 'Suivant →' : 'Valider';
    }
}

// ===== GESTIONNAIRE GLOBAL DU CLIC "SUIVANT" =====
function handleNextBtnClick() {
    if (!state.questions || state.questions.length === 0) return;
    
    const isLast = (state.qIndex === state.questions.length - 1);
    const locked = state.locked[state.qIndex];

    if (isLast) {
        if (locked) {
            finishQuiz();
        } else {
            if (!state.answers[state.qIndex] || state.answers[state.qIndex].length === 0) {
                document.getElementById('alertAnswer').classList.add('show');
                return;
            }
            state.locked[state.qIndex] = true;
            finishQuiz();
        }
    } else {
        if (locked) {
            goNext();
        } else {
            if (!state.answers[state.qIndex] || state.answers[state.qIndex].length === 0) {
                document.getElementById('alertAnswer').classList.add('show');
                return;
            }
            state.locked[state.qIndex] = true;
            renderQuestion();
        }
    }
}

function toggleOption(idx) {
    const i = state.qIndex;
    const q = state.questions[i].data;
    const arr = state.answers[i];
    const pos = arr.indexOf(idx);
    const isMulti = q.a.length > 1;
    if (!isMulti) {
        state.answers[i] = (pos > -1) ? [] : [idx];
    } else {
        const myLine = (idx <= 1) ? 'top' : 'bot';
        if (pos > -1) {
            arr.splice(pos, 1);
        } else {
            const peer = arr.findIndex(x => (myLine === 'top') ? (x <= 1) : (x >= 2));
            if (peer > -1) arr.splice(peer, 1);
            arr.push(idx);
        }
    }
    renderQuestion();
}

function goNext() {
    if (state.qIndex < state.questions.length - 1) {
        state.qIndex++;
        renderQuestion();
    }
}

function prevQuestion() {
    if (state.qIndex > 0) {
        state.qIndex--;
        renderQuestion();
    }
}

// ========== FINISH ==========
function finishQuiz() {
    try {
        clearInterval(state.timerInterval);
        const total = Math.floor((Date.now() - state.startTime) / 1000);
        const m = Math.floor(total / 60), s = total % 60;

        let correct = 0;
        state.questions.forEach((qObj, i) => {
            const ua = state.answers[i] ? state.answers[i].slice().sort((a, b) => a - b) : [];
            const ca = (qObj.data && qObj.data.a) ? qObj.data.a.slice().sort((a, b) => a - b) : [];
            if (JSON.stringify(ua) === JSON.stringify(ca)) correct++;
        });

        const errors = state.questions.length - correct;
        const admis = errors <= 6;

        if (state.mode === 'normal') {
            state.progress[state.series] = { score: correct, admis };
            saveProgress();
        }

        // L'ERREUR ÉTAIT ICI : Firebase Firestore plante souvent silencieusement 
        // quand on essaie de sauvegarder un objet Date() natif dans un tableau imbriqué.
        // Utiliser Date.now() (un timestamp entier) résout ce problème.
        state.history.push({
            series: state.mode === 'exam' ? 'Test de Connaissance' : state.series,
            score: correct, errors, admis, time: total,
            date: Date.now(),
            userAnswers: state.answers
        });
        saveHistory();

        const badgeEl = document.getElementById('resultBadge');
        if (badgeEl) badgeEl.textContent = admis ? '🎉' : '📋';
        
        const verdictEl = document.getElementById('resultVerdict');
        if (verdictEl) {
            verdictEl.textContent = admis ? 'ADMIS !' : 'AJOURNÉ';
            verdictEl.className = 'result-verdict ' + (admis ? 'admis' : 'ajourn');
        }
        
        const serieEl = document.getElementById('resultSerie');
        if (serieEl) {
            serieEl.textContent = (state.mode === 'exam' ? 'Test de Connaissance' : `Série ${state.series}`) + ` : ${correct}/${state.questions.length} (${errors} erreurs)`;
        }

        const sc = document.getElementById('statCorrect'); if(sc) sc.textContent = correct;
        const sw = document.getElementById('statWrong'); if(sw) sw.textContent = errors;
        const st = document.getElementById('statTime'); if(st) st.textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');

        const grid = document.getElementById('questionsGrid');
        if (grid) {
            grid.innerHTML = '';
            state.questions.forEach((qObj, j) => {
                const ua = state.answers[j] ? state.answers[j].slice().sort((a, b) => a - b) : [];
                const ca = (qObj.data && qObj.data.a) ? qObj.data.a.slice().sort((a, b) => a - b) : [];
                const ok = JSON.stringify(ua) === JSON.stringify(ca);
                const cell = document.createElement('div');
                cell.className = 'q-cell ' + (ok ? 'ok' : 'ko');
                cell.textContent = j + 1;
                cell.onclick = () => openModal(j);
                grid.appendChild(cell);
            });
        }

        renderSeriesGrid();
        showScreen('screen-results');
        
    } catch (error) {
        console.error("Erreur critique dans finishQuiz:", error);
        // Force l'affichage de l'écran des résultats même en cas de bug de sauvegarde Firebase
        showScreen('screen-results');
    }
}

function openModal(qIndex) {
    const qObj = state.questions[qIndex];
    const q = qObj.data;
    const ua = state.answers[qIndex], ca = q.a;
    const labels = ['A', 'B', 'C', 'D'];
    document.getElementById('modalTitle').textContent = `Correction ${qObj.series} • Q${qObj.qNum}`;
    const mi = document.getElementById('modalImg');
    mi.src = `images/${qObj.series}_Q${qObj.qNum}.jpg`;
    mi.onerror = () => mi.style.display = 'none';
    mi.style.display = 'block';
    const grid = document.getElementById('modalOptionsGrid');
    grid.innerHTML = '';
    for (let i = 0; i < q.n; i++) {
        const opt = document.createElement('div');
        opt.className = 'modal-option';
        const isCorrect = ca.indexOf(i) > -1;
        const wasSelected = ua.indexOf(i) > -1;
        if (isCorrect) opt.classList.add('correct');
        if (wasSelected && !isCorrect) opt.classList.add('incorrect');
        if (wasSelected && isCorrect) opt.classList.add('user-selected');
        opt.innerHTML = `<div class="modal-opt-letter">${labels[i]}</div><span>${isCorrect ? '✔️ Correct' : (wasSelected ? '❌ Incorrect' : '')}</span>`;
        grid.appendChild(opt);
    }
    document.getElementById('modalOverlay').classList.add('open');
}

function closeModal(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}
function closeModalDirect() {
    document.getElementById('modalOverlay').classList.remove('open');
}

function retryQuiz() {
    if (state.mode === 'revision') startRevisionMode(state.series);
    else if (state.mode === 'exam') startExamBlanc();
    else startQuiz(state.series);
}

// ========== STATISTIQUES ==========
function renderStats() {
    const container = document.getElementById('statsContent');
    if (!state.history || state.history.length === 0) {
        container.innerHTML = '<div class="history-empty"><div class="history-empty-icon">📊</div><p>Aucune donnée disponible</p></div>';
        return;
    }
    const totalAttempts = state.history.length;
    const totalSuccess = state.history.filter(h => h.admis).length;
    const successRate = ((totalSuccess / totalAttempts) * 100).toFixed(1);
    const totalTime = state.history.reduce((sum, h) => sum + (h.time || 0), 0);
    const avgTime = Math.floor(totalTime / totalAttempts);
    const avgErrors = (state.history.reduce((sum, h) => sum + (h.errors || 0), 0) / totalAttempts).toFixed(1);
    const seriesStats = {};
    state.history.forEach(h => {
        if (!seriesStats[h.series]) seriesStats[h.series] = { attempts: 0, success: 0, totalScore: 0 };
        seriesStats[h.series].attempts++;
        if (h.admis) seriesStats[h.series].success++;
        seriesStats[h.series].totalScore += h.score || 0;
    });
    let html = '<div class="stats-grid">';
    html += `<div class="stat-card"><div class="stat-card-val" style="color:var(--success);">${successRate}%</div><div class="stat-card-label">Taux de réussite</div></div>`;
    html += `<div class="stat-card"><div class="stat-card-val">${Math.floor(avgTime/60)}:${String(avgTime%60).padStart(2,'0')}</div><div class="stat-card-label">Temps moyen</div></div>`;
    html += `<div class="stat-card"><div class="stat-card-val" style="color:var(--error);">${avgErrors}</div><div class="stat-card-label">Erreurs moyennes</div></div>`;
    html += `<div class="stat-card"><div class="stat-card-val">${totalAttempts}</div><div class="stat-card-label">Tentatives</div></div>`;
    html += '</div><div class="series-title" style="margin-top:1.5rem;margin-bottom:1rem;">📈 Par série</div>';
    Object.keys(seriesStats).sort().forEach(s => {
        const stat = seriesStats[s];
        const rate = ((stat.success / stat.attempts) * 100).toFixed(0);
        const avgScore = (stat.totalScore / stat.attempts).toFixed(1);
        html += `<div class="stat-card" style="margin-bottom:.75rem;text-align:left;padding:1rem 1.25rem;"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem;"><div style="font-weight:700;font-size:1.1rem;">${s}</div><div style="color:var(--success);font-weight:700;">${rate}%</div></div><div style="color:var(--text-muted);font-size:.85rem;">${stat.attempts} tentative${stat.attempts > 1 ? 's' : ''} • Moyenne: ${avgScore}/25</div></div>`;
    });
    container.innerHTML = html;
}

// ========== HISTORIQUE ==========
function renderHistory() {
    const container = document.getElementById('historyContainer');
    if (!state.history || state.history.length === 0) {
        container.innerHTML = '<div class="history-empty"><div class="history-empty-icon">📋</div><p>Aucune tentative enregistrée.</p></div>';
        document.getElementById('totalAttempts').textContent = '0';
        document.getElementById('totalSuccess').textContent = '0';
        return;
    }
    const seriesMap = {};
    state.history.forEach(h => { if (!seriesMap[h.series]) seriesMap[h.series] = []; seriesMap[h.series].push(h); });
    document.getElementById('totalAttempts').textContent = state.history.length;
    document.getElementById('totalSuccess').textContent = state.history.filter(h => h.admis).length;
    container.innerHTML = '';
    Object.keys(seriesMap).sort().forEach(s => {
        const attempts = seriesMap[s];
        const best = Math.max(...attempts.map(a => a.score));
        const card = document.createElement('div');
        card.className = 'history-accordion';
        const header = document.createElement('div');
        header.className = 'history-accordion-header';
        header.innerHTML = `<div><div class="history-accordion-title">Série ${s}</div><div class="history-accordion-meta">${attempts.length} tentative${attempts.length > 1 ? 's' : ''} • Meilleur: ${best}/25</div></div><div class="history-accordion-icon">▼</div>`;
        const body = document.createElement('div');
        body.className = 'history-accordion-body';
        header.onclick = () => { header.classList.toggle('open'); body.classList.toggle('open'); };
        const chart = document.createElement('div');
        chart.className = 'history-chart';
        chart.innerHTML = '<div class="history-chart-title">Évolution du score</div>';
        const bars = document.createElement('div');
        bars.className = 'history-chart-bars';
        attempts.slice().reverse().slice(0, 10).reverse().forEach(a => {
            const bar = document.createElement('div');
            bar.className = 'history-chart-bar ' + (a.admis ? 'success' : 'fail');
            bar.style.height = ((a.score / 25) * 120) + 'px';
            bar.innerHTML = `<span class="history-chart-bar-val">${a.score}</span>`;
            bars.appendChild(bar);
        });
        chart.appendChild(bars);
        const chartLabels = document.createElement('div');
        chartLabels.className = 'history-chart-labels';
        attempts.slice().reverse().slice(0, 10).reverse().forEach((a, i) => {
            const lbl = document.createElement('div');
            lbl.className = 'history-chart-label';
            lbl.textContent = '#' + (i + 1);
            chartLabels.appendChild(lbl);
        });
        chart.appendChild(chartLabels);
        body.appendChild(chart);
        attempts.slice().reverse().forEach(a => {
            const att = document.createElement('div');
            att.className = 'history-attempt ' + (a.admis ? 'admis' : 'ajourn');
            const d = a.date ? new Date(a.date.seconds ? a.date.seconds * 1000 : a.date) : new Date();
            att.innerHTML = `<div class="history-attempt-header"><span class="history-attempt-date">${d.toLocaleDateString('fr-SN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span><span class="history-attempt-badge ${a.admis ? 'admis' : 'ajourn'}">${a.admis ? 'ADMIS' : 'AJOURNÉ'}</span></div><div class="history-attempt-stats"><div class="history-attempt-stat"><strong>${a.score}/25</strong></div><div class="history-attempt-stat">${a.errors} erreur${a.errors > 1 ? 's' : ''}</div><div class="history-attempt-stat">⏱️ ${Math.floor(a.time/60)}min ${a.time%60}s</div></div>`;
            body.appendChild(att);
        });
        card.appendChild(header);
        card.appendChild(body);
        container.appendChild(card);
    });
}
