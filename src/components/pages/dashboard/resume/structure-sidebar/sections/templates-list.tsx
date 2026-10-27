import { cn } from 'cn'
import { LayoutTemplate } from 'lucide-react'
import Image from 'next/image'
import { Controller, useFormContext } from 'react-hook-form'
import { SectionTitle } from '../../infos-sidebar/section-title'

const allTemplates: ResumeTemplates[] = ['ditto', 'eevee', 'kicks', 'onix']

export function TemplatesListSection() {
  const { control } = useFormContext<ResumeData>()

  return (
    <div>
      <SectionTitle title="Modelos" icon={LayoutTemplate} />

      <Controller
        control={control}
        name="structure.template"
        render={({ field }) => (
          <div className="mt-4 grid w-full grid-cols-2 gap-4">
            {allTemplates.map(template => {
              const isSelected = field.value === template

              return (
                <button
                  key={`template-${template}`}
                  type="button"
                  className={cn(
                    'relative aspect-auto w-full overflow-hidden rounded border-2 border-muted transition-all hover:brightness-125',
                    isSelected && 'border-muted-foreground'
                  )}
                  onClick={() => field.onChange(template)}
                >
                  <Image
                    src={`/images/templates/${template}.webp`}
                    className="h-full w-full object-cover"
                    alt={template}
                    width={150}
                    height={130}
                    loading="eager"
                  />

                  <div
                    className={cn(
                      'absolute inset-0 flex h-full w-full flex-col font-bold font-heading text-sm capitalize',
                      'items-center justify-end bg-linear-to-t from-background p-2'
                    )}
                  >
                    {template}
                  </div>
                </button>
              )
            })}
          </div>
        )}
      />
    </div>
  )
}
