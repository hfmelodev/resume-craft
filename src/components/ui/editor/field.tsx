import type { ComponentProps } from 'react'
import { Controller, type FieldValues, type Path, useFormContext } from 'react-hook-form'
import { FieldWrapper } from '../field-wrapper'
import { Editor } from '.'

type EditorFieldProps<T extends FieldValues> = Omit<ComponentProps<typeof Editor>, 'value' | 'onChange'> & {
  label: string
  name: Path<T>
  containerClassName?: string
  required?: boolean
}

export function EditorField<T extends FieldValues>({
  label,
  name,
  id,
  containerClassName,
  required: _required,
  ...props
}: EditorFieldProps<T>) {
  const { control } = useFormContext<T>()
  const inputId = id ?? name

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} htmlFor={inputId} error={fieldState.error?.message} className={containerClassName}>
          <Editor
            id={inputId}
            aria-invalid={fieldState.invalid}
            aria-describedby={fieldState.error ? `${inputId}-error` : undefined}
            value={field.value ?? ''}
            onChange={field.onChange}
            {...props}
          />
        </FieldWrapper>
      )}
    />
  )
}
