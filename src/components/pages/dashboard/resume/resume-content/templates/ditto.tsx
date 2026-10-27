import { sectionIsEmpty } from '@/lib/utils'
import { sectionLabels } from '../../structure-sidebar/layout-drag-list'
import { Element } from '../resume-element'
import type { BaseResumeProps } from '.'
import { BasicInfos } from './shared/basic-infos'
import { ResumeSectionContent } from './shared/sections-content'

export const Ditto = ({ data }: BaseResumeProps) => {
  const { content } = data
  const { infos } = content

  const sections = [...data.structure.layout.mainSections, ...data.structure.layout.sidebarSections].filter(section => {
    return !sectionIsEmpty(section.key, data.content)
  })

  return (
    <div className="min-h-[297mm] w-full px-14 py-12 text-neutral-800">
      <header className="flex flex-col items-center text-center">
        {content.image.url && content.image.visible && (
          // biome-ignore lint/performance/noImgElement: foto do usuário (URL arbitrária) renderizada no currículo exportável
          <img
            src={content.image.url}
            alt={infos.fullName}
            className="mb-5 h-24 w-24 rounded-full object-cover ring-1 ring-resume-primary/40 ring-offset-4"
          />
        )}

        <Element as="h1" className="font-serif text-4xl text-neutral-900 tracking-tight">
          {infos.fullName}
        </Element>
        <Element className="mt-2 font-semibold text-resume-primary text-xs uppercase tracking-[0.3em]">{infos.headline}</Element>

        <span className="my-5 block h-px w-16 bg-resume-primary" />

        <BasicInfos infos={infos} className="gap-x-5 gap-y-1.5 text-xs" />
      </header>

      <div className="mt-8">
        {sections.map(section => {
          return (
            <div
              key={`section-item-${section.key}`}
              className="grid grid-cols-[140px_1fr] gap-6 border-neutral-200 border-t py-5"
            >
              <p className="pt-0.5 font-bold text-[11px] text-resume-primary uppercase tracking-[0.18em]">
                {sectionLabels[section.key][data.structure.language]}
              </p>

              <ResumeSectionContent key={section.id} section={section} content={data.content} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
