import { ChevronRight, Copy, Download, Home, Trash } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tooltip } from '@/components/ui/tooltip'

export function NavigationHeader() {
  const actions = [
    {
      icon: Copy,
      label: 'Duplicar currículo',
      onClick: () => console.log('Duplicar currículo'),
    },
    {
      icon: Download,
      label: 'Baixar PDF',
      onClick: () => console.log('Baixar PDF'),
    },
  ]

  return (
    <header className="absolute top-0 left-0 z-10 flex h-12 w-full items-center justify-between gap-4 border-b bg-background/80 px-3 backdrop-blur-sm">
      <nav aria-label="Navegação" className="flex min-w-0 items-center gap-1">
        <Tooltip content="Voltar ao painel">
          <Button size="icon-lg" variant="ghost" asChild>
            <Link href="/dashboard/resumes" aria-label="Voltar ao painel">
              <Home />
            </Link>
          </Button>
        </Tooltip>

        <ChevronRight className="size-4 shrink-0 text-muted-foreground" />

        <h1 className="ml-1 truncate font-bold font-heading text-lg">Título do currículo</h1>
      </nav>

      <div className="flex shrink-0 items-center gap-1">
        {actions.map(({ icon: Icon, label, onClick }) => (
          <Tooltip key={label} content={label}>
            <Button size="icon-lg" variant="ghost" type="button" aria-label={label} onClick={onClick}>
              <Icon />
            </Button>
          </Tooltip>
        ))}

        <Separator orientation="vertical" className="mx-1 my-2" />

        <Tooltip content="Deletar currículo">
          <Button
            size="icon-lg"
            variant="ghost"
            type="button"
            aria-label="Deletar currículo"
            className="hover:bg-destructive/10 hover:text-destructive dark:hover:bg-destructive/20"
            onClick={() => console.log('Deletar currículo')}
          >
            <Trash />
          </Button>
        </Tooltip>
      </div>
    </header>
  )
}
