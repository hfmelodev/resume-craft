import { Label } from './label'

type FieldWrapperProps = {
  label: string
  htmlFor?: string
  error?: string
  children: React.ReactNode
}

export function FieldWrapper({ label, htmlFor, error, children }: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor} className="font-semibold text-sm">
        {label}
      </Label>

      {children}

      {error && (
        <p id={htmlFor ? `${htmlFor}-error` : undefined} className="text-destructive text-xs">
          {error}
        </p>
      )}
    </div>
  )
}
