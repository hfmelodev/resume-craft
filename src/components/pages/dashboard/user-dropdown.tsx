'use client'

import { LogOut, SquareUser } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="min-w-0 flex-1 justify-start gap-2 px-2">
          <Avatar className="block h-7 w-7">
            <AvatarImage src="https://github.com/hfmelodev.png" />
            <AvatarFallback>HM</AvatarFallback>
          </Avatar>
          <p className="truncate">Hilquias Ferreira Melo</p>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" className="w-(--radix-dropdown-menu-trigger-width)">
        <DropdownMenuItem asChild>
          <Link href="/dashboard/account">
            <SquareUser />
            <span>Configurações de conta</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem variant="destructive">
          <LogOut />
          <span>Sair da conta</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
