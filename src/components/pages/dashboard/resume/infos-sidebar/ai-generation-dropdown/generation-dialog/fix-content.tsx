import { useMutation } from '@tanstack/react-query'
import { LoaderCircle, Sparkles } from 'lucide-react'
import { mergician } from 'mergician'
import { useForm, useFormContext } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { ApiService } from '@/server/api'

type GenerationToFixContentProps = {
  onClose: () => void
}

export function GenerationToFixContent({ onClose }: GenerationToFixContentProps) {
  const { formState, handleSubmit } = useForm()

  const { getValues, setValue } = useFormContext<ResumeData>()

  const { mutateAsync: handleGenerateForJob, isPending: isGenerating } = useMutation({
    mutationFn: ApiService.fixContent,
  })

  async function onSubmit() {
    const content = getValues('content')

    const response = await handleGenerateForJob(content)

    const generation = JSON.parse(response.data)

    const mergedContent = mergician(content, generation) as ResumeContentData

    setValue('content', mergedContent)

    toast.success('Conteúdo gerado com sucesso!', {
      description: 'Seu currículo foi atualizado.',
    })

    onClose()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <p>
          Esta funcionalidade aprimora o conteúdo atual do currículo e também corrige possíveis erros gramaticais.{' '}
          <strong>Lembre-se de preencher o contéudo antes da geração.</strong>
        </p>

        <p>Isso pode levar alguns segundos, aguarde o resultado.</p>

        <Button type="submit" className="ml-auto w-max" disabled={!formState.isValid || isGenerating}>
          {isGenerating ? (
            <LoaderCircle data-icon="inline-start" className="animate-spin" />
          ) : (
            <Sparkles data-icon="inline-start" />
          )}
          <span className="[text-box:trim-both_cap_alphabetic]">{isGenerating ? 'Gerando...' : 'Gerar conteúdo'}</span>
        </Button>
      </div>
    </form>
  )
}
