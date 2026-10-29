'use server'

import { and, eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { auth } from '@/lib/auth'
import { getSession } from './dals'
import { db } from './drizzle'
import { resumes } from './schema'

export async function createResume({ title }: { title: string }) {
  const session = await auth()

  const userId = session?.user?.id

  if (!userId) return { error: 'Você precisa estar logado para criar um currículo.' }

  const titleAlreadyExists = await db
    .select({ id: resumes.id })
    .from(resumes)
    .where(and(eq(resumes.userId, userId), eq(resumes.title, title)))
    .limit(1)

  if (titleAlreadyExists.length > 0) return { error: 'Você já possui um currículo com esse título.' }

  const [resume] = await db
    .insert(resumes)
    .values({
      title,
      userId,
    })
    .returning()

  revalidatePath('/dashboard/resumes')

  return { resume }
}

type UpdateResumeDataProps = {
  id: string
  data: ResumeData
}

export async function updateResumeData({ id, data }: UpdateResumeDataProps) {
  const session = await getSession()

  const userId = session?.user?.id

  if (!userId) return { error: 'Você precisa estar logado para editar um currículo.' }

  const updatedResume = await db
    .update(resumes)
    .set({ data, updatedAt: new Date() })
    .where(and(eq(resumes.id, id), eq(resumes.userId, userId)))
    .returning()

  revalidatePath('/dashboard/resumes')

  return { updatedResume }
}
