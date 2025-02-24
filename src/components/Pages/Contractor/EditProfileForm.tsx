"use client"
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import userImage from '../../../../public/quotes/user.jpeg'
import { MdDeleteOutline, MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { counties, services } from '../../../../utils/default';
import MultipleSelect from '@/components/Shared/MultiSelect';
import userIcon from '../../../../public/user.png'
import locationIcon from '../../../../public/location.png'
import serviceIcon from '../../../../public/service.png'
import coinIcon from '../../../../public/coin_frame.png'
import workIcon from '../../../../public/work.png'
import CountryMap from '@/components/Shared/CountryMap';
import MapWithDrawing from '@/components/Shared/MapWithDrawing';

export type editProfileType = {
    firstName: string,
    lastName: string,
    phone: string;
    email: string,
    experience: number,
    bio: string,
    why_choose: string;
    county: string,
    town: string;
    service: string,
    price: number,
    availability: string
}

const EditProfileForm = () => {

    const [servicePhotos, setServicePhotos] = useState<File[]>([]);
    const [profileImg, setProfileImg] = useState<File | null>(null);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    const removeImg = useCallback((indxParam: number) => {
        const finalImgs = servicePhotos?.filter((i, indx) => {
            return indx !== indxParam
        })
        setServicePhotos(finalImgs)
    }, [servicePhotos])

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<editProfileType>();

    const fileonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files as File[] | null;
        if (!fileList) {
            return;
        }
        setProfileImg(fileList[0])
    };

    const uploadServiceImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files as File[] | null;
        if (!fileList) {
            return;
        }
        setServicePhotos(prev => [...prev, ...fileList])
    };

    const handleFormSubmit: SubmitHandler<editProfileType> = async (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className='bg-[#fff9f9] p-5 md:p-8 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] relative -mt-8 md:-mt-10 lg:-mt-24 z-20 mb-20 rounded-xl'>

            <div>
                <div className='flex flex-col justify-center items-center relative w-40 h-40 mx-auto'>
                    <Image src={profileImg ? URL.createObjectURL(profileImg) : userImage} alt={'user photo'} fill className='rounded-full mx-auto object-cover' />

                    <label htmlFor="chosePhoto" className='p-3 bg-primary text-secondary mx-auto font-poppins mt-3 cursor-pointer text-sm bg-white z-20 bg-opacity-80 rounded-full'>
                        <MdOutlineAddPhotoAlternate className='' />
                    </label>

                    <input onChange={fileonChange} multiple={false} type="file" name="chosePhoto" id="chosePhoto" className='hidden' />

                </div>
            </div>

            <div className='flex items-center gap-x-2 py-3 lg:py-4'>
                <Image src={userIcon} placeholder='blur' className='w-auto h-5 lg:h-7 object-cover' alt="any job details icon" />
                <h5 className='text-lg lg:text-xl font-extrabold text-black font-figtree'>Personal Information</h5>
            </div>


            {/* ------------------first name & last name--------------- */}
            <div className='flex flex-col lg:flex-row gap-5'>
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='first_name' className="mb-1.5 block text-black dark:text-white font-figtree">
                        First Name
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        id='first_name'
                        {...register("firstName", { required: true })}
                        placeholder="Enter First Name"
                        className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.firstName ? 'border-danger' : 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.firstName && <p className="text-red-500 text-sm col-span-2">{errors?.firstName?.message}</p>}
                </div>
                <div className="w-full mx-auto mb-3">
                    <label htmlFor='last_name' className="mb-1.5 block text-black dark:text-white font-figtree">
                        Last Name
                        <span className="text-red-500 text-base ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        id='last_name'
                        {...register("lastName", { required: true })}
                        placeholder="Enter Last Name"
                        className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.lastName ? 'border-danger' : 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                    />
                    {errors?.lastName && <p className="text-red-500 text-sm col-span-2">{errors?.lastName?.message}</p>}
                </div>
            </div>

            {/* ------------------email------------------- */}
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
                    className={`w-full rounded-md bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-poppins ${errors?.email ? 'border-danger' : 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.email && <p className="text-red-500 text-sm col-span-2">{errors?.email?.message}</p>}
            </div>

            {/* -----------contact----------------- */}
            <div className="w-full mx-auto mb-3">
                <label htmlFor='Phone Number:' className="mb-1.5 block text-black dark:text-white font-figtree">
                    Phone Number
                    <span className="text-red-500 text-base ml-1">*</span>
                </label>
                <input
                    type="number"
                    id='Phone Number:'
                    {...register("phone", {
                        required: true, pattern: {
                            value: /(?=.*?[0-9])/, message: 'phone number invalid'
                        }
                    })}
                    placeholder="Enter phone number"
                    className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.phone ? 'border-danger' : 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.phone && <p className="text-red-500 text-sm col-span-2">{errors?.phone?.message}</p>}
            </div>

            {/* ----------------experience--------------- */}
            <div className="w-full mx-auto mb-3">
                <label htmlFor='experience' className="mb-1.5 block text-black dark:text-white font-figtree">
                    Experience
                    <span className="text-red-500 text-base ml-1">*</span>
                </label>
                <input
                    type="number"
                    id='experience'
                    {...register("experience", { required: true })}
                    placeholder="Enter experience"
                    className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.experience ? 'border-danger' : 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.experience && <p className="text-red-500 text-sm col-span-2">{errors?.experience?.message}</p>}
            </div>

            {/* ----------------bio--------------- */}
            <div className="w-full mx-auto mb-3">
                <label htmlFor='bio' className="mb-1.5 block text-black dark:text-white font-figtree">
                    Biography
                    <span className="text-red-500 text-base ml-1">*</span>
                </label>
                <textarea
                    rows={5}
                    id='bio'
                    {...register("bio", { required: true })}
                    placeholder="Write your bio.........."
                    className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.bio ? 'border-danger' : 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.bio && <p className="text-red-500 text-sm col-span-2">{errors?.bio?.message}</p>}
            </div>

            {/* ----------------bio--------------- */}
            <div className="w-full mx-auto mb-3">
                <label htmlFor='Why choose me' className="mb-1.5 block text-black dark:text-white font-figtree">
                    Why choose me
                    <span className="text-red-500 text-base ml-1">*</span>
                </label>
                <textarea
                    rows={5}
                    id='Why choose me'
                    {...register("why_choose", { required: true })}
                    placeholder="Write why choose.........."
                    className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.why_choose ? 'border-danger' : 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.why_choose && <p className="text-red-500 text-sm col-span-2">{errors?.why_choose?.message}</p>}
            </div>

            <div className='flex items-center gap-x-2 py-3 lg:py-4'>
                <Image src={locationIcon} placeholder='blur' className='w-auto h-5 lg:h-7 object-cover' alt="any job details icon" />
                <h5 className='text-lg lg:text-xl font-extrabold text-black font-figtree'>Location</h5>
            </div>

            {/* --------------------location map---------------- */}
            <div className="w-full mx-auto mb-3">
                <label htmlFor='location' className="mb-1.5 block text-black dark:text-white font-figtree">
                    Location
                    {/* <span className="text-red-500 text-base ml-1">*</span> */}
                </label>
                <MapWithDrawing height='300px' />
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
                            <SelectTrigger className={`bg-form px-4 py-3 rounded-md  text-sm font-figtree w-full text-primary bg-secondary border shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] ${errors?.county ? "font-medium  border-danger" : "border-stroke"}`}>
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

            {/* ------------------town/city----------------- */}
            <div className="w-full mx-auto mb-3">
                <label htmlFor='town' className="mb-1.5 block text-black dark:text-white font-figtree">
                    Town/City
                    <span className="text-red-500 text-base ml-1">*</span>
                </label>
                <input
                    type="text"
                    id='town'
                    {...register("town", { required: true })}
                    placeholder="Enter specific town/city"
                    className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.town ? 'border-danger' : 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.town && <p className="text-red-500 text-sm col-span-2">{errors?.town?.message}</p>}
            </div>

            <div className='flex items-center gap-x-2 py-3 lg:py-4'>
                <Image src={serviceIcon} placeholder='blur' className='w-auto h-5 lg:h-7 object-cover' alt="any job details icon" />
                <h5 className='text-lg lg:text-xl font-extrabold text-black font-figtree'>Service</h5>
            </div>

            {/* -------------my services-------------- */}
            <div className='w-full mx-auto mb-4'>
                <label htmlFor='service' className="mb-1.5 block text-black font-medium dark:text-white font-figtree">
                    Which type of service offer you want to add?
                    <span className="text-red-500 text-base ml-1">*</span>
                </label>
                <MultipleSelect
                    name='service'
                    items={services?.map(ser => {
                        return { label: ser, value: ser }
                    })}
                    control={control}
                    errors={errors}
                    placeholder='select service'
                    validationRules={{
                        required: "Service is required",
                    }}
                />
            </div>

            <div className='flex items-center gap-x-2 py-3 lg:py-4'>
                <Image src={coinIcon} placeholder='blur' className='w-auto h-5 lg:h-7 object-cover' alt="any job details icon" />
                <h5 className='text-lg lg:text-xl font-extrabold text-black font-figtree'>Pricing & availability</h5>
            </div>

            {/* ---------budget------------ */}
            <div className="w-full mx-auto mb-3">
                <label htmlFor='Budget' className="mb-1.5 block text-black dark:text-white font-figtree">
                    Price Range
                    {/* <span className="text-red-500 text-base ml-1">*</span> */}
                </label>
                <input
                    type="number"
                    id='Budget'
                    {...register("price")}
                    placeholder="Enter price"
                    className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.price ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                />
                {errors?.price && <p className="text-red-500 text-sm col-span-2">{errors?.price?.message}</p>}
            </div>

            {/* ------------availability------------ */}
            <div className="w-full mx-auto mb-3">
                <label htmlFor='Availability Status' className="mb-1.5 block text-black dark:text-white font-figtree">
                    Availability Status
                    <span className="text-red-500 text-base ml-1">*</span>
                </label>
                <Controller
                    name={'availability'}
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field }) => (
                        <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                        >
                            <SelectTrigger className={`bg-form px-4 py-3 rounded-md  text-sm font-figtree w-full text-primary bg-secondary border shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] ${errors?.county ? "font-medium  border-danger" : "border-stroke"}`}>
                                <SelectValue placeholder={"Availability"} />
                            </SelectTrigger>
                            <SelectContent className="rounded-sm text-sm font-figtree bg-form">
                                {
                                    ["Flexible schedule", "Not Available"]?.map(item => {
                                        return <SelectItem key={item} value={item} className="h-10 font-figtree text-base font-medium hover:!bg-white">{item}</SelectItem>
                                    })
                                }
                            </SelectContent>
                        </Select>
                    )} >

                </Controller>
                {errors?.availability && <p className="text-red-500 text-sm col-span-2">{errors?.availability?.message}</p>}
            </div>

            <div className='flex items-center gap-x-2 py-3 lg:py-4'>
                <Image src={workIcon} placeholder='blur' className='w-auto h-5 lg:h-7 object-cover' alt="any job details icon" />
                <h5 className='text-lg lg:text-xl font-extrabold text-black font-figtree'>Work Photos</h5>
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
                    onChange={uploadServiceImg}
                    className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary`}
                />

                {
                    servicePhotos?.map((img, indx) => {
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


            <div className="w-full grid grid-cols-2 gap-x-2 items-center mt-8">
                <button type='submit' className="w-full bg-primary_red hover:bg-opacity-85 text-white font-medium px-4 py-2.5 rounded-md transition-colors font-figtree">
                    Update
                </button>

                <button type='button' className="w-full border border-primary_red bg-transparent text-primary_red hover:bg-primary_red hover:text-white font-medium px-4 py-2.5 rounded-md transition-colors font-figtree">
                    Cencel
                </button>

            </div>


        </form>

    );
};

export default EditProfileForm;