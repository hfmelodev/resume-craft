import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { ResumePage } from '@/components/pages/dashboard/resume'
import { getResumeById, getSession } from '@/db/dals'

type ResumeLoaderProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ResumeLoaderProps): Promise<Metadata> {
  // getResumeById é memorizado por request, então o loader da página reaproveita a mesma busca
  const resume = await getResumeById((await params).id)

  return {
    title: resume?.title ?? 'Currículo',
    robots: { index: false, follow: false },
  }
}

async function ResumeLoader({ params }: ResumeLoaderProps) {
  const resumeId = (await params).id

  const resume = await getResumeById(resumeId)

  if (!resume) return notFound()

  const initialData = resume.data as ResumeData

  // Reaproveita a sessão já resolvida pelo getResumeById (memorizada por request)
  const session = await getSession()

  return <ResumePage initialData={initialData} title={resume.title} user={session?.user} />
}

export default function DashboardResumePage({ params }: ResumeLoaderProps) {
  return (
    <Suspense>
      <ResumeLoader params={params} />
    </Suspense>
  )
}
