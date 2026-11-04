'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { BadgeCent, CirclePlus, LoaderCircle, Receipt, SquareUser } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { BuyCreditsDialog } from '@/components/pages/dashboard/resume/infos-sidebar/ai-generation-dropdown/buy-credits-dialog'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { queryKeys } from '@/constants/query-keys'
import { ApiService } from '@/server/api'

export default function AccountPage() {
  const pathname = usePathname()

  const [showCreditsModal, setShowCreditsModal] = useState(false)

  const {
    mutate: handleOpenTransactions,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: () => ApiService.getTransactions(pathname),
    onSuccess: url => {
      location.href = url
    },
    onError: error => {
      // 400 = usuário sem customerId no Stripe, ou seja, nunca comprou créditos
      if (isAxiosError(error) && error.response?.status === 400) {
        toast.info('Você ainda não possui transações.')
        return
      }

      toast.error('Erro ao abrir suas transações. Tente novamente.')
    },
  })

  // mantém o loading após o sucesso, até o navegador concluir o redirect
  const isOpeningTransactions = isPending || isSuccess

  const { data: credits, isLoading: isLoadingCredits } = useQuery({
    queryKey: queryKeys.credits,
    queryFn: () => ApiService.getCredits(),
  })

  return (
    <>
      <h1 className="flex items-center gap-2 font-bold font-heading text-xl">
        <SquareUser className="h-6 w-6 text-muted-foreground" />
        Configurações da conta
      </h1>

      <Separator className="my-5" />

      <section className="flex flex-col gap-2">
        <h2 className="font-heading font-semibold text-lg">Créditos</h2>

        <div className="flex items-center gap-1 text-muted-foreground">
          Você possui
          <strong className="inline-flex items-center gap-1 text-foreground">
            <BadgeCent className="size-4" />
            {isLoadingCredits ? <Skeleton aria-label="Carregando créditos" className="inline-block h-4 w-6" /> : (credits ?? 0)}{' '}
            créditos
          </strong>
        </div>

        <p className="mt-2 text-muted-foreground">
          Créditos são utilizados para gera contéudo para seus currrículos com inteligência artificial.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <Button disabled={isLoadingCredits || isOpeningTransactions} onClick={() => setShowCreditsModal(true)}>
            <CirclePlus data-icon="inline-start" />
            Adicionar Créditos
          </Button>

          <Button disabled={isLoadingCredits || isOpeningTransactions} variant="outline" onClick={() => handleOpenTransactions()}>
            {isOpeningTransactions ? (
              <LoaderCircle data-icon="inline-start" className="animate-spin" />
            ) : (
              <Receipt data-icon="inline-start" />
            )}
            {isOpeningTransactions ? 'Abrindo...' : 'Minhas Transações'}
          </Button>
        </div>
      </section>

      <BuyCreditsDialog open={showCreditsModal} setOpen={setShowCreditsModal} />
    </>
  )
}
