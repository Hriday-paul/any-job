"use client"
import PasswordInput from '@/components/Shared/PasswordInput';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';
import { motion } from "motion/react"
import MultipleSelect from '@/components/Shared/MultiSelect';
import { counties, services } from '../../../../utils/default';
import { useRegisterUserMutation } from '@/redux/api/authApi';
import { useCookies } from 'react-cookie';
import { toast } from 'sonner';
import { config } from '../../../../utils/config';
import { useServicesQuery } from '@/redux/api/serviceApi';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type signUpType = {
    firstName: string,
    lastName: string,
    email: string,
    userServices?: string[]
    password: string,
    confirmPassword: string,
    terms: boolean,

    country: string,
    serviceAreas?: string[],
    role: string
    // city: string,
    // zipCode: string,
}

const SignUpForm = () => {
    const { isLoading: serviceLoading, data: services, isSuccess } = useServicesQuery({})
    const [postUser, { isLoading }] = useRegisterUserMutation();
    const [_, setCookie] = useCookies(['token', 'accessToken', 'refreshToken']);

    const pathName = usePathname();
    const {
        register,
        handleSubmit,
        control,
        watch,
        reset,
        formState: { errors },
    } = useForm<signUpType>({
        defaultValues: {
            role: "CONTACTOR"
        }
    });

    const router = useRouter();

    const handleFormSubmit: SubmitHandler<signUpType> = async (data) => {
        try {

            if (data?.password !== data?.confirmPassword) return;

            const newData = {
                firstName: data?.firstName,
                lastName: data?.lastName,
                email: data?.email,
                userServices: data?.userServices,
                password: data?.password,
                serviceAreas: data?.serviceAreas,
                role: data?.role
            }

            const form = new FormData();

            form.append("data", JSON.stringify(newData))

            const res = await postUser({ formData: form }).unwrap();

            setCookie('token', res?.data?.token, {
                httpOnly: false,
                // maxAge: (24 * (60 * 60)) * 30, // 30 days
                path: '/',
                sameSite: 'lax',
                secure: config.hasSSL,
            });

            const next = data?.role == "CONTACTOR" ? "/pricing" : "/signin"

            reset()

            toast.success(res?.message || 'Signup successfully');

            router.push(`/verify-otp?next=${next}`)

        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        }
    }

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

                    {/* -------------------check box---------------------- */}
                    <div className="flex gap-10 justify-center my-6">
                        <div className="inline-flex items-center">
                            <label className="relative flex items-center cursor-pointer" htmlFor="user">
                                <input {...register("role", { required: true })} value='USER' type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="user" />
                                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                </span>
                            </label>
                            <label className="ml-2 text-primary cursor-pointer text-base font-poppins" htmlFor="user">User</label>
                        </div>

                        <div className="inline-flex items-center">
                            <label className="relative flex items-center cursor-pointer" htmlFor="dealer">
                                <input {...register("role", { required: true })} value='CONTACTOR' type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="dealer" />
                                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                </span>
                            </label>
                            <label className="ml-2 text-primary cursor-pointer text-base font-poppins" htmlFor="dealer">Contructor</label>
                        </div>
                    </div>

                    <div className='flex flex-row gap-x-3 mb-4'>
                        {/* -----------------first name-------------- */}
                        <div className="w-full mx-auto">
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
                            {errors?.firstName && <p className="text-red-500 text-sm col-span-2 font-figtree">{errors?.firstName?.message}</p>}
                        </div>

                        {/* -----------------last name-------------- */}
                        <div className="w-full mx-auto">
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
                            {errors?.lastName && <p className="text-red-500 text-sm col-span-2 font-figtree">{errors?.lastName?.message}</p>}
                        </div>
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
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'email invalid'
                                }
                            })}
                            placeholder="Enter your Email address"
                            className={`w-full rounded-md border bg-zinc-100  py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.email ? 'border-danger' : 'dark:text-white border-stroke '}`}
                        />
                        {errors?.email && <p className="text-red-500 text-sm col-span-2 font-figtree">{errors?.email?.message}</p>}
                    </div>

                    {/* ------------------------county------------------ */}
                    {watch("role") == "CONTACTOR" && <div className="w-full mx-auto mb-4">
                        <label htmlFor='state' className="mb-1.5 block text-black dark:text-white font-figtree">
                            Service County/State
                            <span className="text-red-500 text-base ml-1">*</span>
                        </label>

                        <MultipleSelect
                            name='serviceAreas'
                            items={counties?.map(service => {
                                return { label: service, value: service }
                            })}
                            isLoading={false}
                            control={control}
                            errors={errors}
                            placeholder='Select Service County'
                            validationRules={{
                                required: "Select minimum 1 county",
                            }}
                        />
                        {errors?.serviceAreas && <p className="text-red-500 text-sm col-span-2 font-figtree">{errors?.serviceAreas?.message}</p>}
                    </div>}


                    {/* ---------------------city & post code------------------- */}
                    {/* <div className='flex flex-row gap-x-3 items-center mb-4'>
                        
                        <div className="w-full mx-auto">
                            <label htmlFor='city' className="mb-1.5 block text-black font-medium dark:text-white font-figtree">
                                City/Town
                                <span className="text-red-500 text-base ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                id='city'
                                {...register("city")}
                                placeholder="Enter Your City"
                                className={`w-full rounded-md border bg-zinc-100  py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.city ? 'border-danger' : 'dark:text-white border-stroke '}`}
                            />
                            {errors?.city && <p className="text-red-500 text-sm col-span-2 font-figtree">{errors?.city?.message}</p>}
                        </div>

                        
                        <div className="w-full mx-auto">
                            <label htmlFor='zipcode' className="mb-1.5 block text-black font-medium dark:text-white font-figtree">
                                Eircodes/Post code
                                <span className="text-red-500 text-base ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                id='zipcode'
                                {...register("zipCode")}
                                placeholder="Enter Eircodes/Post code"
                                className={`w-full rounded-md border bg-zinc-100  py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.zipCode ? 'border-danger' : 'dark:text-white border-stroke '}`}
                            />
                            {errors?.zipCode && <p className="text-red-500 text-sm col-span-2 font-figtree">{errors?.zipCode?.message}</p>}
                        </div>
                    </div> */}

                    {/* ---------------service---------------- */}
                    {watch("role") == "CONTACTOR" && <div className='w-full mx-auto mb-4'>
                        <label htmlFor='service' className="mb-1.5 block text-black font-medium dark:text-white font-figtree">
                            Which type of service offer you want to add?
                            <span className="text-red-500 text-base ml-1">*</span>
                        </label>
                        <MultipleSelect
                            name='userServices'
                            items={isSuccess ? services?.data?.map(service => {
                                return { label: service?.name, value: service?.name }
                            }) : []}
                            isLoading={serviceLoading}
                            control={control}
                            errors={errors}
                            placeholder='select service'
                            validationRules={{
                                required: "Select minimum 1 service",
                            }}
                        />
                        {errors?.userServices && <p className="text-red-500 text-sm col-span-2 font-figtree ">{errors?.userServices?.message}</p>}
                    </div>}

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

                        {(watch('password') !== watch('confirmPassword')) && <p className='text-xs font-figtree text-danger mt-0.5'>Password not match</p>}

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