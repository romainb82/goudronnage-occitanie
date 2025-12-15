import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Zone from '../pages/Zone.vue'
import Contact from '../pages/Contact.vue'
import MentionsLegales from '../pages/MentionsLegales.vue'

// Configuration SEO par page
const seoConfig = {
  siteName: 'Goudronnage Occitanie',
  siteUrl: 'https://goudronnage-occitanie.fr',
  defaultImage: 'https://goudronnage-occitanie.fr/og-image.jpg'
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Goudronnage Occitanie | Gravillonnage & Enrobé à Montauban (82)',
      description: 'Goudronnage Occitanie : spécialiste du goudronnage, gravillonnage et enrobé pour cours, allées et parkings à Montauban et en Occitanie. Devis gratuit ☎ 06 61 62 89 81',
      canonical: '/'
    }
  },
  {
    path: '/zone',
    name: 'zone',
    component: Zone,
    meta: {
      title: "Zone d'intervention | Goudronnage Occitanie - Montauban, Toulouse, Albi",
      description: "Goudronnage Occitanie intervient dans le Tarn-et-Garonne (82), Haute-Garonne (31), Tarn (81), Lot (46) et Gers (32). Montauban, Toulouse, Albi, Cahors, Auch.",
      canonical: '/zone'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: 'Devis Gratuit Goudronnage | Contact - Goudronnage Occitanie',
      description: "Demandez votre devis gratuit pour vos travaux de goudronnage et gravillonnage. Contactez Goudronnage Occitanie au 06 61 62 89 81. Réponse rapide.",
      canonical: '/contact'
    }
  },
  {
    path: '/mentions-legales',
    name: 'mentions',
    component: MentionsLegales,
    meta: {
      title: 'Mentions Légales | Goudronnage Occitanie',
      description: "Mentions légales du site Goudronnage Occitanie. Informations sur l'éditeur, l'hébergeur et la politique de confidentialité.",
      canonical: '/mentions-legales',
      robots: 'noindex, follow' // Pas besoin d'indexer les mentions légales
    }
  },
  {
    // Page 404
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../pages/NotFound.vue'),
    meta: {
      title: 'Page non trouvée | Goudronnage Occitanie',
      description: 'La page que vous recherchez n\'existe pas.',
      robots: 'noindex, nofollow'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Mise à jour des meta tags à chaque navigation
router.beforeEach((to, from, next) => {
  // Title
  document.title = to.meta.title || `${seoConfig.siteName}`

  // Meta description
  let descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', to.meta.description || '')
  }

  // Canonical URL
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  if (canonicalLink) {
    canonicalLink.setAttribute('href', `${seoConfig.siteUrl}${to.meta.canonical || to.path}`)
  }

  // Open Graph URL
  let ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) {
    ogUrl.setAttribute('content', `${seoConfig.siteUrl}${to.meta.canonical || to.path}`)
  }

  // Open Graph Title
  let ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) {
    ogTitle.setAttribute('content', to.meta.title || seoConfig.siteName)
  }

  // Open Graph Description
  let ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc) {
    ogDesc.setAttribute('content', to.meta.description || '')
  }

  // Twitter Title
  let twitterTitle = document.querySelector('meta[name="twitter:title"]')
  if (twitterTitle) {
    twitterTitle.setAttribute('content', to.meta.title || seoConfig.siteName)
  }

  // Twitter Description
  let twitterDesc = document.querySelector('meta[name="twitter:description"]')
  if (twitterDesc) {
    twitterDesc.setAttribute('content', to.meta.description || '')
  }

  // Robots
  let robotsMeta = document.querySelector('meta[name="robots"]')
  if (robotsMeta) {
    robotsMeta.setAttribute('content', to.meta.robots || 'index, follow')
  }

  next()
})

export default router
