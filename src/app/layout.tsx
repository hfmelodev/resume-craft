import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { setDefaultOptions } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ClientProvider } from '@/components/shared/client-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Resume Craft',
  description: 'Plataforma para criar currículos profissionais de forma rápida e fácil.',
}

setDefaultOptions({ locale: ptBR })

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  )
}
