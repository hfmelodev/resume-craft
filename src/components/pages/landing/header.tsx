import Link from 'next/link'
import Logo from '@/assets/logo.svg'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { Button } from '@/components/ui/button'
import { START_HREF } from './constants'

const navLinks = [
  { href: '#recursos', label: 'Recursos' },
  { href: '#modelos', label: 'Modelos' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#precos', label: 'Preços' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" aria-label="Resume Craft — início">
          <Logo className="w-20" />
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-muted-foreground text-sm transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="h-8 px-3 text-sm">
            <Link href={START_HREF}>Entrar</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
