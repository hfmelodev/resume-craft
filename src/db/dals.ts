import { and, eq } from 'drizzle-orm'
import { connection } from 'next/server'
import { cache } from 'react'
import { auth } from '@/lib/auth'
import { db } from './drizzle'
import { resumes } from './schema'

export type GetResumesDTO = typeof resumes.$inferSelect

// Memoriza a sessão por request: DALs e páginas compartilham um único auth()
export const getSession = cache(async () => {
  // ALERT: O auth() re-criptografa o JWT da sessão (crypto.getRandomValues), então precisa rodar por request
  await connection()

  return auth()
})

export const getResumes = cache(async (): Promise<GetResumesDTO[]> => {
  const session = await getSession()

  const userId = session?.user?.id

  if (!userId) return []

  return db.select().from(resumes).where(eq(resumes.userId, userId))
})

// Recebe o id como string: o cache() compara argumentos por referência, então um objeto nunca deduplicaria
export const getResumeById = cache(async (id: string): Promise<GetResumesDTO | null> => {
  const session = await getSession()

  const userId = session?.user?.id

  if (!userId) return null

  // Filtra pelo dono para impedir acesso ao currículo de outro usuário via UUID
  const resume = await db
    .select()
    .from(resumes)
    .where(and(eq(resumes.id, id), eq(resumes.userId, userId)))
    .limit(1)

  return resume.length > 0 ? resume[0] : null
})
