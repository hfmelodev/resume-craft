import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonResumesListFallback() {
  return (
    <section className="grid flex-1 auto-rows-max @2xs:grid-cols-2 @3xl:grid-cols-4 @5xl:grid-cols-5 @xl:grid-cols-3 grid-cols-1 @3xl:gap-5 @xl:gap-4 gap-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="aspect-3/4 w-full rounded border border-muted-foreground/20 bg-muted/50" />
      ))}
    </section>
  )
}
