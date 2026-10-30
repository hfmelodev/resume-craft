'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { FilePlus, LoaderCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useLayoutEffect, useState, useTransition } from 'react'
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
  const [open, setOpen] = useState(false)

  const methods = useForm<NewResumeDialogData>({
    shouldUnregister: true,
    resolver: zodResolver(NewResumeDialogSchema),
    defaultValues: {
      title: '',
    },
  })

  const { handleSubmit, setError } = methods

  const { mutate: handleCreateResume, isPending: isLoadingCreateResume } = useMutation({
    mutationFn: createResume,
    onSuccess: result => {
      if ('error' in result) {
        setError('title', { message: result.error })
        return
      }

      toast.success('Currículo criado com sucesso!')

      startNavigation(() => router.push(`/dashboard/resumes/${result.resume.id}`))
    },
    onError: error => {
      console.error(error)
      toast.error('Erro ao criar o currículo. Tente novamente.')
    },
  })

  // router.push não bloqueia: a transition mantém o loading até a página do currículo renderizar
  const isLoading = isLoadingCreateResume || isNavigating

  function onSubmit(data: NewResumeDialogData) {
    handleCreateResume(data)
  }

  // Com cacheComponents a página é escondida (Activity), não desmontada: fecha o diálogo ao sair dela
  useLayoutEffect(() => {
    return () => setOpen(false)
  }, [])

  return (
    <Dialog
      {...props}
      open={open}
      setOpen={setOpen}
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
