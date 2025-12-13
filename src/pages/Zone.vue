<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const mapContainer = ref(null)
let map = null

const departements = [
  { nom: 'Tarn-et-Garonne', code: '82', principal: true },
  { nom: 'Haute-Garonne', code: '31', principal: false },
  { nom: 'Tarn', code: '81', principal: false },
  { nom: 'Lot', code: '46', principal: false },
  { nom: 'Gers', code: '32', principal: false }
]

const villes = [
  { nom: 'Montauban', lat: 44.0176, lng: 1.3554, principal: true },
  { nom: 'Toulouse', lat: 43.6047, lng: 1.4442, principal: false },
  { nom: 'Albi', lat: 43.9298, lng: 2.1480, principal: false },
  { nom: 'Cahors', lat: 44.4475, lng: 1.4408, principal: false },
  { nom: 'Auch', lat: 43.6465, lng: 0.5855, principal: false },
  { nom: 'Castelsarrasin', lat: 44.0403, lng: 1.1067, principal: false },
  { nom: 'Moissac', lat: 44.1053, lng: 1.0853, principal: false },
  { nom: 'Caussade', lat: 44.1608, lng: 1.5369, principal: false },
  { nom: 'Gaillac', lat: 43.9014, lng: 1.8967, principal: false },
]

// Centre de la zone (Montauban)
const centerLat = 44.0176
const centerLng = 1.3554

onMounted(async () => {
  // Charger Leaflet dynamiquement
  if (!window.L) {
    // CSS Leaflet
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)

    // JS Leaflet
    await new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
      script.onload = resolve
      document.head.appendChild(script)
    })
  }

  // Initialiser la carte
  map = window.L.map(mapContainer.value, {
    center: [centerLat, centerLng],
    zoom: 8,
    scrollWheelZoom: false
  })

  // Tuiles sombres (style dark)
  window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 19
  }).addTo(map)

  // Zone d'intervention (cercle)
  window.L.circle([centerLat, centerLng], {
    color: '#f59e0b',
    fillColor: '#f59e0b',
    fillOpacity: 0.1,
    radius: 80000, // 80km
    weight: 2
  }).addTo(map)

  // Marqueurs pour les villes
  villes.forEach(ville => {
    const icon = window.L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background: ${ville.principal ? '#f59e0b' : 'rgba(255,255,255,0.9)'};
          color: ${ville.principal ? '#000' : '#333'};
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: ${ville.principal ? '700' : '500'};
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        ">${ville.nom}</div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0]
    })

    window.L.marker([ville.lat, ville.lng], { icon }).addTo(map)
  })

  // Marqueur principal Montauban
  const mainIcon = window.L.divIcon({
    className: 'main-marker',
    html: `
      <div style="
        width: 20px;
        height: 20px;
        background: #f59e0b;
        border: 3px solid #fff;
        border-radius: 50%;
        box-shadow: 0 2px 10px rgba(245, 158, 11, 0.5);
      "></div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  })

  window.L.marker([centerLat, centerLng], { icon: mainIcon }).addTo(map)
})
</script>

<template>
  <div class="pt-32 sm:pt-40 pb-20 px-4 sm:px-6">
    <!-- Background effects -->
    <div class="fixed top-40 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold font-display mb-4">
          Zone d'intervention
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Basés à <span class="text-amber-400 font-medium">Montauban</span>, nous intervenons dans un rayon de 80km couvrant 5 départements d'Occitanie.
        </p>
      </div>

      <!-- Carte -->
      <div class="glass-panel rounded-3xl overflow-hidden mb-12">
        <div 
          ref="mapContainer" 
          class="w-full h-[400px] sm:h-[500px]"
        ></div>
      </div>

      <!-- Grille infos -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <!-- Départements -->
        <div class="glass-panel rounded-3xl p-6 sm:p-8">
          <h2 class="text-xl font-bold mb-6 flex items-center gap-3">
            <span class="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">📍</span>
            Départements couverts
          </h2>
          
          <div class="space-y-3">
            <div 
              v-for="dept in departements" 
              :key="dept.code"
              class="flex items-center gap-4 p-3 rounded-xl transition-all"
              :class="dept.principal ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-white/5'"
            >
              <span 
                class="text-2xl font-bold font-display w-12 text-center"
                :class="dept.principal ? 'text-amber-400' : 'text-gray-500'"
              >
                {{ dept.code }}
              </span>
              <div class="flex-1">
                <div class="font-medium text-white">{{ dept.nom }}</div>
                <div v-if="dept.principal" class="text-xs text-amber-400">📌 Siège – Intervention prioritaire</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Infos pratiques -->
        <div class="space-y-6">
          <!-- Adresse -->
          <div class="glass-panel rounded-3xl p-6 sm:p-8">
            <h2 class="text-xl font-bold mb-4 flex items-center gap-3">
              <span class="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">🏠</span>
              Notre adresse
            </h2>
            <div class="text-gray-400">
              <p class="font-medium text-white mb-1">Goudronnage Occitanie</p>
              <p>251 chemin Ernest Laplace</p>
              <p>82000 Montauban</p>
            </div>
          </div>

          <!-- Contact rapide -->
          <div class="glass-panel rounded-3xl p-6 sm:p-8 border-l-4 border-l-amber-500">
            <h2 class="text-xl font-bold mb-4">Contactez-nous</h2>
            <div class="space-y-3">
              <a 
                href="tel:0661628981" 
                class="flex items-center gap-3 text-amber-400 hover:text-amber-300 transition"
              >
                <span class="text-xl">📞</span>
                <span class="text-lg font-medium">06 61 62 89 81</span>
              </a>
              <a 
                href="mailto:goudronnageoccitanie.82@gmail.com" 
                class="flex items-center gap-3 text-gray-400 hover:text-white transition text-sm"
              >
                <span class="text-xl">✉️</span>
                <span class="break-all">goudronnageoccitanie.82@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Villes principales -->
      <div class="glass-panel rounded-3xl p-6 sm:p-8 mb-12">
        <h2 class="text-xl font-bold mb-6 flex items-center gap-3">
          <span class="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">🏘️</span>
          Quelques villes où nous intervenons
        </h2>
        
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="ville in villes" 
            :key="ville.nom"
            class="px-4 py-2 rounded-full text-sm transition"
            :class="ville.principal 
              ? 'bg-amber-500 text-black font-bold' 
              : 'bg-white/5 border border-white/10 text-gray-300 hover:border-amber-500/50'"
          >
            {{ ville.nom }}
          </span>
          <span class="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-gray-500">
            et bien d'autres...
          </span>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center glass-panel rounded-3xl p-8 sm:p-12">
        <h2 class="text-2xl sm:text-3xl font-bold font-display mb-4">
          Vous êtes dans notre zone ?
        </h2>
        <p class="text-gray-400 mb-8 max-w-xl mx-auto">
          Demandez un devis gratuit et sans engagement. Nous nous déplaçons pour étudier votre projet.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink 
            to="/contact" 
            class="bg-amber-500 text-black hover:bg-amber-400 font-bold text-base py-4 px-8 rounded-xl transition duration-300 shadow-lg shadow-amber-500/20"
          >
            Demander un devis gratuit →
          </RouterLink>
          <a 
            href="tel:0661628981" 
            class="glass-panel text-white hover:border-amber-500/50 font-medium text-base py-4 px-8 rounded-xl transition duration-300"
          >
            📞 06 61 62 89 81
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Fix pour les marqueurs Leaflet */
:deep(.leaflet-marker-icon) {
  background: transparent !important;
  border: none !important;
}

:deep(.leaflet-container) {
  background: #1a1a1a;
  font-family: 'Inter', sans-serif;
}

:deep(.leaflet-control-attribution) {
  background: rgba(0, 0, 0, 0.7) !important;
  color: #666 !important;
  font-size: 10px;
}

:deep(.leaflet-control-attribution a) {
  color: #888 !important;
}
</style>
