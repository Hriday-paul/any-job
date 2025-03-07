"use client"
import PasswordInput from '@/components/Shared/PasswordInput';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';
import { motion } from "motion/react"

type signInType = {
    email: string,
    password: string,
}

const SignInForm = () => {
    const pathName = usePathname();
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<signInType>();

    const handleFormSubmit: SubmitHandler<signInType> = async (data) => {
        console.log(data)
        router.push('/contructor')
    }

    const isLoading = false;

    return (
        <div>
            <div className='bg-white max-w-xl rounded-xl shadow-md p-8 mx-auto -mt-24 mb-10'>

                <div className='grid grid-cols-2 rounded-lg mb-8'>

                    {
                        [{ name: "Sign Up", rout: "/signup" }, { name: "Sign In", rout: "/signin" }]?.map((rout) => {
                            return <Link href={rout?.rout} key={rout?.name} className={`text-base font-figtree relative ${pathName === rout?.rout ? "text-white" : "text-black"}`}>

                                <span className='relative z-10 h-14 flex flex-col justify-center items-center text-lg font-figtree font-medium'>
                                    {rout?.name}
                                </span>

                                {pathName === rout?.rout && <motion.span layoutId="authTab" className={"authTab"} style={{ color: "white" }}>
                                </motion.span>}

                            </Link>
                        })
                    }

                </div>

                <form onSubmit={handleSubmit(handleFormSubmit)} className=''>

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

                    {/* -----------------Password Input-------------- */}
                    <div className="w-full mx-auto mb-4">

                        <PasswordInput
                            name="password"
                            label={"Password"}
                            placeholder="Enter your password"
                            register={register}
                            isLarge={true}
                            errors={errors}
                            validationRules={{
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                    message:
                                        "Password must include 1 uppercase, 1 number, 1 special character, and 8+ characters.",
                                },
                            }}
                        />

                    </div>

                    <Link href={'/forgot-password'} className='underline underline-offset-2 font-medium font-figtree'>{"Forgot Password"}</Link>

                    <button type='submit' disabled={isLoading} className='bg-primary_red py-3 font-figtree text-secondary rounded-lg w-full mt-5 hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white'>
                        {isLoading && <ImSpinner2 className="text-lg text-white animate-spin" />}
                        <span>{isLoading ? 'Loading...' : "Sign In"}</span>
                    </button>


                </form>

            </div>
        </div >
    );
};

export default SignInForm;