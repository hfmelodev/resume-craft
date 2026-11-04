import { ChevronDown } from 'lucide-react'
import { SectionHeading } from './section-heading'

const faqs = [
  {
    question: 'Preciso pagar para criar meu currículo?',
    answer:
      'Não. Editor, modelos, temas e exportação em PDF são gratuitos. Você só compra créditos se quiser usar os recursos de inteligência artificial.',
  },
  {
    question: 'Como funcionam os créditos de IA?',
    answer:
      'Cada geração — criar conteúdo para uma vaga, melhorar um texto ou traduzir o currículo — consome 1 crédito. Os pacotes são avulsos, sem assinatura nem cobrança recorrente.',
  },
  {
    question: 'Posso ter mais de um currículo?',
    answer: 'Sim. Crie versões diferentes para cada vaga, duplique um currículo existente e ajuste só o que for necessário.',
  },
  {
    question: 'O PDF gerado passa em sistemas de triagem (ATS)?',
    answer: 'O PDF é gerado com texto real, não imagem, então pode ser lido por sistemas de triagem e copiado normalmente.',
  },
  {
    question: 'Em quais idiomas posso gerar o currículo?',
    answer: 'Português, inglês, espanhol, francês, alemão e italiano.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 border-t bg-muted/40 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas frequentes"
          description="Ficou alguma dúvida? Talvez ela já esteja respondida aqui."
        />

        {/* <details> nativo: acessível e sem JavaScript no cliente */}
        <div className="mt-12 divide-y rounded-2xl border bg-card">
          {faqs.map(faq => (
            <details key={faq.question} className="group px-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium">
                {faq.question}
                <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
