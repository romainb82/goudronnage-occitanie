<script setup>
import { RouterLink } from 'vue-router'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <!-- Infos entreprise -->
        <div>
          <h3 class="font-bold text-white text-lg mb-4">Goudronnage Occitanie</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            Goudronnage de cours, allées, chemins et parkings autour de Montauban et en Occitanie.
          </p>
          <p class="text-amber-400 text-sm mt-3 font-medium">
            Artisan local – Devis gratuit
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="font-bold text-white text-lg mb-4">Navigation</h3>
          <nav class="flex flex-col gap-2">
            <RouterLink to="/" class="text-gray-400 hover:text-white transition text-sm">À propos</RouterLink>
            <RouterLink to="/zone" class="text-gray-400 hover:text-white transition text-sm">Zone d'intervention</RouterLink>
            <RouterLink to="/contact" class="text-gray-400 hover:text-white transition text-sm">Nous contacter</RouterLink>
            <RouterLink to="/mentions-legales" class="text-gray-400 hover:text-white transition text-sm">Mentions légales</RouterLink>
          </nav>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-bold text-white text-lg mb-4">Contact</h3>
          <div class="space-y-2 text-sm">
            <p class="text-gray-400">
              251 chemin Ernest Laplace<br>
              82000 Montauban
            </p>
            <p>
              <a href="tel:0661628981" class="text-amber-400 hover:text-amber-300 transition">
                06 61 62 89 81
              </a>
            </p>
            <p>
              <a href="mailto:goudronnageoccitanie.82@gmail.com" class="text-amber-400 hover:text-amber-300 transition break-all">
                goudronnageoccitanie.82@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <!-- Zone d'intervention -->
      <div class="border-t border-white/10 pt-8 mb-8">
        <p class="text-gray-500 text-sm text-center">
          Intervention en <span class="text-gray-400">Tarn-et-Garonne</span>, <span class="text-gray-400">Tarn</span>, <span class="text-gray-400">Haute-Garonne</span>, <span class="text-gray-400">Lot</span> et <span class="text-gray-400">Gers</span>.
        </p>
      </div>

      <!-- Copyright -->
      <div class="text-center text-gray-600 text-sm">
        <p>&copy; {{ currentYear }} Goudronnage Occitanie – Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>
