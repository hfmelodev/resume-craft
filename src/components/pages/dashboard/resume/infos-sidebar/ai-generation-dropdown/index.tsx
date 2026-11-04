import { useQuery } from '@tanstack/react-query'
import { BadgeCent, Bot, BriefcaseBusiness, CreditCard, Languages, WandSparkles } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'
import { Tooltip } from '@/components/ui/tooltip'
import { queryKeys } from '@/constants/query-keys'
import { ApiService } from '@/server/api'
import { BuyCreditsDialog } from './buy-credits-dialog'
import { GenerationDialog } from './generation-dialog'

export function AIGenerationDropdown() {
  const [generationMode, setGenerationMode] = useState<AIGenerationMode | null>(null)
  const [showCreditsDialog, setShowCreditsDialog] = useState(false)

  const actions = [
    {
      label: 'Gerar conteúdo para vaga de emprego',
      icon: BriefcaseBusiness,
      onClick: () => setGenerationMode('JOB_TITLE'),
    },
    {
      label: 'Melhorar e corrigir conteúdo existente',
      icon: WandSparkles,
      onClick: () => setGenerationMode('FIX_CONTENT'),
    },
    {
      label: 'Traduzir conteúdo existente',
      icon: Languages,
      onClick: () => setGenerationMode('TRANSLATE_CONTENT'),
    },
  ]

  const { data: credits, isLoading: isLoadingCredits } = useQuery({
    queryKey: queryKeys.credits,
    queryFn: () => ApiService.getCredits(),
  })

  const hasCredits = credits !== 0

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button type="button" className="min-w-0">
            <Bot data-icon="inline-start" />
            {/* Em painéis estreitos fica só o ícone, mas o rótulo segue disponível para leitores de tela */}
            <span className="sr-only @3xs:not-sr-only">Inteligência Artificial</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={10} align="end" className="w-72 max-w-[calc(100vw-2rem)]">
          <DropdownMenuGroup>
            <DropdownMenuLabel className="flex items-center gap-1">
              Você possui
              <strong className="inline-flex items-center gap-0.5 text-foreground">
                <BadgeCent className="size-3.5" />
                {isLoadingCredits ? (
                  <Skeleton aria-label="Carregando créditos" className="inline-block h-3.5 w-5" />
                ) : (
                  (credits ?? 0)
                )}{' '}
                créditos
              </strong>
            </DropdownMenuLabel>

            <DropdownMenuItem onClick={() => setShowCreditsDialog(true)}>
              <CreditCard />
              <span>Comprar créditos</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuLabel>Gerar com IA</DropdownMenuLabel>

            {actions.map(action => {
              const item = (
                <DropdownMenuItem key={action.label} onClick={action.onClick} disabled={!hasCredits}>
                  <action.icon />
                  <span>{action.label}</span>
                </DropdownMenuItem>
              )

              if (hasCredits) return item

              // Item desabilitado não recebe eventos de ponteiro, então o tooltip fica num wrapper
              return (
                <Tooltip key={action.label} content="Você não possui créditos. Compre créditos para usar a IA.">
                  <div>{item}</div>
                </Tooltip>
              )
            })}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* COMP: Buy Credits Dialog */}
      <BuyCreditsDialog open={showCreditsDialog} setOpen={setShowCreditsDialog} />

      {/* COMP: Generation Dialog */}
      {!!generationMode && (
        <GenerationDialog
          mode={generationMode}
          open={!!generationMode}
          setOpen={value => {
            if (!value) setGenerationMode(null)
          }}
        />
      )}
    </>
  )
}
