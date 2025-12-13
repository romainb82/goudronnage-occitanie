# Goudronnage Occitanie

Site vitrine moderne avec Vue 3 + Tailwind + Supabase + Mailjet.

## Stack

- **Frontend** : Vue 3, Vue Router, Vite, Tailwind CSS
- **Backend** : Supabase (Storage + Edge Functions)
- **Email** : Mailjet
- **Hébergement** : Render

---

## Sécurité

### Vulnérabilités corrigées

1. **XSS (Cross-Site Scripting)** ✅
   - Toutes les données utilisateur sont échappées avec `escapeHtml()` avant insertion dans le HTML
   - Validation côté serveur des entrées (téléphone, email)

2. **CORS trop permissif** ✅
   - CORS restreint aux domaines autorisés uniquement
   - Liste blanche : `goudronnage-occitanie.fr` et `localhost` (dev)

---

## Installation locale

```bash
# Cloner le projet
git clone <repo>
cd goudronnage-occitanie

# Installer les dépendances
npm install

# Copier les variables d'environnement
cp .env.example .env

# Lancer le dev server
npm run dev
```

---

## Configuration Supabase

### 1. Créer un projet Supabase

1. Va sur [supabase.com](https://supabase.com)
2. Crée un nouveau projet
3. Récupère l'URL et la clé `anon` dans Settings > API
4. Mets-les dans ton fichier `.env`

### 2. Configurer le Storage (pour les images)

1. Va dans Storage
2. Crée un bucket `images` (public)
3. Upload tes images de réalisations

### 3. Déployer l'Edge Function

```bash
# Installer Supabase CLI
npm install -g supabase

# Login
supabase login

# Lier au projet
supabase link --project-ref <ton-project-ref>

# Définir les secrets Mailjet
supabase secrets set MAILJET_API_KEY=xxx
supabase secrets set MAILJET_SECRET_KEY=xxx
supabase secrets set RECIPIENT_EMAIL=goudronnageoccitanie.82@gmail.com

# Déployer la fonction
supabase functions deploy send-email
```

---

## Configuration Mailjet

1. Crée un compte sur [mailjet.com](https://www.mailjet.com)
2. Va dans Account Settings > API Keys
3. Copie l'API Key et le Secret Key
4. Configure-les dans Supabase (voir ci-dessus)

---

## Déploiement sur Render

### 1. Créer un Static Site

1. Va sur [render.com](https://render.com)
2. New > Static Site
3. Connecte ton repo GitHub
4. Configure :
   - **Build Command** : `npm run build`
   - **Publish Directory** : `dist`

### 2. Variables d'environnement

Dans Render, ajoute :
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### 3. Redirection SPA

Crée un fichier `_redirects` dans le dossier `public/` :
```
/*    /index.html   200
```

### 4. Déployer

Render déploiera automatiquement à chaque push sur main.

---

## Structure du projet

```
goudronnage-occitanie/
├── src/
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── ContactForm.vue
│   │   └── Footer.vue
│   ├── pages/
│   │   ├── Home.vue
│   │   ├── Zone.vue
│   │   ├── Contact.vue
│   │   └── MentionsLegales.vue
│   ├── router/
│   │   └── index.js
│   ├── lib/
│   │   └── supabase.js
│   ├── assets/
│   │   └── main.css
│   ├── App.vue
│   └── main.js
├── supabase/
│   └── functions/
│       └── send-email/
│           └── index.ts    (avec protections XSS + CORS)
├── public/
│   └── _redirects
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil avec réalisations |
| `/zone` | Zone d'intervention |
| `/contact` | Formulaire de contact |
| `/mentions-legales` | Mentions légales |

---

## Commandes

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de dev |
| `npm run build` | Build pour la production |
| `npm run preview` | Prévisualise le build |

---

## Coûts

| Service | Coût mensuel |
|---------|--------------|
| Render (Static) | Gratuit |
| Supabase (Free tier) | Gratuit |
| Mailjet (6000 mails/mois) | Gratuit |
| **Total** | **0€** |

---

## License

MIT
