'use client'

import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { TransformControls } from './controls'
import { NavigationHeader } from './header'
import { ResumeTemplate } from './templates'

type ResumeContentProps = {
  title: string
}

export function ResumeContent({ title }: ResumeContentProps) {
  const { getValues, subscribe } = useFormContext<ResumeData>()

  const [data, setData] = useState(() => structuredClone(getValues()))

  // O RHF muta os objetos aninhados no lugar; o clone profundo gera referências novas para o React Compiler não reaproveitar memos antigos
  useEffect(() => {
    return subscribe({
      formState: { values: true },
      callback: ({ values }) => setData(structuredClone(values)),
    })
  }, [subscribe])

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-muted dark:bg-background">
      <TransformWrapper initialScale={0.5} minScale={0.4} centerOnInit centerZoomedOut limitToBounds={false}>
        <>
          {/* COMP: Navigation Header */}
          <NavigationHeader title={title} />

          <TransformComponent>
            {/* COMP: Resume Template */}
            <ResumeTemplate data={data} />
          </TransformComponent>

          {/* COMP: Transform Controls */}
          <TransformControls />
        </>
      </TransformWrapper>
    </section>
  )
}
