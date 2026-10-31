import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { LoaderCircle, Sparkles } from 'lucide-react'
import { useForm, useFormContext } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import { Button } from '@/components/ui/button'
import { EditorField } from '@/components/ui/editor/field'
import { InputField } from '@/components/ui/input/field'
import { ApiService } from '@/server/api'

const jobTitleSchema = z.object({
  jobTitle: z.string().min(1, 'Campo obrigatório'),
  jobDescription: z.string().optional(),
})

export type JobTitleFormData = z.infer<typeof jobTitleSchema>

type GenerationData = {
  headline: string
  summary: string
  skills: {
    name: string
    keywords: string
  }[]
}

type GenerationFromJobTitleProps = {
  onClose: () => void
}

export function GenerationFromJobTitle({ onClose }: GenerationFromJobTitleProps) {
  const { control, formState, handleSubmit } = useForm<JobTitleFormData>({
    shouldUnregister: true,
    resolver: zodResolver(jobTitleSchema),
    defaultValues: {
      jobTitle: '',
      jobDescription: '',
    },
  })

  const { setValue } = useFormContext<ResumeData>()

  const { mutateAsync: handleGenerateForJob, isPending: isGenerating } = useMutation({
    mutationFn: ApiService.generateContentForJob,
  })

  async function onSubmit(data: JobTitleFormData) {
    const response = await handleGenerateForJob({
      jobDescription: data.jobDescription,
      jobTitle: data.jobTitle,
    })

    const generation = JSON.parse(response.data) as GenerationData

    setValue('content.infos.headline', generation.headline)
    setValue('content.summary', generation.summary)
    setValue('content.skills', generation.skills)

    toast.success('Conteúdo gerado com sucesso!', {
      description: 'Seu currículo foi atualizado.',
    })

    onClose()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <InputField control={control} label="Cargo" name="jobTitle" placeholder="Desenvolvedor FullStack" />
        <EditorField control={control} label="Descrição da vaga (Opcional)" name="jobDescription" className="max-h-75 min-h-50" />
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
