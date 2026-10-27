import { Link as LinkIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type LinkProps = {
  href: string | undefined
  withIcon?: boolean
  children: ReactNode
  iconColor?: string
}

export const Link = ({ href, children, withIcon = true, iconColor = 'text-resume-primary' }: LinkProps) => {
  const Element = href ? 'a' : 'p'

  return (
    <Element href={href} target="_blank" className={cn('flex w-max items-center gap-1', href && 'underline')}>
      {withIcon && <LinkIcon size={14} className={iconColor} />}
      {children}
    </Element>
  )
}
