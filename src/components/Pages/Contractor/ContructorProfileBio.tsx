import { Star } from 'lucide-react';
import React from 'react';
import ServiceImages from './ServiceImages';
import { userResType } from '@/redux/types';
import Image from 'next/image';

const ContructorProfileBio = ({ profileData }: { profileData: userResType }) => {

    const getRatingPercent = (star: number) => {
        const length = profileData?.reviews?.length;

        if (length === 0) return 0;

        const ratingCount = profileData?.reviews?.filter(i => i?.rating >= star)?.length || 0

        // -----------------percent ratings by total ratings----------

        return (ratingCount / length) * 100;
    }

   

    return (
        <div className='space-y-8 mt-5 md:mt-8'>
            {/* Biography Section */}
            <div className="space-y-2">
                <h2 className="text-xl font-bold font-figtree text-gray-900">Biography</h2>
                <p className="text-base font-figtree font-medium text-gray-600 overflow-x-auto">
                    {profileData?.bio}
                </p>
            </div>

            {/* Service Offer Section */}
            <div className="space-y-4">
                <h2 className="text-xl font-figtree font-bold text-gray-900">Service Offer</h2>
                <div className="flex flex-row flex-wrap gap-3">
                    {profileData?.myServices?.map((service) => (
                        <span key={service?.id} className="px-2.5 md:px-3.5 py-1 md:py-1.5 text-sm md:text-base font-figtree font-medium bg-red-50 text-primary_red rounded-full">
                            {service?.service?.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* Pricing & Availability */}
            <div className="space-y-4">
                <h2 className="text-xl font-figtree font-bold text-gray-900">Pricing & Availability</h2>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-base font-figtree font-medium text-gray-600">Hourly Rate: Starting from ${profileData?.minPricing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-base font-figtree font-medium text-gray-600">Availability: Open for bookings ({profileData?.availability})</span>
                    </div>
                </div>
            </div>

            {/* Work Photos */}
            <div className="space-y-4">
                <h2 className="text-xl font-figtree font-bold text-gray-900">Work Photos</h2>
                {profileData?.workPhotos?.length > 0 ? <ServiceImages images={profileData?.workPhotos} /> : <Image src={'/empty_work_image.jpeg'} height={1000} width={1000} alt='any job empty work photo' className='h-36 w-44' />}
            </div>

            {/* Why Choose Me */}
            <div className="space-y-4">
                <h2 className="text-xl font-figtree font-bold text-gray-900">Why Choose Me?</h2>
                <div className="space-y-2">
                    {/* {["Serving 50+ happy homeowners", "Fast & Reliable Service", "Professional Satisfaction"].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-500" />
                            <span className="text-base font-figtree font-medium text-gray-600">{item}</span>
                        </div>
                    ))} */}
                    <pre className="text-base font-figtree font-medium text-gray-600 ">
                        {profileData?.whyChooseMe}
                    </pre>
                </div>
            </div>

            {/* Rating & Review */}
            <div className="space-y-4">
                <h2 className="text-xl font-figtree font-bold text-gray-900">Rating & Review</h2>
                <div className="flex items-center gap-5 md:gap-10 max-w-xl lg:max-w-2xl mx-auto">
                    <div className="text-center">
                        <div className="text-4xl font-bold font-figtree text-gray-900">{profileData?.rating}</div>
                        <div className="text-base font-figtree font-medium text-gray-500">out of 5</div>
                        <div className="text-base font-figtree font-medium text-gray-500">{profileData?.reviewCount} Reviews</div>
                    </div>
                    <div className="flex-1 space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center gap-2">
                                <div className=' flex flex-row gap-x-2 md:gap-x-3 items-center'>
                                    {
                                        Array.from({ length: rating }).map((_, index) => (
                                            <Star key={index} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                                        ))
                                    }

                                    {
                                        Array.from({ length: 5 - rating }).map((_, index) => (
                                            <Star key={index} className="w-4 h-4 fill-gray-200 stroke-gray-200" />
                                        ))
                                    }

                                </div>
                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary_red rounded-full"
                                        style={{
                                            width: getRatingPercent(rating),
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ContructorProfileBio;