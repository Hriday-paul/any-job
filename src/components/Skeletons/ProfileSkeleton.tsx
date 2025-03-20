import { Skeleton } from "../ui/skeleton";

export default function ProfileSkeleton() {
    return (
      <div className="px-4 py-8">
        {/* Profile Header Skeleton */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <Skeleton className="w-full h-48 md:w-48 md:h-48 rounded-md" />
  
          <div className="flex-grow space-y-4">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-32" />
  
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-24" />
            </div>
  
            <div className="space-y-2">
              <Skeleton className="h-5 w-full max-w-xs" />
              <Skeleton className="h-5 w-full max-w-xs" />
              <Skeleton className="h-5 w-full max-w-xs" />
              <Skeleton className="h-5 w-full max-w-xs" />
            </div>
  
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
  
        {/* Biography Skeleton */}
        <div className="mb-8 space-y-3">
          <Skeleton className="h-7 w-32" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
  
        {/* Service Offer Skeleton */}
        <div className="mb-8 space-y-3">
          <Skeleton className="h-7 w-32" />
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-8 w-24 rounded-full" />
            <Skeleton className="h-8 w-24 rounded-full" />
            <Skeleton className="h-8 w-32 rounded-full" />
            <Skeleton className="h-8 w-40 rounded-full" />
          </div>
        </div>
  
        {/* Pricing & Availability Skeleton */}
        <div className="mb-8 space-y-3">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-5 w-full max-w-xs" />
          <Skeleton className="h-5 w-full max-w-xs" />
        </div>
  
        {/* Work Photos Skeleton */}
        <div className="space-y-3">
          <Skeleton className="h-7 w-32" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="aspect-square rounded-md" />
            ))}
          </div>
        </div>
      </div>
    )
  }