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
import { GenerationDialog } from './generation-dialog'

export function AIGenerationDropdown() {
  const [generationMode, setGenerationMode] = useState<AIGenerationMode | null>(null)

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

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button type="button">
            <Bot data-icon="inline-start" />
            Inteligência Artificial
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={10} align="start" className="w-72">
          <DropdownMenuGroup>
            <DropdownMenuLabel className="flex items-center gap-1">
              Você possui
              <strong className="inline-flex items-center gap-0.5 text-foreground">
                <BadgeCent className="size-3.5" />
                20 créditos
              </strong>
            </DropdownMenuLabel>

            <DropdownMenuItem onClick={() => console.log('Comprar créditos')}>
              <CreditCard />
              <span>Comprar créditos</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuLabel>Gerar com IA</DropdownMenuLabel>

            {actions.map(action => (
              <DropdownMenuItem key={action.label} onClick={action.onClick}>
                <action.icon />
                <span>{action.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

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
