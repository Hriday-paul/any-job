import React from 'react';
import bannerImg from '../../../public/Subtract.png'

import Image from 'next/image';
import AddForm from '@/components/Pages/PostJob/AddForm';

const page = () => {
    return (
        <div>
            <div className='grid grid-cols-2 xl:max-w-7xl mx-auto'>
                <div className='bg-[#0f3732] flex justify-center items-center p-5 md:p-12 lg:p-16 xl:p-20'>
                    <h2 className='text-lg md:text-2xl lg:text-3xl xl:text-4xl font-figtree font-extrabold text-white leading-tight'>Post a Job & Get Quotes from  Skilled Professionals!</h2>
                </div>
                <div>
                    <Image src={bannerImg} placeholder='blur' className='w-full h-auto object-cover' alt="any job banner Image" />
                </div>
            </div>

            <div className='container'>
                <div className=''>

                    <AddForm />

                </div>
            </div>

        </div>
    );
};

export default page;