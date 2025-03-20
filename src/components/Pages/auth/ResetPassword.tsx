"use client"
import PasswordInput from '@/components/Shared/PasswordInput';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';
import { motion } from "motion/react"
import { useResetPasswordMutation } from '@/redux/api/authApi';
import { toast } from 'sonner';

type resetPasswordType = {
    new_password: string,
    confirm_password: string,
}

const ResetPassword = () => {
    const [postResetPassword, { isLoading }] = useResetPasswordMutation();

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<resetPasswordType>();

    const router = useRouter();

    const handleFormSubmit: SubmitHandler<resetPasswordType> = async (data) => {
        if (data?.new_password !== data?.confirm_password) return;
        try {
            const res = await postResetPassword({ password: data?.new_password }).unwrap();

            toast.success(res?.message || 'Password reset successfully');
            reset();

            // dispatch(addUserDetails({
            //     name: res?.data?.user?.name,
            //     email: res?.data?.user?.email,
            //     address: res?.data?.user?.address || '',
            //     gender: res?.data?.user?.gender || '',
            //     phoneNumber: res?.data?.user?.phoneNumber || '',
            //     image: res?.data?.user?.image || '',
            //     role: res?.data?.user?.role,
            // }))

            router.push('/signin')

        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        }

    }

    return (
        <div>
            <div className='bg-white max-w-xl rounded-xl shadow-md p-8 mx-auto'>

                <form onSubmit={handleSubmit(handleFormSubmit)} className=''>

                    {/* -----------------email-------------- */}
                    <div className="w-full mx-auto mb-4">

                        <PasswordInput
                            name="new_password"
                            label={"New Password"}
                            placeholder="Enter new password"
                            register={register}
                            isLarge={true}
                            errors={errors}
                            validationRules={{
                                required: "New Password is required",
                                pattern: {
                                    value: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                    message:
                                        "Password must include 1 uppercase, 1 number, 1 special character, and 8+ characters.",
                                },
                            }}
                        />

                    </div>

                    {/* -----------------Password Input-------------- */}
                    <div className="w-full mx-auto mb-4">

                        <PasswordInput
                            name="confirm_password"
                            label={"Confirm Password"}
                            placeholder="Enter Confirm password"
                            register={register}
                            isLarge={true}
                            errors={errors}
                            validationRules={{
                                required: "Confirm Password is required",
                                pattern: {
                                    value: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                    message:
                                        "Password must include 1 uppercase, 1 number, 1 special character, and 8+ characters.",
                                },
                            }}
                        />

                        {(watch('new_password') !== watch('confirm_password')) && <p className='text-xs font-figtree text-danger mt-0.5'>Password not match</p>}

                    </div>

                    <button type='submit' disabled={isLoading} className='bg-primary_red py-3 font-figtree text-secondary rounded-lg w-full mt-5 hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white'>
                        {isLoading && <ImSpinner2 className="text-lg text-white animate-spin" />}
                        <span>{isLoading ? 'Loading...' : "Update Password"}</span>
                    </button>


                </form>

            </div>
        </div >
    );
};

export default ResetPassword;