import { connection } from 'next/server'
import { Suspense } from 'react'
import Logo from '@/assets/logo.svg'
import { NavItems } from '@/components/pages/dashboard/nav-items'
import { UserDropdown } from '@/components/pages/dashboard/user-dropdown'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { auth } from '@/lib/auth'
import { SkeletonUserDropdownFallback } from './skeleton'

type DashboardLayoutProps = {
  children: React.ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid h-screen w-full grid-cols-[300px_1fr] overflow-hidden">
      <aside className="flex h-full w-full flex-col items-center border-muted border-r">
        <div className="w-full border-muted border-b py-2.5">
          {/* COMP: Logo */}
          <Logo className="mx-auto max-w-25" role="img" aria-label="Resume Craft" />
        </div>

        {/* COMP: Nav Items */}
        <NavItems />

        <div className="mt-auto flex w-full items-center justify-between gap-2 border-muted border-t px-3 py-4">
          <Suspense fallback={<SkeletonUserDropdownFallback />}>
            {/* COMP: Session User Dropdown */}
            <SessionUserDropdown />
          </Suspense>

          {/* COMP: Theme Toggle */}
          <ThemeToggle />
        </div>
      </aside>

      <main className="flex h-full w-full flex-col overflow-auto p-6">{children}</main>
    </div>
  )
}

async function SessionUserDropdown() {
  // O auth() re-criptografa o JWT da sessão (crypto.getRandomValues), então precisa rodar por request
  await connection()
  const session = await auth()

  return (
    // COMP: User Dropdown
    <UserDropdown user={session?.user} />
  )
}
