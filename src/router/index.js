import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Zone from '../pages/Zone.vue'
import Contact from '../pages/Contact.vue'
import MentionsLegales from '../pages/MentionsLegales.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Goudronnage Occitanie | Gravillonnage cours et allées' }
  },
  {
    path: '/zone',
    name: 'zone',
    component: Zone,
    meta: { title: "Zone d'intervention | Goudronnage Occitanie" }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { title: 'Nous contacter | Goudronnage Occitanie' }
  },
  {
    path: '/mentions-legales',
    name: 'mentions',
    component: MentionsLegales,
    meta: { title: 'Mentions légales | Goudronnage Occitanie' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Mise à jour du titre de la page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Goudronnage Occitanie'
  next()
})

export default router
