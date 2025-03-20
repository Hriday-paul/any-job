
import Pricing from '@/components/Pages/Pricing/Pricing';
import React from 'react';


const page = () => {
    return (
        <div>
            <div className='bg-[url("/banner.png")] min-h-96 md:min-h-[400px] lg:min-h-[430px] xl:min-h-[500px] bg-center bg-cover bg-no-repeat'>
                <div className='container'>
                    <div className='flex flex-col justify-center items-center p-5 md:p-12 lg:p-16 xl:p-20'>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-figtree font-black text-[#0f3732] leading-tight my-2 md:my-5 text-center'>Choose Your Plan & Start <br /> Getting Hired!</h2>
                        <p className='text-xl font-figtree text-zinc-600 font-medium max-w-xl mx-auto text-center'>Pick a plan that fits your needs—monthly for flexibility or yearly for unlimited access!</p>


                        <div className="flex justify-center items-center bg-[#fff5f5] mt-5">
                            <div className="flex border border-red-500 rounded-lg overflow-hidden">
                                <div className="px-4 py-2 border-r border-red-500">
                                    <span className="text-red-500">Monthly</span>
                                </div>
                                <div className="px-6 py-2">
                                    <span className="text-red-500">Yearly</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='container'>
                <Pricing />
            </div>

        </div>
    );
};

export default page;