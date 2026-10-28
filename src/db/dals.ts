import { eq } from 'drizzle-orm'
import { connection } from 'next/server'
import { cache } from 'react'
import { auth } from '@/lib/auth'
import { db } from './drizzle'
import { resumes } from './schema'

export type GetResumesDTO = typeof resumes.$inferSelect

export const getResumes = cache(async (): Promise<GetResumesDTO[]> => {
  // O auth() re-criptografa o JWT da sessão (crypto.getRandomValues), então precisa rodar por request
  await connection()
  const session = await auth()

  const userId = session?.user?.id

  if (!userId) return []

  return db.select().from(resumes).where(eq(resumes.userId, userId))
})
