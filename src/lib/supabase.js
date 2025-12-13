import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Envoie une demande de devis via la Edge Function
 */
export async function sendDevisRequest(data) {
  const { data: response, error } = await supabase.functions.invoke('send-email', {
    body: {
      surface: data.surface,
      telephone: data.telephone,
      email: data.email,
      nom: data.nom,
      message: data.message
    }
  })

  if (error) throw error
  return response
}

/**
 * Récupère l'URL publique d'une image depuis le Storage
 */
export function getImageUrl(bucket, path) {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}
