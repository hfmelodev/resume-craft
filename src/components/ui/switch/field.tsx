import type { ComponentProps } from 'react'
import { Controller, type FieldValues, type Path, useFormContext } from 'react-hook-form'
import { Switch } from '.'

type SwitchFieldProps<T extends FieldValues> = ComponentProps<typeof Switch> & {
  name: Path<T>
}

export function SwitchField<T extends FieldValues>({ name, id, ...props }: SwitchFieldProps<T>) {
  const { control } = useFormContext<T>()
  const switchId = id ?? name

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Switch
          id={switchId}
          aria-invalid={fieldState.invalid}
          aria-describedby={fieldState.error ? `${switchId}-error` : undefined}
          {...props}
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      )}
    />
  )
}
