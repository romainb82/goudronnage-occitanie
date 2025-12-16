<script setup>
import { ref, reactive } from 'vue'
import { sendDevisRequest } from '../lib/supabase'

const form = reactive({
  nom: '',
  email: '',
  telephone: '',
  surface: '',
  message: ''
})

const isLoading = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

// Validation téléphone français
const isValidPhone = (phone) => {
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Validation email
const isValidEmail = (email) => {
  if (!email) return true // Email optionnel
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const handleSubmit = async () => {
  // Reset errors
  errorMessage.value = ''

  // Validation
  if (!form.nom.trim()) {
    errorMessage.value = 'Veuillez indiquer votre nom'
    return
  }

  if (!form.telephone.trim()) {
    errorMessage.value = 'Veuillez indiquer votre numéro de téléphone'
    return
  }

  if (!isValidPhone(form.telephone)) {
    errorMessage.value = 'Numéro de téléphone invalide'
    return
  }

  if (!isValidEmail(form.email)) {
    errorMessage.value = 'Adresse email invalide'
    return
  }

  isLoading.value = true

  try {
    await sendDevisRequest({
      nom: form.nom,
      email: form.email,
      telephone: form.telephone,
      surface: form.surface,
      message: form.message
    })
    
    isSuccess.value = true
    
    // Reset form
    form.nom = ''
    form.email = ''
    form.telephone = ''
    form.surface = ''
    form.message = ''
    
  } catch (error) {
    console.error('Erreur:', error)
    errorMessage.value = 'Une erreur est survenue. Veuillez réessayer ou nous appeler directement.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="pt-32 sm:pt-40 pb-20 px-4 sm:px-6">
    <!-- Background effects -->
    <div class="fixed top-40 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold font-display mb-4">
          Nous contacter
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Demandez un devis gratuit et sans engagement. Nous vous répondons rapidement.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <!-- Formulaire -->
        <div class="lg:col-span-3">
          <div class="glass-panel rounded-3xl p-6 sm:p-8">
            <!-- Success message -->
            <div 
              v-if="isSuccess" 
              class="text-center py-12"
            >
              <div class="text-6xl mb-4">✅</div>
              <h2 class="text-2xl font-bold text-white mb-2">Message envoyé !</h2>
              <p class="text-gray-400 mb-6">
                Merci pour votre demande. Nous vous recontacterons très rapidement.
              </p>
              <button 
                @click="isSuccess = false"
                class="text-amber-400 hover:text-amber-300 font-medium transition"
              >
                Envoyer un autre message
              </button>
            </div>

            <!-- Form -->
            <form v-else @submit.prevent="handleSubmit" class="space-y-5">
              <!-- Error message -->
              <div 
                v-if="errorMessage" 
                class="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-4 rounded-xl"
              >
                {{ errorMessage }}
              </div>

              <!-- Nom -->
              <div>
                <label for="nom" class="block text-sm font-medium text-gray-400 mb-2">
                  Nom <span class="text-red-400">*</span>
                </label>
                <input 
                  v-model="form.nom"
                  type="text" 
                  id="nom"
                  placeholder="Votre nom"
                  class="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl p-4 text-base focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                  required
                >
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input 
                  v-model="form.email"
                  type="email" 
                  id="email"
                  placeholder="votre@email.fr"
                  class="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl p-4 text-base focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                >
              </div>

              <!-- Téléphone -->
              <div>
                <label for="telephone" class="block text-sm font-medium text-gray-400 mb-2">
                  Téléphone <span class="text-red-400">*</span>
                </label>
                <input 
                  v-model="form.telephone"
                  type="tel" 
                  id="telephone"
                  placeholder="06 12 34 56 78 "
                  class="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl p-4 text-base focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                  required
                >
              </div>

              <!-- Surface -->
              <div>
                <label for="surface" class="block text-sm font-medium text-gray-400 mb-2">
                  Surface approximative (m²)
                </label>
                <input 
                  v-model="form.surface"
                  type="text" 
                  id="surface"
                  placeholder="Ex: 100 m²"
                  class="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl p-4 text-base focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                >
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-400 mb-2">
                  Décrivez votre projet
                </label>
                <textarea 
                  v-model="form.message"
                  id="message"
                  rows="4"
                  placeholder="Allée carrossable, cour, parking... décrivez votre projet"
                  class="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl p-4 text-base focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition resize-none"
                ></textarea>
              </div>

              <!-- Submit -->
              <button 
                type="submit"
                :disabled="isLoading"
                class="w-full bg-amber-500 text-black font-bold py-4 rounded-xl text-base hover:bg-amber-400 transition shadow-lg shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isLoading" class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi en cours...
                </span>
                <span v-else>Envoyer ma demande</span>
              </button>

              <p class="text-xs text-gray-500 text-center">
                * Champs obligatoires. Vos données ne sont utilisées que pour répondre à votre demande.
              </p>
            </form>
          </div>
        </div>

        <!-- Infos de contact -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Téléphone -->
          <div class="glass-panel rounded-2xl p-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                📞
              </div>
              <div>
                <h3 class="font-bold text-white mb-1">Par téléphone</h3>
                <a href="tel:0661628981" class="text-amber-400 hover:text-amber-300 text-lg font-medium transition">
                  06 61 62 89 81 / 06 46 75 19 15
                </a>
                <p class="text-gray-500 text-sm mt-1">Du lundi au samedi</p>
              </div>
            </div>
          </div>

          <!-- Email -->
          <div class="glass-panel rounded-2xl p-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                ✉️
              </div>
              <div>
                <h3 class="font-bold text-white mb-1">Par email</h3>
                <a href="mailto:goudronnageoccitanie.82@gmail.com" class="text-amber-400 hover:text-amber-300 text-sm font-medium transition break-all">
                  goudronnageoccitanie.82@gmail.com
                </a>
              </div>
            </div>
          </div>

          <!-- Adresse -->
          <div class="glass-panel rounded-2xl p-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                📍
              </div>
              <div>
                <h3 class="font-bold text-white mb-1">Notre adresse</h3>
                <p class="text-gray-400 text-sm">
                  251 chemin Ernest Laplace<br>
                  82000 Montauban
                </p>
              </div>
            </div>
          </div>

          <!-- Zone -->
          <div class="glass-panel rounded-2xl p-6 border-l-4 border-l-amber-500">
            <h3 class="font-bold text-white mb-2">Zone d'intervention</h3>
            <p class="text-gray-400 text-sm">
              Tarn-et-Garonne, Tarn, Haute-Garonne, Lot et Gers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
