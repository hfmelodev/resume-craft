import type { MetadataRoute } from 'next'
import { env } from '@/env'

// Só páginas públicas: o dashboard exige login e fica fora da indexação
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: new URL('/', env.NEXT_PUBLIC_APP_URL).href, changeFrequency: 'weekly', priority: 1 },
    { url: new URL('/auth/login', env.NEXT_PUBLIC_APP_URL).href, changeFrequency: 'yearly', priority: 0.5 },
  ]
}
