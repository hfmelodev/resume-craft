'use client'

import { useQueryClient } from '@tanstack/react-query'
import confetti from 'canvas-confetti'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { toast } from 'sonner'
import { queryKeys } from '@/constants/query-keys'

function fireConfetti() {
  const end = Date.now() + 1500
  const options = { particleCount: 4, spread: 60, startVelocity: 55, disableForReducedMotion: true }

  const frame = () => {
    confetti({ ...options, angle: 60, origin: { x: 0, y: 0.7 } })
    confetti({ ...options, angle: 120, origin: { x: 1, y: 0.7 } })

    if (Date.now() < end) requestAnimationFrame(frame)
  }

  frame()
}

export function CreditToast() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const queryClient = useQueryClient()

  const checkoutStatus = searchParams.get('checkout')
  // Evita toast/confete duplicados: o Strict Mode roda o efeito duas vezes antes do replace limpar a URL
  const handledRef = useRef(false)

  useEffect(() => {
    if (!checkoutStatus) {
      handledRef.current = false
      return
    }

    if (handledRef.current) return
    handledRef.current = true

    if (checkoutStatus === 'success') {
      fireConfetti()
      toast.success('Pagamento confirmado!', {
        description: 'Seus créditos foram adicionados à sua conta e já estão disponíveis para uso.',
        duration: 6000,
      })
      queryClient.invalidateQueries({ queryKey: queryKeys.credits })
    }

    if (checkoutStatus === 'cancel') {
      toast.info('Compra cancelada', {
        description: 'Nenhuma cobrança foi realizada. Você pode tentar novamente quando quiser.',
      })
    }

    // Remove o parâmetro da URL para o toast não reaparecer ao recarregar a página
    router.replace(pathname, { scroll: false })
  }, [checkoutStatus, pathname, router, queryClient])

  return null
}
