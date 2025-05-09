import ResetPassword from '@/components/Pages/auth/ResetPassword';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='bg-[url("/banner.png")] min-h-64 md:min-h-80 lg:min-h-[400px] xl:min-h-[420px] bg-center bg-cover bg-no-repeat'>
                <div className='container'>
                    <div className='flex flex-col justify-center items-center p-5 md:p-12 lg:p-16 xl:p-20'>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-figtree font-black text-[#0f3732] my-2 md:my-5 text-center leading-tight'>Forgot Your Password? <br />
                            No Worries!</h2>
                        <p className='text-xl font-figtree text-zinc-600 font-medium max-w-xl mx-auto text-center'>Enter your email to reset your password and regain access
                            to your account..</p>
                    </div>

                    {/* <div className={"max-w-full md:max-w-xl lg:max-w-2xl mx-auto my-3 -mt-5 md:-mt-12 lg:-mt-16 xl:-mt-20 pt-5"}>
                        <HomeSearch />
                    </div> */}

                </div>

            </div>

            <div className='container'>
                <div className='bf-white rounded-xl p-5 mx-auto -mt-32 mb-10'>
                    <ResetPassword />
                </div>
            </div>

        </div >
    );
};

export default page;