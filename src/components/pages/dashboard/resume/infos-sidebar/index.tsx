import Link from 'next/link'
import Logo from '@/assets/logo.svg'
import { Separator } from '@/components/ui/separator'
import { AIGenerationDropdown } from './ai-generation-dropdown'
import { BasicInfoSection } from './sections/basic-info'
import { MultiplesSections } from './sections/multiples'
import { SummarySection } from './sections/summary'
export function InfosSidebar() {
  return (
    <aside className="@container min-h-full w-full p-4 sm:p-6">
      <div className="flex w-full items-center justify-between gap-3">
        <Link href="/dashboard/resumes" aria-label="Voltar ao painel" className="shrink-0">
          <Logo className="w-20" />
        </Link>

        {/* COMP: AI Generation Dropdown */}
        <AIGenerationDropdown />
      </div>

      <Separator className="my-5" />

      {/* COMP: Basic Info Section */}
      <BasicInfoSection />

      <Separator className="my-5" />

      {/* COMP: Summary Section */}
      <SummarySection />

      <Separator className="my-5" />

      {/* COMP: Multiples Sections */}
      <MultiplesSections />
    </aside>
  )
}
