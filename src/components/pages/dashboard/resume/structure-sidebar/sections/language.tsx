import { Languages } from 'lucide-react'
import { Controller, useFormContext } from 'react-hook-form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SectionTitle } from '../../infos-sidebar/section-title'

type LanguageOption = {
  label: string
  value: ResumeLanguages
}

export const languagesOptions: LanguageOption[] = [
  {
    label: 'Inglês',
    value: 'english',
  },
  {
    label: 'Espanhol',
    value: 'spanish',
  },
  {
    label: 'Francês',
    value: 'french',
  },
  {
    label: 'Alemão',
    value: 'german',
  },
  {
    label: 'Italiano',
    value: 'italian',
  },
  {
    label: 'Português',
    value: 'portuguese',
  },
]

export function LanguageSection() {
  const { control } = useFormContext<ResumeData>()

  return (
    <div>
      <SectionTitle title="Linguagem" icon={Languages} />

      <Controller
        control={control}
        name="structure.language"
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="mt-4 w-full">
              <SelectValue placeholder="Selecione uma linguagem" />
            </SelectTrigger>
            <SelectContent>
              {languagesOptions.map(language => (
                <SelectItem key={language.value} value={language.value}>
                  {language.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  )
}
