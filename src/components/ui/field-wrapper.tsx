import { cn } from 'cn'
import { Label } from './label'

type FieldWrapperProps = {
  label: string
  htmlFor?: string
  error?: string
  children: React.ReactNode
  className?: string
}

export function FieldWrapper({ label, htmlFor, error, children, className }: FieldWrapperProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
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
