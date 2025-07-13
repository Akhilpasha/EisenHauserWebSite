import { Skeleton } from "@/components/ui/skeleton"

export default function BlogLoading() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section Skeleton */}
      <section className="relative h-[40vh] min-h-[300px] mb-16">
        <Skeleton className="absolute inset-0" />
      </section>

      {/* Blog Content Skeleton */}
      <section className="py-12">
        <div className="container-custom">
          {/* Category Filter Skeleton */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <Skeleton key={i} className="h-10 w-24 rounded-full" />
              ))}
            </div>
          </div>

          {/* Featured Post Skeleton */}
          <div className="mb-16">
            <Skeleton className="w-full aspect-[16/9] rounded-xl mb-4" />
            <Skeleton className="h-8 w-32 mb-2" />
            <Skeleton className="h-10 w-3/4 mb-3" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-2/3 mb-4" />
            <Skeleton className="h-10 w-32" />
          </div>

          {/* Blog Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i}>
                <Skeleton className="w-full aspect-[16/9] rounded-lg mb-4" />
                <Skeleton className="h-5 w-32 mb-2" />
                <Skeleton className="h-7 w-full mb-2" />
                <Skeleton className="h-5 w-full mb-2" />
                <Skeleton className="h-5 w-2/3 mb-3" />
                <div className="flex items-center">
                  <Skeleton className="w-8 h-8 rounded-full mr-2" />
                  <Skeleton className="h-5 w-24" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Skeleton */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-1">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="w-10 h-10 rounded-md" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section Skeleton */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full mb-2 mx-auto" />
            <Skeleton className="h-6 w-3/4 mb-6 mx-auto" />
            <div className="flex flex-col sm:flex-row gap-2">
              <Skeleton className="h-10 flex-1" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}