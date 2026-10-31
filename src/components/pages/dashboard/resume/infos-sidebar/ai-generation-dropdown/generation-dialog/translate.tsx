import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { LoaderCircle, Sparkles } from 'lucide-react'
import { mergician } from 'mergician'
import { Controller, useForm, useFormContext } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import { Button } from '@/components/ui/button'
import { FieldWrapper } from '@/components/ui/field-wrapper'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ApiService } from '@/server/api'
import { languagesOptions } from '../../../structure-sidebar/sections/language'

const translateSchema = z.object({
  language: z.enum(['english', 'spanish', 'french', 'german', 'italian', 'portuguese'], 'Campo obrigatório'),
})

type TranslateFormData = z.infer<typeof translateSchema>

type GenerationTranslateProps = {
  onClose: () => void
}

export function GenerationTranslate({ onClose }: GenerationTranslateProps) {
  const { control, formState, handleSubmit } = useForm<TranslateFormData>({
    shouldUnregister: true,
    resolver: zodResolver(translateSchema),
    mode: 'onChange',
  })

  const { getValues, setValue } = useFormContext<ResumeData>()

  const { mutateAsync: handleTranslate, isPending: isGenerating } = useMutation({
    mutationFn: ApiService.translate,
  })

  async function onSubmit(data: TranslateFormData) {
    const content = getValues('content')

    const response = await handleTranslate({
      content,
      language: data.language,
    })

    const generation = JSON.parse(response.data)

    const mergedContent = mergician(content, generation) as ResumeContentData

    setValue('content', mergedContent)
    setValue('structure.language', data.language)

    toast.success('Conteúdo traduzido com sucesso!', {
      description: 'Seu currículo foi atualizado.',
    })

    onClose()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <p>
          Esta funcionalidade traduz o conteúdo atual do currículo para a linguagem selecionada, aprimorando o texto e corrigindo
          possíveis erros gramaticais. <strong>Lembre-se de preencher o conteúdo antes da geração.</strong>
        </p>

        <p>Isso pode levar alguns segundos, aguarde o resultado.</p>

        <Controller
          control={control}
          name="language"
          render={({ field, fieldState }) => (
            <FieldWrapper label="Linguagem" htmlFor="language" error={fieldState.error?.message}>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="language" className="w-full" aria-invalid={fieldState.invalid}>
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
            </FieldWrapper>
          )}
        />

        <Button type="submit" className="mt-2 w-full sm:ml-auto sm:w-max" disabled={!formState.isValid || isGenerating}>
          {isGenerating ? (
            <LoaderCircle data-icon="inline-start" className="animate-spin" />
          ) : (
            <Sparkles data-icon="inline-start" />
          )}
          <span className="[text-box:trim-both_cap_alphabetic]">{isGenerating ? 'Traduzindo...' : 'Traduzir conteúdo'}</span>
        </Button>
      </div>
    </form>
  )
}
