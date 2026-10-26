import { Separator } from '@/components/ui/separator'
import { TemplatesListSection } from './sections/templates-list'

export function StructureSidebar() {
  return (
    <aside className="h-full w-full overflow-y-auto p-6">
      {/* COMP: Templates List Section */}
      <TemplatesListSection />

      <Separator className="my-5" />
    </aside>
  )
}
