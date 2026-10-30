'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Copy, LoaderCircle } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useLayoutEffect, useState, useTransition } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import { Button } from '@/components/ui/button'
import { type BaseDialogProps, Dialog } from '@/components/ui/dialog'
import { InputField } from '@/components/ui/input/field'
import { duplicateResume } from '@/db/actions'

const DuplicateResumeDialogSchema = z.object({
  title: z.string().min(1, 'O título é obrigatório'),
})

type DuplicateResumeDialogData = z.infer<typeof DuplicateResumeDialogSchema>

type DuplicateResumeDialogProps = BaseDialogProps & {
  title: string
}

export function DuplicateResumeDialog({ title, ...props }: DuplicateResumeDialogProps) {
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const resumeId = params.id

  const [open, setOpen] = useState(false)
  const [isNavigating, startNavigation] = useTransition()

  const methods = useForm<DuplicateResumeDialogData>({
    shouldUnregister: true,
    resolver: zodResolver(DuplicateResumeDialogSchema),
    defaultValues: {
      title: `${title} (cópia)`,
    },
  })

  const { handleSubmit, setError } = methods

  const { mutate: duplicateResumeMutation, isPending: isDuplicatingResume } = useMutation({
    mutationFn: (data: DuplicateResumeDialogData) => duplicateResume({ id: resumeId, title: data.title }),
    onSuccess: result => {
      if ('error' in result) {
        setError('title', { message: result.error })
        return
      }

      toast.success('Currículo duplicado com sucesso!')

      startNavigation(() => router.push(`/dashboard/resumes/${result.resume.id}`))
    },
    onError: error => {
      console.error(error)
      toast.error('Erro ao duplicar o currículo. Tente novamente.')
    },
  })

  function onSubmit(data: DuplicateResumeDialogData) {
    duplicateResumeMutation(data)
  }

  // router.push não bloqueia: a transition mantém o loading até a página do novo currículo renderizar
  const isLoading = isDuplicatingResume || isNavigating

  // Com cacheComponents a página é escondida (Activity), não desmontada: fecha o diálogo ao sair dela
  useLayoutEffect(() => {
    return () => setOpen(false)
  }, [])

  return (
    <Dialog
      {...props}
      open={open}
      setOpen={setOpen}
      title="Duplicar currículo"
      description="Escolha o título da cópia. Todo o conteúdo do currículo atual será copiado."
      content={
        <FormProvider {...methods}>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <InputField<DuplicateResumeDialogData> label="Título" name="title" />

            <Button type="submit" className="mt-6 ml-auto w-max" disabled={isLoading}>
              {isLoading ? <LoaderCircle data-icon="inline-start" className="animate-spin" /> : <Copy data-icon="inline-start" />}
              <span className="[text-box:trim-both_cap_alphabetic]">{isLoading ? 'Duplicando...' : 'Duplicar currículo'}</span>
            </Button>
          </form>
        </FormProvider>
      }
    />
  )
}
