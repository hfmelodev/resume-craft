import { environmentManager, QueryClient } from '@tanstack/react-query'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Com SSR, evita refetch imediato no cliente logo após a hidratação
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined

export function getQueryClient() {
  // Servidor: sempre um client novo, para não vazar cache entre requisições
  if (environmentManager.isServer()) return makeQueryClient()

  // Browser: reaproveita o mesmo client, mesmo se o React suspender no primeiro render
  if (!browserQueryClient) browserQueryClient = makeQueryClient()

  return browserQueryClient
}
