import Logo from '@/assets/logo.svg'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <Logo className="w-16 opacity-80" />
        <p className="text-muted-foreground text-sm">
          © Resume Craft. Feito por{' '}
          <a href="https://hfmelo.dev" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
            Hilquias Ferreira Melo
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
