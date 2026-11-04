type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-medium font-mono text-muted-foreground text-xs uppercase tracking-widest">{eyebrow}</p>
      <h2 className="mt-3 text-balance font-bold font-heading text-3xl tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-pretty text-muted-foreground">{description}</p>
    </div>
  )
}
