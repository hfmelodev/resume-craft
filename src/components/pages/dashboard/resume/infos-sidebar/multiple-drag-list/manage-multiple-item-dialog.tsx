import { cn } from 'cn'
import { Check } from 'lucide-react'
import { Fragment, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { type BaseDialogProps, Dialog } from '@/components/ui/dialog'
import { EditorField } from '@/components/ui/editor/field'
import { IconField } from '@/components/ui/icon-input/field'
import { InputField } from '@/components/ui/input/field'
import type { MultipleDragItemData, ResumeArrayKeys } from '.'

type ManageMultipleItemDialogProps = BaseDialogProps & {
  data: MultipleDragItemData
}

type FormConfig<T> = {
  label: string
  key: keyof T
  fieldType?: 'text' | 'editor' | 'icon' | 'slider' | 'keywords'
  type?: string
  placeholder?: string
  fullWidth?: boolean
  required?: boolean
  className?: string
}

// Mapped type: para cada seção múltipla (K = 'socialMedias' | 'experiences' | 'skills' | ...):
// - ResumeData['content'][K] pega o array da seção, ex.: Partial<ResumeExperienceData>[]
// - [number] extrai o tipo de UM item desse array, ex.: Partial<ResumeExperienceData>
// - FormConfig<item>[] é a lista de campos do formulário, e o `key` de cada campo só aceita
//   propriedades desse item (ex.: em 'experiences', key: 'company' é válido e key: 'level' dá erro)
// Resultado: { socialMedias: FormConfig<...>[], experiences: FormConfig<...>[], ... }
type FormConfigObject = {
  [K in ResumeArrayKeys]: FormConfig<ResumeData['content'][K][number]>[]
}

const formConfig: FormConfigObject = {
  socialMedias: [
    {
      label: 'Rede',
      key: 'name',
      placeholder: 'LinkedIn',
      required: true,
    },
    {
      label: 'Usuário',
      key: 'username',
      placeholder: 'seu-usuario',
      required: true,
    },
    {
      label: 'Site',
      key: 'url',
      placeholder: 'https://linkedin.com/in/seu-usuario',
      type: 'url',
      fullWidth: true,
    },
    {
      label: 'Ícone',
      key: 'icon',
      placeholder: 'linkedin',
      fieldType: 'icon',
      fullWidth: true,
    },
  ],
  experiences: [
    {
      label: 'Empresa',
      key: 'company',
      required: true,
    },
    {
      label: 'Posição',
      key: 'position',
    },
    {
      label: 'Data ou período',
      key: 'date',
      placeholder: 'Janeiro de 2024 - Presente',
    },
    {
      label: 'Localização',
      key: 'location',
    },
    {
      label: 'Site',
      key: 'website',
      type: 'url',
      fullWidth: true,
    },
    {
      label: 'Descrição',
      key: 'summary',
      fieldType: 'editor',
      fullWidth: true,
      className: 'min-h-[200px]',
    },
  ],
  educations: [
    {
      label: 'Instituição',
      key: 'institution',
      required: true,
    },
    {
      label: 'Curso',
      key: 'degree',
    },
    {
      label: 'Data ou período',
      key: 'date',
      placeholder: 'Janeiro de 2024 - Presente',
    },
    {
      label: 'Localização',
      key: 'location',
    },
    {
      label: 'Site',
      key: 'website',
      type: 'url',
      fullWidth: true,
    },
    {
      label: 'Descrição',
      key: 'summary',
      fieldType: 'editor',
      fullWidth: true,
      className: 'min-h-[200px]',
    },
  ],
  skills: [
    {
      label: 'Nome',
      key: 'name',
      required: true,
    },
    {
      label: 'Descrição',
      key: 'description',
    },
    {
      label: 'Nível',
      key: 'level',
      fieldType: 'slider',
      fullWidth: true,
    },
    {
      label: 'Palavras-chave',
      key: 'keywords',
      placeholder: 'Adicione palavras-chave separadas por vírgula',
      fieldType: 'keywords',
      fullWidth: true,
    },
  ],
  languages: [
    {
      label: 'Nome',
      key: 'name',
      required: true,
    },
    {
      label: 'Descrição',
      key: 'description',
    },
    {
      label: 'Nível',
      key: 'level',
      fieldType: 'slider',
      fullWidth: true,
    },
  ],
  certifications: [
    {
      label: 'Nome',
      key: 'name',
      required: true,
    },
    {
      label: 'Instituição',
      key: 'institution',
    },
    {
      label: 'Data',
      key: 'date',
      placeholder: 'Janeiro de 2024',
    },
    {
      label: 'Site',
      key: 'website',
      type: 'url',
    },
    {
      label: 'Descrição',
      key: 'summary',
      fieldType: 'editor',
      className: 'min-h-[200px]',
      fullWidth: true,
    },
  ],
  projects: [
    {
      label: 'Nome',
      key: 'name',
      required: true,
    },
    {
      label: 'Descrição',
      key: 'description',
    },
    {
      label: 'Data ou período',
      key: 'date',
      placeholder: 'Janeiro de 2024 - Presente',
    },
    {
      label: 'Site',
      key: 'website',
      type: 'url',
    },
    {
      label: 'Resumo',
      key: 'summary',
      fieldType: 'editor',
      className: 'min-h-[200px]',
      fullWidth: true,
    },
    {
      label: 'Palavras-chave',
      key: 'keywords',
      placeholder: 'Adicione palavras-chave separadas por vírgula',
      fieldType: 'keywords',
      fullWidth: true,
    },
  ],
}

export function ManageMultipleItemDialog({ data, open, setOpen }: ManageMultipleItemDialogProps) {
  const methods = useForm()

  function onSubmit(formData: any) {
    console.log(formData)
  }

  const formContent = useMemo(() => {
    const config = formConfig[data.formKey]

    return config.map((field, index) => {
      const fieldType = field?.fieldType ?? 'text'
      const isFullWidth = !!field?.fullWidth

      const inputProps = {
        name: field.key,
        label: field.label,
        containerClassName: cn(isFullWidth && 'col-span-full'),
        type: field.type,
        required: field.required,
        placeholder: field.placeholder,
        className: field.className,
      }

      return (
        <Fragment key={index}>
          {fieldType === 'text' && <InputField {...inputProps} />}
          {fieldType === 'editor' && <EditorField {...inputProps} />}
          {fieldType === 'icon' && <IconField {...inputProps} />}
        </Fragment>
      )
    })
  }, [data.formKey])

  return (
    <Dialog
      title="Adicionar novo item"
      open={open}
      setOpen={setOpen}
      content={
        <FormProvider {...methods}>
          <form className="mt-2 flex flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="mb-4 grid grid-cols-2 gap-4">{formContent}</div>

            <div className="ml-auto flex gap-3">
              <Button type="submit" className="w-max">
                <Check />
                Adicionar
              </Button>
            </div>
          </form>
        </FormProvider>
      }
    />
  )
}
