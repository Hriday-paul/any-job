import SignUpForm from '@/components/Pages/auth/SignUpForm';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='bg-[url("/banner.png")] min-h-96 md:min-h-[400px] lg:min-h-[430px] xl:min-h-[470px] bg-center bg-cover bg-no-repeat'>
                <div className='container'>
                    <div className='flex flex-col justify-center items-center p-5 md:p-12 lg:p-16 xl:p-20'>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-figtree font-black text-[#0f3732] my-2 md:my-5 text-center leading-tight'>Maximize your timetable by filling it with more job opportunities, leveraging your skills or business expertise.</h2>
                        <p className='text-xl font-figtree text-zinc-600 font-medium max-w-xl mx-auto text-center'>Join our network of skilled professionals and connect with clients looking
                            for your expertise. </p>
                    </div>
                </div>
            </div>

            <div className='container'>
                <SignUpForm />
            </div>

        </div>
    );
};

export default page;