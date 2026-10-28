import { ArrowLeft, FileQuestionMark } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Logo from '@/assets/logo.svg'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Página não encontrada | Resume Craft',
}

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Grade de fundo que some nas bordas */}
      <div
        aria-hidden
        className="mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[48px_48px]"
      />

      <header className="relative flex items-center justify-between p-5">
        <Link href="/" aria-label="Ir para o início">
          <Logo className="max-w-22.5" />
        </Link>
        <ThemeToggle />
      </header>

      <section className="relative flex flex-1 flex-col items-center justify-center px-6 pb-20 text-center">
        {/* Pilha de folhas de currículo */}
        <div aria-hidden className="fade-in slide-in-from-bottom-4 relative mb-10 h-44 w-36 animate-in duration-700">
          <div className="absolute inset-0 -rotate-12 rounded-lg border bg-card/60 shadow-sm" />
          <div className="absolute inset-0 rotate-6 rounded-lg border bg-card/80 shadow-sm" />
          <div className="absolute inset-0 flex flex-col gap-2 rounded-lg border bg-card p-4 shadow-lg">
            <div className="mb-1 flex items-center gap-2">
              <div className="size-6 rounded-full bg-muted" />
              <div className="h-2 flex-1 rounded-full bg-muted" />
            </div>
            <div className="h-1.5 w-full rounded-full bg-muted" />
            <div className="h-1.5 w-4/5 rounded-full bg-muted" />
            <div className="h-1.5 w-full rounded-full bg-muted" />
            <div className="h-1.5 w-3/5 rounded-full bg-muted" />
            <div className="mt-2 h-1.5 w-full rounded-full bg-muted" />
            <div className="h-1.5 w-2/3 rounded-full bg-muted" />
          </div>
          <div className="absolute -right-4 -bottom-4 flex size-11 items-center justify-center rounded-full border bg-primary text-primary-foreground shadow-md">
            <FileQuestionMark className="size-5" />
          </div>
        </div>

        <div className="fade-in slide-in-from-bottom-2 flex animate-in flex-col items-center fill-mode-both delay-150 duration-700">
          <span className="bg-linear-to-b from-foreground to-muted-foreground/40 bg-clip-text font-bold font-mono text-7xl text-transparent tracking-tighter sm:text-8xl">
            404
          </span>

          <h1 className="mt-2 font-bold font-heading text-xl">Página não encontrada</h1>
          <p className="mt-2 max-w-sm text-muted-foreground text-sm">
            Parece que essa folha se perdeu na pilha. A página que você procura não existe ou foi movida para outro lugar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="outline" size="lg" asChild>
              <Link href="/">
                <ArrowLeft /> Voltar ao início
              </Link>
            </Button>
            <Button size="lg" asChild>
              <Link href="/dashboard/resumes">Ir para meus currículos</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
