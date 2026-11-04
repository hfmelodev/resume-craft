import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { SiGithub } from 'react-icons/si'
import Logo from '@/assets/logo.svg'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { Button } from '@/components/ui/button'
import { signIn } from '@/lib/auth'

type Providers = 'github' | 'google'

export const metadata: Metadata = {
  title: 'Entrar',
  description: 'Entre com sua conta do GitHub ou Google para criar e editar seus currículos no Resume Craft.',
  alternates: { canonical: '/auth/login' },
}

export default function LoginPage() {
  async function handleLogin(form: FormData) {
    'use server'

    const provider = form.get('provider') as Providers

    await signIn(provider, {
      redirectTo: '/dashboard/resumes',
    })
  }

  return (
    <div className="grid min-h-dvh lg:h-dvh lg:grid-cols-[1.5fr_1fr]">
      {/* A imagem é decorativa: em telas menores o formulário ocupa a tela inteira */}
      <aside className="hidden overflow-hidden lg:block">
        <Image
          width={1000}
          height={800}
          src="/images/auth-bg.webp"
          alt="Escritório com vários currículos espalhados por todas as mesas."
          className="fade-in zoom-in-110 h-full w-full animate-in fill-mode-both object-cover duration-1000 ease-out motion-reduce:animate-none"
          quality={100}
          loading="eager"
        />
      </aside>

      <form className="relative flex flex-col justify-center px-6 py-20 sm:px-10" action={handleLogin}>
        <div className="fade-in absolute top-5 right-5 animate-in fill-mode-both delay-500 duration-700 motion-reduce:animate-none">
          <ThemeToggle />
        </div>

        <div className="mx-auto w-full max-w-sm lg:mx-0">
          <Link
            href="/"
            className="fade-in slide-in-from-bottom-4 block w-22.5 animate-in fill-mode-both duration-700 motion-reduce:animate-none"
          >
            <Logo className="mb-10 max-w-22.5" />
          </Link>

          <h1 className="fade-in slide-in-from-bottom-4 animate-in fill-mode-both font-bold font-heading text-xl delay-150 duration-700 motion-reduce:animate-none">
            Entre em sua conta
          </h1>
          <p className="fade-in slide-in-from-bottom-4 animate-in fill-mode-both text-muted-foreground text-sm delay-200 duration-700 motion-reduce:animate-none">
            Caso não tenha conta, ela será criada automaticamente.
          </p>

          <div className="fade-in slide-in-from-bottom-4 mt-6 flex animate-in flex-col gap-4 fill-mode-both delay-300 duration-700 motion-reduce:animate-none">
            <Button variant="outline" className="w-full gap-2" type="submit" name="provider" value="github">
              <SiGithub /> Entrar com GitHub <span className="sr-only">Entrar com GitHub </span>
            </Button>
            <Button className="w-full gap-2" type="submit" name="provider" value="google">
              <FcGoogle /> Entrar com Google <span className="sr-only">Entrar com Google </span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
