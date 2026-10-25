import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from 'cn'
import { Check, Trash2 } from 'lucide-react'
import { Fragment, useEffect, useMemo } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { type BaseDialogProps, Dialog } from '@/components/ui/dialog'
import { EditorField } from '@/components/ui/editor/field'
import { IconField } from '@/components/ui/icon-input/field'
import { InputField } from '@/components/ui/input/field'
import { SliderField } from '@/components/ui/slider/field'
import type { MultipleDragItemData, ResumeArrayItem, ResumeArrayKeys } from '.'

type ManageMultipleItemDialogProps = BaseDialogProps & {
  data: MultipleDragItemData
  setOpen: (open: boolean) => void
  initialData: ResumeArrayItem | null
  // Índice do item no array da seção; null quando está adicionando um novo
  editIndex: number | null
}

type FormConfig<T> = {
  label: string
  key: keyof T
  fieldType?: 'text' | 'editor' | 'icon' | 'slider' | 'keywords'
  type?: string
  placeholder?: string
  fullWidth?: boolean
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

const requiredString = z.string('Campo obrigatório').trim().min(1, 'Campo obrigatório')
const optionalString = z.string().optional()
// Campo de URL é opcional, mas se preenchido precisa ser uma URL válida
const optionalUrl = z.union([z.literal(''), z.url('URL inválida')]).optional()
const level = z.number().min(0).max(5)

const formSchemas = {
  socialMedias: z.object({
    name: requiredString,
    username: requiredString,
    url: optionalUrl,
    icon: optionalString,
  }),
  experiences: z.object({
    company: requiredString,
    position: optionalString,
    date: optionalString,
    location: optionalString,
    website: optionalUrl,
    summary: optionalString,
  }),
  educations: z.object({
    institution: requiredString,
    degree: optionalString,
    date: optionalString,
    location: optionalString,
    website: optionalUrl,
    summary: optionalString,
  }),
  skills: z.object({
    name: requiredString,
    description: optionalString,
    level,
    keywords: optionalString,
  }),
  languages: z.object({
    name: requiredString,
    description: optionalString,
    level,
  }),
  certifications: z.object({
    name: requiredString,
    institution: optionalString,
    date: optionalString,
    website: optionalUrl,
    summary: optionalString,
  }),
  projects: z.object({
    name: requiredString,
    description: optionalString,
    date: optionalString,
    website: optionalUrl,
    summary: optionalString,
    keywords: optionalString,
  }),
} satisfies Record<ResumeArrayKeys, z.ZodObject>

// União dos dados de todas as seções, já que o schema usado depende do formKey
type ManageMultipleItemFormData = z.infer<(typeof formSchemas)[ResumeArrayKeys]>

const formConfig: FormConfigObject = {
  socialMedias: [
    {
      label: 'Rede',
      key: 'name',
      placeholder: 'LinkedIn',
    },
    {
      label: 'Usuário',
      key: 'username',
      placeholder: 'seu-usuario',
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

export function ManageMultipleItemDialog({ data, open, setOpen, initialData, editIndex }: ManageMultipleItemDialogProps) {
  const isEditing = editIndex !== null

  const methods = useForm<ManageMultipleItemFormData>({
    resolver: zodResolver(formSchemas[data.formKey]),
  })

  const { setValue, getValues } = useFormContext<ResumeData>()

  useEffect(() => {
    if (initialData) methods.reset(initialData)
  }, [initialData, methods])

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
        placeholder: field.placeholder,
        className: field.className,
      }

      return (
        <Fragment key={index}>
          {fieldType === 'text' && <InputField {...inputProps} />}
          {fieldType === 'editor' && <EditorField {...inputProps} />}
          {fieldType === 'icon' && <IconField {...inputProps} />}
          {fieldType === 'slider' && <SliderField {...inputProps} />}
          {fieldType === 'keywords' && (
            <InputField
              {...inputProps}
              extraContent={value => (
                <div className="mt-1 flex flex-wrap gap-2">
                  {value?.split(',').map((keyword, index) => {
                    if (!keyword.trim()) return null

                    return <Badge key={`keyword-${index}`}>{keyword}</Badge>
                  })}
                </div>
              )}
            />
          )}
        </Fragment>
      )
    })
  }, [data.formKey])

  function onDelete() {
    if (!isEditing) return

    const currentValue = getValues()

    const formKey = data.formKey
    const currentFieldValue = currentValue.content[formKey] ?? []

    // Os itens não têm id, então o item é identificado pela posição no array
    const items = [...currentFieldValue]
    items.splice(editIndex, 1)

    setValue(`content.${formKey}`, items)
    setOpen(false)

    toast.success('Item removido!', {
      description: 'Seu currículo foi atualizado com sucesso.',
    })
  }

  function onSubmit(formData: ManageMultipleItemFormData) {
    const currentValue = getValues()

    const formKey = data.formKey
    const currentFieldValue = currentValue.content[formKey] ?? []

    const items = [...currentFieldValue]

    if (isEditing) {
      items[editIndex] = formData
    } else {
      items.push(formData)
    }

    setValue(`content.${formKey}`, items)
    setOpen(false)

    toast.success(isEditing ? 'Item atualizado!' : 'Item adicionado!', {
      description: 'Seu currículo foi atualizado com sucesso.',
    })
  }

  return (
    <Dialog
      title={isEditing ? 'Editar item' : 'Adicionar novo item'}
      className="max-h-[90vh] overflow-y-auto sm:max-w-2xl"
      open={open}
      setOpen={setOpen}
      content={
        <FormProvider {...methods}>
          <form className="mt-2 flex flex-col" noValidate onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="mb-4 grid grid-cols-2 gap-4">{formContent}</div>

            <div className="ml-auto flex gap-3">
              {isEditing && (
                <Button type="button" variant="destructive" className="w-max" onClick={onDelete}>
                  <Trash2 />
                  Remover
                </Button>
              )}

              <Button type="submit" className="w-max">
                <Check />
                {isEditing ? 'Salvar' : 'Adicionar'}
              </Button>
            </div>
          </form>
        </FormProvider>
      }
    />
  )
}
