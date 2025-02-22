"use client"
import PasswordInput from '@/components/Shared/PasswordInput';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';
import { motion } from "motion/react"

type resetPasswordType = {
    new_password: string,
    confirm_password: string,
}

const ResetPassword = () => {
    const pathName = usePathname();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<resetPasswordType>();

    const router = useRouter();

    const handleFormSubmit: SubmitHandler<resetPasswordType> = async (data) => {
        console.log(data)
        router.push('/signin')
    }

    const isLoading = false;
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