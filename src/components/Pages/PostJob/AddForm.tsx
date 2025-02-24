"use client"
import React, { useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { counties, job_prefered_days, services, times } from '../../../../utils/default';
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from 'lucide-react';
import Image from 'next/image';
import { MdDeleteOutline } from 'react-icons/md';
import calander_icon from '../../../../public/calander_icon.png'
import coin_icon from '../../../../public/coin_frame.png'
import atachment_icon from '../../../../public/atachment_icon.png'
import contact_icon from '../../../../public/contact_icon.png'
import jobDetailsIcon from '../../../../public/job_details_icon.png'
import { ImSpinner2 } from "react-icons/im";
import Swal from 'sweetalert2'
import SelectJobLocation from '@/components/Shared/SelectJobLocation';

export type postJobType = {
    description: string,
    service: string,
    county: string,
    town: string,
    preferd_day: string
    job_date: Date,
    time: string,
    budget: number,
    instruction: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string
}

const AddForm = () => {
    const [images, setImages] = useState<File[]>([]);
    const [coordinates, setCoordinates] = useState<{ lat: number, lng: number } | null>(null)
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<postJobType>({
        defaultValues: {
            job_date: new Date(),
            preferd_day: "Flexible"
        }
    });

    const fileonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files as File[] | null;
        if (!fileList) {
            return;
        }
        setImages(prev => [...prev, ...fileList])
    };

    const removeImg = useCallback((indxParam: number) => {
        const finalImgs = images?.filter((i, indx) => {
            return indx !== indxParam
        })
        setImages(finalImgs)
    }, [images])

    const isLoading = false

    const handleFormSubmit: SubmitHandler<postJobType> = async (data) => {
        console.log(data)

        Swal.fire({
            title: "Your job has been posted successfully!",
            text: "Contractors in your area will review your job and send quotes. You’ll be notified when a quote arrives.",
            customClass: {
                title: "text-2xl text-black font-figtree",
                container: "text-sm font-medium font-figtree text-zinc-800",
                cancelButton: "bg-primary_red text-white",
                confirmButton: "bg-primary_red text-white"
            },
            icon: 'success',
            showCancelButton: true,
            showConfirmButton: false,
            confirmButtonText: "Close",
            confirmButtonColor: "#38CB6E",
            cancelButtonText: "Cancel",
        })
    }

    return (
        <div className='bg-[#fff9f9] p-5 md:p-8 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] relative -mt-10 md:-mt-24 lg:-mt-32 z-20 mb-20 rounded-xl'>
            <p className='text-sm md:text-base font-figtree font-medium text-center pb-3 w-full md:w-3/4 xl:w-2/3 mx-auto'>Describe your job, set your budget, and receive competitive quotes from verified contractors in your area.</p>
            <hr />

            <div className='flex items-center gap-x-2 py-3 lg:py-4'>
                <Image src={jobDetailsIcon} placeholder='blur' className='w-auto h-5 lg:h-7 object-cover' alt="any job details icon" />
                <h5 className='text-xl lg:text-2xl font-extrabold text-black font-figtree'>Job Details</h5>
            </div>

            <form onSubmit={handleSubmit(handleFormSubmit)} className=''>

                {/* ----------details-------------- */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='Details' className="mb-1.5 block text-black dark:text-white font-figtree font-medium">
                        Job Description:
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <textarea
                        id='Details'
                        {...register("description", { required: true, minLength: { value: 10, message: "job description minimum 10 character" } })}
                        placeholder="write job description here..."
                        rows={4}
                        className={`w-full bg-form rounded-md border-[1.5px] bg-transparent py-3 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] ${errors?.description ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.description && <p className="text-red-500 text-sm col-span-2">{errors?.description?.message}</p>}
                </div>

                {/* ------------------------service------------------ */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='brand' className="mb-1.5 block text-black dark:text-white font-poppins">
                        Service
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <Controller
                        name={'service'}
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <SelectTrigger className={`bg-form px-4 py-3 rounded-md  text-sm font-figtree w-full text-primary bg-secondary border shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] ${errors?.service ? "font-medium  border-danger" : "border-strokeinput"}`}>
                                    <SelectValue placeholder={"Service"} />
                                </SelectTrigger>
                                <SelectContent className="rounded-sm text-sm font-figtree bg-form">
                                    {
                                        services?.map(item => {
                                            return <SelectItem key={item} value={item} className="h-10 font-figtree text-base font-medium hover:!bg-white">{item}</SelectItem>
                                        })
                                    }
                                </SelectContent>
                            </Select>
                        )} >

                    </Controller>
                    {errors?.service && <p className="text-red-500 text-sm col-span-2">{errors?.service?.message}</p>}
                </div>


                {/* ---------select job location------------ */}
                <div className="w-full mx-auto mb-5 mt-5">
                    <label htmlFor='loc' className="mb-1.5 block text-black dark:text-white font-figtree">
                        Select Job Location
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <SelectJobLocation coordinates={coordinates} setCoordinates={setCoordinates} height='300px' />
                </div>


                {/* ------------------------county------------------ */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='brand' className="mb-1.5 block text-black dark:text-white font-figtree">
                        County
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <Controller
                        name={'county'}
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <SelectTrigger className={`bg-form px-4 py-3 rounded-md  text-sm font-figtree w-full text-primary bg-secondary border shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] ${errors?.county ? "font-medium  border-danger" : "border-strokeinput"}`}>
                                    <SelectValue placeholder={"County"} />
                                </SelectTrigger>
                                <SelectContent className="rounded-sm text-sm font-figtree bg-form">
                                    {
                                        counties?.map(item => {
                                            return <SelectItem key={item} value={item} className="h-10 font-figtree text-base font-medium hover:!bg-white">{item}</SelectItem>
                                        })
                                    }
                                </SelectContent>
                            </Select>
                        )} >

                    </Controller>
                    {errors?.county && <p className="text-red-500 text-sm col-span-2">{errors?.county?.message}</p>}
                </div>

                {/* ---------town------------ */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='town' className="mb-1.5 block text-black dark:text-white font-figtree">
                        Town/City
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        id='town'
                        {...register("town", { required: true })}
                        placeholder="Enter specific location"
                        className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.town ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.town && <p className="text-red-500 text-sm col-span-2">{errors?.town?.message}</p>}
                </div>

                <div className='flex items-center gap-x-2 py-3 lg:py-4'>
                    <Image src={calander_icon} placeholder='blur' className='w-auto h-5 lg:h-7 object-cover' alt="any job details icon" />
                    <h5 className='text-xl lg:text-2xl font-extrabold text-black font-figtree'>Date & Time</h5>
                </div>

                {/* ---------------job preference day----------------- */}
                <div className='mb-3'>
                    <label htmlFor='town' className="mb-1.5 block text-black dark:text-white font-figtree">
                        Preferred Job Days
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <div className=' bg-form pt-1.5 pb-4 px-2 rounded-lg shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] '>
                        <Controller
                            name={'preferd_day'}
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => (
                                <div className='flex flex-row gap-3 items-center flex-wrap'>
                                    {
                                        job_prefered_days?.map((item, indx) => {
                                            return <div key={indx} className="inline-flex items-center mt-2">
                                                <label className="flex items-center cursor-pointer relative" htmlFor={item}>
                                                    <input type="radio" onChange={field?.onChange} name='job_prefered' className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded-sm border border-stroke checked:border-stroke" id={item} defaultChecked={item == watch('preferd_day')} />
                                                    <span className="absolute text-primary opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <label className="cursor-pointer ml-1.5 text-secondary font-figtree text-base capitalize" htmlFor={item}>
                                                    {item}
                                                </label>
                                            </div>
                                        })
                                    }
                                </div>
                            )} >

                        </Controller>
                    </div>
                </div>

                {/* ------------------------job date------------------ */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='job_date' className="mb-1.5 block text-black dark:text-white font-figtree">
                        Preferred Job Date
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <Controller
                        name={'job_date'}
                        defaultValue={new Date()}
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree text-left ${errors?.job_date ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'} text-zinc-500 flex flex-row gap-x-2 items-center`}>
                                        <CalendarIcon className='h-5 w-5' />
                                        {watch("job_date") ? format(watch("job_date"), "PPP") : "YYYY/MM/DD"}
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent className="p-0">
                                    <Calendar
                                        mode="single"
                                        selected={watch("job_date")}
                                        onSelect={field?.onChange}
                                        initialFocus
                                        className='bg-form'
                                    />
                                </PopoverContent>
                            </Popover>
                        )} >

                    </Controller>
                    {errors?.job_date && <p className="text-red-500 text-sm col-span-2">{errors?.job_date?.message}</p>}
                </div>

                {/* ------------------------time------------------ */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='brand' className="mb-1.5 block text-black dark:text-white font-figtree">
                        Time Preference
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <Controller
                        name={'time'}
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <SelectTrigger className={`bg-form px-4 py-3 rounded-md  text-sm font-figtree w-full text-primary bg-secondary border shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] ${errors?.time ? "font-medium  border-danger" : "border-strokeinput"}`}>
                                    <SelectValue placeholder={"Select Time"} />
                                </SelectTrigger>
                                <SelectContent className="rounded-sm text-sm font-figtree bg-form">
                                    {
                                        times?.map(item => {
                                            return <SelectItem key={item} value={item} className="h-10 font-figtree text-base font-medium hover:!bg-white">{item}:00</SelectItem>
                                        })
                                    }
                                </SelectContent>
                            </Select>
                        )} >

                    </Controller>
                    {errors?.county && <p className="text-red-500 text-sm col-span-2">{errors?.county?.message}</p>}
                </div>

                <div className='flex items-center gap-x-2 py-3 lg:py-4'>
                    <Image src={coin_icon} placeholder='blur' className='w-auto h-5 lg:h-7 object-cover' alt="any job details icon" />
                    <h5 className='text-xl lg:text-2xl font-extrabold text-black font-figtree'>Budget (Optional)</h5>
                </div>

                {/* ---------budget------------ */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='Budget' className="mb-1.5 block text-black dark:text-white font-figtree">
                        Estimated Budget
                        {/* <span className="text-red-500 text-base ml-1">*</span> */}
                    </label>
                    <input
                        type="number"
                        id='Budget'
                        {...register("budget")}
                        placeholder="Enter amount"
                        className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.budget ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.budget && <p className="text-red-500 text-sm col-span-2">{errors?.budget?.message}</p>}
                </div>

                <div className='flex items-center gap-x-2 py-3 lg:py-4'>
                    <Image src={atachment_icon} placeholder='blur' className='w-auto h-5 lg:h-7 object-cover' alt="any job details icon" />
                    <h5 className='text-xl lg:text-2xl font-extrabold text-black font-figtree'>Additional Details (Optional)</h5>
                </div>

                {/* ---------atach ment------------ */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='img' className="mb-1.5 block text-black dark:text-white font-figtree">
                        Upload Images
                        {/* <span className="text-red-500 text-base ml-1">*</span> */}
                    </label>
                    <input
                        type="file"
                        id='img'
                        accept="image/*"
                        multiple
                        onChange={fileonChange}
                        className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary`}
                    />

                    <div className='mt-2'>
                        {
                            images?.map((img, indx) => {
                                return <div key={indx} className='flex flex-row justify-between items-center p-1 border border-stroke rounded-md mb-2'>
                                    <div className='relative w-14 h-14'>
                                        <Image src={URL.createObjectURL(img)} fill className='h-full w-full object-cover rounded-md' alt='any job atachment' />
                                    </div>
                                    <button onClick={() => removeImg(indx)} className='border border-stroke bg-zinc-200 rounded p-1 mr-2'>
                                        <MdDeleteOutline className='text-lg text-danger' />
                                    </button>
                                </div>
                            })
                        }
                    </div>
                </div>

                {/* ----------Special Instructions:-------------- */}
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='Special Instructions:' className="mb-1.5 block text-black dark:text-white font-figtree font-medium">
                        Special Instructions
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <textarea
                        id='Special Instructions:'
                        {...register("instruction")}
                        placeholder="Any special instructions you want to provide....."
                        rows={4}
                        className={`w-full bg-form rounded-md border-[1.5px] bg-transparent py-3 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] ${errors?.instruction ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.instruction && <p className="text-red-500 text-sm col-span-2">{errors?.instruction?.message}</p>}
                </div>


                {/* ------------------contact form------------------- */}

                <div className='flex items-center gap-x-2 py-3 lg:py-4'>
                    <Image src={contact_icon} placeholder='blur' className='w-auto h-5 lg:h-7 object-cover' alt="any job details icon" />
                    <h5 className='text-xl lg:text-2xl font-extrabold text-black font-figtree'>Contact Details</h5>
                </div>

                <div>
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="w-full lg:w-1/2 mx-auto">
                            <label htmlFor='fname' className="mb-1.5 block text-black dark:text-white font-figtree">
                                First Name
                                <span className="text-red-500 text-base ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                id='fname'
                                {...register("first_name", { required: true, minLength: { value: 3, message: "first name minimum 2 character" } })}
                                placeholder="First name"
                                className={`w-full rounded-md bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-poppins ${errors?.first_name ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                            />
                            {errors?.first_name && <p className="text-red-500 text-sm col-span-2">{errors?.first_name?.message}</p>}
                        </div>
                        <div className="w-full lg:w-1/2 mx-auto">
                            <label htmlFor='lastname' className="mb-1.5 block text-black dark:text-white font-figtree">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id='lastname'
                                {...register("last_name")}
                                placeholder="Last name"
                                className={`w-full rounded-md bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-poppins ${errors?.last_name ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                            />
                            {errors?.last_name && <p className="text-red-500 text-sm col-span-2">{errors?.last_name?.message}</p>}
                        </div>

                    </div>
                    <div className="w-full mx-auto my-5">
                        <label htmlFor='email' className="mb-1.5 block text-black dark:text-white font-figtree">
                            Email
                            <span className="text-red-500 text-base ml-1">*</span>
                        </label>
                        <input
                            type="email"
                            id='email'
                            {...register("email", {
                                required: true, pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'email invalid'
                                }
                            })}
                            placeholder="Email"
                            className={`w-full rounded-md bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-poppins ${errors?.email ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                        />
                        {errors?.email && <p className="text-red-500 text-sm col-span-2">{errors?.email?.message}</p>}
                    </div>
                    <div className="w-full mx-auto my-5">
                        <label htmlFor='phone' className="mb-1.5 block text-black dark:text-white font-figtree">
                            Phone
                            <span className="text-red-500 text-base ml-1">*</span>
                        </label>
                        <input
                            type="number"
                            id='phone'
                            {...register("phone", {
                                required: true, pattern: {
                                    value: /(?=.*?[0-9])/, message: 'phone number invalid'
                                }
                            })}
                            placeholder="Phone"
                            className={`w-full rounded-md bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] border bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-poppins ${errors?.phone ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                        />
                        {errors?.phone && <p className="text-red-500 text-sm col-span-2">{errors?.phone?.message}</p>}
                    </div>

                    <button type='submit' disabled={isLoading} className='bg-primary_red py-3 font-figtree text-secondary rounded-lg w-full mt-5 hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white'>
                        {isLoading && <ImSpinner2 className="text-lg text-white animate-spin" />}
                        <span>{isLoading ? 'Loading...' : "Post Job & Get Quotes"}</span>
                    </button>


                </div>

            </form>
        </div>
    );
};

export default AddForm;