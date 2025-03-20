import React from 'react';
import { Skeleton } from '../ui/skeleton';

const PricingCardSkeloton = () => {
    return (
        <div className="w-full max-w-sm rounded-xl border border-stroke bg-white p-6 shadow-md">
            {/* Header */}
            <div className="space-y-1.5 mb-4">
                <Skeleton className="h-7 w-24 bg-red-100" />
                <Skeleton className="h-4 w-40 bg-gray-100" />
            </div>

            {/* Price */}
            <div className="my-6">
                <Skeleton className="h-10 w-32 bg-red-100" />
            </div>

            {/* Features */}
            <div className="space-y-4 my-6">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                        <Skeleton className="h-5 w-5 rounded-full bg-red-100 flex-shrink-0 mt-0.5" />
                        <Skeleton className="h-5 w-full bg-gray-100" />
                    </div>
                ))}
            </div>

            {/* Button */}
            <div className="mt-8 flex justify-center">
                <Skeleton className="h-10 w-full bg-red-100 rounded-md" />
            </div>
        </div>
    );
};

export default PricingCardSkeloton;