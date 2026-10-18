import Logo from '@/assets/logo.svg'

type DashboardLayoutProps = {
  children: React.ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid h-screen w-full grid-cols-[300px_1fr] overflow-hidden">
      <aside className="flex h-full w-full flex-col items-center border-muted border-r">
        <div className="w-full border-muted border-b p-6">
          <Logo className="mx-auto max-w-25" role="img" aria-label="Resume Craft" />
        </div>
      </aside>

      <main>{children}</main>
    </div>
  )
}
