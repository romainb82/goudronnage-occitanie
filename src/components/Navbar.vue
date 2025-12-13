<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-40 transition-all duration-300" :class="isScrolled ? 'py-2' : 'py-4'">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div 
        class="glass-panel rounded-2xl px-4 sm:px-6 py-3 flex justify-between items-center shadow-2xl transition-all duration-300"
      >
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2 sm:gap-3" @click="closeMobileMenu">
          <img 
            src="/img/logo.webp" 
            alt="Goudronnage Occitanie" 
            class="h-10 sm:h-20 w-auto"
          >
        </RouterLink>
        
        <!-- Navigation Desktop -->
        <div class="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <RouterLink to="/" class="hover:text-white transition" active-class="text-white">À propos</RouterLink>
          <RouterLink to="/zone" class="hover:text-white transition" active-class="text-white">Zone d'intervention</RouterLink>
          <RouterLink to="/contact" class="hover:text-white transition" active-class="text-white">Nous contacter</RouterLink>
        </div>
        
        <!-- CTA Desktop -->
        <RouterLink 
          to="/contact" 
          class="hidden md:block bg-amber-500 text-black hover:bg-amber-400 font-bold text-sm py-2 px-5 rounded-full transition duration-300"
        >
          Devis gratuit →
        </RouterLink>

        <!-- Burger Menu Mobile -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 text-white"
          aria-label="Menu"
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="isMobileMenuOpen"
        class="md:hidden glass-panel rounded-2xl mt-2 p-4 shadow-2xl"
      >
        <div class="flex flex-col gap-4">
          <RouterLink 
            to="/" 
            class="text-gray-300 hover:text-white transition py-2"
            @click="closeMobileMenu"
          >
            À propos
          </RouterLink>
          <RouterLink 
            to="/zone" 
            class="text-gray-300 hover:text-white transition py-2"
            @click="closeMobileMenu"
          >
            Zone d'intervention
          </RouterLink>
          <RouterLink 
            to="/contact" 
            class="bg-amber-500 text-black font-bold py-3 px-4 rounded-xl text-center transition hover:bg-amber-400"
            @click="closeMobileMenu"
          >
            Nous contacter
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
