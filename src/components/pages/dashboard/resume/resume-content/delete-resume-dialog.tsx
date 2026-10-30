'use client'

import { useMutation } from '@tanstack/react-query'
import { LoaderCircle, Trash2 } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useLayoutEffect, useState, useTransition } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { type BaseDialogProps, Dialog } from '@/components/ui/dialog'
import { deleteResume } from '@/db/actions'

export function DeleteResumeDialog(props: BaseDialogProps) {
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const resumeId = params.id

  const [open, setOpen] = useState(false)
  const [isNavigating, startTransition] = useTransition()

  const { mutate: handleDeleteResume, isPending: isDeletingResume } = useMutation({
    mutationFn: () => deleteResume({ id: resumeId }),
    onSuccess: result => {
      if (result?.error) {
        toast.error(result.error)
        return
      }

      toast.success('Currículo deletado com sucesso!')

      // router.push não bloqueia: a transition mantém o loading até a listagem renderizar
      startTransition(() => router.push('/dashboard/resumes'))
    },
    onError: error => {
      console.error(error)
      toast.error('Erro ao deletar o currículo. Tente novamente.')
    },
  })

  function onDelete() {
    handleDeleteResume()
  }

  const isLoading = isDeletingResume || isNavigating

  // Com cacheComponents a página é escondida (Activity), não desmontada: fecha o diálogo ao sair dela
  useLayoutEffect(() => {
    return () => setOpen(false)
  }, [])

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
