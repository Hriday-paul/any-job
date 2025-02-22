"use client"
import PasswordInput from '@/components/Shared/PasswordInput';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';
import { motion } from "motion/react"
// import MultipleSelect from '@/components/Shared/MultiSelect';

type signUpType = {
    firstName: string,
    lastName: string,
    email: string,
    service: string[]
    password: string,
    confirmPassword: string,
    terms: boolean
}

const SignUpForm = () => {
    const pathName = usePathname();
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<signUpType>();

    const router = useRouter();

    const handleFormSubmit: SubmitHandler<signUpType> = async (data) => {
        console.log(data)
        router.push('/location')
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

                    {/* -----------------first name-------------- */}
                    <div className="w-full mx-auto mb-4">
                        <label htmlFor='firstname' className="mb-1.5 block text-black font-medium dark:text-white font-figtree">
                            First Name
                            <span className="text-red-500 text-base ml-1">*</span>
                        </label>
                        <input
                            type="text"
                            id='firstname'
                            {...register("firstName", { required: true })}
                            placeholder="Enter your first Name"
                            className={`w-full rounded-md border bg-zinc-100  py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.firstName ? 'border-danger' : 'dark:text-white border-stroke '}`}
                        />
                        {errors?.firstName && <p className="text-red-500 text-sm col-span-2">{errors?.firstName?.message}</p>}
                    </div>

                    {/* -----------------last name-------------- */}
                    <div className="w-full mx-auto mb-4">
                        <label htmlFor='lastname' className="mb-1.5 block text-black font-medium dark:text-white font-figtree">
                            Last Name
                            <span className="text-red-500 text-base ml-1">*</span>
                        </label>
                        <input
                            type="text"
                            id='lastname'
                            {...register("lastName", { required: true })}
                            placeholder="Enter your last Name"
                            className={`w-full rounded-md border bg-zinc-100  py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.lastName ? 'border-danger' : 'dark:text-white border-stroke '}`}
                        />
                        {errors?.lastName && <p className="text-red-500 text-sm col-span-2">{errors?.lastName?.message}</p>}
                    </div>

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

                    {/* <div>
                        <MultipleSelect name='service' options={[
                            {
                                label: "Responsible",
                                value: "responsible",
                            },
                            {
                                label: "Funny",
                                value: "funny",
                            },
                        ]} control={control} placeholder='select service' />
                    </div> */}

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

                    {/* -----------------Confirm Password Input-------------- */}
                    <div className="w-full mx-auto mb-4">

                        <PasswordInput
                            name="confirmPassword"
                            label={"Confirm Password"}
                            placeholder="Enter your confirm password"
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

                    {/* -----------------terms-------------- */}
                    <div className="w-full mx-auto mb-4">
                        <div className="inline-flex items-center mt-2">
                            <label className="flex items-center cursor-pointer relative" htmlFor={"terms"}>
                                <input type="checkbox" {...register("terms", { required: true })} name='terms' className={`peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-sm border ${errors?.terms ? 'border-danger' : 'dark:text-white border-stroke '}`} id={"terms"} defaultChecked={true} />

                                <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label className="ml-1.5 text-zinc-500 font-figtree text-sm capitalize" htmlFor={"terms"}>
                                By hitting the "Register" button, you agree to the <Link href="/terms" className='text-primary_red'>Terms conditions</Link> & <Link href="/privacy" className='text-primary_red'>Privacy Policy</Link>
                            </label>
                        </div>
                    </div>


                    <button type='submit' disabled={isLoading} className='bg-primary_red py-3 font-figtree text-secondary rounded-lg w-full mt-5 hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white'>
                        {isLoading && <ImSpinner2 className="text-lg text-white animate-spin" />}
                        <span>{isLoading ? 'Loading...' : "Sign Up"}</span>
                    </button>


                </form>

            </div>
        </div>
    );
};

export default SignUpForm;