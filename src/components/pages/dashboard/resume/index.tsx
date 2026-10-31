'use client'

import { Eye, LoaderCircle, Palette, PencilLine } from 'lucide-react'
import { mergician } from 'mergician'
import { useParams } from 'next/navigation'
import type { User } from 'next-auth'
import { useCallback, useEffect, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { updateResumeData } from '@/db/actions'
import { useDebounce } from '@/hooks/use-debounce'
import { useMediaQuery } from '@/hooks/use-media-query'
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

  // Três painéis lado a lado só cabem a partir do breakpoint lg (1024px); abaixo disso o editor vira abas
  const isDesktop = useMediaQuery('(min-width: 64rem)')

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

      // Salvamento automático é silencioso: só avisa quando falhar
      if ('error' in result) toast.error(result.error)
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
      <main className="h-dvh w-full overflow-hidden">
        {/* Cada layout monta os painéis uma única vez, evitando editores e listas de drag duplicados no mesmo form */}
        {isDesktop === undefined && <EditorLoading />}
        {isDesktop === true && <DesktopEditor title={title} />}
        {isDesktop === false && <MobileEditor title={title} />}
      </main>
    </FormProvider>
  )
}

type EditorLayoutProps = {
  title: string
}

function DesktopEditor({ title }: EditorLayoutProps) {
  return (
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
  )
}

const mobileTabs = [
  { value: 'content', label: 'Conteúdo', icon: PencilLine },
  { value: 'preview', label: 'Visualizar', icon: Eye },
  { value: 'structure', label: 'Estrutura', icon: Palette },
]

function MobileEditor({ title }: EditorLayoutProps) {
  // As abas de edição ficam montadas (forceMount) para preservar a rolagem e o estado dos editores ao trocar de aba;
  // a visualização monta sob demanda para o zoom calcular a escala com o tamanho real da tela
  const panelClassName = 'min-h-0 overflow-y-auto text-base data-[state=inactive]:hidden'

  return (
    <Tabs defaultValue="content" className="h-full gap-0">
      <TabsContent value="content" forceMount className={panelClassName}>
        {/* COMP: Infos Sidebar */}
        <InfosSidebar />
      </TabsContent>

      <TabsContent value="preview" className="min-h-0 text-base">
        {/* COMP: Resume Content */}
        <ResumeContent title={title} />
      </TabsContent>

      <TabsContent value="structure" forceMount className={panelClassName}>
        {/* COMP: Structure Sidebar */}
        <StructureSidebar />
      </TabsContent>

      <TabsList
        variant="line"
        aria-label="Seções do editor"
        className="w-full shrink-0 gap-0 rounded-none border-t bg-background p-0 pb-[env(safe-area-inset-bottom)] group-data-horizontal/tabs:h-auto"
      >
        {mobileTabs.map(tab => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="h-14 flex-col gap-1 rounded-none text-[0.6875rem] group-data-horizontal/tabs:after:top-0 group-data-horizontal/tabs:after:bottom-auto [&_svg:not([class*='size-'])]:size-5"
          >
            <tab.icon />
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

function EditorLoading() {
  return (
    <div className="flex h-full w-full items-center justify-center" role="status">
      <LoaderCircle className="size-6 animate-spin text-muted-foreground" />
      <span className="sr-only">Carregando editor...</span>
    </div>
  )
}
