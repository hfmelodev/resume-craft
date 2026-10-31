import type { ComponentProps } from 'react'
import { type Control, Controller, type FieldValues, type Path, useFormContext } from 'react-hook-form'
import { FieldWrapper } from '../field-wrapper'
import { Input } from '.'

type InputFieldProps<T extends FieldValues> = Omit<ComponentProps<'input'>, 'name'> & {
  label: string
  name: Path<T>
  containerClassName?: string
  extraContent?: (value: string) => React.ReactNode
  control?: Control<T>
}

export function InputField<T extends FieldValues>({
  label,
  name,
  id,
  containerClassName,
  extraContent,
  required,
  control: customControl,
  ...props
}: InputFieldProps<T>) {
  const formContext = useFormContext<T>()
  const control = customControl ?? formContext?.control
  const inputId = id ?? name

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required && 'Campo obrigatório',
      }}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} htmlFor={inputId} error={fieldState.error?.message} className={containerClassName}>
          <Input
            id={inputId}
            aria-invalid={fieldState.invalid}
            aria-describedby={fieldState.error ? `${inputId}-error` : undefined}
            {...field}
            value={field.value ?? ''}
            {...props}
          />

          {extraContent && extraContent(field.value)}
        </FieldWrapper>
      )}
    />
  )
}
