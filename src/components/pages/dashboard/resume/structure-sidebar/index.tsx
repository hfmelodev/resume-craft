import { Separator } from '@/components/ui/separator'
import { LanguageSection } from './sections/language'
import { LayoutSection } from './sections/layout'
import { TemplatesListSection } from './sections/templates-list'
import { ThemeSection } from './sections/theme'

export function StructureSidebar() {
  return (
    <aside className="h-full w-full overflow-y-auto p-6">
      {/* COMP: Templates List Section */}
      <TemplatesListSection />

      <Separator className="my-5" />

      {/* COMP: Layout Section */}
      <LayoutSection />

      <Separator className="my-5" />

      {/* COMP: Theme Sections */}
      <ThemeSection />

      <Separator className="my-5" />

      {/* COMP: Language Section */}
      <LanguageSection />
    </aside>
  )
}
