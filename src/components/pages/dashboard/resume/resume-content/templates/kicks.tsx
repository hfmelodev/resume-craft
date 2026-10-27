import { cn, sectionIsEmpty } from '@/lib/utils'
import { sectionLabels } from '../../structure-sidebar/layout-drag-list'
import { Element } from '../resume-element'
import type { BaseResumeProps } from '.'
import { BasicInfos } from './shared/basic-infos'
import { ResumeSectionContent } from './shared/sections-content'

type SectionHeadingProps = {
  title: string
}

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <div className="mb-3 flex items-center gap-2.5">
      <span className="h-1.5 w-1.5 rotate-45 bg-resume-primary" />
      <p className="font-bold text-[11px] text-resume-primary uppercase tracking-[0.2em]">{title}</p>
      <span className="h-px flex-1 bg-resume-primary/20" />
    </div>
  )
}

export const Kicks = ({ data }: BaseResumeProps) => {
  const { content } = data
  const { infos } = content

  const mainSections = data.structure.layout.mainSections.filter(section => {
    return !sectionIsEmpty(section.key, data.content)
  })

  const sidebarSections = data.structure.layout.sidebarSections.filter(section => {
    return !sectionIsEmpty(section.key, data.content)
  })

  const hasSidebar = sidebarSections.length > 0

  const renderSections = (sections: ResumeLayoutSection[]) => {
    return sections.map((section, i) => {
      return (
        <div key={`section-item-${section.key}`} className={cn(i > 0 && 'mt-7')}>
          <SectionHeading title={sectionLabels[section.key][data.structure.language]} />

          <ResumeSectionContent key={section.id} section={section} content={data.content} levelIndicatorVariant="bars" />
        </div>
      )
    })
  }

  return (
    <div className="flex min-h-[297mm] w-full flex-col text-neutral-800">
      <div className="h-2 w-full bg-resume-primary" />

      <header className="flex items-center justify-between gap-8 px-12 pt-10 pb-7">
        <div className="min-w-0 flex-1">
          <Element className="mb-1.5 font-semibold text-resume-primary text-xs uppercase tracking-[0.25em]">
            {infos.headline}
          </Element>
          <Element as="h1" className="font-extrabold text-4xl text-neutral-900 leading-tight tracking-tight">
            {infos.fullName}
          </Element>

          <span className="mt-4 block h-1 w-14 rounded-full bg-resume-primary" />
        </div>

        {content.image.url && content.image.visible && (
          // biome-ignore lint/performance/noImgElement: foto do usuário (URL arbitrária) renderizada no currículo exportável
          <img
            src={content.image.url}
            alt={infos.fullName}
            className="h-32 w-32 shrink-0 rounded-full object-cover ring-4 ring-resume-primary/20 ring-offset-4"
          />
        )}
      </header>

      <BasicInfos infos={infos} className="mx-12 justify-start gap-x-6 gap-y-2 border-resume-primary/15 border-y py-3 text-xs" />

      <div className={cn('grid flex-1 gap-10 px-12 pt-8 pb-12', hasSidebar && 'grid-cols-[1fr_210px]')}>
        <section>{renderSections(mainSections)}</section>

        {hasSidebar && <aside className="self-start rounded-xl bg-resume-primary/6 p-5">{renderSections(sidebarSections)}</aside>}
      </div>
    </div>
  )
}
