<script setup>
import { RouterLink } from 'vue-router'

const services = [
  {
    id: 'goudronnage',
    icon: '🛣️',
    title: 'Goudronnage',
    subtitle: 'La solution professionnelle pour vos surfaces carrossables',
    description: `Le goudronnage, est la solution idéale pour créer des surfaces durables et résistantes. Notre équipe de professionnels réalise vos travaux de goudronnage dans les règles de l'art, avec une attention particulière portée à la préparation du sol et à la qualité de la finition.`,
    details: [
      'Allées carrossables pour véhicules légers et poids lourds',
      'Parkings privés et professionnels',
      'Voies d\'accès et chemins de circulation',
      'Cours d\'entreprises et zones industrielles',
      'Trottoirs et espaces piétons'
    ],
    avantages: [
      'Durabilité exceptionnelle (15-20 ans)',
      'Résistance aux intempéries et au gel',
      'Surface lisse et confortable',
      'Entretien minimal',
      'Finition noire intense ou colorée'
    ],
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gravillonnage',
    icon: '🪨',
    title: 'Gravillonnage',
    subtitle: 'L\'alternative économique et esthétique',
    description: `Le gravillonnage, offre un excellent rapport qualité-prix pour vos aménagements extérieurs. Cette technique traditionnelle permet d'obtenir une surface drainante et naturelle, parfaitement intégrée à votre environnement.`,
    details: [
      'Cours de maisons et allées résidentielles',
      'Chemins d\'accès ruraux',
      'Allées de jardin et espaces paysagers',
      'Parkings en gravier stabilisé',
      'Rénovation de surfaces existantes'
    ],
    avantages: [
      'Coût inférieur au goudronnage classique',
      'Aspect naturel et esthétique',
      'Excellente perméabilité (drainant)',
      'Choix de couleurs de gravillons',
      'Mise en œuvre rapide'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cours-allees',
    icon: '🏠',
    title: 'Aménagement de cours et allées',
    subtitle: 'Transformez vos extérieurs',
    description: `L'aménagement de votre cour ou de vos allées est un investissement qui valorise votre propriété. Nous réalisons des projets sur mesure, adaptés à vos besoins et à votre budget. De la conception à la réalisation, nous vous accompagnons pour créer des espaces fonctionnels et esthétiques.`,
    details: [
      'Création de cours de maison complètes',
      'Allées de garage et accès véhicules',
      'Contours de piscine et terrasses',
      'Chemins piétons dans le jardin',
      'Délimitation et bordures'
    ],
    avantages: [
      'Projet clé en main',
      'Étude personnalisée gratuite',
      'Respect de l\'environnement existant',
      'Valorisation de votre bien immobilier',
      'Solutions adaptées à tous les budgets'
    ],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'parkings',
    icon: '🅿️',
    title: 'Création de parkings',
    subtitle: 'Solutions pour particuliers et professionnels',
    description: `Que vous soyez un particulier souhaitant créer une place de stationnement ou une entreprise ayant besoin d'un parking pour vos employés et clients, nous avons la solution adaptée. Nos parkings sont conçus pour résister à un usage intensif et aux contraintes climatiques de notre région.`,
    details: [
      'Parkings résidentiels (1 à 5 places)',
      'Parkings d\'entreprises et commerces',
      'Aires de stationnement pour camping-cars',
      'Zones de manœuvre et retournement',
      'Marquage au sol et signalétique'
    ],
    avantages: [
      'Étude de capacité et circulation',
      'Gestion des eaux pluviales',
      'Éclairage et sécurité',
      'Conformité aux normes PMR',
      'Entretien et maintenance'
    ],
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'renovation',
    icon: '🔧',
    title: 'Rénovation et réparation',
    subtitle: 'Redonnez vie à vos surfaces existantes',
    description: `Votre allée ou votre cour montre des signes d'usure ? Fissures, nids de poule, affaissement... Nous intervenons pour rénover et réparer vos surfaces endommagées. Selon l'état de votre revêtement, nous vous proposons des solutions de réparation ponctuelle ou de réfection complète.`,
    details: [
      'Diagnostic et évaluation des dégâts',
      'Réparation de fissures et nids de poule',
      'Reprise d\'affaissements',
      'Réfection partielle ou totale',
      'Application de nouvelles couches'
    ],
    avantages: [
      'Prolongation de la durée de vie',
      'Coût inférieur à une réfection totale',
      'Intervention rapide',
      'Résultat durable',
      'Garantie sur les travaux'
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'preparation-sol',
    icon: '⚙️',
    title: 'Préparation des sols',
    subtitle: 'La base d\'un travail de qualité',
    description: `La qualité d'un revêtement dépend avant tout de la préparation du sol. Nous accordons une attention particulière à cette étape cruciale : terrassement, compactage, mise en forme... Un sol bien préparé garantit la longévité de votre aménagement et évite les problèmes futurs (affaissement, fissures, stagnation d'eau).`,
    details: [
      'Terrassement et décapage',
      'Évacuation des déblais',
      'Mise en forme et nivellement',
      'Compactage du fond de forme',
      'Pose de géotextile si nécessaire'
    ],
    avantages: [
      'Fondation solide et durable',
      'Évacuation optimale des eaux',
      'Prévention des affaissements',
      'Respect des pentes nécessaires',
      'Travail soigné et méthodique'
    ],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800'
  }
]

const processus = [
  {
    step: 1,
    title: 'Contact et devis',
    description: 'Vous nous contactez par téléphone ou via le formulaire. Nous convenons d\'un rendez-vous pour étudier votre projet sur place.'
  },
  {
    step: 2,
    title: 'Étude sur site',
    description: 'Nous nous déplaçons gratuitement pour évaluer les travaux, prendre les mesures et discuter de vos besoins et contraintes.'
  },
  {
    step: 3,
    title: 'Devis détaillé',
    description: 'Vous recevez un devis clair et détaillé, sans surprise. Nous restons disponibles pour répondre à toutes vos questions.'
  },
  {
    step: 4,
    title: 'Réalisation',
    description: 'Une fois le devis accepté, nous planifions l\'intervention et réalisons les travaux dans les règles de l\'art.'
  },
  {
    step: 5,
    title: 'Réception',
    description: 'Nous effectuons une visite de réception avec vous pour valider la qualité des travaux et répondre à vos dernières questions.'
  }
]
</script>

<template>
  <!-- Hero Section -->
  <header class="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6">
    <div
      class="absolute top-20 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"
      aria-hidden="true"></div>

    <div class="max-w-5xl mx-auto text-center relative z-10">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold font-display leading-[1.1] tracking-tight mb-6">
        Nos services de
        <span class="text-gradient">goudronnage en Occitanie</span>
      </h1>

      <p class="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
        Découvrez l'ensemble de nos prestations de <strong class="text-white">goudronnage</strong>,
        <strong class="text-white">gravillonnage</strong> et <strong class="text-white">aménagement extérieur</strong>.
        De la simple allée au parking professionnel, nous avons la solution adaptée à votre projet.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/contact"
          class="bg-amber-500 text-black hover:bg-amber-400 font-bold text-base py-4 px-8 rounded-xl transition duration-300 shadow-lg shadow-amber-500/20">
          Demander un devis gratuit →
        </RouterLink>
        <a href="tel:0661628981"
          class="glass-panel text-white hover:border-amber-500/50 font-medium text-base py-4 px-8 rounded-xl transition duration-300">
          📞 06 61 62 89 81
        </a>
      </div>
    </div>
  </header>

  <!-- Liste des services -->
  <section class="px-4 sm:px-6 pb-16 sm:pb-24" aria-labelledby="services-list-title">
    <div class="max-w-6xl mx-auto">
      <h2 id="services-list-title" class="sr-only">Détail de nos services</h2>

      <div class="space-y-16 sm:space-y-24">
        <article v-for="(service, index) in services" :key="service.id" :id="service.id" class="scroll-mt-24">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''">
            <!-- Image -->
            <div :class="index % 2 === 1 ? 'lg:order-2' : ''">
              <div class="relative rounded-3xl overflow-hidden aspect-[4/3] glass-panel">
                <img :src="service.image" :alt="`${service.title} - Goudronnage Occitanie`"
                  class="absolute inset-0 w-full h-full object-cover" loading="lazy" width="800" height="600">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div class="absolute top-4 left-4 text-5xl" aria-hidden="true">
                  {{ service.icon }}
                </div>
              </div>
            </div>

            <!-- Contenu -->
            <div :class="index % 2 === 1 ? 'lg:order-1' : ''">
              <h3 class="text-2xl sm:text-3xl font-bold font-display mb-2">
                {{ service.title }}
              </h3>
              <p class="text-amber-400 font-medium mb-4">
                {{ service.subtitle }}
              </p>
              <p class="text-gray-400 leading-relaxed mb-6">
                {{ service.description }}
              </p>

              <!-- Ce que nous réalisons -->
              <div class="mb-6">
                <h4 class="text-white font-bold mb-3 flex items-center gap-2">
                  <span class="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Ce que nous réalisons
                </h4>
                <ul class="space-y-2">
                  <li v-for="detail in service.details" :key="detail"
                    class="text-gray-400 text-sm flex items-start gap-2">
                    <span class="text-amber-500 mt-1">✓</span>
                    {{ detail }}
                  </li>
                </ul>
              </div>

              <!-- Avantages -->
              <div class="glass-panel rounded-2xl p-4 sm:p-6">
                <h4 class="text-white font-bold mb-3 flex items-center gap-2">
                  <span class="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Les avantages
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="avantage in service.avantages" :key="avantage"
                    class="text-xs bg-white/5 text-gray-300 px-3 py-1.5 rounded-full border border-white/10">
                    {{ avantage }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Pourquoi nous choisir -->
  <section class="px-4 sm:px-6 pb-16 sm:pb-24 bg-white/[0.02]" aria-labelledby="why-title">
    <div class="max-w-5xl mx-auto py-16 sm:py-24">
      <div class="text-center mb-12">
        <h2 id="why-title" class="text-3xl sm:text-4xl font-bold font-display mb-4">
          Pourquoi choisir Goudronnage Occitanie ?
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Artisan local basé à Montauban, nous mettons notre expertise au service de vos projets d'aménagement extérieur
          depuis des années.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="text-center p-6">
          <div class="text-4xl mb-4">🎯</div>
          <h3 class="font-bold text-white mb-2">Devis gratuit</h3>
          <p class="text-gray-400 text-sm">Étude personnalisée et devis détaillé sans engagement de votre part.</p>
        </div>
        <div class="text-center p-6">
          <div class="text-4xl mb-4">🏆</div>
          <h3 class="font-bold text-white mb-2">Savoir-faire</h3>
          <p class="text-gray-400 text-sm">Techniques éprouvées et matériaux de qualité pour un résultat durable.</p>
        </div>
        <div class="text-center p-6">
          <div class="text-4xl mb-4">📍</div>
          <h3 class="font-bold text-white mb-2">Proximité</h3>
          <p class="text-gray-400 text-sm">Artisan local, nous intervenons rapidement dans toute l'Occitanie.</p>
        </div>
        <div class="text-center p-6">
          <div class="text-4xl mb-4">💬</div>
          <h3 class="font-bold text-white mb-2">Conseil</h3>
          <p class="text-gray-400 text-sm">Nous vous guidons vers la solution la plus adaptée à vos besoins et budget.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Notre processus -->
  <section class="px-4 sm:px-6 pb-16 sm:pb-24" aria-labelledby="process-title">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-12">
        <h2 id="process-title" class="text-3xl sm:text-4xl font-bold font-display mb-4">
          Comment ça se passe ?
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          De votre premier appel à la réception des travaux, nous vous accompagnons à chaque étape de votre projet de
          goudronnage.
        </p>
      </div>

      <div class="relative">
        <!-- Ligne de connexion -->
        <div
          class="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div v-for="etape in processus" :key="etape.step" class="relative text-center">
            <div
              class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500 text-black font-bold text-xl mb-4 relative z-10">
              {{ etape.step }}
            </div>
            <h3 class="font-bold text-white mb-2">{{ etape.title }}</h3>
            <p class="text-gray-400 text-sm">{{ etape.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ SEO -->
  <section class="px-4 sm:px-6 pb-16 sm:pb-24" aria-labelledby="faq-title">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2 id="faq-title" class="text-3xl sm:text-4xl font-bold font-display mb-4">
          Questions fréquentes
        </h2>
        <p class="text-gray-400">
          Tout ce que vous devez savoir sur nos services de goudronnage.
        </p>
      </div>

      <div class="space-y-4">
        <details class="glass-panel rounded-2xl group">
          <summary class="p-6 cursor-pointer font-bold text-white flex justify-between items-center">
            Quelle est la différence entre goudronnage et gravillonnage ?
            <span class="text-amber-500 group-open:rotate-45 transition-transform">+</span>
          </summary>
          <div class="px-6 pb-6 text-gray-400">
            <p>Le <strong class="text-white">goudronnage</strong> offre une surface lisse, noire et très
              résistante, idéale pour les zones à fort passage. Le <strong class="text-white">gravillonnage</strong>
              (émulsion + gravillons) donne un aspect plus naturel et drainant, avec un coût généralement inférieur.
              Nous vous conseillons la solution la plus adaptée selon votre usage et votre budget.</p>
          </div>
        </details>

        <details class="glass-panel rounded-2xl group">
          <summary class="p-6 cursor-pointer font-bold text-white flex justify-between items-center">
            Combien coûte le goudronnage d'une allée ?
            <span class="text-amber-500 group-open:rotate-45 transition-transform">+</span>
          </summary>
          <div class="px-6 pb-6 text-gray-400">
            <p>Le prix dépend de plusieurs facteurs : la surface à traiter, l'état du sol existant, le type de finition
              souhaitée et l'accessibilité du chantier. Nous vous proposons un <strong class="text-white">devis gratuit
                et personnalisé</strong> après étude de votre projet sur place. Contactez-nous pour obtenir une
              estimation précise.</p>
          </div>
        </details>

        <details class="glass-panel rounded-2xl group">
          <summary class="p-6 cursor-pointer font-bold text-white flex justify-between items-center">
            Quelle est la durée de vie d'un goudronnage ?
            <span class="text-amber-500 group-open:rotate-45 transition-transform">+</span>
          </summary>
          <div class="px-6 pb-6 text-gray-400">
            <p>Un goudronnage bien réalisé, avec une bonne préparation du sol, peut durer <strong class="text-white">15
                à 20 ans</strong> voire plus. Le gravillonnage a une durée de vie légèrement inférieure (10-15 ans) mais
              peut être facilement rénové. L'entretien régulier (nettoyage, réparation des petites fissures) prolonge
              considérablement la durée de vie.</p>
          </div>
        </details>

        <details class="glass-panel rounded-2xl group">
          <summary class="p-6 cursor-pointer font-bold text-white flex justify-between items-center">
            Intervenez-vous chez les particuliers et les professionnels ?
            <span class="text-amber-500 group-open:rotate-45 transition-transform">+</span>
          </summary>
          <div class="px-6 pb-6 text-gray-400">
            <p>Oui, nous intervenons aussi bien chez les <strong class="text-white">particuliers</strong> (allées, cours
              de maison, parkings privatifs) que chez les <strong class="text-white">professionnels et
                collectivités</strong> (parkings d'entreprise, voies d'accès, zones commerciales). Chaque projet est
              étudié avec le même soin et professionnalisme.</p>
          </div>
        </details>

        <details class="glass-panel rounded-2xl group">
          <summary class="p-6 cursor-pointer font-bold text-white flex justify-between items-center">
            Dans quels départements intervenez-vous ?
            <span class="text-amber-500 group-open:rotate-45 transition-transform">+</span>
          </summary>
          <div class="px-6 pb-6 text-gray-400">
            <p>Basés à <strong class="text-white">Montauban (82)</strong>, nous intervenons dans tout le <strong
                class="text-white">Tarn-et-Garonne</strong> ainsi que dans les départements limitrophes : <strong
                class="text-white">Haute-Garonne (31)</strong>, <strong class="text-white">Tarn (81)</strong>, <strong
                class="text-white">Lot (46)</strong> et <strong class="text-white">Gers (32)</strong>. N'hésitez pas à
              nous contacter pour vérifier que vous êtes dans notre zone d'intervention.</p>
          </div>
        </details>

        <details class="glass-panel rounded-2xl group">
          <summary class="p-6 cursor-pointer font-bold text-white flex justify-between items-center">
            Combien de temps durent les travaux ?
            <span class="text-amber-500 group-open:rotate-45 transition-transform">+</span>
          </summary>
          <div class="px-6 pb-6 text-gray-400">
            <p>La durée des travaux dépend de la surface et de la complexité du projet. Une allée classique peut être
              réalisée en <strong class="text-white">1 à 2 jours</strong>. Les projets plus importants (parkings,
              grandes cours) peuvent nécessiter plusieurs jours. Nous vous indiquons la durée estimée dans notre devis
              et nous engageons à respecter les délais annoncés.</p>
          </div>
        </details>
      </div>
    </div>
  </section>

  <!-- CTA Final -->
  <section class="px-4 sm:px-6 pb-20 sm:pb-32" aria-labelledby="cta-final-title">
    <div class="max-w-4xl mx-auto">
      <div class="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 sm:p-12 text-center text-black">
        <h2 id="cta-final-title" class="text-2xl sm:text-3xl font-bold font-display mb-4">
          Prêt à concrétiser votre projet ?
        </h2>
        <p class="text-black/70 mb-8 max-w-xl mx-auto">
          Contactez-nous dès maintenant pour un devis gratuit et sans engagement. Nous étudions votre projet et vous
          proposons la solution la plus adaptée.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/contact"
            class="bg-black text-white hover:bg-gray-900 font-bold text-base py-4 px-8 rounded-xl transition duration-300">
            Demander un devis gratuit
          </RouterLink>
          <a href="tel:0661628981"
            class="bg-white/20 text-black hover:bg-white/30 font-bold text-base py-4 px-8 rounded-xl transition duration-300">
            📞 06 61 62 89 81
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
details summary::-webkit-details-marker {
  display: none;
}
</style>
