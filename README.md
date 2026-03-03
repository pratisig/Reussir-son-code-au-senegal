# Code de la Route Sénégal 🇸🇳

## 🎯 Présentation

Application web progressive (PWA) pour la préparation à l'examen du permis de conduire au Sénégal.

### ✨ Fonctionnalités

#### 🎮 Mode Quiz
- 12 séries complètes (B1 à B12)
- 25 questions par série
- Correction détaillée
- Chronomètre intégré
- Maximum 6 erreurs pour réussir

#### 📊 Mode Révision
- Revoir uniquement les questions ratées
- Ciblé par série
- Progression sauvegardée

#### 🎯 Examen Blanc
- 25 questions aléatoires de toutes les séries
- Conditions réelles d'examen
- Score et temps

#### 📊 Historique & Statistiques
- Suivi de toutes vos tentatives
- Graphiques de progression
- Meilleurs scores par série

#### 💳 Système Premium
- B1 & B2 gratuites
- B3 à B12 : 2500 FCFA/an
- Paiement Wave
- 3 appareils simultanés

#### 📱 PWA (Progressive Web App)
- Installation sur mobile
- Mode offline
- Notifications
- Thème Sénégal

## 🚀 Déploiement

Voir [DEPLOY.md](DEPLOY.md) pour les instructions complètes.

## 🛠️ Technologies

- HTML5 / CSS3 / JavaScript vanilla
- Firebase Auth + Firestore
- Service Worker (mode offline)
- Responsive design

## 📂 Structure

```
├── index.html          # Application principale
├── login.html          # Authentification
├── admin.html          # Panel admin
├── js/
│   ├── config.js       # Config Firebase
│   └── premium.js      # Gestion premium
├── images/             # Questions (B1_Q1.jpg...)
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker
├── firebase.json       # Config hosting
└── firestore.rules     # Règles sécurité
```

## 👥 Crédits

Développé pour aider les candidats au permis de conduire au Sénégal 🇸🇳
