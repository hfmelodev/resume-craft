import { cn, sectionIsEmpty } from '@/lib/utils'
import { sectionLabels } from '../../structure-sidebar/layout-drag-list'
import { Element } from '../resume-element'
import type { BaseResumeProps } from '.'
import { BasicInfos } from './shared/basic-infos'
import { ResumeSectionContent } from './shared/sections-content'

type SectionArea = 'main' | 'sidebar'

const headingStyles: Record<SectionArea, string> = {
  main: 'border-resume-primary border-l-[3px] pl-3 text-neutral-900 text-sm tracking-[0.15em]',
  sidebar: 'border-resume-primary/25 border-b pb-1.5 text-[11px] text-resume-primary tracking-[0.2em]',
}

export const Onix = ({ data }: BaseResumeProps) => {
  const { content } = data
  const { infos } = content

  const mainSections = data.structure.layout.mainSections.filter(section => {
    return !sectionIsEmpty(section.key, data.content)
  })

  const sidebarSections = data.structure.layout.sidebarSections.filter(section => {
    return !sectionIsEmpty(section.key, data.content)
  })

  const renderSections = (sections: ResumeLayoutSection[], area: SectionArea) => {
    return sections.map((section, i) => {
      return (
        <div key={`section-item-${section.key}`} className={cn(i > 0 && 'mt-7')}>
          <p className={cn('mb-3 font-bold uppercase', headingStyles[area])}>
            {sectionLabels[section.key][data.structure.language]}
          </p>

          <ResumeSectionContent key={section.id} section={section} content={data.content} levelIndicatorVariant="bars" />
        </div>
      )
    })
  }

  return (
    <div className="grid min-h-[297mm] w-full grid-cols-[250px_1fr] text-neutral-800">
      <aside className="bg-resume-primary/8 px-7 py-10">
        {content.image.url && content.image.visible && (
          // biome-ignore lint/performance/noImgElement: foto do usuário (URL arbitrária) renderizada no currículo exportável
          <img src={content.image.url} alt={infos.fullName} className="mb-7 aspect-square w-full rounded-2xl object-cover" />
        )}

        <BasicInfos infos={infos} className="mb-8 flex-col items-start gap-2.5 text-xs [&_p]:break-all [&_svg]:shrink-0" />

        {renderSections(sidebarSections, 'sidebar')}
      </aside>

      <section className="px-10 py-10">
        <header className="mb-9 border-resume-primary border-b-2 pb-6">
          <Element as="h1" className="font-black text-[40px] text-neutral-900 leading-[1.05] tracking-tight">
            {infos.fullName}
          </Element>
          <Element className="mt-2 text-base text-neutral-500 tracking-wide">{infos.headline}</Element>
        </header>

        {renderSections(mainSections, 'main')}
      </section>
    </div>
  )
}
