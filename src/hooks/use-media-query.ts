import { useCallback, useSyncExternalStore } from 'react'

// Retorna undefined no servidor e na hidratação, já que a largura da tela só existe no navegador
export function useMediaQuery(query: string): boolean | undefined {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mediaQueryList = window.matchMedia(query)

      mediaQueryList.addEventListener('change', onChange)

      return () => mediaQueryList.removeEventListener('change', onChange)
    },
    [query]
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => undefined
  )
}
