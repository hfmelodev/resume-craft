import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import Logo from '@/assets/logo.svg'
import { MobileNav } from '@/components/pages/dashboard/mobile-nav'
import { NavItems } from '@/components/pages/dashboard/nav-items'
import { UserDropdown } from '@/components/pages/dashboard/user-dropdown'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { getSession } from '@/db/dals'
import { SkeletonUserDropdownFallback } from './skeleton'

// Área logada: não deve aparecer em buscadores
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

type DashboardLayoutProps = {
  children: React.ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden lg:grid lg:grid-cols-[300px_1fr]">
      {/* COMP: Mobile Nav */}
      <MobileNav
        userDropdown={
          <Suspense fallback={<SkeletonUserDropdownFallback />}>
            {/* COMP: Session User Dropdown */}
            <SessionUserDropdown />
          </Suspense>
        }
      />

      <aside className="hidden h-full w-full flex-col items-center border-muted border-r lg:flex">
        <div className="w-full border-muted border-b py-2.5">
          {/* COMP: Logo */}
          <Link href="/" className="mx-auto block w-25">
            <Logo className="w-full" role="img" aria-label="Resume Craft" />
          </Link>
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

      <main className="@container flex min-h-0 w-full flex-1 flex-col overflow-auto p-4 sm:p-6">{children}</main>
    </div>
  )
}

async function SessionUserDropdown() {
  // getSession é memorizado por request: as navegações desktop e mobile dividem um único auth()
  const session = await getSession()

  return (
    // COMP: User Dropdown
    <UserDropdown user={session?.user} />
  )
}
