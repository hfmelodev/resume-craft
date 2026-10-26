'use client'

import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { TransformControls } from './controls'
import { NavigationHeader } from './header'
import { ResumeTemplate } from './templates'

export function ResumeContent() {
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden bg-muted dark:bg-background">
      <TransformWrapper initialScale={0.5} minScale={0.4} centerOnInit centerZoomedOut limitToBounds={false}>
        <>
          {/* COMP: Navigation Header */}
          <NavigationHeader />

          <TransformComponent>
            {/* COMP: Resume Template */}
            <ResumeTemplate />
          </TransformComponent>

          {/* COMP: Transform Controls */}
          <TransformControls />
        </>
      </TransformWrapper>
    </section>
  )
}
