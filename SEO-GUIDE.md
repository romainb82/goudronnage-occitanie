# Guide SEO - Goudronnage Occitanie

## ✅ Ce qui est déjà fait

### Meta Tags (index.html)
- [x] Title optimisé avec mots-clés + localisation
- [x] Meta description (155 caractères max)
- [x] Meta keywords
- [x] Canonical URL
- [x] Robots meta
- [x] Geo tags (SEO local)
- [x] Open Graph (Facebook, LinkedIn)
- [x] Twitter Card
- [x] Theme color

### Données Structurées (JSON-LD)
- [x] LocalBusiness (nom, adresse, téléphone, horaires)
- [x] Service (type de service, zone couverte)
- [x] BreadcrumbList (fil d'ariane)
- [x] GeoCoordinates (coordonnées GPS)
- [x] AreaServed (départements couverts)

### Fichiers SEO
- [x] sitemap.xml
- [x] robots.txt
- [x] site.webmanifest (PWA)

### Router
- [x] Meta title dynamique par page
- [x] Meta description dynamique par page
- [x] Canonical dynamique
- [x] Page 404 personnalisée

---

## 🔧 Ce que TU dois faire

### 1. Créer l'image Open Graph (OBLIGATOIRE)

Crée une image `og-image.jpg` de **1200x630 pixels** avec :
- Le logo
- "Goudronnage Occitanie"
- "Gravillonnage - Enrobé - Allées"
- Une photo de réalisation en fond

**Outils gratuits :**
- [Canva](https://canva.com) - Template "Facebook Post"
- [Figma](https://figma.com)

Place le fichier dans `/public/og-image.jpg`

### 2. Créer les favicons (OBLIGATOIRE)

Va sur [favicon.io](https://favicon.io/favicon-converter/) :
1. Upload le logo
2. Télécharge le pack
3. Place les fichiers dans `/public/` :
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`

### 3. Mettre à jour le nom de domaine

Si tu changes de domaine, remplace partout dans le code :
```
goudronnage-occitanie.fr → ton-nouveau-domaine.fr
```

Fichiers à modifier :
- `index.html` (canonical, og:url, JSON-LD)
- `src/router/index.js` (siteUrl)
- `public/sitemap.xml`
- `public/robots.txt`
- `supabase/functions/send-email/index.ts` (CORS)

---

## 📊 Après le déploiement

### 1. Google Search Console (GRATUIT - OBLIGATOIRE)

1. Va sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajoute ta propriété (ton domaine)
3. Vérifie avec la méthode DNS (ajoute un enregistrement TXT)
4. Soumets ton sitemap : `https://ton-domaine.fr/sitemap.xml`

### 2. Google Business Profile (GRATUIT - TRÈS IMPORTANT)

1. Va sur [business.google.com](https://business.google.com)
2. Crée ta fiche entreprise
3. Remplis TOUT :
   - Nom exact : "Goudronnage Occitanie"
   - Catégorie : "Entreprise de goudronnage" ou "Entrepreneur en travaux publics"
   - Adresse : 251 chemin Ernest Laplace, 82000 Montauban
   - Téléphone : 06 61 62 89 81
   - Site web : https://ton-domaine.fr
   - Horaires
   - Photos de réalisations (minimum 10)
   - Description avec mots-clés

### 3. Bing Webmaster Tools (GRATUIT)

1. Va sur [bing.com/webmasters](https://www.bing.com/webmasters)
2. Ajoute ton site
3. Soumets le sitemap

### 4. Pages Jaunes (GRATUIT)

1. Va sur [pagesjaunes.fr](https://www.pagesjaunes.fr)
2. Inscris l'entreprise
3. Lien vers le site

---

## 🎯 Mots-clés ciblés

### Principaux (forte intention)
- goudronnage montauban
- gravillonnage montauban
- enrobé montauban
- goudronnage 82
- goudronnage tarn et garonne

### Secondaires
- goudronnage toulouse
- gravillonnage occitanie
- allée gravillonnée prix
- refaire allée maison
- goudronner une cour

### Longue traîne
- entreprise goudronnage montauban
- prix goudronnage allée 82
- goudronnage parking entreprise toulouse
- gravillonnage chemin accès

---

## 📈 Suivi des performances

### Métriques à suivre (Google Search Console)
- Impressions
- Clics
- Position moyenne
- CTR (taux de clic)

### Objectifs réalistes
- Mois 1-2 : Indexation complète
- Mois 3-4 : Premières positions locales
- Mois 6+ : Top 5 sur "goudronnage montauban"

---

## 🚀 Pour aller plus loin (optionnel)

### Ajouter des avis Google
- Demande à chaque client de laisser un avis
- Réponds à TOUS les avis (positifs et négatifs)

### Créer du contenu (blog)
- "Comment entretenir son allée gravillonnée"
- "Quel revêtement choisir pour sa cour"
- "Prix goudronnage 2025 : guide complet"

### Backlinks locaux
- Annuaires locaux (mairie, CCI, etc.)
- Partenaires (paysagistes, maçons)
- Presse locale

---

## ❓ Questions fréquentes SEO

**Q: Combien de temps pour être visible sur Google ?**
R: 2-4 semaines pour l'indexation, 3-6 mois pour bien se positionner en local.

**Q: Faut-il payer Google ?**
R: Non, le référencement naturel est gratuit. Google Ads est payant mais optionnel.

**Q: Comment savoir si ça marche ?**
R: Google Search Console te montrera tes positions et clics.
