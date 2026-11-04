import Image from 'next/image'
import { SectionHeading } from './section-heading'

const templates = [
  { id: 'ditto', description: 'Clássico, direto e fácil de ler.' },
  { id: 'eevee', description: 'Barra lateral com destaque de cor.' },
  { id: 'kicks', description: 'Cabeçalho marcante e moderno.' },
  { id: 'onix', description: 'Elegante, com coluna de apoio.' },
]

export function Templates() {
  return (
    <section id="modelos" className="scroll-mt-16 border-t bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Modelos"
          title="Modelos que recrutadores leem até o fim"
          description="Layouts limpos e bem hierarquizados. Troque de modelo a qualquer momento sem perder nada do que escreveu."
        />

        <ul className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {templates.map(template => (
            <li key={template.id} className="group">
              <div className="overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <Image
                  src={`/images/templates/${template.id}.webp`}
                  alt={`Modelo de currículo ${template.id}`}
                  width={1132}
                  height={1600}
                  sizes="(min-width: 1024px) 270px, 50vw"
                  className="w-full"
                />
              </div>
              <h3 className="mt-4 font-heading font-semibold capitalize">{template.id}</h3>
              <p className="text-muted-foreground text-sm">{template.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
