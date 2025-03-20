import Image from 'next/image';
import React from 'react';
import bannerImg from '../../../../public/quotes/banner.png'

import Quotes from '@/components/Pages/Quotes/Quotes';

const quotes = [
    {
        id: 1,
        price: 140,
        time: "Sunday, February 28, 2025, at 10:01 AM",
        availability: "Available Now"
    },
    {
        id: 2,
        price: 100,
        time: "Thursday, February 11, 2025, at 12:01 PM",
        availability: "Available on next two days"
    },
    {
        id: 3,
        price: 50,
        time: "Sunday, February 28, 2025, at 10:01 AM",
        availability: "Available on next four days"
    },
    {
        id: 4,
        price: 420,
        time: "Thursday, March 10, 2025, at 2:01 PM",
        availability: "Available Now"
    },
    {
        id: 5,
        price: 140,
        time: "Sunday, February 28, 2025, at 10:01 AM",
        availability: "Available Now"
    },
    {
        id: 6,
        price: 10,
        time: "Friday, February 280, 2025, at 10:01 AM",
        availability: "Available on next two days"
    },
]

const page = () => {
    return (
        <div>
            <div className='grid grid-cols-2 xl:max-w-7xl mx-auto'>
                <div className='bg-[#0f3732] flex justify-center items-center p-5 md:p-12 lg:p-16 xl:p-20'>
                    <h2 className='text-lg md:text-2xl lg:text-3xl xl:text-4xl font-figtree font-extrabold text-white leading-tight'>Compare & Select the Best Contractor for Your Job!</h2>
                </div>
                <div>
                    <Image src={bannerImg} placeholder='blur' className='w-full h-60 md:h-80 lg:h-[400px] xl:h-[450px] object-cover' alt="any job banner Image" />
                </div>
            </div>

            <Quotes/>
        </div>
    );
};

export default page;