import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonResult = () => {
  return (
    <section className="w-full px-4 py-30 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        <div className="w-3/4">
          <Skeleton className="h-[120px] w-full bg-muted animate-pulse rounded-md" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <Skeleton className="h-32 w-full bg-muted animate-pulse rounded-lg" />
          <Skeleton className="h-32 w-full bg-muted animate-pulse rounded-lg" />
          <Skeleton className="h-32 w-full bg-muted animate-pulse rounded-lg" />
        </div>

        <div className="w-full flex gap-3 justify-start">
          <div className="flex w-full md:w-1/2 gap-4">
            <Skeleton className="h-10 w-1/3 bg-muted animate-pulse rounded-lg" />
            <Skeleton className="h-10 w-1/3 bg-muted animate-pulse rounded-lg" />
            <Skeleton className="h-10 w-1/3 bg-muted animate-pulse rounded-lg" />
          </div>
        </div>

        <Skeleton className="h-40 w-full bg-muted animate-pulse rounded-md" />
      </div>
    </section>
  );
};

export default SkeletonResult;
