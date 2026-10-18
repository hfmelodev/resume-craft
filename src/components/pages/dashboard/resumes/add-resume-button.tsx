import { Plus } from 'lucide-react'
import { ResumeCardButton } from './resume-card'

export function AddResumeButton() {
  return (
    <ResumeCardButton
      title="Criar novo currículo"
      description="Clique aqui para criar um novo currículo"
      icon={<Plus size={50} />}
    />
  )
}
