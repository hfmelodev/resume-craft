import { getResumes } from '@/db/dals'
import { AddResumeButton } from '../add-resume-button'
import { NewResumeDialog } from '../new-resume-dialog'
import { ResumeCard } from '../resume-card'

export async function ResumesList() {
  const resumes = await getResumes()

  const sortedResumes = resumes.sort((a, b) => {
    if (a.updatedAt < b.updatedAt) return 1
    if (a.updatedAt > b.updatedAt) return -1
    return 0
  })

  return (
    <section className="grid flex-1 auto-rows-max grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 xl:grid-cols-5">
      <NewResumeDialog>
        <AddResumeButton />
      </NewResumeDialog>

      {sortedResumes.map(resume => (
        <ResumeCard key={resume.id} resume={resume} />
      ))}
    </section>
  )
}
