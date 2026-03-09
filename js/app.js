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
var state = {
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

var _appReady = false;

// ========== INIT ==========
window.addEventListener('load', function() {
    if (typeof firebase !== 'undefined' && typeof auth !== 'undefined') {
        auth.onAuthStateChanged(async function(user) {
            if (!user) { window.location.href = 'login.html'; return; }
            if (!user.emailVerified) { auth.signOut(); window.location.href = 'login.html'; return; }
            document.getElementById('headerUser').style.display = 'flex';
            document.getElementById('userEmailDisplay').textContent = user.email;
            if (!_appReady) {
                await loadUserData(user.uid);
            } else {
                try {
                    var r = await checkAndRegisterDevice(user.uid);
                    if (r.ok) { state.isPremium = r.premium === true; }
                    renderSeriesGrid();
                } catch(e) {}
            }
        });
    } else {
        initApp();
    }
});

async function loadUserData(uid) {
    try {
        var doc = await db.collection('users').doc(uid).get();
        if (doc.exists) {
            var data = doc.data();
            if (data.progress) { state.progress = data.progress; localStorage.setItem('quizProgress', JSON.stringify(state.progress)); }
            if (data.history) { state.history = data.history; }
        }
        var result = await checkAndRegisterDevice(uid);
        if (result.ok) {
            state.isPremium = result.premium === true;
            state.premiumExpiry = result.expiresAt || null;
            if (result.expired) alert('Votre abonnement Premium a expire.');
            if (state.forceLogoutUnsubscribe) state.forceLogoutUnsubscribe();
            state.forceLogoutUnsubscribe = watchForceLogout(uid);
        }
        if (state.isPremium) document.getElementById('premiumBadge').style.display = 'inline-block';
    } catch(e) { console.warn('loadUserData:', e); }
    initApp();
}

function saveProgress() {
    localStorage.setItem('quizProgress', JSON.stringify(state.progress));
    if (typeof auth !== 'undefined' && auth.currentUser) {
        db.collection('users').doc(auth.currentUser.uid).set({ progress: state.progress }, { merge: true }).catch(function() {});
    }
}

function saveHistory() {
    if (typeof auth !== 'undefined' && auth.currentUser) {
        db.collection('users').doc(auth.currentUser.uid).set({ history: state.history }, { merge: true }).catch(function() {});
    }
}

function handleLogout() {
    if (state.forceLogoutUnsubscribe) { state.forceLogoutUnsubscribe(); state.forceLogoutUnsubscribe = null; }
    if (typeof auth !== 'undefined') {
        var uid = auth.currentUser ? auth.currentUser.uid : null;
        var deviceId = getDeviceId();
        var cleanup = uid ? db.collection('users').doc(uid).update({ 'premium.devices': firebase.firestore.FieldValue.arrayRemove(deviceId) }).catch(function(){}) : Promise.resolve();
        cleanup.then(function() { auth.signOut().then(function() { window.location.href = 'login.html'; }); });
    }
}

function initApp() {
    if (_appReady) return;
    _appReady = true;
    renderSeriesGrid();
    showScreen('screen-welcome');
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
    var el = document.getElementById(id);
    if (el) el.classList.add('active');
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
        var daysLeft = Math.ceil((expDate - new Date()) / 864e5);
        bannerContainer.innerHTML = daysLeft <= 30
            ? '<div class="exp-banner">Abonnement expire dans <strong>' + daysLeft + ' jours</strong></div>'
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
            btn.onclick = (function(s){ return function(){ showPremiumModal(s); }; })(s);
        } else {
            btn.className = 'series-btn' + (p ? ' done' : '');
            btn.innerHTML = s + (isFree ? '<span class="free-badge">GRATUIT</span>' : '') + (p ? '<span class="serie-score">' + p.score + '/25</span>' : '');
            btn.onclick = (function(s){ return function(){ startQuiz(s); }; })(s);
        }
        grid.appendChild(btn);
    });
}

// ========== REVISION ==========
function renderRevision() {
    var container = document.getElementById('revisionContent');
    if (!container) return;
    var mistakes = [];
    state.history.forEach(function(h) {
        if (!h.userAnswers || !h.series) return;
        var sd = quizData[h.series]; if (!sd) return;
        h.userAnswers.forEach(function(ua, idx) {
            if (!sd[idx]) return;
            if (sd[idx].a.slice().sort().toString() !== (ua||[]).slice().sort().toString())
                mistakes.push({ series: h.series, qNum: idx+1 });
        });
    });
    if (!mistakes.length) { container.innerHTML = '<div class="history-empty"><p>Aucune erreur !</p></div>'; return; }
    var grouped = {};
    mistakes.forEach(function(m) { if (!grouped[m.series]) grouped[m.series] = []; grouped[m.series].push(m.qNum); });
    var html = '<div class="info-box">Total : <strong>' + mistakes.length + ' erreurs</strong></div>';
    Object.keys(grouped).sort().forEach(function(s) {
        var isLocked = !FREE_SERIES.includes(s) && !state.isPremium;
        html += isLocked
            ? '<div class="stat-card"><strong>' + s + '</strong> (Premium requis)</div>'
            : '<div class="stat-card" style="cursor:pointer" onclick="startRevisionMode(\'' + s + '\')"><strong>' + s + '</strong><div style="color:var(--error)">' + grouped[s].length + ' erreurs</div></div>';
    });
    container.innerHTML = html;
}

function startRevisionMode(series) {
    var mistakes = [], sd = quizData[series];
    state.history.forEach(function(h) {
        if (h.series !== series || !h.userAnswers) return;
        h.userAnswers.forEach(function(ua, idx) {
            if (!sd[idx]) return;
            if (sd[idx].a.slice().sort().toString() !== (ua||[]).slice().sort().toString() && !mistakes.find(function(m){return m.qNum===idx+1;}))
                mistakes.push({ series: series, qNum: idx+1, data: sd[idx] });
        });
    });
    if (!mistakes.length) { alert('Aucune erreur !'); return; }
    _startQuizSession('revision', series, mistakes);
}

// ========== EXAM BLANC ==========
function startExamBlanc() {
    var all = [];
    Object.keys(quizData).forEach(function(s) {
        if (FREE_SERIES.includes(s) || state.isPremium)
            quizData[s].forEach(function(q, i) { all.push({ series: s, qNum: i+1, data: q }); });
    });
    if (all.length < 25) { alert('Pas assez de questions.'); return; }
    _startQuizSession('exam', 'EXAM', all.sort(function(){ return Math.random()-.5; }).slice(0,25));
}

// ========== QUIZ ==========
function startQuiz(series) {
    if (!canAccessSeries(series, state.isPremium)) { showPremiumModal(series); return; }
    _startQuizSession('normal', series, quizData[series].map(function(q,i){ return { series:series, qNum:i+1, data:q }; }));
}

function _startQuizSession(mode, series, questions) {
    state.mode = mode;
    state.series = series;
    state.questions = questions;
    state.qIndex = 0;
    state.answers = questions.map(function(){ return []; });
    state.locked = questions.map(function(){ return false; });
    state.startTime = Date.now();
    var labels = { revision: 'Revision '+series, exam: 'Test de Connaissance', normal: 'Serie '+series };
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
        showScreen(state.mode==='revision' ? 'screen-revision' : state.mode==='exam' ? 'screen-exam' : 'screen-series');
    }
}

function updateTimer() {
    var e = Math.floor((Date.now() - state.startTime) / 1000);
    var el = document.getElementById('timer');
    if (el) el.textContent = String(Math.floor(e/60)).padStart(2,'0') + ':' + String(e%60).padStart(2,'0');
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

    var pb = document.getElementById('progressBar');
    if (pb) pb.style.width = ((i+1)/state.questions.length*100) + '%';
    var qn = document.getElementById('qNum');
    if (qn) qn.textContent = i+1;
    var al = document.getElementById('alertAnswer');
    if (al) al.classList.remove('show');

    var hintEl = document.getElementById('hintMulti');
    if (hintEl) {
        if (isMulti && !locked) {
            hintEl.style.display = 'block';
            var hasTop = currentSel.some(function(x){ return x<=1; });
            var hasBot = currentSel.some(function(x){ return x>=2; });
            if (!currentSel.length)         hintEl.textContent = 'Choisissez 1 reponse en haut (A/B) ET 1 en bas (C/D)';
            else if (hasTop && !hasBot)      hintEl.textContent = 'Choisissez maintenant une reponse en bas (C ou D)';
            else if (hasBot && !hasTop)      hintEl.textContent = 'Choisissez maintenant une reponse en haut (A ou B)';
            else                             hintEl.textContent = 'Reponses selectionnees - cliquez Valider';
        } else {
            hintEl.style.display = 'none';
        }
    }

    var imgEl = document.getElementById('questionImg');
    if (imgEl) { imgEl.src = 'images/'+qObj.series+'_Q'+qObj.qNum+'.jpg'; imgEl.style.display='block'; }
    var ph = document.getElementById('imgPlaceholder');
    if (ph) ph.style.display = 'none';

    var container = document.getElementById('optionsContainer');
    if (container) {
        container.innerHTML = '';
        var optLabels = ['A','B','C','D'];
        for (var idx = 0; idx < q.n; idx++) {
            (function(idx){
                var div = document.createElement('div');
                div.className = 'option';
                var selected = currentSel.indexOf(idx) > -1;
                var isCorrect = q.a.indexOf(idx) > -1;
                var sameLineSelected = false;
                if (isMulti && !locked && !selected) {
                    var myLine = idx<=1 ? 'top' : 'bot';
                    sameLineSelected = currentSel.some(function(x){ return myLine==='top' ? x<=1 : x>=2; });
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
                div.innerHTML = '<div class="opt-letter">'+optLabels[idx]+'</div>';
                if (!locked && !sameLineSelected) {
                    div.onclick = (function(idx){ return function(){ toggleOption(idx); }; })(idx);
                }
                container.appendChild(div);
            })(idx);
        }
    }

    var btn = document.getElementById('nextBtn');
    if (btn) {
        btn.onclick = handleNextBtnClick;
        if (isLast) {
            btn.textContent = locked ? 'Voir les resultats' : 'Valider & Terminer';
        } else {
            btn.textContent = locked ? 'Suivant' : 'Valider';
        }
    }
}

// ========== BOUTON PRINCIPAL ==========
function handleNextBtnClick() {
    if (!state.questions || !state.questions.length) return;
    var i = state.qIndex;
    var isLast = (i === state.questions.length - 1);
    var wasLocked = state.locked[i];

    // Etape 1 : si pas encore valide, valider d'abord
    if (!wasLocked) {
        var ans = state.answers[i];
        if (!ans || ans.length === 0) {
            var al = document.getElementById('alertAnswer');
            if (al) al.classList.add('show');
            return;
        }
        state.locked[i] = true;
    }

    // Etape 2 : naviguer
    if (isLast) {
        // DERNIERE QUESTION : toujours aller aux resultats (1 ou 2 clics)
        finishQuiz();
    } else if (wasLocked) {
        // Question intermediaire deja validee : question suivante
        goNext();
    } else {
        // Question intermediaire qu'on vient de valider : afficher le feedback
        renderQuestion();
    }
}

function toggleOption(idx) {
    var i = state.qIndex;
    if (state.locked[i]) return;
    var q = state.questions[i].data;
    var arr = state.answers[i];
    var pos = arr.indexOf(idx);
    var isMulti = q.a.length > 1;
    if (!isMulti) {
        state.answers[i] = pos > -1 ? [] : [idx];
    } else {
        var myLine = idx<=1 ? 'top' : 'bot';
        if (pos > -1) {
            arr.splice(pos, 1);
        } else {
            var peer = arr.findIndex(function(x){ return myLine==='top' ? x<=1 : x>=2; });
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

// ========== FIN DE SERIE ==========
function finishQuiz() {
    // Stopper le timer en premier
    clearInterval(state.timerInterval);

    // ---- Calculs ----
    var total = Math.floor((Date.now() - state.startTime) / 1000);
    var mm = String(Math.floor(total / 60)).padStart(2, '0');
    var ss = String(total % 60).padStart(2, '0');
    var N = state.questions.length;
    var correct = 0;
    for (var i = 0; i < N; i++) {
        var ua = (state.answers[i] || []).slice().sort(function(a,b){return a-b;});
        var ca = ((state.questions[i].data || {}).a || []).slice().sort(function(a,b){return a-b;});
        if (JSON.stringify(ua) === JSON.stringify(ca)) correct++;
    }
    var errors = N - correct;
    var admis = errors <= 6;

    // ---- Sauvegarde (non-bloquante) ----
    try {
        if (state.mode === 'normal') {
            state.progress[state.series] = { score: correct, admis: admis };
            saveProgress();
        }
        var snap = state.answers.map(function(a){ return (a||[]).slice(); });
        state.history.push({
            series: state.mode === 'exam' ? 'Test de Connaissance' : state.series,
            score: correct, errors: errors, admis: admis, time: total,
            date: Date.now(), userAnswers: snap
        });
        saveHistory();
    } catch(saveErr) { console.warn('Erreur sauvegarde:', saveErr); }

    // ---- Affichage resultats (priorite absolue) ----
    showScreen('screen-results');

    // Score
    var sc = document.getElementById('statCorrect');
    var sw = document.getElementById('statWrong');
    var st = document.getElementById('statTime');
    if (sc) sc.textContent = correct;
    if (sw) sw.textContent = errors;
    if (st) st.textContent = mm + ':' + ss;

    // Verdict
    var verdict = document.getElementById('resultVerdict');
    if (verdict) {
        verdict.textContent = admis ? 'ADMIS !' : 'AJOURNE';
        verdict.className = 'result-verdict ' + (admis ? 'admis' : 'ajourn');
    }
    var serieEl = document.getElementById('resultSerie');
    if (serieEl) {
        serieEl.textContent = (state.mode==='exam' ? 'Test de Connaissance' : 'Serie '+state.series)
            + ' : ' + correct + '/' + N + ' (' + errors + ' erreur' + (errors>1?'s':'') + ')';
    }

    // Grille des questions
    var grid = document.getElementById('questionsGrid');
    if (grid) {
        grid.innerHTML = '';
        for (var j = 0; j < N; j++) {
            (function(j){
                var ua2 = (state.answers[j]||[]).slice().sort(function(a,b){return a-b;});
                var ca2 = ((state.questions[j].data||{}).a||[]).slice().sort(function(a,b){return a-b;});
                var ok = JSON.stringify(ua2) === JSON.stringify(ca2);
                var cell = document.createElement('div');
                cell.className = 'q-cell ' + (ok ? 'ok' : 'ko');
                cell.textContent = j + 1;
                cell.onclick = (function(j){ return function(){ openModal(j); }; })(j);
                grid.appendChild(cell);
            })(j);
        }
    }

    // Mise a jour grille series (non-critique, en dernier)
    try { renderSeriesGrid(); } catch(e) { console.warn('renderSeriesGrid:', e); }
}

// ========== MODAL ==========
function openModal(qIndex) {
    var qObj = state.questions[qIndex]; if (!qObj) return;
    var q = qObj.data;
    var ua = state.answers[qIndex] || [];
    var labels = ['A','B','C','D'];
    var mt = document.getElementById('modalTitle');
    if (mt) mt.textContent = 'Correction ' + qObj.series + ' Q' + qObj.qNum;
    var mi = document.getElementById('modalImg');
    if (mi) { mi.src='images/'+qObj.series+'_Q'+qObj.qNum+'.jpg'; mi.onerror=function(){mi.style.display='none';}; mi.style.display='block'; }
    var mg = document.getElementById('modalOptionsGrid');
    if (mg) {
        mg.innerHTML = '';
        for (var i=0; i<q.n; i++) {
            var opt = document.createElement('div');
            opt.className = 'modal-option';
            var isC = q.a.indexOf(i)>-1;
            var wasS = ua.indexOf(i)>-1;
            if (isC) opt.classList.add('correct');
            if (wasS && !isC) opt.classList.add('incorrect');
            if (wasS && isC) opt.classList.add('user-selected');
            opt.innerHTML = '<div class="modal-opt-letter">'+labels[i]+'</div><span>'+(isC?'Correct':(wasS?'Incorrect':''))+'</span>';
            mg.appendChild(opt);
        }
    }
    var mo = document.getElementById('modalOverlay');
    if (mo) mo.classList.add('open');
}

function closeModal(e) { if (e.target===document.getElementById('modalOverlay')) closeModalDirect(); }
function closeModalDirect() { var mo=document.getElementById('modalOverlay'); if(mo) mo.classList.remove('open'); }

function retryQuiz() {
    if (state.mode==='revision') startRevisionMode(state.series);
    else if (state.mode==='exam') startExamBlanc();
    else startQuiz(state.series);
}

// ========== STATS ==========
function renderStats() {
    var c = document.getElementById('statsContent'); if(!c) return;
    if (!state.history.length) { c.innerHTML='<div class="history-empty"><p>Aucune donnee</p></div>'; return; }
    var n=state.history.length, ok=state.history.filter(function(h){return h.admis;}).length;
    var rate=((ok/n)*100).toFixed(1);
    var avgT=Math.floor(state.history.reduce(function(s,h){return s+(h.time||0);},0)/n);
    var avgE=(state.history.reduce(function(s,h){return s+(h.errors||0);},0)/n).toFixed(1);
    var ss={};
    state.history.forEach(function(h){
        if(!ss[h.series]) ss[h.series]={attempts:0,success:0,total:0};
        ss[h.series].attempts++; if(h.admis)ss[h.series].success++; ss[h.series].total+=h.score||0;
    });
    var html='<div class="stats-grid">';
    html+='<div class="stat-card"><div class="stat-card-val" style="color:var(--success)">'+rate+'%</div><div class="stat-card-label">Taux reussite</div></div>';
    html+='<div class="stat-card"><div class="stat-card-val">'+Math.floor(avgT/60)+':'+String(avgT%60).padStart(2,'0')+'</div><div class="stat-card-label">Temps moyen</div></div>';
    html+='<div class="stat-card"><div class="stat-card-val" style="color:var(--error)">'+avgE+'</div><div class="stat-card-label">Erreurs moy.</div></div>';
    html+='<div class="stat-card"><div class="stat-card-val">'+n+'</div><div class="stat-card-label">Tentatives</div></div></div>';
    Object.keys(ss).sort().forEach(function(s){
        var d=ss[s], r=((d.success/d.attempts)*100).toFixed(0), avg=(d.total/d.attempts).toFixed(1);
        html+='<div class="stat-card" style="margin-bottom:.75rem;text-align:left;padding:1rem 1.25rem"><div style="display:flex;justify-content:space-between"><b>'+s+'</b><span style="color:var(--success)">'+r+'%</span></div><div style="color:var(--text-muted);font-size:.85rem">'+d.attempts+' tentative(s) - Moy: '+avg+'/25</div></div>';
    });
    c.innerHTML = html;
}

// ========== HISTORIQUE ==========
function renderHistory() {
    var c=document.getElementById('historyContainer'); if(!c) return;
    var ta=document.getElementById('totalAttempts'), ts=document.getElementById('totalSuccess');
    if (!state.history.length) {
        c.innerHTML='<div class="history-empty"><p>Aucune tentative.</p></div>';
        if(ta)ta.textContent='0'; if(ts)ts.textContent='0'; return;
    }
    var sm={};
    state.history.forEach(function(h){ if(!sm[h.series])sm[h.series]=[]; sm[h.series].push(h); });
    if(ta)ta.textContent=state.history.length;
    if(ts)ts.textContent=state.history.filter(function(h){return h.admis;}).length;
    c.innerHTML='';
    Object.keys(sm).sort().forEach(function(s){
        var atts=sm[s], best=Math.max.apply(null,atts.map(function(a){return a.score;}));
        var card=document.createElement('div'); card.className='history-accordion';
        var header=document.createElement('div'); header.className='history-accordion-header';
        header.innerHTML='<div><div class="history-accordion-title">Serie '+s+'</div><div class="history-accordion-meta">'+atts.length+' tentative(s) - Meilleur: '+best+'/25</div></div><div class="history-accordion-icon">v</div>';
        var body=document.createElement('div'); body.className='history-accordion-body';
        header.onclick=function(){header.classList.toggle('open');body.classList.toggle('open');};
        atts.slice().reverse().forEach(function(a){
            var att=document.createElement('div');
            att.className='history-attempt '+(a.admis?'admis':'ajourn');
            var d=a.date?new Date(a.date.seconds?a.date.seconds*1000:a.date):new Date();
            att.innerHTML='<div class="history-attempt-header"><span class="history-attempt-date">'+d.toLocaleDateString('fr-SN')+'</span><span class="history-attempt-badge '+(a.admis?'admis':'ajourn')+'">'+( a.admis?'ADMIS':'AJOURNE')+'</span></div>'+'<div class="history-attempt-stats"><div>'+a.score+'/25</div><div>'+a.errors+' erreur(s)</div><div>'+Math.floor(a.time/60)+'min '+a.time%60+'s</div></div>';
            body.appendChild(att);
        });
        card.appendChild(header); card.appendChild(body); c.appendChild(card);
    });
}
