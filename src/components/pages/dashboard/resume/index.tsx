'use client'

import { mergician } from 'mergician'
import { useParams } from 'next/navigation'
import type { User } from 'next-auth'
import { useCallback, useEffect, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { updateResumeData } from '@/db/actions'
import { useDebounce } from '@/hooks/use-debounce'
import { InfosSidebar } from './infos-sidebar'
import { ResumeContent } from './resume-content'
import { StructureSidebar } from './structure-sidebar'

type ResumePageProps = {
  title: string
  initialData: Partial<ResumeData>
  user?: User
}

export function ResumePage({ title, initialData, user }: ResumePageProps) {
  const params = useParams<{ id: string }>()
  const resumeId = params.id

  const defaultValues: ResumeData = {
    content: {
      image: {
        url: user?.image ?? '',
        visible: true,
      },
      infos: {
        fullName: user?.name ?? '',
        headline: '',
        email: user?.email ?? '',
        website: '',
        phone: '',
        location: '',
      },
      summary: '<p></p>',
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
  }

  const methods = useForm<ResumeData>({
    defaultValues: mergician(defaultValues, initialData),
  })

  const data = methods.watch()
  const debouncedData = useDebounce(JSON.stringify(data), 1000)

  // Snapshot do último estado salvo: só salva quando o conteúdo realmente mudar
  // (uma flag booleana quebra no Strict Mode, que roda o efeito duas vezes no mount)
  const lastSavedData = useRef(debouncedData)

  const handleSaveUpdates = useCallback(async () => {
    try {
      const updatedData = methods.getValues()

      const result = await updateResumeData({ id: resumeId, data: updatedData })

      if ('error' in result) {
        toast.error(result.error)
        return
      }

      toast.success('Alterações salvas com sucesso!')
    } catch (error) {
      console.error(error)

      toast.error('Não foi possível salvar as alterações. Tente novamente.')
    }
  }, [methods, resumeId])

  useEffect(() => {
    // Se não houver atualizações, retorna
    if (debouncedData === lastSavedData.current) return

    // Atualiza o snapshot
    lastSavedData.current = debouncedData

    handleSaveUpdates()
  }, [debouncedData, handleSaveUpdates])

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
            <ResumeContent title={title} />
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
