import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const ServiceLoadingCard = () => {
    return (
        <div className="w-full mx-auto bg-white rounded-xl shadow overflow-hidden">
            <div className="p-4 flex flex-col items-center">

                <Skeleton className="w-full h-60 rounded-md mb-4" />

                {/* Text skeleton */}
                <div className="w-full space-y-4">
                    {/* Title */}
                    <Skeleton className="h-7 w-1/2" />

                    {/* Paragraph lines */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceLoadingCard;