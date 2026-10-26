import { cn } from 'cn'
import { Palette } from 'lucide-react'
import { Controller, useFormContext } from 'react-hook-form'
import colors from 'tailwindcss/colors'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '../../infos-sidebar/section-title'

const keysToIgnore = ['current', 'inherit', 'currentColor', 'transparent', 'black', 'white']

const colorKeys = Object.keys(colors).filter(key => !keysToIgnore.includes(key)) as (keyof typeof colors)[]

export function ThemeSection() {
  const { control } = useFormContext<ResumeData>()

  return (
    <div>
      <SectionTitle title="Tema" icon={Palette} />

      <Controller
        control={control}
        name="structure.colorTheme"
        render={({ field }) => (
          <div className="mt-4 grid grid-cols-7 gap-4">
            {colorKeys.map(colorKey => {
              const isSelected = field.value === colorKey

              return (
                <Button
                  key={colorKey}
                  variant="ghost"
                  className={cn('h-7 w-7 rounded-full p-1 transition-all', isSelected && 'ring-2 ring-foreground')}
                  onClick={() => field.onChange(colorKey)}
                >
                  <div className="h-full w-full rounded-full" style={{ backgroundColor: colors[colorKey][500] }} />
                </Button>
              )
            })}
          </div>
        )}
      />
    </div>
  )
}
