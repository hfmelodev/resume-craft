import type { Metadata } from 'next'
import { AISection } from '@/components/pages/landing/ai-section'
import { FAQ } from '@/components/pages/landing/faq'
import { Features } from '@/components/pages/landing/features'
import { FinalCTA } from '@/components/pages/landing/final-cta'
import { Footer } from '@/components/pages/landing/footer'
import { Header } from '@/components/pages/landing/header'
import { Hero } from '@/components/pages/landing/hero'
import { HowItWorks } from '@/components/pages/landing/how-it-works'
import { Pricing } from '@/components/pages/landing/pricing'
import { Templates } from '@/components/pages/landing/templates'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <Features />
        <Templates />
        <AISection />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
