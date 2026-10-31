import { Plus } from 'lucide-react'
import type { ComponentProps } from 'react'
import { ResumeCardButton } from './resume-card'

// Repassa as props para o <button> porque o DialogTrigger (asChild) injeta onClick, ref e atributos de acessibilidade
export function AddResumeButton(props: ComponentProps<'button'>) {
  return (
    <button type="button" className="block w-full rounded" {...props}>
      <ResumeCardButton
        title="Criar novo currículo"
        description="Clique aqui para criar um novo currículo"
        icon={<Plus size={50} />}
      />
    </button>
  )
}
