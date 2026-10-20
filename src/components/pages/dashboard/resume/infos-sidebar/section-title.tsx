import type { LucideIcon } from 'lucide-react'

type SectionTitleProps = {
  icon: LucideIcon
  title: string
}

export function SectionTitle({ icon: Icon, title }: SectionTitleProps) {
  return (
    <div className="mb-4 flex items-center gap-2 font-semibold text-sm leading-none tracking-tight">
      <Icon className="size-4 text-muted-foreground" />
      <h3 className="font-bold font-heading text-lg">{title}</h3>
    </div>
  )
}
