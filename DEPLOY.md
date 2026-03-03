# Guide de Déploiement Firebase Hosting

## 🚀 Déploiement rapide

### Prérequis
```bash
npm install -g firebase-tools
```

### Étapes

1. **Connexion à Firebase**
```bash
firebase login
```

2. **Initialiser le projet (si pas déjà fait)**
```bash
firebase init
```
Choisir:
- Firestore
- Hosting
- Utiliser le projet existant

3. **Déployer**
```bash
firebase deploy
```

Ou déployer uniquement le hosting:
```bash
firebase deploy --only hosting
```

## 🌐 URL d'accès

Après déploiement, votre app sera accessible sur:
```
https://VOTRE-PROJET.web.app
https://VOTRE-PROJET.firebaseapp.com
```

## 📱 Installation PWA

Une fois déployé, les utilisateurs pourront installer l'application comme une app native:

### Android Chrome
1. Ouvrir l'URL dans Chrome
2. Menu → "Ajouter à l'écran d'accueil"
3. L'app s'installe comme une vraie application

### iOS Safari
1. Ouvrir l'URL dans Safari
2. Partager → "Sur l'écran d'accueil"

## 🔧 Fonctionnalités PWA ajoutées

✅ Mode offline (Service Worker)
✅ Installation sur écran d'accueil
✅ Thème personnalisé (vert Sénégal)
✅ Icônes optimisées (192x192, 512x512)
✅ Cache intelligent des ressources

## 🎯 Générer les icônes

Créez deux fichiers PNG:
- `icon-192.png` (192x192px)
- `icon-512.png` (512x512px)

Utilisez le logo du drapeau sénégalais ou un logo personnalisé.

Outils recommandés:
- https://realfavicongenerator.net/
- https://www.pwabuilder.com/imageGenerator

## 🔐 Domaine personnalisé

Pour utiliser votre propre domaine:

1. Firebase Console → Hosting → Ajouter un domaine personnalisé
2. Suivre les instructions pour configurer les DNS
3. Exemple: `code-senegal.com`
