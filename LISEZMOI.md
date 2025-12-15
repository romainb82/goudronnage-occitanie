# Fichiers modifiés - À intégrer dans ton projet

## Liste des fichiers

### 🔒 Sécurité (IMPORTANT)

| Fichier | Emplacement | Modif |
|---------|-------------|-------|
| `supabase/functions/send-email/index.ts` | Racine projet | XSS + CORS corrigés |

### 🔍 SEO

| Fichier | Emplacement | Contenu |
|---------|-------------|---------|
| `index.html` | Racine projet | Meta tags, Open Graph, JSON-LD |
| `src/router/index.js` | src/router/ | Meta dynamiques par page |
| `public/sitemap.xml` | public/ | Sitemap pour Google |
| `public/robots.txt` | public/ | Instructions bots |
| `public/site.webmanifest` | public/ | PWA/mobile |

### 📄 Pages

| Fichier | Emplacement | Contenu |
|---------|-------------|---------|
| `src/pages/Home.vue` | src/pages/ | Accueil optimisé SEO |
| `src/pages/Zone.vue` | src/pages/ | Carte Leaflet |
| `src/pages/NotFound.vue` | src/pages/ | Page 404 |

### 📖 Documentation

| Fichier | Contenu |
|---------|---------|
| `SEO-GUIDE.md` | Guide complet SEO + checklist |

---

## Comment intégrer

1. **Remplace** `index.html` par le nouveau
2. **Remplace** `src/router/index.js` par le nouveau
3. **Remplace** `src/pages/Home.vue` (ou garde le tien et ajoute juste les balises SEO)
4. **Remplace** `src/pages/Zone.vue` (carte Leaflet)
5. **Ajoute** `src/pages/NotFound.vue`
6. **Ajoute** les 3 fichiers dans `public/`
7. **Remplace** `supabase/functions/send-email/index.ts`

---

## ⚠️ Si tu changes le nom de domaine

Fais un rechercher/remplacer global :
```
goudronnage-occitanie.fr → ton-nouveau-domaine.fr
```

Fichiers concernés :
- index.html
- src/router/index.js
- public/sitemap.xml
- public/robots.txt
- supabase/functions/send-email/index.ts (CORS)
