import z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.url(),
  DIRECT_URL: z.url(),

  AUTH_SECRET: z.string().min(1),
  AUTH_GITHUB_ID: z.string().min(1),
  AUTH_GITHUB_SECRET: z.string().min(1),
  AUTH_GOOGLE_ID: z.string().min(1),
  AUTH_GOOGLE_SECRET: z.string().min(1),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('❌ Variáveis de ambiente inválidas:', z.flattenError(parsedEnv.error).fieldErrors)

  throw new Error('Variáveis de ambiente inválidas.')
}

export const env = parsedEnv.data
