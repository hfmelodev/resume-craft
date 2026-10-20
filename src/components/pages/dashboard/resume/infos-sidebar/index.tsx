import Link from 'next/link'
import Logo from '@/assets/logo.svg'
import { Separator } from '@/components/ui/separator'
import { AIGenerationDropdown } from './ai-generation-dropdown'
import { BasicInfoSection } from './sections/basic-info'
export function InfosSidebar() {
  return (
    <aside className="h-full w-full overflow-y-auto p-6">
      <div className="flex w-full items-center justify-between">
        <Link href="/dashboard/resumes">
          <Logo className="w-full max-w-20" />
        </Link>

        {/* COMP: AI Generation Dropdown */}
        <AIGenerationDropdown />
      </div>

      <Separator className="my-5" />

      {/* COMP: Basic Info Section */}
      <BasicInfoSection />
    </aside>
  )
}
