"use client"
import { useForgotPasswordMutation } from '@/redux/api/authApi';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useCookies } from 'react-cookie';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';
import { toast } from 'sonner';
import { config } from '../../../../utils/config';

type forgotType = {
    email: string
}

const ForgotPasswordForm = () => {
    const [postResendOtpEmail, { isLoading }] = useForgotPasswordMutation()
    const [_, setCookie] = useCookies(['token']);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<forgotType>();

    const router = useRouter();

    const handleFormSubmit: SubmitHandler<forgotType> = async (data) => {
        try {

            const res = await postResendOtpEmail(data).unwrap()
            toast.success(res?.message || 'Otp Send successfully');
            reset();

            setCookie('token', res?.data?.token, {
                httpOnly: false,
                // maxAge: 14 * 24 * 60 * 60, // 14 days
                path: '/',
                sameSite: 'lax',
                secure: config.hasSSL,
            });

            router.push('/verify-otp?next=/reset-password')

        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        }
    }

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
                <span>{isLoading ? 'Loading...' : "Send"}</span>
            </button>
        </form>
    );
};

export default ForgotPasswordForm;