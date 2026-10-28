import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonResumesListFallback() {
  return (
    <section className="grid flex-1 auto-rows-max grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 xl:grid-cols-5">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-75 w-full rounded border border-muted-foreground/20 bg-muted/50" />
      ))}
    </section>
  )
}
