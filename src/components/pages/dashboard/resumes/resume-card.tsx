import { cn } from 'cn'
import { formatDistanceToNow } from 'date-fns'

import Link from 'next/link'
import type { ReactNode } from 'react'
import type { GetResumesDTO } from '@/db/dals'

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

type ResumeCardProps = {
  resume: GetResumesDTO
}

export function ResumeCard({ resume }: ResumeCardProps) {
  const formattedLastUpdate = formatDistanceToNow(new Date(resume.updatedAt), { addSuffix: true })

  return (
    <Link href={`/dashboard/resumes/${resume.id}`} className="block w-full">
      <ResumeCardButton title={resume.title} description={formattedLastUpdate} />
    </Link>
  )
}
