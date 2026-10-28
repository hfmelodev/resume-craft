'use client'

import { LogOut, SquareUser } from 'lucide-react'
import Link from 'next/link'
import type { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type UserDropdownProps = {
  user?: User
}

export function UserDropdown({ user }: UserDropdownProps) {
  if (!user) return null

  const name = user.name ?? user.email ?? 'Usuário'

  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join('')

  async function handleSignOut() {
    await signOut({ redirectTo: '/auth/login' })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="min-w-0 flex-1 justify-start gap-2 px-2">
          <Avatar className="block h-7 w-7">
            <AvatarImage src={user.image ?? undefined} alt={name} referrerPolicy="no-referrer" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <p className="truncate">{name}</p>
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

        <DropdownMenuItem variant="destructive" onClick={handleSignOut}>
          <LogOut />
          <span>Sair da conta</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
