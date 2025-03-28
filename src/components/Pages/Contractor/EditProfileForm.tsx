"use client"
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MultipleSelect from '@/components/Shared/MultiSelect';
import userIcon from '../../../../public/user.png'
import locationIcon from '../../../../public/location.png'
import serviceIcon from '../../../../public/service.png'
import coinIcon from '../../../../public/coin_frame.png'
import workIcon from '../../../../public/work.png'
import { useServicesQuery } from '@/redux/api/serviceApi';
import { useGetUserProfileQuery, useUpdateProfileMutation } from '@/redux/api/authApi';
import ErrorComponent from '@/components/Shared/ErrorComponent';
import { ImSpinner2, ImSpinner8 } from 'react-icons/im';
import { toast } from 'sonner';
import Link from 'next/link';
import FilesManager from './FilesManager';
import { counties } from '../../../../utils/default';

export type editProfileType = {
    firstName: string,
    lastName: string,
    phoneNumber: string;
    address: string,
    experience: string,
    bio: string,
    whyChooseMe: string;
    // county: string,
    // town: string;
    userServices: string[],
    minPricing: string,
    // availability: string,
    location?: { latitude: number, longitude: number }[][],
    serviceAreas: string[]
}

const EditProfileForm = () => {
    const { isLoading, isSuccess, isError, data } = useGetUserProfileQuery()
    const { isLoading: serviceLoading, data: services, isSuccess: serviceSuccess } = useServicesQuery({});
    const [postUpdate, { isLoading: updateLoading }] = useUpdateProfileMutation();
    const [servicePhotos, setServicePhotos] = useState<File[]>([]);
    const [profileImg, setProfileImg] = useState<File | null>(null);

    const {
        register,
        handleSubmit,
        control,
        reset,
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

    const handleFormSubmit: SubmitHandler<editProfileType> = async (fData) => {

        if (fData?.userServices?.length <= 0) {
            return;
        }

        const defaultServices = new Set(data?.data?.myServices?.map(item => {
            return item?.service?.name
        }));

        const finalServices: { isDelete: boolean, name?: string, id?: string }[] = [

            // -----------if not exist in default services-------------
            ...fData?.userServices?.filter(serv => !defaultServices?.has(serv))?.map(item => { return { isDelete: false, name: item } }),

            // ---------------if removed on default services-----------------
            ...data?.data?.myServices?.filter(dfserv => !fData?.userServices?.includes(dfserv?.service?.name))?.map(item => { return { isDelete: true, id: item?.service?.id } }) ?? []
        ]

        try {
            const form = new FormData();

            form.append("data", JSON.stringify({ ...fData, availability : "Available", userServices: finalServices }))

            if (profileImg) {
                form.append('profilePicture', profileImg)
            }

            servicePhotos.forEach((image) => {
                form.append('workPhotos', image);
            });

            const res = await postUpdate({ data: form }).unwrap();

            setServicePhotos([]);
            toast.success(res?.message || 'Profile update successfully');

        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        }
    }

    useEffect(() => {
        if (isSuccess) {
            reset({
                firstName: data?.data?.firstName,
                lastName: data?.data?.lastName || '',
                phoneNumber: data?.data?.phoneNumber || '',
                address: data?.data?.address || '',
                experience: data?.data?.experience || "",
                bio: data?.data?.bio || '',
                whyChooseMe: data?.data?.whyChooseMe || '',
                // availability: data?.data?.availability || '',
                minPricing: data?.data?.minPricing?.toString() || '',
                userServices: data?.data?.myServices?.map(s => s?.service?.name) || [],
                serviceAreas: data?.data?.serviceAreas || []
            })
        }
    }, [isSuccess, data])

    return (

        <form onSubmit={handleSubmit(handleFormSubmit)} className='bg-[#fff9f9] p-5 md:p-8 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] relative -mt-8 md:-mt-10 lg:-mt-24 z-20 mb-20 rounded-xl'>

            {
                isLoading ? <div className='min-h-40 flex items-center justify-center'>
                    <ImSpinner8 className="text-4xl text-primary_red animate-spin" />
                </div> : isError ? <ErrorComponent /> : isSuccess ?

                    <div>

                        <div className='flex flex-col justify-center items-center relative w-40 h-40 mx-auto'>
                            <Image src={profileImg ? URL.createObjectURL(profileImg) : (data?.data?.profilePicture || '/empty-profile-photo.jpg')} alt={'user photo'} fill className='rounded-full mx-auto object-cover' />

                            <label htmlFor="chosePhoto" className='p-3 bg-primary text-secondary mx-auto font-poppins mt-3 cursor-pointer text-sm bg-white z-20 bg-opacity-80 rounded-full'>
                                <MdOutlineAddPhotoAlternate className='' />
                            </label>

                            <input onChange={fileonChange} multiple={false} type="file" name="chosePhoto" id="chosePhoto" className='hidden' />

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
                                <span className="text-red-500 text-base ml-1"></span>
                            </label>
                            <input
                                type="email"
                                id='email'
                                disabled={true}
                                placeholder="Email"
                                defaultValue={isSuccess && data?.data?.email || ''}
                                className={`w-full rounded-md bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] border-[1.5px] bg-transparent py-2.5 px-4 text-black outline-none transition disabled:cursor-not-allowed disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-poppins 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary`}
                            />
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
                                {...register("phoneNumber", {
                                    required: true, pattern: {
                                        value: /(?=.*?[0-9])/, message: 'phone number invalid'
                                    }
                                })}
                                placeholder="Enter phone number"
                                className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.phoneNumber ? 'border-danger' : 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                            />
                            {errors?.phoneNumber && <p className="text-red-500 text-sm col-span-2">{errors?.phoneNumber?.message}</p>}
                        </div>

                        {/* -=-------------------------address---------------------- */}
                        <div className="w-full mx-auto mb-3">
                            <label htmlFor='Address' className="mb-1.5 block text-black dark:text-white font-figtree">
                                Address
                                <span className="text-red-500 text-base ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                id='Address'
                                {...register("address", {
                                    required: true
                                })}
                                placeholder="Enter Address"
                                className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.address ? 'border-danger' : 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                            />
                            {errors?.address && <p className="text-red-500 text-sm col-span-2">{errors?.address?.message}</p>}
                        </div>

                        {/* ------------------town/city----------------- */}
                        {/* <div className="w-full mx-auto mb-3">
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
            </div> */}


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

                        {/* ----------------why choose me--------------- */}
                        <div className="w-full mx-auto mb-3">
                            <label htmlFor='Why choose me' className="mb-1.5 block text-black dark:text-white font-figtree">
                                Why choose me
                                <span className="text-red-500 text-base ml-1">*</span>
                            </label>
                            <textarea
                                rows={5}
                                id='Why choose me'
                                {...register("whyChooseMe", { required: true })}
                                placeholder="Write why choose.........."
                                className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.whyChooseMe ? 'border-danger' : 'dark:text-white border-stroke focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                            />
                            {errors?.whyChooseMe && <p className="text-red-500 text-sm col-span-2">{errors?.whyChooseMe?.message}</p>}
                        </div>



                        <div className='flex items-center gap-x-2 py-3 lg:py-4'>
                            <Image src={locationIcon} placeholder='blur' className='w-auto h-5 lg:h-7 object-cover' alt="any job details icon" />
                            <h5 className='text-lg lg:text-xl font-extrabold text-black font-figtree'>Location</h5>
                        </div>

                        {/* ------------------------county------------------ */}

                        <div className='w-full mx-auto mb-3'>
                            <label htmlFor='State' className="mb-1.5 block text-black font-medium dark:text-white font-figtree">
                                Service County/State
                                <span className="text-red-500 text-base ml-1">*</span>
                            </label>
                            <div className='shadow-[0_4px_18px_0_rgba(0,0,0,0.09)]'>
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
                            </div>
                            {errors?.serviceAreas && <p className="text-red-500 text-sm col-span-2">{errors?.serviceAreas?.message}</p>}
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
                            <div className='shadow-[0_4px_18px_0_rgba(0,0,0,0.09)]'>
                                <MultipleSelect
                                    name='userServices'
                                    isLoading={serviceLoading}
                                    items={serviceSuccess ? services?.data?.map(ser => {
                                        return { label: ser?.name, value: ser?.name }
                                    }) : []}
                                    control={control}
                                    errors={errors}
                                    placeholder='select service'
                                    validationRules={{
                                        required: "Service is required",
                                    }}
                                />
                            </div>
                        </div>

                        <div className='flex items-center gap-x-2 py-3 lg:py-4'>
                            <Image src={coinIcon} placeholder='blur' className='w-auto h-5 lg:h-7 object-cover' alt="any job details icon" />
                            <h5 className='text-lg lg:text-xl font-extrabold text-black font-figtree'>Pricing & availability</h5>
                        </div>

                        {/* ---------budget------------ */}
                        <div className="w-full mx-auto mb-3">
                            <label htmlFor='Budget' className="mb-1.5 block text-black dark:text-white font-figtree">
                                Hourly Rate
                                {/* <span className="text-red-500 text-base ml-1">*</span> */}
                            </label>
                            <input
                                type="number"
                                id='Budget'
                                {...register("minPricing")}
                                placeholder="Enter price"
                                className={`w-full rounded-md border-[1.5px] bg-form shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] py-2.5 px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree ${errors?.minPricing ? 'border-danger' : 'dark:text-white border-strokeinput focus:border-primary active:border-primary dark:border-form-strokedark dark:focus:border-primary'}`}
                            />
                            {errors?.minPricing && <p className="text-red-500 text-sm col-span-2">{errors?.minPricing?.message}</p>}
                        </div>

                        {/* ------------availability------------ */}
                        {/* <div className="w-full mx-auto mb-3">
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
                                        <SelectTrigger className={`bg-form px-4 py-3 rounded-md  text-sm font-figtree w-full text-primary bg-secondary border shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] ${errors?.availability ? "font-medium  border-danger" : "border-stroke"}`}>
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
                        </div> */}

                        <div className='flex items-center gap-x-2 py-3 lg:py-4'>
                            <Image src={workIcon} placeholder='blur' className='w-auto h-5 lg:h-7 object-cover' alt="any job details icon" />
                            <h5 className='text-lg lg:text-xl font-extrabold text-black font-figtree'>Work Photos</h5>
                        </div>

                        {/* ---------atach ment------------ */}
                        <FilesManager uploadServiceImg={uploadServiceImg} servicePhotos={servicePhotos} setServicePhotos={setServicePhotos} defaultImgs={data?.data?.workPhotos} />


                        <div className="w-full grid grid-cols-2 gap-x-2 items-center mt-8">

                            <Link href='/contructor' className="w-full border border-primary_red bg-transparent text-primary_red hover:bg-primary_red hover:text-white font-medium px-4 py-2.5 rounded-md transition-colors font-figtree text-center">
                                Cencel
                            </Link>

                            <button type='submit' disabled={updateLoading} className=" disabled:cursor-not-allowed w-full bg-primary_red hover:bg-opacity-85 text-white font-medium px-4 py-2.5 rounded-md transition-colors font-figtree flex flex-row gap-x-2 justify-center items-center">
                                {updateLoading && <ImSpinner2 className="text-lg text-white animate-spin" />}
                                <span>{updateLoading ? 'Loading...' : "Update"}</span>
                            </button>

                        </div>

                    </div>

                    :

                    <></>
            }

        </form>

    );
};

export default EditProfileForm;