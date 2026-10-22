import { Suspense } from 'react'
import { ResumePage } from '@/components/pages/dashboard/resume'

export default function DashboardResumePage() {
  return (
    <Suspense>
      <ResumePage />
    </Suspense>
  )
}
