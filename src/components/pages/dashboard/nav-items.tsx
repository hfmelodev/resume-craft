'use client'

import { cn } from 'cn'
import { type LucideIcon, Newspaper, SquareUser } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

type NavItemProps = {
  label: string
  icon: LucideIcon
  path: string
}
export function NavItems() {
  const pathname = usePathname()

  const navItems: NavItemProps[] = [
    {
      label: 'Currículos',
      icon: Newspaper,
      path: '/dashboard/resumes',
    },
    {
      label: 'Configurações de conta',
      icon: SquareUser,
      path: '/dashboard/account',
    },
  ]

  return (
    <nav className="flex w-full flex-col gap-2 px-2 py-4">
      {navItems.map(item => {
        // Checa se o caminho atual começa com o caminho do item de navegação para determinar se ele está ativo
        const isActive = pathname.startsWith(item.path)

        return (
          <Button
            key={item.path}
            asChild
            variant="ghost"
            className={cn('w-full justify-start gap-2', isActive && 'bg-accent text-accent-foreground')}
          >
            <Link href={item.path} aria-current={isActive ? 'page' : undefined}>
              <item.icon />
              {item.label}
            </Link>
          </Button>
        )
      })}
    </nav>
  )
}
