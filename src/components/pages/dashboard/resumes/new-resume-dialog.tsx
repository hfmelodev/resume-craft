'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FilePlus, LoaderCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import { Button } from '@/components/ui/button'
import { type BaseDialogProps, Dialog } from '@/components/ui/dialog'
import { InputField } from '@/components/ui/input/field'
import { createResume } from '@/db/actions'

const NewResumeDialogSchema = z.object({
  title: z.string().min(1, 'O título é obrigatório'),
})

type NewResumeDialogData = z.infer<typeof NewResumeDialogSchema>

export function NewResumeDialog(props: BaseDialogProps) {
  const router = useRouter()
  const [isNavigating, startNavigation] = useTransition()

  const methods = useForm<NewResumeDialogData>({
    shouldUnregister: true,
    resolver: zodResolver(NewResumeDialogSchema),
    defaultValues: {
      title: '',
    },
  })

  const {
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = methods

  // router.push não bloqueia: a transition mantém o loading até a página do currículo renderizar
  const isLoading = isSubmitting || isNavigating

  async function onSubmit(data: NewResumeDialogData) {
    try {
      const result = await createResume({ title: data.title })

      if ('error' in result) {
        setError('title', { message: result.error })
        return
      }

      toast.success('Currículo criado com sucesso!')

      startNavigation(() => router.push(`/dashboard/resumes/${result.resume.id}`))
    } catch {
      toast.error('Não foi possível criar o currículo. Tente novamente.')
    }
  }

  return (
    <Dialog
      {...props}
      title="Criar novo currículo"
      description="Preencha as informações abaixo para criar um novo currículo"
      content={
        <FormProvider {...methods}>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <InputField<NewResumeDialogData> label="Título" name="title" />

            <Button type="submit" className="mt-6 ml-auto w-max" disabled={isLoading}>
              {isLoading ? (
                <LoaderCircle data-icon="inline-start" className="animate-spin" />
              ) : (
                <FilePlus data-icon="inline-start" />
              )}
              <span className="[text-box:trim-both_cap_alphabetic]">{isLoading ? 'Criando...' : 'Criar currículo'}</span>
            </Button>
          </form>
        </FormProvider>
      }
    />
  )
}
