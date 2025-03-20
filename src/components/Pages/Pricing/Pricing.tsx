"use client"
import ErrorComponent from '@/components/Shared/ErrorComponent';
import PricingCard from '@/components/Shared/PricingCard';
import PricingCardSkeloton from '@/components/Skeletons/PricingCardSkeloton';
import { usePackagesQuery } from '@/redux/api/SubscriptionApi';
import React from 'react';

const Pricing = () => {

    const { isLoading, isError, isSuccess, data } = usePackagesQuery();

    return (
        <div>
            {
                isLoading ? 
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center max-w-4xl mx-auto -mt-24 mb-10'>
                    <PricingCardSkeloton />
                    <PricingCardSkeloton />
                </div> 
                : 
                isSuccess ? 
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center max-w-4xl mx-auto -mt-24 mb-10'> {
                    data?.data?.map(item => {
                        return <PricingCard packag={item} key={item?.id} />
                    })
                }
                </div> : isError ? <ErrorComponent /> : <></>
            }
        </div>
    );
};

export default Pricing;