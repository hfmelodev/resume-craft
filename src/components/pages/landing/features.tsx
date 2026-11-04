import { cn } from 'cn'
import { ArrowRight, FileDown, GripVertical, Languages, type LucideIcon, Palette, ScanEye } from 'lucide-react'
import type { ReactNode } from 'react'
import { SectionHeading } from './section-heading'

const themeSwatches = [
  'bg-zinc-500',
  'bg-blue-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-rose-500',
  'bg-violet-500',
  'bg-cyan-500',
]

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  children?: ReactNode
}

function FeatureCard({ icon: Icon, title, description, className, children }: FeatureCardProps) {
  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-6 transition-colors hover:border-foreground/20',
        className
      )}
    >
      <div className="flex size-10 items-center justify-center rounded-lg border bg-background">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-5 font-heading font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{description}</p>
      {children}
    </article>
  )
}

export function Features() {
  return (
    <section id="recursos" className="scroll-mt-16 border-t py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Recursos"
          title="Tudo o que você precisa, nada que atrapalhe"
          description="Um editor pensado para você focar no conteúdo. O design fica por nossa conta."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={ScanEye}
            title="Prévia em tempo real"
            description="Cada letra digitada aparece no currículo na hora. Dê zoom, arraste e confira cada detalhe antes de exportar."
            className="md:col-span-2"
          >
            <div aria-hidden className="mt-6 flex gap-3">
              <div className="flex flex-1 flex-col gap-2 rounded-lg border bg-background p-3">
                <div className="h-2 w-1/3 rounded-full bg-muted-foreground/40" />
                <div className="h-6 rounded-md border" />
                <div className="h-2 w-1/4 rounded-full bg-muted-foreground/40" />
                <div className="h-6 rounded-md border" />
              </div>
              <ArrowRight className="size-4 self-center text-muted-foreground" />
              <div className="flex flex-1 flex-col gap-1.5 rounded-lg border bg-background p-3">
                <div className="h-2.5 w-1/2 rounded-full bg-foreground/80" />
                <div className="h-1.5 w-1/3 rounded-full bg-muted-foreground/50" />
                <div className="mt-2 h-1.5 w-full rounded-full bg-muted" />
                <div className="h-1.5 w-5/6 rounded-full bg-muted" />
                <div className="h-1.5 w-4/6 rounded-full bg-muted" />
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={GripVertical}
            title="Arraste e organize"
            description="Reordene seções entre a coluna principal e a barra lateral com um simples arrastar."
          />

          <FeatureCard
            icon={Palette}
            title="Sua cor, seu estilo"
            description="Escolha a cor de destaque que combina com você e sua área."
          >
            <div aria-hidden className="mt-6 flex -space-x-1.5">
              {themeSwatches.map(swatch => (
                <span key={swatch} className={cn('size-7 rounded-full border-2 border-card', swatch)} />
              ))}
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Languages}
            title="Seis idiomas"
            description="Português, inglês, espanhol, francês, alemão e italiano para vagas no Brasil ou no exterior."
          />

          <FeatureCard
            icon={FileDown}
            title="PDF em um clique"
            description="Exportação fiel ao que você vê, com texto selecionável e pronta para qualquer plataforma."
          />
        </div>
      </div>
    </section>
  )
}
