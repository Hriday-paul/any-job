import Image from 'next/image';
import React from 'react';
import bannerImg from '../../../../public/quotes/banner.png'
import { Slider } from '@/components/ui/slider';
import QuotesView from '@/components/Pages/QuotesView/QuotesView';

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

            <div className='container -mt-10 md:-mt-14 lg:-mt-16 z-20 relative'>
                <div className='bg-white rounded-lg shadow-md p-4 max-w-xs'>
                    <p className='text-black font-medium font-figtree mb-1'>Price Range</p>
                    <div className='flex flex-row justify-between items-center gap-x-5 font-figtree text-base font-medium mb-1.5'>
                        <p>Low</p>
                        <p>High</p>
                    </div>
                    <Slider defaultValue={[33]} max={100} step={1} />
                </div>
            </div>

            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8 lg:my-10'>
                    {
                        quotes?.map(item => {
                            return <div key={item?.id} className=" bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.1)] p-6 font-figtree">
                                <div className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-base font-medium font-figtree text-gray-900">Quoted Price:</span>
                                            <span className="text-base text-gray-900 font-bold">${item?.price}</span>
                                        </div>

                                        <div className="space-y-1">
                                            <span className="text-base font-medium font-figtree text-gray-900">Scheduled Date & Time:</span>
                                            <div className="text-base font-figtree text-gray-500">{item?.time}</div>
                                        </div>

                                        <div className="flex items-baseline gap-2">
                                            <span className="text-base font-figtree font-medium text-gray-900">Availability:</span>
                                            <span className="text-base font-figtree text-gray-900">{item?.availability}</span>
                                        </div>
                                    </div>

                                    <QuotesView clicker={<button className="w-full bg-primary_red hover:bg-opacity-80 text-white font-medium px-4 py-2.5 rounded-lg transition-colors">
                                        Accept for more details
                                    </button>} />
                                    
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default page;