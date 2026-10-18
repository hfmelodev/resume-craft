import { AddResumeButton } from '../add-resume-button'
import { NewResumeDialog } from '../new-resume-dialog'
import { ResumeCard } from '../resume-card'

export function ResumesList() {
  return (
    <section className="grid flex-1 auto-rows-max grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 xl:grid-cols-5">
      <NewResumeDialog>
        <AddResumeButton />
      </NewResumeDialog>

      <ResumeCard />
      <ResumeCard />
    </section>
  )
}
