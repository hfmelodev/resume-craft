import { Check } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { START_HREF } from './constants'
import { SectionHeading } from './section-heading'

const freeItems = [
  'Editor com prévia em tempo real',
  'Todos os modelos e cores',
  'Exportação em PDF ilimitada',
  'Vários currículos por conta',
]

const creditItems = [
  'Tudo do plano gratuito',
  'Gerar conteúdo para a vaga',
  'Melhorar e corrigir textos',
  'Traduzir para 6 idiomas',
  'Pacotes avulsos, sem assinatura',
]

export function Pricing() {
  return (
    <section id="precos" className="scroll-mt-16 border-t py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Preços"
          title="Grátis para criar. Pague só pela IA."
          description="Nada de assinatura. O editor completo é seu de graça e os créditos de IA você compra quando precisar."
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 md:grid-cols-2">
          <article className="flex flex-col rounded-2xl border bg-card p-8">
            <h3 className="font-heading font-semibold text-lg">Gratuito</h3>
            <p className="mt-1 text-muted-foreground text-sm">Para criar e exportar sem limites.</p>
            <p className="mt-6 font-bold font-heading text-4xl tracking-tight">
              R$ 0 <span className="font-normal text-base text-muted-foreground">para sempre</span>
            </p>
            <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm">
              {freeItems.map(item => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="size-4 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-8 h-10 text-sm">
              <Link href={START_HREF}>Começar grátis</Link>
            </Button>
          </article>

          <article className="relative flex flex-col rounded-2xl border border-foreground/20 bg-primary p-8 text-primary-foreground shadow-xl">
            <span className="absolute top-8 right-8 rounded-full border border-primary-foreground/20 px-2 py-0.5 text-xs">
              Sob demanda
            </span>
            <h3 className="font-heading font-semibold text-lg">Créditos de IA</h3>
            <p className="mt-1 text-primary-foreground/70 text-sm">Para escrever mais rápido e melhor.</p>
            <p className="mt-6 font-bold font-heading text-4xl tracking-tight">
              1 crédito <span className="font-normal text-base text-primary-foreground/70">por geração</span>
            </p>
            <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm">
              {creditItems.map(item => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="size-4 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="secondary" className="mt-8 h-10 text-sm">
              <Link href={START_HREF}>Começar e comprar créditos</Link>
            </Button>
          </article>
        </div>
      </div>
    </section>
  )
}
