'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FilePlus, LoaderCircle } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import z from 'zod'
import { Button } from '@/components/ui/button'
import { type BaseDialogProps, Dialog } from '@/components/ui/dialog'
import { InputField } from '@/components/ui/input/field'

const NewResumeDialogSchema = z.object({
  title: z.string().min(1, 'O título é obrigatório'),
})

type NewResumeDialogData = z.infer<typeof NewResumeDialogSchema>

export function NewResumeDialog(props: BaseDialogProps) {
  const methods = useForm<NewResumeDialogData>({
    shouldUnregister: true,
    resolver: zodResolver(NewResumeDialogSchema),
    defaultValues: {
      title: '',
    },
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods

  async function onSubmit(data: NewResumeDialogData) {
    console.log(data)
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

            <Button type="submit" className="mt-6 ml-auto w-max" disabled={isSubmitting}>
              {isSubmitting ? (
                <LoaderCircle data-icon="inline-start" className="animate-spin" />
              ) : (
                <FilePlus data-icon="inline-start" />
              )}
              <span className="[text-box:trim-both_cap_alphabetic]">{isSubmitting ? 'Criando...' : 'Criar'}</span>
            </Button>
          </form>
        </FormProvider>
      }
    />
  )
}
