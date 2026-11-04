import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { setDefaultOptions } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ClientProvider } from '@/components/shared/client-provider'
import { env } from '@/env'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const description =
  'Crie currículos profissionais em minutos com templates prontos, editor visual e IA para revisar, traduzir e gerar conteúdo. Exporte em PDF.'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: 'Resume Craft | Crie currículos profissionais com IA',
    template: '%s | Resume Craft',
  },
  description,
  applicationName: 'Resume Craft',
  appleWebApp: { capable: true, title: 'Resume Craft', statusBarStyle: 'black-translucent' },
  keywords: [
    'currículo',
    'criar currículo',
    'currículo online',
    'gerador de currículo',
    'currículo com IA',
    'modelos de currículo',
    'currículo em PDF',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Resume Craft',
    title: 'Resume Craft | Crie currículos profissionais com IA',
    description,
    images: [{ url: '/images/dashboard.webp', width: 3021, height: 1703, alt: 'Editor de currículos do Resume Craft' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume Craft | Crie currículos profissionais com IA',
    description,
    images: ['/images/dashboard.webp'],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

setDefaultOptions({ locale: ptBR })

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  )
}
