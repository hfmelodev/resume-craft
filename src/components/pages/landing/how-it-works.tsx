import { SectionHeading } from './section-heading'

const steps = [
  {
    title: 'Entre em segundos',
    description: 'Use sua conta Google ou GitHub. Sem formulários, sem senha nova para lembrar.',
  },
  {
    title: 'Preencha e personalize',
    description: 'Escolha o modelo, a cor e a ordem das seções enquanto vê o resultado ao vivo.',
  },
  {
    title: 'Baixe o PDF',
    description: 'Exporte um arquivo pronto para enviar a recrutadores e plataformas de vagas.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-16 border-t bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do zero ao PDF em três passos"
          description="Sem curva de aprendizado. Se você sabe preencher um formulário, sabe usar o Resume Craft."
        />

        <ol className="mt-16 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl border bg-card p-6">
              <span className="font-bold font-mono text-5xl text-muted-foreground/30">0{index + 1}</span>
              <h3 className="mt-4 font-heading font-semibold text-lg">{step.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
