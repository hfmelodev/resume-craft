import { cn, sectionIsEmpty } from '@/lib/utils'
import { sectionLabels } from '../../structure-sidebar/layout-drag-list'
import { Element } from '../resume-element'
import type { BaseResumeProps } from '.'
import { BasicInfos } from './shared/basic-infos'
import { ResumeSectionContent } from './shared/sections-content'

type SectionHeadingProps = {
  title: string
  inverted?: boolean
}

const SectionHeading = ({ title, inverted }: SectionHeadingProps) => {
  return (
    <div className="mb-3">
      <p className={cn('font-bold text-xs uppercase tracking-[0.2em]', inverted ? 'text-white' : 'text-neutral-900')}>{title}</p>
      <span className={cn('mt-1.5 block h-0.5 w-8 rounded-full', inverted ? 'bg-white/60' : 'bg-resume-primary')} />
    </div>
  )
}

export const Eevee = ({ data }: BaseResumeProps) => {
  const { content } = data
  const { infos } = content

  const mainSections = data.structure.layout.mainSections.filter(section => {
    return !sectionIsEmpty(section.key, data.content)
  })

  const sidebarSections = data.structure.layout.sidebarSections.filter(section => {
    return !sectionIsEmpty(section.key, data.content)
  })

  const renderSections = (sections: ResumeLayoutSection[], inverted?: boolean) => {
    return sections.map((section, i) => {
      return (
        <div key={`section-item-${section.key}`} className={cn(i > 0 && 'mt-8')}>
          <SectionHeading title={sectionLabels[section.key][data.structure.language]} inverted={inverted} />

          <ResumeSectionContent
            key={section.id}
            section={section}
            content={data.content}
            levelsColor={inverted ? 'text-white' : undefined}
            linkIconColor={inverted ? 'text-white' : undefined}
          />
        </div>
      )
    })
  }

  return (
    <div className="grid min-h-[297mm] w-full grid-cols-[1fr_240px] text-neutral-800">
      <section className="px-10 py-12">
        <header className="mb-9">
          <Element as="h1" className="font-extrabold text-[40px] text-neutral-900 leading-none tracking-tight">
            {infos.fullName}
          </Element>
          <Element className="mt-3 font-medium text-lg text-resume-primary">{infos.headline}</Element>
        </header>

        {renderSections(mainSections)}
      </section>

      <aside className="bg-resume-primary px-7 py-12 text-white">
        {content.image.url && content.image.visible && (
          // biome-ignore lint/performance/noImgElement: foto do usuário (URL arbitrária) renderizada no currículo exportável
          <img
            src={content.image.url}
            alt={infos.fullName}
            className="mx-auto mb-7 h-36 w-36 rounded-full object-cover ring-4 ring-white/25"
          />
        )}

        <BasicInfos
          infos={infos}
          className="mb-8 flex-col items-start gap-2.5 border-white/20 border-b pb-8 text-xs [&_p]:break-all [&_svg]:shrink-0 [&_svg]:text-white/80"
        />

        {renderSections(sidebarSections, true)}
      </aside>
    </div>
  )
}
