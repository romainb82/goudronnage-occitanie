// supabase/functions/send-email/index.ts
// Edge Function pour envoyer les demandes de devis via Mailjet

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const MAILJET_API_KEY = Deno.env.get('MAILJET_API_KEY')
const MAILJET_SECRET_KEY = Deno.env.get('MAILJET_SECRET_KEY')
const RECIPIENT_EMAIL = Deno.env.get('RECIPIENT_EMAIL') || 'goudronnageoccitanie.82@gmail.com'
const FROM_EMAIL = Deno.env.get('MAILJET_FROM_EMAIL') || 'noreply@goudronnage-occitanie.fr'
const FROM_NAME = Deno.env.get('MAILJET_FROM_NAME') || 'Site Web Goudronnage'

// ✅ FIX VULN #2 : CORS restreint au domaine autorisé
const ALLOWED_ORIGINS = [
  'https://goudronnage-occitanie.fr',
  'https://www.goudronnage-occitanie.fr',
  'https://goudronnage-occitanie.onrender.com',
  'http://localhost:5173' // Dev uniquement
]

function getCorsHeaders(origin: string | null) {
  const allowedOrigin = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }
}

// ✅ FIX VULN #1 : Échapper les caractères HTML pour éviter XSS
function escapeHtml(text: string | undefined | null): string {
  if (!text) return ''
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// Validation du numéro de téléphone français
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Validation email basique
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

serve(async (req) => {
  const origin = req.headers.get('origin')
  const corsHeaders = getCorsHeaders(origin)

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  // Vérifier que c'est bien un POST
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Méthode non autorisée' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  try {
    const { surface, telephone, email, nom, message } = await req.json()

    // Validation renforcée
    if (!telephone) {
      return new Response(
        JSON.stringify({ error: 'Le numéro de téléphone est requis' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (!isValidPhone(telephone)) {
      return new Response(
        JSON.stringify({ error: 'Numéro de téléphone invalide' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (email && !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Email invalide' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // ✅ Échapper toutes les données utilisateur avant insertion HTML
    const safeSurface = escapeHtml(surface)
    const safeTelephone = escapeHtml(telephone)
    const safeNom = escapeHtml(nom)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message)

    // Construction du contenu de l'email avec données échappées
    const emailContent = `
      <h2>Nouvelle demande de devis</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Surface</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${safeSurface || 'Non renseignée'} m²</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Téléphone</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${safeTelephone}</td>
        </tr>
        ${safeNom ? `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Nom</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${safeNom}</td>
        </tr>
        ` : ''}
        ${safeEmail ? `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${safeEmail}</td>
        </tr>
        ` : ''}
        ${safeMessage ? `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Message</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${safeMessage}</td>
        </tr>
        ` : ''}
      </table>
      <p style="margin-top: 20px; color: #666;">
        Envoyé depuis le site Goudronnage Occitanie
      </p>
    `

    // Appel API Mailjet
    const response = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`)
      },
      body: JSON.stringify({
        Messages: [
          {
            From: {
              Email: FROM_EMAIL,
              Name: FROM_NAME
            },
            To: [
              {
                Email: RECIPIENT_EMAIL,
                Name: 'Goudronnage Occitanie'
              }
            ],
            Subject: `🚧 Nouvelle demande de devis - ${surface || '?'} m²`,
            HTMLPart: emailContent,
            TextPart: `Nouvelle demande de devis\nSurface: ${surface || 'Non renseignée'} m²\nTéléphone: ${telephone}`
          }
        ]
      })
    })

    const result = await response.json()

    if (!response.ok) {
      console.error('Erreur Mailjet:', result)
      throw new Error('Erreur lors de l\'envoi de l\'email')
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email envoyé avec succès' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Erreur:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
