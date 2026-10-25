import type { ComponentProps } from 'react'
import { Controller, type FieldValues, type Path, type PathValue, useFormContext } from 'react-hook-form'
import { FieldWrapper } from '../field-wrapper'
import { Slider } from '.'

type SliderFieldProps<T extends FieldValues> = ComponentProps<typeof Slider> & {
  label: string
  name: Path<T>
  containerClassName?: string
  required?: boolean
}

export function SliderField<T extends FieldValues>({
  name,
  label,
  containerClassName,
  id,
  required: _required,
  ...props
}: SliderFieldProps<T>) {
  const { control } = useFormContext<T>()
  const inputId = id ?? name

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={1 as PathValue<T, Path<T>>}
      rules={{
        required: _required && 'Campo obrigatório',
      }}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} htmlFor={inputId} error={fieldState.error?.message} className={containerClassName}>
          <div className="flex items-center gap-4">
            <Slider
              {...props}
              id={inputId}
              step={1}
              aria-labelledby={`${inputId}-label`}
              aria-invalid={fieldState.invalid}
              aria-describedby={fieldState.error ? `${inputId}-error` : undefined}
              value={[field.value]}
              onValueChange={([value]) => field.onChange(value)}
            />

            <p>{field.value === 0 ? 'Oculto' : field.value}</p>
          </div>
        </FieldWrapper>
      )}
    />
  )
}
