// ========== QUIZ DATA ==========
const quizData = {
    "B1": [{"n":4,"a":[1,3]},{"n":4,"a":[0,3]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":3,"a":[2]},{"n":4,"a":[1,2]},{"n":4,"a":[0,3]},{"n":4,"a":[0,2]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]}],
    "B2": [{"n":4,"a":[0,3]},{"n":4,"a":[1,3]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":4,"a":[0,3]},{"n":2,"a":[0]},{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[1,3]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":4,"a":[0,2]},{"n":4,"a":[1,3]},{"n":4,"a":[1,2]}],
    "B3": [{"n":4,"a":[1,3]},{"n":4,"a":[0,2]},{"n":2,"a":[1]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":3,"a":[0]},{"n":4,"a":[0,2]},{"n":4,"a":[0,3]},{"n":2,"a":[1]}],
    "B4": [{"n":4,"a":[1,3]},{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":4,"a":[0,2]},{"n":4,"a":[0,2]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":4,"a":[0,3]},{"n":3,"a":[2]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":4,"a":[1,3]},{"n":4,"a":[1,2]}],
    "B5": [{"n":4,"a":[0,3]},{"n":4,"a":[1,3]},{"n":4,"a":[1,3]},{"n":4,"a":[1,2]},{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":3,"a":[2]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":4,"a":[0,3]},{"n":4,"a":[0,3]}],
    "B6": [{"n":4,"a":[0,3]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[0,3]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":4,"a":[1,3]},{"n":4,"a":[0,2]},{"n":4,"a":[1,2]},{"n":4,"a":[0,3]},{"n":4,"a":[0,2]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":4,"a":[0,3]}],
    "B7": [{"n":4,"a":[0,3]},{"n":4,"a":[1,3]},{"n":4,"a":[1,3]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":4,"a":[1,3]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[0,3]},{"n":4,"a":[0,2]}],
    "B8": [{"n":4,"a":[1,3]},{"n":2,"a":[0]},{"n":4,"a":[1,2]},{"n":4,"a":[1,2]},{"n":4,"a":[0,3]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":4,"a":[0,3]},{"n":4,"a":[0,1,2]},{"n":4,"a":[1,2]},{"n":2,"a":[1]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":2,"a":[1]},{"n":4,"a":[1,2]},{"n":2,"a":[0]},{"n":4,"a":[1,3]},{"n":2,"a":[0]},{"n":2,"a":[1]},{"n":2,"a":[1]}],
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

// Flag pour eviter plusieurs appels a initApp
let _appReady = false;

// ========== INIT ==========
window.addEventListener('load', function() {
    if (typeof firebase !== 'undefined' && typeof auth !== 'undefined') {
        auth.onAuthStateChanged(async function(user) {
            if (!user) { window.location.href = 'login.html'; return; }
            if (!user.emailVerified) { auth.signOut(); window.location.href = 'login.html'; return; }
            document.getElementById('headerUser').style.display = 'flex';
            document.getElementById('userEmailDisplay').textContent = user.email;
            if (!_appReady) {
                // Premier appel : chargement complet
                await loadUserData(user.uid);
            } else {
                // Re-authentification Firebase (refresh token) : juste mettre a jour le premium
                try {
                    const result = await checkAndRegisterDevice(user.uid);
                    if (result.ok) {
                        state.isPremium = result.premium === true;
                        if (state.isPremium) document.getElementById('premiumBadge').style.display = 'inline-block';
                    }
                    renderSeriesGrid();
                } catch(e) { console.warn('re-auth update error:', e); }
            }
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
            if (result.expired) alert('Votre abonnement Premium a expire. Vous avez acces a B1 et B2 uniquement.');
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
    if (_appReady) return; // Appel unique
    _appReady = true;
    renderSeriesGrid();
    showScreen('screen-welcome');
    // Attacher le handler du bouton principal une seule fois ici
    var nb = document.getElementById('nextBtn');
    if (nb) nb.onclick = handleNextBtnClick;
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
    var grid = document.getElementById('seriesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    var bannerContainer = document.getElementById('expBannerContainer');
    if (bannerContainer) bannerContainer.innerHTML = '';
    if (state.isPremium && state.premiumExpiry && bannerContainer) {
        var expDate = state.premiumExpiry.toDate ? state.premiumExpiry.toDate() : new Date(state.premiumExpiry);
        var daysLeft = Math.ceil((expDate - new Date()) / (1000 * 60 * 60 * 24));
        bannerContainer.innerHTML = daysLeft <= 30
            ? '<div class="exp-banner">Abonnement Premium expire dans <strong>' + daysLeft + ' jours</strong> (' + expDate.toLocaleDateString('fr-SN') + ')</div>'
            : '<div class="exp-banner">Premium actif jusqu au ' + expDate.toLocaleDateString('fr-SN') + '</div>';
    }
    Object.keys(quizData).forEach(function(s) {
        var isFree = FREE_SERIES.includes(s);
        var isLocked = !isFree && !state.isPremium;
        var btn = document.createElement('button');
        var p = state.progress[s];
        if (isLocked) {
            btn.className = 'series-btn locked';
            btn.innerHTML = s + '<span class="lock-icon">&#128274;</span>';
            btn.onclick = function() { showPremiumModal(s); };
        } else {
            btn.className = 'series-btn' + (p ? ' done' : '');
            btn.innerHTML = s + (isFree ? '<span class="free-badge">GRATUIT</span>' : '') + (p ? '<span class="serie-score">' + p.score + '/25</span>' : '');
            btn.onclick = function() { startQuiz(s); };
        }
        grid.appendChild(btn);
    });
}

// ========== REVISION MODE ==========
function renderRevision() {
    var container = document.getElementById('revisionContent');
    var mistakes = [];
    state.history.forEach(function(h) {
        if (h.userAnswers && h.series) {
            var seriesData = quizData[h.series];
            if (!seriesData) return;
            h.userAnswers.forEach(function(ua, idx) {
                if (!seriesData[idx]) return;
                var correct = seriesData[idx].a.slice().sort().toString();
                var user = ua.slice().sort().toString();
                if (correct !== user) mistakes.push({ series: h.series, qNum: idx + 1 });
            });
        }
    });
    if (mistakes.length === 0) {
        container.innerHTML = '<div class="history-empty"><p>Aucune erreur enregistree !</p></div>';
        return;
    }
    var grouped = {};
    mistakes.forEach(function(m) { if (!grouped[m.series]) grouped[m.series] = []; grouped[m.series].push(m.qNum); });
    var html = '<div class="info-box">Total : <strong>' + mistakes.length + ' erreurs</strong> a revoir</div>';
    Object.keys(grouped).sort().forEach(function(s) {
        var isLocked = !FREE_SERIES.includes(s) && !state.isPremium;
        html += isLocked
            ? '<div class="stat-card" style="opacity:0.6;"><div style="font-weight:700;">' + s + ' (Premium requis)</div></div>'
            : '<div class="stat-card" style="cursor:pointer;" onclick="startRevisionMode(\'' + s + '\')"><div style="font-weight:700;">' + s + '</div><div style="color:var(--error);">' + grouped[s].length + ' erreurs a revoir</div></div>';
    });
    container.innerHTML = html;
}

function startRevisionMode(series) {
    var mistakes = [];
    state.history.forEach(function(h) {
        if (h.series === series && h.userAnswers) {
            var seriesData = quizData[series];
            h.userAnswers.forEach(function(ua, idx) {
                if (!seriesData[idx]) return;
                var correct = seriesData[idx].a.slice().sort().toString();
                var user = ua.slice().sort().toString();
                if (correct !== user && !mistakes.find(function(m) { return m.qNum === idx + 1; }))
                    mistakes.push({ series: series, qNum: idx + 1, data: seriesData[idx] });
            });
        }
    });
    if (mistakes.length === 0) { alert('Aucune erreur a revoir !'); return; }
    _startQuizSession('revision', series, mistakes);
}

// ========== TEST DE CONNAISSANCE ==========
function startExamBlanc() {
    var allQuestions = [];
    Object.keys(quizData).forEach(function(s) {
        if (FREE_SERIES.includes(s) || state.isPremium)
            quizData[s].forEach(function(q, idx) { allQuestions.push({ series: s, qNum: idx + 1, data: q }); });
    });
    if (allQuestions.length < 25) { alert('Pas assez de questions. Abonnez-vous Premium.'); return; }
    var shuffled = allQuestions.sort(function() { return Math.random() - 0.5; }).slice(0, 25);
    _startQuizSession('exam', 'EXAM', shuffled);
}

// ========== QUIZ NORMAL ==========
function startQuiz(series) {
    if (!canAccessSeries(series, state.isPremium)) { showPremiumModal(series); return; }
    var questions = quizData[series].map(function(q, idx) { return { series: series, qNum: idx + 1, data: q }; });
    _startQuizSession('normal', series, questions);
}

// ========== SESSION COMMUNE ==========
function _startQuizSession(mode, series, questions) {
    state.mode = mode;
    state.series = series;
    state.questions = questions;
    state.qIndex = 0;
    state.answers = questions.map(function() { return []; });
    state.locked = questions.map(function() { return false; });
    state.startTime = Date.now();

    var labels = { revision: 'Revision ' + series, exam: 'Test de Connaissance', normal: 'Serie ' + series };
    document.getElementById('quizSerieName').textContent = labels[mode];
    document.getElementById('qTotal').textContent = questions.length;

    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(updateTimer, 1000);

    // REASSIGNER le bouton a chaque demarrage pour garantir la reactivite
    var nb = document.getElementById('nextBtn');
    if (nb) nb.onclick = handleNextBtnClick;

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
    var elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    document.getElementById('timer').textContent =
        String(Math.floor(elapsed / 60)).padStart(2, '0') + ':' + String(elapsed % 60).padStart(2, '0');
}

// ========== RENDU QUESTION ==========
function renderQuestion() {
    var i = state.qIndex;
    if (!state.questions || !state.questions[i]) return;

    var qObj = state.questions[i];
    var q = qObj.data;
    var locked = state.locked[i];
    var isMulti = q.a.length > 1;
    var currentSel = state.answers[i] || [];
    var isLast = (i === state.questions.length - 1);

    document.getElementById('progressBar').style.width = ((i + 1) / state.questions.length * 100) + '%';
    document.getElementById('qNum').textContent = i + 1;
    document.getElementById('alertAnswer').classList.remove('show');

    var hintEl = document.getElementById('hintMulti');
    if (isMulti && !locked) {
        hintEl.style.display = 'block';
        var hasTop = currentSel.some(function(x) { return x <= 1; });
        var hasBot = currentSel.some(function(x) { return x >= 2; });
        if (currentSel.length === 0)             hintEl.textContent = 'Choisissez 1 reponse en haut (A/B) ET 1 en bas (C/D)';
        else if (currentSel.length >= 1 && hasTop && !hasBot) hintEl.textContent = 'Choisissez maintenant une reponse en bas (C ou D)';
        else if (currentSel.length >= 1 && hasBot && !hasTop) hintEl.textContent = 'Choisissez maintenant une reponse en haut (A ou B)';
        else                                     hintEl.textContent = 'Reponses selectionnees - cliquez Valider';
    } else {
        hintEl.style.display = 'none';
    }

    var imgEl = document.getElementById('questionImg');
    imgEl.src = 'images/' + qObj.series + '_Q' + qObj.qNum + '.jpg';
    imgEl.style.display = 'block';
    document.getElementById('imgPlaceholder').style.display = 'none';

    var container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    var optLabels = ['A', 'B', 'C', 'D'];

    for (var idx = 0; idx < q.n; idx++) {
        (function(idx) {
            var div = document.createElement('div');
            div.className = 'option';
            var selected = currentSel.indexOf(idx) > -1;
            var isCorrect = q.a.indexOf(idx) > -1;
            var sameLineSelected = false;
            if (isMulti && !locked && !selected) {
                var myLine = (idx <= 1) ? 'top' : 'bot';
                sameLineSelected = currentSel.some(function(x) {
                    return myLine === 'top' ? (x <= 1) : (x >= 2);
                });
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
            div.innerHTML = '<div class="opt-letter">' + optLabels[idx] + '</div>';
            if (!locked && !sameLineSelected) {
                div.onclick = function() { toggleOption(idx); };
            }
            container.appendChild(div);
        })(idx);
    }

    var btn = document.getElementById('nextBtn');
    if (btn) {
        // Reassurer le handler a chaque render
        btn.onclick = handleNextBtnClick;
        if (isLast) {
            btn.textContent = locked ? 'Voir les resultats' : 'Valider & Terminer';
        } else {
            btn.textContent = locked ? 'Suivant' : 'Valider';
        }
    }
}

// ========== GESTION BOUTON PRINCIPAL ==========
function handleNextBtnClick() {
    if (!state.questions || state.questions.length === 0) return;

    var isLast = (state.qIndex === state.questions.length - 1);
    var locked = state.locked[state.qIndex];

    if (locked) {
        // Question deja validee : avancer ou terminer
        if (isLast) {
            finishQuiz();
        } else {
            goNext();
        }
    } else {
        // Valider la reponse
        if (!state.answers[state.qIndex] || state.answers[state.qIndex].length === 0) {
            document.getElementById('alertAnswer').classList.add('show');
            return;
        }
        state.locked[state.qIndex] = true;
        if (isLast) {
            finishQuiz();
        } else {
            renderQuestion();
        }
    }
}

function toggleOption(idx) {
    var i = state.qIndex;
    var q = state.questions[i].data;
    var arr = state.answers[i];
    var pos = arr.indexOf(idx);
    var isMulti = q.a.length > 1;
    if (!isMulti) {
        state.answers[i] = (pos > -1) ? [] : [idx];
    } else {
        var myLine = (idx <= 1) ? 'top' : 'bot';
        if (pos > -1) {
            arr.splice(pos, 1);
        } else {
            var peer = arr.findIndex(function(x) { return myLine === 'top' ? (x <= 1) : (x >= 2); });
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
        var total = Math.floor((Date.now() - state.startTime) / 1000);
        var m = Math.floor(total / 60), s = total % 60;

        var correct = 0;
        state.questions.forEach(function(qObj, i) {
            var ua = (state.answers[i] || []).slice().sort(function(a,b){return a-b;});
            var ca = (qObj.data && qObj.data.a) ? qObj.data.a.slice().sort(function(a,b){return a-b;}) : [];
            if (JSON.stringify(ua) === JSON.stringify(ca)) correct++;
        });

        var errors = state.questions.length - correct;
        var admis = errors <= 6;

        if (state.mode === 'normal') {
            state.progress[state.series] = { score: correct, admis: admis };
            saveProgress();
        }

        state.history.push({
            series: state.mode === 'exam' ? 'Test de Connaissance' : state.series,
            score: correct, errors: errors, admis: admis, time: total,
            date: Date.now(),
            userAnswers: state.answers
        });
        saveHistory();

        renderSeriesGrid();

        // Afficher l ecran PUIS remplir les donnees
        showScreen('screen-results');

        setTimeout(function() {
            var badgeEl = document.getElementById('resultBadge');
            if (badgeEl) badgeEl.textContent = admis ? '&#127881;' : '&#128203;';

            var verdictEl = document.getElementById('resultVerdict');
            if (verdictEl) {
                verdictEl.textContent = admis ? 'ADMIS !' : 'AJOURNE';
                verdictEl.className = 'result-verdict ' + (admis ? 'admis' : 'ajourn');
            }

            var serieEl = document.getElementById('resultSerie');
            if (serieEl) {
                serieEl.textContent = (state.mode === 'exam' ? 'Test de Connaissance' : 'Serie ' + state.series)
                    + ' : ' + correct + '/' + state.questions.length + ' (' + errors + ' erreurs)';
            }

            var sc = document.getElementById('statCorrect');
            if (sc) sc.textContent = correct;

            var sw = document.getElementById('statWrong');
            if (sw) sw.textContent = errors;

            var st = document.getElementById('statTime');
            if (st) st.textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');

            var grid = document.getElementById('questionsGrid');
            if (grid) {
                grid.innerHTML = '';
                state.questions.forEach(function(qObj, j) {
                    var ua = (state.answers[j] || []).slice().sort(function(a,b){return a-b;});
                    var ca = (qObj.data && qObj.data.a) ? qObj.data.a.slice().sort(function(a,b){return a-b;}) : [];
                    var ok = JSON.stringify(ua) === JSON.stringify(ca);
                    var cell = document.createElement('div');
                    cell.className = 'q-cell ' + (ok ? 'ok' : 'ko');
                    cell.textContent = j + 1;
                    cell.onclick = (function(j) { return function() { openModal(j); }; })(j);
                    grid.appendChild(cell);
                });
            }
        }, 50);

    } catch (error) {
        console.error('Erreur dans finishQuiz:', error);
        showScreen('screen-results');
    }
}

function openModal(qIndex) {
    var qObj = state.questions[qIndex];
    if (!qObj) return;
    var q = qObj.data;
    var ua = state.answers[qIndex] || [];
    var ca = q.a;
    var labels = ['A', 'B', 'C', 'D'];
    document.getElementById('modalTitle').textContent = 'Correction ' + qObj.series + ' Q' + qObj.qNum;
    var mi = document.getElementById('modalImg');
    mi.src = 'images/' + qObj.series + '_Q' + qObj.qNum + '.jpg';
    mi.onerror = function() { mi.style.display = 'none'; };
    mi.style.display = 'block';
    var grid = document.getElementById('modalOptionsGrid');
    grid.innerHTML = '';
    for (var i = 0; i < q.n; i++) {
        var opt = document.createElement('div');
        opt.className = 'modal-option';
        var isCorrect = ca.indexOf(i) > -1;
        var wasSelected = ua.indexOf(i) > -1;
        if (isCorrect) opt.classList.add('correct');
        if (wasSelected && !isCorrect) opt.classList.add('incorrect');
        if (wasSelected && isCorrect) opt.classList.add('user-selected');
        opt.innerHTML = '<div class="modal-opt-letter">' + labels[i] + '</div><span>' + (isCorrect ? 'Correct' : (wasSelected ? 'Incorrect' : '')) + '</span>';
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
    var container = document.getElementById('statsContent');
    if (!state.history || state.history.length === 0) {
        container.innerHTML = '<div class="history-empty"><p>Aucune donnee disponible</p></div>';
        return;
    }
    var totalAttempts = state.history.length;
    var totalSuccess = state.history.filter(function(h) { return h.admis; }).length;
    var successRate = ((totalSuccess / totalAttempts) * 100).toFixed(1);
    var totalTime = state.history.reduce(function(sum, h) { return sum + (h.time || 0); }, 0);
    var avgTime = Math.floor(totalTime / totalAttempts);
    var avgErrors = (state.history.reduce(function(sum, h) { return sum + (h.errors || 0); }, 0) / totalAttempts).toFixed(1);
    var seriesStats = {};
    state.history.forEach(function(h) {
        if (!seriesStats[h.series]) seriesStats[h.series] = { attempts: 0, success: 0, totalScore: 0 };
        seriesStats[h.series].attempts++;
        if (h.admis) seriesStats[h.series].success++;
        seriesStats[h.series].totalScore += h.score || 0;
    });
    var html = '<div class="stats-grid">';
    html += '<div class="stat-card"><div class="stat-card-val" style="color:var(--success);">' + successRate + '%</div><div class="stat-card-label">Taux de reussite</div></div>';
    html += '<div class="stat-card"><div class="stat-card-val">' + Math.floor(avgTime/60) + ':' + String(avgTime%60).padStart(2,'0') + '</div><div class="stat-card-label">Temps moyen</div></div>';
    html += '<div class="stat-card"><div class="stat-card-val" style="color:var(--error);">' + avgErrors + '</div><div class="stat-card-label">Erreurs moyennes</div></div>';
    html += '<div class="stat-card"><div class="stat-card-val">' + totalAttempts + '</div><div class="stat-card-label">Tentatives</div></div>';
    html += '</div>';
    Object.keys(seriesStats).sort().forEach(function(s) {
        var stat = seriesStats[s];
        var rate = ((stat.success / stat.attempts) * 100).toFixed(0);
        var avgScore = (stat.totalScore / stat.attempts).toFixed(1);
        html += '<div class="stat-card" style="margin-bottom:.75rem;text-align:left;padding:1rem 1.25rem;"><div style="display:flex;justify-content:space-between;"><div style="font-weight:700;">' + s + '</div><div style="color:var(--success);font-weight:700;">' + rate + '%</div></div><div style="color:var(--text-muted);font-size:.85rem;">' + stat.attempts + ' tentatives - Moyenne: ' + avgScore + '/25</div></div>';
    });
    container.innerHTML = html;
}

// ========== HISTORIQUE ==========
function renderHistory() {
    var container = document.getElementById('historyContainer');
    if (!state.history || state.history.length === 0) {
        container.innerHTML = '<div class="history-empty"><p>Aucune tentative enregistree.</p></div>';
        document.getElementById('totalAttempts').textContent = '0';
        document.getElementById('totalSuccess').textContent = '0';
        return;
    }
    var seriesMap = {};
    state.history.forEach(function(h) { if (!seriesMap[h.series]) seriesMap[h.series] = []; seriesMap[h.series].push(h); });
    document.getElementById('totalAttempts').textContent = state.history.length;
    document.getElementById('totalSuccess').textContent = state.history.filter(function(h) { return h.admis; }).length;
    container.innerHTML = '';
    Object.keys(seriesMap).sort().forEach(function(s) {
        var attempts = seriesMap[s];
        var best = Math.max.apply(null, attempts.map(function(a) { return a.score; }));
        var card = document.createElement('div');
        card.className = 'history-accordion';
        var header = document.createElement('div');
        header.className = 'history-accordion-header';
        header.innerHTML = '<div><div class="history-accordion-title">Serie ' + s + '</div><div class="history-accordion-meta">' + attempts.length + ' tentative(s) - Meilleur: ' + best + '/25</div></div><div class="history-accordion-icon">v</div>';
        var body = document.createElement('div');
        body.className = 'history-accordion-body';
        header.onclick = function() { header.classList.toggle('open'); body.classList.toggle('open'); };
        attempts.slice().reverse().forEach(function(a) {
            var att = document.createElement('div');
            att.className = 'history-attempt ' + (a.admis ? 'admis' : 'ajourn');
            var d = a.date ? new Date(a.date.seconds ? a.date.seconds * 1000 : a.date) : new Date();
            att.innerHTML = '<div class="history-attempt-header"><span class="history-attempt-date">' + d.toLocaleDateString('fr-SN') + '</span><span class="history-attempt-badge ' + (a.admis ? 'admis' : 'ajourn') + '">' + (a.admis ? 'ADMIS' : 'AJOURNE') + '</span></div><div class="history-attempt-stats"><div>' + a.score + '/25</div><div>' + a.errors + ' erreur(s)</div><div>' + Math.floor(a.time/60) + 'min ' + a.time%60 + 's</div></div>';
            body.appendChild(att);
        });
        card.appendChild(header);
        card.appendChild(body);
        container.appendChild(card);
    });
}
