'use client'

import { LoaderCircle, Trash2 } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { type BaseDialogProps, Dialog } from '@/components/ui/dialog'
import { deleteResume } from '@/db/actions'

export function DeleteResumeDialog(props: BaseDialogProps) {
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const resumeId = params.id

  const [open, setOpen] = useState(false)
  const [isLoading, startTransition] = useTransition()

  function onDelete() {
    // A transition async mantém o loading durante a action e a navegação de volta para a listagem
    startTransition(async () => {
      try {
        const result = await deleteResume({ id: resumeId })

        if (result?.error) {
          toast.error(result.error)
          return
        }

        toast.success('Currículo deletado com sucesso!')

        // Após um await, o router.push precisa de um novo startTransition para continuar na transition
        startTransition(() => router.push('/dashboard/resumes'))
      } catch (error) {
        console.error(error)
        toast.error('Erro ao deletar o currículo. Tente novamente.')
      }
    })
  }

  return (
    <Dialog
      {...props}
      open={open}
      setOpen={setOpen}
      title="Deletar currículo"
      description="Tem certeza que deseja deletar esse currículo?"
      content={
        <div className="ml-auto flex gap-2">
          <Button variant="ghost" disabled={isLoading} onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button variant="destructive" disabled={isLoading} onClick={onDelete}>
            {isLoading ? <LoaderCircle data-icon="inline-start" className="animate-spin" /> : <Trash2 data-icon="inline-start" />}
            <span className="[text-box:trim-both_cap_alphabetic]">{isLoading ? 'Deletando...' : 'Deletar'}</span>
          </Button>
        </div>
      }
    />
  )
}
