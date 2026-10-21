'use client'

import { ScrollText } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Controller, useFormContext } from 'react-hook-form'
import { SectionTitle } from '../section-title'

const Editor = dynamic(() => import('@/components/ui/editor').then(mod => mod.Editor), {
  ssr: false,
  loading: () => <LoadingEditor />,
})

const LoadingEditor = () => {
  return <div className="max-h-75 min-h-50 w-full animate-pulse rounded-xl border border-muted bg-muted/40" />
}

export function SummarySection() {
  const { control } = useFormContext<ResumeData>()

  return (
    <div>
      <SectionTitle title="Sobre Você" icon={ScrollText} />

      <Controller
        control={control}
        name="content.summary"
        render={({ field }) => (
          // COMP: Editor
          <Editor {...field} className="mt-4 max-h-75 min-h-50" />
        )}
      />
    </div>
  )
}
