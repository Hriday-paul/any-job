"use client"
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';

type changePasswordType = {
    old_password: string,
    new_password: string,
    confirm_password: string
}

const ChangePassword = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<changePasswordType>();

    const handleFormSubmit: SubmitHandler<changePasswordType> = async (data) => {
        console.log(data)
    }

    const isLoading = false;

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className='bg-[#fff9f9] p-5 md:p-8 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] relative -mt-8 md:-mt-10 lg:-mt-24 z-20 mb-20 rounded-xl'>

            <div className="w-full mx-auto my-5">
                <label htmlFor='old_password' className="mb-1.5 block text-black dark:text-white font-figtree">
                    Current Password
                    <span className="text-red-500 text-base ml-1">*</span>
                </label>
                <input
                    type="password"
                    id='old_password'
                    {...register("old_password", {
                        required: true, pattern: {
                            value: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                            message:
                                "Password must include 1 uppercase, 1 number, 1 special character, and 8+ characters.",
                        },
                    })}
                    placeholder="Enter Current Password"
                    className={`w-full rounded-md bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-poppins ${errors?.old_password ? 'border-danger' : 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.old_password && <p className="text-red-500 text-sm col-span-2">{errors?.old_password?.message}</p>}
            </div>

            <div className="w-full mx-auto my-5">
                <label htmlFor='new_password' className="mb-1.5 block text-black dark:text-white font-figtree">
                    New Password
                    <span className="text-red-500 text-base ml-1">*</span>
                </label>
                <input
                    type="password"
                    id='new_password'
                    {...register("new_password", {
                        required: true, pattern: {
                            value: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                            message:
                                "Password must include 1 uppercase, 1 number, 1 special character, and 8+ characters.",
                        },
                    })}
                    placeholder="Enter New Password"
                    className={`w-full rounded-md bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-poppins ${errors?.new_password ? 'border-danger' : 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.new_password && <p className="text-red-500 text-sm col-span-2">{errors?.new_password?.message}</p>}
            </div>

            <div className="w-full mx-auto my-5">
                <label htmlFor='confirm_password' className="mb-1.5 block text-black dark:text-white font-figtree">
                    Confirm New Password
                    <span className="text-red-500 text-base ml-1">*</span>
                </label>
                <input
                    type="password"
                    id='confirm_password'
                    {...register("confirm_password", {
                        required: true, pattern: {
                            value: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                            message:
                                "Password must include 1 uppercase, 1 number, 1 special character, and 8+ characters.",
                        },
                    })}
                    placeholder="Enter Confirm Password"
                    className={`w-full rounded-md bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-poppins ${errors?.confirm_password ? 'border-danger' : 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.confirm_password && <p className="text-red-500 text-sm col-span-2">{errors?.confirm_password?.message}</p>}
            </div>

            <button type='submit' disabled={isLoading} className='bg-primary_red py-3 font-figtree text-secondary rounded-lg w-full mt-5 hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white'>
                {isLoading && <ImSpinner2 className="text-lg text-white animate-spin" />}
                <span>{isLoading ? 'Loading...' : "Change Password"}</span>
            </button>

        </form>
    );
};

export default ChangePassword;