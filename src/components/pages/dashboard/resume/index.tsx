'use client'

import { FormProvider, useForm } from 'react-hook-form'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { InfosSidebar } from './infos-sidebar'
import { ResumeContent } from './resume-content'
import { StructureSidebar } from './structure-sidebar'

export function ResumePage() {
  const methods = useForm<ResumeData>({
    defaultValues: {
      content: {
        image: {
          url: '',
          visible: true,
        },
        infos: {
          fullName: '',
          headline: '',
          email: '',
          website: '',
          phone: '',
          location: '',
        },
        summary: '',
        socialMedias: [],
        experiences: [],
        educations: [],
        skills: [],
        languages: [],
        certifications: [],
        projects: [],
      },
      structure: {
        template: 'ditto',
        colorTheme: 'slate',
        language: 'portuguese',
        layout: {
          mainSections: [
            { key: 'socialMedias' },
            { key: 'summary' },
            { key: 'experiences' },
            { key: 'educations' },
            { key: 'certifications' },
            { key: 'projects' },
          ],
          sidebarSections: [{ key: 'languages' }, { key: 'skills' }],
        },
      },
    },
  })

  return (
    <FormProvider {...methods}>
      <main className="h-screen w-full overflow-hidden">
        <ResizablePanelGroup orientation="horizontal" className="h-full w-full">
          <ResizablePanel minSize="20%" maxSize="40%" defaultSize="30%">
            {/* COMP: Infos Sidebar */}
            <InfosSidebar />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel>
            {/* COMP: Resume Content */}
            <ResumeContent />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel minSize="20%" maxSize="35%" defaultSize="25%">
            {/* COMP: Structure Sidebar */}
            <StructureSidebar />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </FormProvider>
  )
}
