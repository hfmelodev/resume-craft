import { Suspense } from 'react'
import { ResumesList } from '@/components/pages/dashboard/resumes/resumes-list'
import { SkeletonResumesListFallback } from './skeleton'

export default function DashboardResumesPage() {
  return (
    <>
      <h1 className="mb-4 font-bold font-heading text-2xl sm:mb-6 sm:text-3xl">Currículos</h1>

      <Suspense fallback={<SkeletonResumesListFallback />}>
        <ResumesList />
      </Suspense>
    </>
  )
}
