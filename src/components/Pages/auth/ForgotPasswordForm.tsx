"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';

type forgotType = {
    email: string
}

const ForgotPasswordForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<forgotType>();

    const router = useRouter();

    const handleFormSubmit: SubmitHandler<forgotType> = async (data) => {
        console.log(data)
        router.push('/verify-otp')
    }

    const isLoading = false;

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className='bg-white max-w-xl rounded-xl shadow-md p-8 mx-auto'>
            {/* -----------------email-------------- */}
            <div className="w-full mx-auto mb-4">
                <label htmlFor='email' className="mb-1.5 block text-black font-medium dark:text-white font-figtree">
                    Email Address
                    <span className="text-red-500 text-base ml-1">*</span>
                </label>
                <input
                    type="text"
                    id='email'
                    {...register("email", { required: true })}
                    placeholder="Enter your Email address"
                    className={`w-full rounded-md border bg-zinc-100  py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.email ? 'border-danger' : 'dark:text-white border-stroke '}`}
                />
                {errors?.email && <p className="text-red-500 text-sm col-span-2">{errors?.email?.message}</p>}
            </div>

            <button type='submit' disabled={isLoading} className='bg-primary_red py-3 font-figtree text-secondary rounded-lg w-full mt-5 hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white'>
                {isLoading && <ImSpinner2 className="text-lg text-white animate-spin" />}
                <span>{isLoading ? 'Loading...' : "Sign In"}</span>
            </button>
        </form>
    );
};

export default ForgotPasswordForm;