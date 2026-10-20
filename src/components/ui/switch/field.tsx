import type { ComponentProps } from 'react'
import { Controller, type FieldValues, type Path, useFormContext } from 'react-hook-form'
import { Switch } from '.'

type SwitchFieldProps<T extends FieldValues> = ComponentProps<typeof Switch> & {
  name: Path<T>
}

export function SwitchField<T extends FieldValues>({ name, ...props }: SwitchFieldProps<T>) {
  const { control } = useFormContext<T>()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Switch aria-invalid={fieldState.invalid} {...props} checked={field.value} onCheckedChange={field.onChange} />
      )}
    />
  )
}
