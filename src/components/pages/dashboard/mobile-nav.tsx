'use client'

import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { type ReactNode, useState } from 'react'
import Logo from '@/assets/logo.svg'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { NavItems } from './nav-items'

type MobileNavProps = {
  // Slot para o dropdown do usuário, que é um Server Component carregado com Suspense
  userDropdown: ReactNode
}

export function MobileNav({ userDropdown }: MobileNavProps) {
  const pathname = usePathname()

  // Guarda em qual rota o menu foi aberto: ao navegar (inclusive pelo dropdown do usuário) ele fecha sozinho
  const [openedAt, setOpenedAt] = useState<string | null>(null)
  const open = openedAt === pathname

  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-2 border-muted border-b px-4 lg:hidden">
      <div className="flex items-center gap-2">
        <Sheet open={open} onOpenChange={value => setOpenedAt(value ? pathname : null)}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-lg" aria-label="Abrir menu">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-75 max-w-[85vw] gap-0">
            <SheetHeader className="border-muted border-b px-4 py-3">
              <SheetTitle>
                <Logo className="max-w-25" role="img" aria-label="Resume Craft" />
              </SheetTitle>
              <SheetDescription className="sr-only">Navegação do painel</SheetDescription>
            </SheetHeader>

            {/* COMP: Nav Items */}
            <NavItems />

            <div className="mt-auto flex w-full items-center justify-between gap-2 border-muted border-t px-3 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              {userDropdown}

              {/* COMP: Theme Toggle */}
              <ThemeToggle />
            </div>
          </SheetContent>
        </Sheet>

        <Logo className="max-w-22.5" role="img" aria-label="Resume Craft" />
      </div>
    </header>
  )
}
