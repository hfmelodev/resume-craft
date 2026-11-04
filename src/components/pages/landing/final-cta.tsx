import { ArrowRight, LayoutTemplate } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { START_HREF } from './constants'

export function FinalCTA() {
  return (
    <section className="border-t px-4 py-24 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,var(--chart-2),transparent_70%)] opacity-40 dark:opacity-25"
        />
        <LayoutTemplate className="relative mx-auto size-10 opacity-80" />
        <h2 className="relative mx-auto mt-6 max-w-2xl text-balance font-bold font-heading text-3xl tracking-tight sm:text-5xl">
          Sua próxima vaga começa com um bom currículo
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-primary-foreground/70">
          Crie o seu agora, de graça, e envie ainda hoje.
        </p>
        <Button asChild variant="secondary" className="relative mt-10 h-11 gap-2 px-6 text-sm">
          <Link href={START_HREF}>
            Criar meu currículo grátis <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
