import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonUserDropdownFallback() {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-2 px-2">
      <Skeleton className="h-7 w-7 shrink-0 rounded-full" />
      <Skeleton className="h-4 flex-1 rounded" />
    </div>
  )
}
