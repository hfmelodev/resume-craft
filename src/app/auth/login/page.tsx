import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { SiGithub } from 'react-icons/si'
import Logo from '@/assets/logo.svg'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { Button } from '@/components/ui/button'
import { signIn } from '@/lib/auth'

type Providers = 'github' | 'google'

export default function LoginPage() {
  async function handleLogin(form: FormData) {
    'use server'

    const provider = form.get('provider') as Providers

    await signIn(provider, {
      redirectTo: '/dashboard/resumes',
    })
  }

  return (
    <div className="grid h-screen grid-cols-[1.5fr_1fr]">
      <aside>
        <Image
          width={1000}
          height={800}
          src="/images/auth-bg.webp"
          alt="Escritório com vários currículos espalhados por todas as mesas."
          className="h-full w-full object-cover"
          quality={100}
          loading="eager"
        />
      </aside>

      <form className="relative flex flex-col justify-center p-10" action={handleLogin}>
        <div className="mb-10 flex items-center justify-between">
          <Logo className="max-w-22.5" />

          <div className="absolute top-5 right-5">
            <ThemeToggle />
          </div>
        </div>

        <h1 className="font-bold font-heading text-xl">Entre em sua conta</h1>
        <p className="text-muted-foreground text-sm">Caso não tenha conta, ela será criada automaticamente.</p>

        <div className="mt-6 flex flex-col gap-4">
          <Button variant="outline" className="w-full gap-2" type="submit" name="provider" value="github">
            <SiGithub /> Entrar com GitHub <span className="sr-only">Entrar com GitHub </span>
          </Button>
          <Button className="w-full gap-2" type="submit" name="provider" value="google">
            <FcGoogle /> Entrar com Google <span className="sr-only">Entrar com Google </span>
          </Button>
        </div>
      </form>
    </div>
  )
}
