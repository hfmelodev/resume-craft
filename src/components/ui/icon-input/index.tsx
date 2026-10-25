import type { ComponentProps } from 'react'
import { useDebounce } from '@/hooks/use-debounce'
import { Input } from '../input'

type IconInputProps = Omit<ComponentProps<'input'>, 'value' | 'onChange'> & {
  value: string
  onChange: (value: string) => void
}

export function IconInput({ value, onChange, ...props }: IconInputProps) {
  const debouncedValue = useDebounce(value)

  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 min-w-8 rounded-full bg-white p-1.5">
        {!!debouncedValue && (
          // biome-ignore lint/performance/noImgElement: <img> is required to display the icon>
          <img
            src={`https://cdn.simpleicons.org/${debouncedValue}`}
            alt={debouncedValue}
            className="h-full w-full object-contain"
          />
        )}
      </div>
      <Input value={value} onChange={e => onChange(e.target.value)} {...props} />
    </div>
  )
}
