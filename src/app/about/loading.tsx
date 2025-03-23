import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const loading = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            {/* Header Skeleton */}
            <header className="mb-12">
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-4 w-1/2 mb-8" />
            </header>

            {/* Main Content Skeleton */}
            <main className="space-y-6">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="space-y-3">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-11/12" />
                        <Skeleton className="h-4 w-4/5" />
                    </div>
                ))}
            </main>

            {/* Mission Statement Skeleton */}
            <section className="mt-12">
                <Skeleton className="h-6 w-1/3 mb-4" />
                <div className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-11/12" />
                    <Skeleton className="h-4 w-4/5" />
                </div>
            </section>

            {/* Team Section Skeleton */}
            <section className="mt-12">
                <Skeleton className="h-6 w-1/4 mb-6" />
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="mb-6">
                        <Skeleton className="h-5 w-1/3 mb-2" />
                        <Skeleton className="h-4 w-2/3 mb-1" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default loading;