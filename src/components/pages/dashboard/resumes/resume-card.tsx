import { cn } from 'cn'
import Link from 'next/link'
import type { ReactNode } from 'react'

type ResumeCardButtonProps = {
  title: string
  description: string
  icon?: ReactNode
}

export function ResumeCardButton({ title, description, icon }: ResumeCardButtonProps) {
  return (
    <div
      className={cn(
        'relative flex h-75 w-full items-center justify-center overflow-hidden rounded border border-muted-foreground/20',
        'cursor-pointer bg-muted/50 outline-none transition-all hover:brightness-105 dark:hover:brightness-125'
      )}
    >
      {icon}

      <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-background/80 p-3 text-left">
        <h3 className="font-bold font-heading text-sm">{title}</h3>
        <p className="block text-muted-foreground text-xs">{description}</p>
      </div>
    </div>
  )
}

export function ResumeCard() {
  return (
    <Link href="/dashboard/resumes/example" className="block w-full">
      <ResumeCardButton title="Exemplo de currículo" description="Um currículo de exemplo para você começar" />
    </Link>
  )
}
