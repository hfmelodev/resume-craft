import { ArrowRight, Check, FileDown, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { START_HREF } from './constants'

const highlights = ['Grátis para começar', 'Exportação em PDF', 'Sem cartão de crédito']

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-130 w-240 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--chart-2),transparent)] opacity-20 blur-3xl dark:opacity-25" />
        <div className="absolute -top-32 left-1/2 h-80 w-120 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--chart-1),transparent)] opacity-40 blur-2xl dark:opacity-20" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,var(--chart-2),transparent)] opacity-60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28">
        <div className="fade-in slide-in-from-bottom-3 animate-in duration-700">
          <a
            href="#ia"
            className="inline-flex items-center gap-2 rounded-full border bg-background/80 py-1 pr-3 pl-1 text-xs backdrop-blur transition-colors hover:border-foreground/30"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 font-medium text-primary-foreground">
              <Sparkles className="size-3" /> Novo
            </span>
            Escreva com inteligência artificial
            <ArrowRight className="size-3 text-muted-foreground" />
          </a>

          <h1 className="mx-auto mt-8 max-w-4xl text-balance font-bold font-heading text-5xl tracking-tighter sm:text-6xl lg:text-7xl">
            O currículo que te coloca{' '}
            <span className="bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
              na próxima entrevista
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
            Monte um currículo profissional em minutos, com modelos prontos, prévia em tempo real e IA que escreve, revisa e
            traduz por você.
          </p>
        </div>

        <div className="fade-in slide-in-from-bottom-3 mt-10 flex animate-in flex-col items-center justify-center gap-3 fill-mode-both delay-150 duration-700 sm:flex-row">
          <Button asChild className="h-11 w-full gap-2 px-6 text-sm sm:w-auto">
            <Link href={START_HREF}>
              Criar meu currículo grátis <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-11 w-full px-6 text-sm sm:w-auto">
            <a href="#modelos">Ver modelos</a>
          </Button>
        </div>

        <ul className="fade-in mt-8 flex animate-in flex-wrap items-center justify-center gap-x-6 gap-y-2 fill-mode-both text-muted-foreground text-sm delay-300 duration-700">
          {highlights.map(item => (
            <li key={item} className="flex items-center gap-1.5">
              <Check className="size-4 text-foreground" /> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Prévia do produto */}
      <div className="fade-in slide-in-from-bottom-8 relative mx-auto max-w-6xl animate-in fill-mode-both px-4 pb-24 delay-300 duration-1000 sm:px-6">
        <div
          aria-hidden
          className="absolute inset-x-10 top-10 -z-10 h-2/3 rounded-full bg-foreground/10 blur-3xl dark:bg-foreground/5"
        />

        <div className="relative rounded-2xl border bg-card/50 p-1.5 shadow-2xl backdrop-blur sm:p-2">
          <div className="flex items-center gap-1.5 px-2 pt-1 pb-2.5">
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="mx-auto hidden rounded-md border bg-background px-16 py-0.5 font-mono text-[0.625rem] text-muted-foreground sm:block">
              Resume Craft
            </span>
          </div>
          <Image
            src="/images/dashboard.webp"
            alt="Editor do Resume Craft com o formulário à esquerda, a prévia do currículo ao centro e a escolha de modelos à direita."
            width={3022}
            height={1704}
            sizes="(min-width: 1152px) 1120px, 100vw"
            className="w-full rounded-xl border"
            priority
          />
        </div>

        <div className="absolute bottom-0 left-0 hidden w-64 -rotate-2 rounded-xl border bg-background p-4 text-left shadow-xl lg:-left-6 lg:block">
          <div className="flex items-center gap-2 font-medium text-sm">
            <Sparkles className="size-4" /> Gerado com IA
          </div>
          <p className="mt-2 text-muted-foreground text-xs leading-relaxed">
            “Desenvolvedor Front-End com 5 anos de experiência criando interfaces acessíveis e performáticas…”
          </p>
        </div>

        <div className="absolute right-0 bottom-6 hidden items-center gap-3 rounded-xl border bg-background px-4 py-3 shadow-xl lg:-right-6 lg:flex">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <FileDown className="size-4" />
          </div>
          <div className="text-left">
            <p className="font-medium text-sm">curriculo.pdf</p>
            <p className="text-muted-foreground text-xs">Pronto para enviar</p>
          </div>
        </div>
      </div>
    </section>
  )
}
