<script setup>
import { RouterLink } from 'vue-router'

const realisations = [
  {
    image: '/img/goudronnage-1.jpeg',
    title: 'Cour de maison en gravillonnage',
    alt: 'Gravillonnage cour maison Montauban'
  },
  {
    image: '/img/goudronnage-2.jpeg',
    title: 'Aménagement de cour en gravier stabilisé',
    alt: 'Aménagement cour gravier stabilisé Tarn-et-Garonne'
  },
  {
    image: '/img/goudronnage-3.jpeg',
    title: 'Création d\'une cour de maison en gravillons',
    alt: 'Création cour gravillons Occitanie'
  },
  {
    image: '/img/goudronnage-4.jpeg',
    title: 'Reprise d\'une tranchée',
    alt: 'Reprise tranchée goudronnage'
  },
  {
    image: '/img/goudronnage-5.jpeg',
    title: 'Cour d\'habitation finition gravillonnée',
    alt: 'Finition gravillonnée cour habitation Montauban'
  }
]

</script>

<template>
  <!-- Hero Section -->
  <header class="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6">
    <!-- Background glow -->
    <div class="absolute top-20 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-500/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" aria-hidden="true"></div>
    <div class="absolute bottom-0 left-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-amber-600/5 rounded-full blur-[80px] pointer-events-none" aria-hidden="true"></div>

    <div class="max-w-5xl mx-auto text-center relative z-10">
      <!-- H1 optimisé SEO -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight mb-6">
        Goudronnage et gravillonnage 
        <span class="text-gradient">à Montauban et en Occitanie</span>
      </h1>
      
      <p class="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-8">
        <strong class="text-white">Goudronnage Occitanie</strong> est votre spécialiste pour la création et la rénovation de 
        <span class="text-amber-400">cours, allées, chemins et parkings</span> dans le Tarn-et-Garonne (82) et les départements limitrophes. 
        Nous réalisons vos travaux de <strong class="text-white">goudronnage</strong> et <strong class="text-white">gravillonnage</strong> avec un soin particulier porté à la préparation des sols, à l'esthétique et à la durabilité.
      </p>

      <p class="text-gray-500 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
        Artisan local basé à Montauban, nous intervenons rapidement pour étudier votre projet et vous proposer un <strong class="text-gray-400">devis gratuit</strong> et détaillé, sans engagement.
      </p>

      <!-- CTA -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <RouterLink 
          to="/contact" 
          class="w-full sm:w-auto bg-amber-500 text-black hover:bg-amber-400 font-bold text-base py-4 px-8 rounded-xl transition duration-300 shadow-lg shadow-amber-500/20"
        >
          Demander un devis gratuit →
        </RouterLink>
        <a 
          href="tel:0661628981" 
          class="w-full sm:w-auto glass-panel text-white hover:border-amber-500/50 font-medium text-base py-4 px-8 rounded-xl transition duration-300 flex items-center justify-center gap-2"
          aria-label="Appeler Goudronnage Occitanie"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          06 61 62 89 81
        </a>
      </div>

      <!-- Accroche -->
      <p class="text-amber-400 font-medium italic text-sm sm:text-base">
        "Osez faire un devis, vous pourriez être agréablement surpris."
      </p>
    </div>
  </header>

  <!-- Réalisations Section -->
  <section class="px-4 sm:px-6 pb-20 sm:pb-32" aria-labelledby="realisations-title">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 id="realisations-title" class="text-3xl sm:text-4xl font-bold font-display mb-4">
          Nos réalisations en Tarn-et-Garonne
        </h2>
        <p class="text-gray-400 max-w-xl mx-auto">
          Découvrez nos travaux de goudronnage et gravillonnage réalisés autour de Montauban.
        </p>
      </div>

      <!-- Galerie -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <article 
          v-for="(realisation, index) in realisations" 
          :key="index"
          class="group relative overflow-hidden rounded-2xl aspect-[4/3] glass-panel"
        >
          <img 
            :src="realisation.image" 
            :alt="realisation.alt"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            width="400"
            height="300"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h3 class="text-white font-medium text-sm sm:text-base">{{ realisation.title }}</h3>
          </div>
        </article>
      </div>

      <!-- CTA après galerie -->
      <div class="text-center mt-12">
        <RouterLink 
          to="/contact" 
          class="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition"
        >
          Vous avez un projet similaire ? Demandez votre devis gratuit
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- Zone d'intervention -->
  <section class="px-4 sm:px-6 pb-20 sm:pb-32" aria-labelledby="zone-title">
    <div class="max-w-5xl mx-auto">
      <div class="glass-panel rounded-3xl p-8 sm:p-12">
        <div class="text-center mb-8">
          <h2 id="zone-title" class="text-2xl sm:text-3xl font-bold font-display mb-4">
            Zone d'intervention en Occitanie
          </h2>
          <p class="text-gray-400">
            Nous intervenons dans le <strong class="text-white">Tarn-et-Garonne (82)</strong> et les départements limitrophes.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <span class="px-4 py-2 rounded-full bg-amber-500 text-black font-bold text-sm">
            Tarn-et-Garonne (82)
          </span>
          <span class="px-4 py-2 rounded-full bg-white/10 text-gray-300 text-sm">
            Haute-Garonne (31)
          </span>
          <span class="px-4 py-2 rounded-full bg-white/10 text-gray-300 text-sm">
            Tarn (81)
          </span>
          <span class="px-4 py-2 rounded-full bg-white/10 text-gray-300 text-sm">
            Lot (46)
          </span>
          <span class="px-4 py-2 rounded-full bg-white/10 text-gray-300 text-sm">
            Gers (32)
          </span>
        </div>

        <p class="text-center text-gray-500 text-sm mb-6">
          Montauban, Toulouse, Albi, Cahors, Auch, Castelsarrasin, Moissac, Caussade, Gaillac...
        </p>

        <div class="text-center">
          <RouterLink 
            to="/zone" 
            class="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition"
          >
            Voir notre zone d'intervention détaillée
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Avantages -->
  <section class="px-4 sm:px-6 pb-20 sm:pb-32" aria-labelledby="avantages-title">
    <div class="max-w-5xl mx-auto">
      <h2 id="avantages-title" class="sr-only">Pourquoi choisir Goudronnage Occitanie</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article class="glass-panel rounded-2xl p-6 text-center">
          <div class="text-4xl mb-4" aria-hidden="true">🎯</div>
          <h3 class="font-bold text-white mb-2">Devis gratuit</h3>
          <p class="text-gray-400 text-sm">Étude personnalisée de votre projet de goudronnage, sans engagement.</p>
        </article>
        <article class="glass-panel rounded-2xl p-6 text-center">
          <div class="text-4xl mb-4" aria-hidden="true">⚡</div>
          <h3 class="font-bold text-white mb-2">Intervention rapide</h3>
          <p class="text-gray-400 text-sm">Nous intervenons rapidement sur toute l'Occitanie pour vos travaux.</p>
        </article>
        <article class="glass-panel rounded-2xl p-6 text-center">
          <div class="text-4xl mb-4" aria-hidden="true">✨</div>
          <h3 class="font-bold text-white mb-2">Finition soignée</h3>
          <p class="text-gray-400 text-sm">Travail de qualité avec attention aux détails et préparation des sols.</p>
        </article>
      </div>
    </div>
  </section>

  <!-- CTA Final -->
  <section class="px-4 sm:px-6 pb-20 sm:pb-32" aria-labelledby="cta-title">
    <div class="max-w-4xl mx-auto">
      <div class="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 sm:p-12 text-center text-black">
        <h2 id="cta-title" class="text-2xl sm:text-3xl font-bold font-display mb-4">
          Prêt à transformer votre extérieur ?
        </h2>
        <p class="text-black/70 mb-8 max-w-xl mx-auto">
          Contactez-nous dès maintenant pour un devis gratuit. Nous étudions votre projet et vous conseillons sur la meilleure solution.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink 
            to="/contact" 
            class="bg-black text-white hover:bg-gray-900 font-bold text-base py-4 px-8 rounded-xl transition duration-300"
          >
            Demander un devis gratuit
          </RouterLink>
          <a 
            href="tel:0661628981" 
            class="bg-white/20 text-black hover:bg-white/30 font-bold text-base py-4 px-8 rounded-xl transition duration-300"
          >
            📞 06 61 62 89 81
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
