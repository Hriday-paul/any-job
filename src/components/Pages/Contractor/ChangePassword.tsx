"use client"
import PasswordInput from '@/components/Shared/PasswordInput';
import { useChangePasswordMutation, useGetUserProfileQuery } from '@/redux/api/authApi';
import Image from 'next/image';
import bank_icon from '../../../../public/bank.png'
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';
import { toast } from 'sonner';
import { useConnectAccountMutation } from '@/redux/api/SubscriptionApi';
import { useRouter } from 'next/navigation';

type changePasswordType = {
    oldPassword: string,
    newPassword: string,
    confirm_password: string
}

const ChangePassword = () => {

    const { data: res, isSuccess } = useGetUserProfileQuery();

    const [postChangePassword, { isLoading }] = useChangePasswordMutation();

    const [connectAccount] = useConnectAccountMutation();

    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<changePasswordType>();

    const handleFormSubmit: SubmitHandler<changePasswordType> = async (data) => {
        if (data?.newPassword !== data?.confirm_password) return;
        try {
            const res = await postChangePassword({ newPassword: data?.newPassword, oldPassword: data?.oldPassword }).unwrap();
            toast.success(res?.message || "Password updated Successfully")
        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        }
    }

    const accountConnectHandler = async () => {

        try {
            const loadingToast = toast.loading("Loading...", { position: "top-center" })
            const res = await connectAccount({ redirect: "/contructor/setting" }).unwrap();
            toast.dismiss(loadingToast)
            router.push(res?.data);
        }
        catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        }
    }

    return (
        <div className='bg-[#fff9f9] p-5 md:p-8 lg:p-10 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] relative -mt-8 md:-mt-10 lg:-mt-24 z-20 mb-20 rounded-xl'>

            <form onSubmit={handleSubmit(handleFormSubmit)} className=''>

                <div className="w-full mx-auto my-5">
                    <PasswordInput
                        name="oldPassword"
                        label={"Current Password"}
                        placeholder="Enter your current password"
                        register={register}
                        isLarge={true}
                        errors={errors}
                        validationRules={{
                            required: "Current Password is required",
                        }}
                    />
                </div>

                <div className="w-full mx-auto my-5">
                    <PasswordInput
                        name="newPassword"
                        label={"New Password"}
                        placeholder="Enter your new password"
                        register={register}
                        isLarge={true}
                        errors={errors}
                        validationRules={{
                            required: "New Password is required",
                        }}
                    />
                </div>

                <div className="w-full mx-auto my-5">
                    <PasswordInput
                        name="confirm_password"
                        label={"Confirm Password"}
                        placeholder="Enter confirm password"
                        register={register}
                        isLarge={true}
                        errors={errors}
                        validationRules={{
                            required: "Confirm Password is required",
                        }}
                    />
                </div>

                {(watch('newPassword') !== watch('confirm_password')) && <p className='text-xs font-figtree text-danger mt-0.5'>Password not match</p>}

                <button type='submit' disabled={isLoading} className='bg-primary_red py-3 font-figtree text-secondary rounded-lg w-full mt-5 hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white'>
                    {isLoading && <ImSpinner2 className="text-lg text-white animate-spin" />}
                    <span>{isLoading ? 'Loading...' : "Change Password"}</span>
                </button>
            </form>

            <div className='flex items-center gap-x-2 py-3 lg:py-4 mt-5'>
                <Image src={bank_icon} placeholder='blur' className='w-auto h-5 lg:h-7 object-cover' alt="any job details icon" />
                <h5 className='text-lg lg:text-xl font-semibold text-zinc-800 font-figtree'>Bank Account</h5>
            </div>

            <div className=' bg-white rounded-md p-4 shadow'>

                <h2 className="mb-2 text-center text-lg font-medium font-figtree">Set Up Your Bank Account</h2>

                {isSuccess && res?.data?.stripeAccountId && <div className="flex items-center gap-2 mb-3 justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Connected</span>
                </div>}

                <button onClick={accountConnectHandler} type='button' className='bg-primary_red py-3 font-figtree text-secondary rounded-lg w-full hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white'>
                    {res?.data?.stripeAccountId ? "Change Account" : "Add Account"}
                </button>

            </div>
        </div>
    );
};

export default ChangePassword;