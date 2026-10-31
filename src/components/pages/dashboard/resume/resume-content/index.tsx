'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { TransformControls } from './controls'
import { NavigationHeader } from './header'
import { ResumeTemplate } from './templates'

// Largura da folha A4 (210mm) em px, a mesma do container do template
const A4_WIDTH_PX = 793.7
const MAX_INITIAL_SCALE = 0.5
// Respiro lateral para a folha não encostar nas bordas da tela
const HORIZONTAL_GUTTER_PX = 32

type ResumeContentProps = {
  title: string
}

export function ResumeContent({ title }: ResumeContentProps) {
  const { getValues, subscribe } = useFormContext<ResumeData>()

  const sectionRef = useRef<HTMLElement>(null)
  const [data, setData] = useState(() => structuredClone(getValues()))
  const [initialScale, setInitialScale] = useState<number | null>(null)

  // O RHF muta os objetos aninhados no lugar; o clone profundo gera referências novas para o React Compiler não reaproveitar memos antigos
  useEffect(() => {
    return subscribe({
      formState: { values: true },
      callback: ({ values }) => setData(structuredClone(values)),
    })
  }, [subscribe])

  // Mede antes da pintura: a folha já nasce do tamanho certo, sem piscar em escala errada (o onInit roda antes do centerOnInit)
  useLayoutEffect(() => {
    const width = sectionRef.current?.clientWidth ?? 0
    const fitScale = (width - HORIZONTAL_GUTTER_PX) / A4_WIDTH_PX

    setInitialScale(Math.min(MAX_INITIAL_SCALE, Math.max(fitScale, 0.2)))
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-muted dark:bg-background"
    >
      {initialScale !== null && (
        <TransformWrapper initialScale={initialScale} minScale={0.2} centerOnInit centerZoomedOut limitToBounds={false}>
          <>
            {/* COMP: Navigation Header */}
            <NavigationHeader title={title} />

            <TransformComponent>
              {/* COMP: Resume Template */}
              <ResumeTemplate data={data} />
            </TransformComponent>

            {/* COMP: Transform Controls */}
            <TransformControls initialScale={initialScale} />
          </>
        </TransformWrapper>
      )}
    </section>
  )
}
