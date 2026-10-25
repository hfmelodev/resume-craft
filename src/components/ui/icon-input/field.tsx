import type { ComponentProps } from 'react'
import { Controller, type FieldValues, type Path, useFormContext } from 'react-hook-form'
import { FieldWrapper } from '../field-wrapper'
import { IconInput } from '.'

type IconFieldProps<T extends FieldValues> = Omit<ComponentProps<typeof IconInput>, 'value' | 'onChange'> & {
  label: string
  name: Path<T>
  containerClassName?: string
  required?: boolean
}

export function IconField<T extends FieldValues>({
  label,
  name,

  containerClassName,
  required: _required,
  ...props
}: IconFieldProps<T>) {
  const { control } = useFormContext<T>()
  const inputId = name

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} htmlFor={inputId} error={fieldState.error?.message} className={containerClassName}>
          <IconInput
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
