import { type CSSProperties, useMemo } from 'react'
import colors from 'tailwindcss/colors'
import { Ditto } from './ditto'
import { Eevee } from './eevee'
import { Kicks } from './kicks'
import { Onix } from './onix'

export type BaseResumeProps = {
  data: ResumeData
}

type ResumeTemplateProps = {
  data: ResumeData
}

const templatesMap: Record<ResumeTemplates, React.FC<BaseResumeProps>> = {
  ditto: Ditto,
  eevee: Eevee,
  kicks: Kicks,
  onix: Onix,
}

export function ResumeTemplate({ data }: ResumeTemplateProps) {
  const template = data.structure.template

  const Resume = useMemo(() => {
    return templatesMap[template]
  }, [template])

  // Mesmo tom 500 exibido nas bolinhas da seção de tema
  const primaryColor = colors[data.structure.colorTheme as keyof typeof colors][500]

  return (
    <div
      id="resume-content"
      className="min-h-[297mm] w-[210mm] bg-white font-arial text-black [&_hr]:border-black"
      style={{ '--resume-primary': primaryColor } as CSSProperties}
    >
      <Resume data={data} />
    </div>
  )
}
