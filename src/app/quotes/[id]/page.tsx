import Image from 'next/image';
import React from 'react';
import bannerImg from '../../../../public/quotes/banner.png'

import Quotes from '@/components/Pages/Quotes/Quotes';


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