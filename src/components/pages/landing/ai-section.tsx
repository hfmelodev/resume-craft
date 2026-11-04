import { Coins, Languages, PenLine, WandSparkles } from 'lucide-react'

const aiActions = [
  {
    icon: WandSparkles,
    title: 'Gerar para a vaga',
    description: 'Informe o cargo e receba resumo e experiências escritos sob medida.',
  },
  {
    icon: PenLine,
    title: 'Melhorar e corrigir',
    description: 'Reescreve seu texto com clareza, gramática impecável e tom profissional.',
  },
  {
    icon: Languages,
    title: 'Traduzir',
    description: 'Leve o currículo para outro idioma sem perder a formatação.',
  },
]

export function AISection() {
  return (
    <section id="ia" className="scroll-mt-16 border-t py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-medium font-mono text-muted-foreground text-xs uppercase tracking-widest">Inteligência artificial</p>
          <h2 className="mt-3 text-balance font-bold font-heading text-3xl tracking-tight sm:text-4xl">
            Pare de encarar a página em branco
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            A IA conhece o que recrutadores procuram. Diga o cargo que você quer e ela faz o rascunho — você só ajusta.
          </p>

          <ul className="mt-10 flex flex-col gap-6">
            {aiActions.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-card">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">{title}</h3>
                  <p className="mt-1 text-muted-foreground text-sm">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Simulação ilustrativa do diálogo de geração */}
        <div aria-hidden className="relative">
          <div className="absolute inset-6 -z-10 rounded-full bg-foreground/10 blur-3xl dark:bg-foreground/5" />
          <div className="rounded-2xl border bg-card p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 font-medium text-sm">
                <WandSparkles className="size-4" /> Gerar para a vaga
              </span>
              <span className="flex items-center gap-1 rounded-full border px-2 py-0.5 text-muted-foreground text-xs">
                <Coins className="size-3" /> 1 crédito
              </span>
            </div>

            <div className="mt-5 rounded-lg border bg-background px-3 py-2.5 text-sm">
              <span className="text-muted-foreground">Cargo: </span>Desenvolvedor Front-End Sênior
            </div>

            <div className="mt-5 flex flex-col gap-3 rounded-lg border border-dashed p-4">
              <p className="font-medium text-xs uppercase tracking-wider">Resumo</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Desenvolvedor Front-End com mais de 5 anos de experiência criando interfaces acessíveis e performáticas com React,
                TypeScript e Next.js. Foco em design systems e qualidade de código
                <span className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 animate-pulse bg-foreground" />
              </p>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <span className="rounded-md border px-3 py-1.5 text-xs">Descartar</span>
              <span className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground text-xs">Aplicar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
