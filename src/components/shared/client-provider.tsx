'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@/components/shared/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip/primitive'
import { getQueryClient } from '@/lib/tanstack-query'

type ClientProviderProps = {
  children: React.ReactNode
}

export function ClientProvider({ children }: ClientProviderProps) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster theme="system" richColors />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
