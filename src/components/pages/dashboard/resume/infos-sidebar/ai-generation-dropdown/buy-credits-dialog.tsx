import { useMutation, useQuery } from '@tanstack/react-query'
import { LoaderCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { Skeleton } from '@/components/ui/skeleton'
import { queryKeys } from '@/constants/query-keys'
import { ApiService } from '@/server/api'

type BuyCreditsDialogProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

export function BuyCreditsDialog({ open, setOpen }: BuyCreditsDialogProps) {
  const pathname = usePathname()

  const { data: packages = [], isLoading: isLoadingPackages } = useQuery({
    queryKey: queryKeys.packages,
    queryFn: () => ApiService.getPackageCredits(),
    select: prices =>
      prices
        .map(price => ({
          id: price.id,
          credits: Number(price.metadata.amount),
          price: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: price.currency.toUpperCase(),
          }).format((price.unit_amount ?? 0) / 100),
        }))
        // ignora preços sem metadata "amount" válida no Stripe
        .filter(pkg => Number.isFinite(pkg.credits) && pkg.credits > 0)
        .sort((a, b) => a.credits - b.credits),
  })

  const {
    mutate: createCheckoutSession,
    isPending,
    isSuccess,
    variables: pendingPriceId,
  } = useMutation({
    mutationFn: (priceId: string) => ApiService.getCheckoutUrl(priceId, pathname),
    onSuccess: data => {
      if (data?.url) {
        window.location.href = data.url
      }
    },
  })

  // mantém o loading após o sucesso, até o navegador concluir o redirect
  const isCreatingCheckout = isPending || isSuccess

  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      title="Comprar créditos"
      description="Escolha um dos pacotes abaixo para comprar créditos e começar a gerar!"
      content={
        <div className="grid gap-3" aria-busy={isLoadingPackages}>
          {isLoadingPackages &&
            Array.from({ length: 3 }, (_, i) => <Skeleton key={i} aria-label="Carregando pacotes" className="h-17 w-full" />)}

          {packages.map(pkg => (
            <Button
              key={pkg.id}
              type="button"
              variant="outline"
              className="flex h-max w-full flex-col gap-1.5"
              disabled={isCreatingCheckout}
              onClick={() => createCheckoutSession(pkg.id)}
            >
              {isCreatingCheckout && pendingPriceId === pkg.id ? (
                <LoaderCircle className="size-6 animate-spin" />
              ) : (
                <>
                  <strong className="font-bold font-heading text-xl">{pkg.credits} créditos</strong>
                  <span className="text-muted-foreground text-sm">por apenas {pkg.price}</span>
                </>
              )}
            </Button>
          ))}
        </div>
      }
    />
  )
}
