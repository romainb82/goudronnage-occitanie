<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <!-- Texture Noise overlay -->
  <div class="bg-noise"></div>
  
  <Navbar />
  
  <main class="min-h-screen">
    <router-view />
  </main>
  
  <Footer />
</template>
