import type { Metadata } from 'next'

// A página da conta é client component e não pode exportar metadata
export const metadata: Metadata = {
  title: 'Minha conta',
}

export default function AccountLayout({ children }: LayoutProps<'/dashboard/account'>) {
  return children
}
