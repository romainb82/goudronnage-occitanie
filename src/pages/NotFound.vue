<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="pt-32 sm:pt-40 pb-20 px-4 sm:px-6 min-h-[70vh] flex items-center justify-center">
    <div class="text-center max-w-md">
      <div class="text-8xl mb-6">🚧</div>
      <h1 class="text-4xl sm:text-5xl font-bold font-display mb-4">
        Page non trouvée
      </h1>
      <p class="text-gray-400 text-lg mb-8">
        Oups ! Cette page n'existe pas ou a été déplacée.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink 
          to="/" 
          class="bg-amber-500 text-black hover:bg-amber-400 font-bold text-base py-4 px-8 rounded-xl transition duration-300"
        >
          ← Retour à l'accueil
        </RouterLink>
        <RouterLink 
          to="/contact" 
          class="glass-panel text-white hover:border-amber-500/50 font-medium text-base py-4 px-8 rounded-xl transition duration-300"
        >
          Nous contacter
        </RouterLink>
      </div>
    </div>
  </div>
</template>
