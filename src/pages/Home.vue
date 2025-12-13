<script setup>
import { RouterLink } from 'vue-router'

const realisations = [
  {
    image: '/img/goudronnage-1.jpeg',
    title: 'Cour de maison en gravillonnage'
  },
  {
    image: '/img/goudronnage-2.jpeg',
    title: 'Aménagement de cour en gravier stabilisé'
  },
  {
    image: '/img/goudronnage-3.jpeg',
    title: 'Création d\'une cour de maison en gravillons'
  },
  {
    image: '/img/goudronnage-4.jpeg',
    title: 'Reprise d\'une tranchée'
  },
  {
    image: '/img/goudronnage-5.jpeg',
    title: 'Cour d\'habitation finition gravillonnée'
  }
]
</script>

<template>
  <!-- Hero Section -->
  <header class="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6">
    <!-- Background glow -->
    <div class="absolute top-20 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-500/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-amber-600/5 rounded-full blur-[80px] pointer-events-none"></div>

    <div class="max-w-5xl mx-auto text-center relative z-10">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight mb-6">
        Goudronnage de cours et allées 
        <span class="text-gradient">en Occitanie</span>
      </h1>
      
      <p class="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-8">
        <strong class="text-white">Goudronnage Occitanie</strong> est spécialisée dans la création et la rénovation de 
        <span class="text-amber-400">cours, allées, chemins et parkings</span> pour particuliers, entreprises et collectivités. 
        Nous réalisons vos gravillonnages avec un soin particulier porté à la préparation des sols, à l'esthétique et à la durabilité.
      </p>

      <p class="text-gray-500 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
        Basés en Occitanie, nous intervenons rapidement pour étudier votre projet, vous conseiller sur les solutions techniques les plus adaptées et vous proposer un devis gratuit et détaillé, sans engagement.
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
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  <section class="px-4 sm:px-6 pb-20 sm:pb-32">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold font-display mb-4">Nos réalisations</h2>
        <p class="text-gray-400 max-w-xl mx-auto">
          Parcourez nos réalisations ci-dessous et contactez-nous pour un devis gratuit sur mesure.
        </p>
      </div>

      <!-- Galerie -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div 
          v-for="(realisation, index) in realisations" 
          :key="index"
          class="group relative overflow-hidden rounded-2xl aspect-[4/3] glass-panel"
        >
          <img 
            :src="realisation.image" 
            :alt="realisation.title"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h3 class="text-white font-medium text-sm sm:text-base">{{ realisation.title }}</h3>
          </div>
        </div>
      </div>

      <!-- CTA après galerie -->
      <div class="text-center mt-12">
        <RouterLink 
          to="/contact" 
          class="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition"
        >
          Vous avez un projet similaire ? Contactez-nous
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- Section Avantages -->
  <section class="px-4 sm:px-6 pb-20 sm:pb-32">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="glass-panel rounded-2xl p-6 text-center">
          <div class="text-4xl mb-4">🎯</div>
          <h3 class="font-bold text-white mb-2">Devis gratuit</h3>
          <p class="text-gray-400 text-sm">Étude personnalisée de votre projet, sans engagement.</p>
        </div>
        <div class="glass-panel rounded-2xl p-6 text-center">
          <div class="text-4xl mb-4">⚡</div>
          <h3 class="font-bold text-white mb-2">Intervention rapide</h3>
          <p class="text-gray-400 text-sm">Nous intervenons rapidement sur toute l'Occitanie.</p>
        </div>
        <div class="glass-panel rounded-2xl p-6 text-center">
          <div class="text-4xl mb-4">✨</div>
          <h3 class="font-bold text-white mb-2">Finition soignée</h3>
          <p class="text-gray-400 text-sm">Travail de qualité avec attention aux détails.</p>
        </div>
      </div>
    </div>
  </section>
</template>
