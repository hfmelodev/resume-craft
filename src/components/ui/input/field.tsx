import type { ComponentProps } from 'react'
import { Controller, type FieldValues, type Path, useFormContext } from 'react-hook-form'
import { FieldWrapper } from '../field-wrapper'
import { Input } from '.'

type InputFieldProps<T extends FieldValues> = Omit<ComponentProps<'input'>, 'name'> & {
  label: string
  name: Path<T>
  containerClassName?: string
}

export function InputField<T extends FieldValues>({ label, name, id, containerClassName, ...props }: InputFieldProps<T>) {
  const { control } = useFormContext<T>()
  const inputId = id ?? name

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} htmlFor={inputId} error={fieldState.error?.message} className={containerClassName}>
          <Input
            id={inputId}
            aria-invalid={fieldState.invalid}
            aria-describedby={fieldState.error ? `${inputId}-error` : undefined}
            {...field}
            {...props}
          />
        </FieldWrapper>
      )}
    />
  )
}
