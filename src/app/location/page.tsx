import LocationForm from '@/components/Pages/auth/LocationForm';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='bg-[url("/banner.png")] min-h-64 md:min-h-80 lg:min-h-[400px] xl:min-h-[420px] bg-center bg-cover bg-no-repeat'>
                <div className='container'>
                    <div className='flex flex-col justify-center items-center p-5 md:p-12 lg:p-16 xl:p-20'>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-figtree font-black text-[#0f3732] my-2 md:my-5 text-center leading-tight'>Select Your Area, Where You <br /> Available for Work</h2>
                        <p className='text-xl font-figtree text-zinc-600 font-medium max-w-xl mx-auto text-center'>Allow location access to get job recommendations and nearby clients.</p>
                    </div>

                   

                </div>

            </div>

            <div className='container'>
                <div className='rounded-xl p-5 mx-auto -mt-20 md:-mt-24 lg:-mt-32 mb-10'>
                    <LocationForm />
                </div>
            </div>

        </div >
    );
};

export default page;