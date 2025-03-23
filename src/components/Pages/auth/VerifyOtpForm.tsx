"use client"
import { useResendOtpMutation, useVerifyOtpMutation } from '@/redux/api/authApi';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';
import { ImSpinner2 } from 'react-icons/im';
import OTPInput from "react-otp-input";
import { toast } from 'sonner';
import { config } from '../../../../utils/config';

const VerifyOtpForm = () => {
    const [postVerify, { isLoading }] = useVerifyOtpMutation();
    const [postResend, { isLoading: resendisLoading }] = useResendOtpMutation();
    const [otp, setOtp] = useState<string>('0');
    const nextRout = useSearchParams().get('next') || '/signin'
    const [resendTimer, setResendTimer] = useState<number>(0);

    const [_, setCookie] = useCookies(['token', 'accessToken', 'refreshToken']);

    const navig = useRouter();

    const submitOtp = async () => {
        try {
            const res = await postVerify({ otp: Number(otp) }).unwrap();

            setCookie('accessToken', res?.accessToken, {
                httpOnly: true,
                maxAge: 14 * 24 * 60 * 60, // 14 days
                path: '/',
                sameSite: 'lax',
                secure: config.hasSSL,
            });

            toast.success(res?.message || 'Verify successfully');

            navig.push(nextRout)

        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        }
    }

    const startTimer = useCallback(() => {
        const interval = setInterval(() => {
            setResendTimer((count) => {
                if (count <= 1) {
                    clearInterval(interval);
                }
                return count - 1;
            })
        }, 1000)
    }, []);

    const resendOtpFunc = async () => {
        try {

            const res = await postResend().unwrap();

            toast.success(res?.message || 'Otp resend successfully');

            setResendTimer(119);
            startTimer()

            setCookie('token', res?.data?.token, {
                httpOnly: config.hasSSL,
                // maxAge: 4 * 60, // 4 minutes
                path: '/',
                sameSite: 'lax',
                secure: config.env === 'production',
            });

        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        }
    }

    return (
        <div className='bg-white max-w-xl rounded-xl shadow-md p-8 mx-auto'>
            <div className="mx-auto flex w-full max-w-md flex-col">
                <div className="mx-auto my-10">
                    <OTPInput
                        inputStyle='otpinputStyle'
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        inputType="text"
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                    />
                </div>

                <div className="flex flex-row justify-center gap-x-5 items-center mt-3">
                    <button onClick={resendOtpFunc} disabled={resendTimer !== 0} className='bg-primary_red text-white font-figtree font-medium px-6 py-3 rounded text-base hover:bg-opacity-85 duration-200 disabled:bg-opacity-80 disabled:cursor-not-allowed'>
                        {resendisLoading ? <section className='flex flex-row gap-x-1 items-center'>
                            <ImSpinner2 className="text-lg text-white animate-spin" />
                            <span>{'Loading...'}</span>
                        </section> : (resendTimer == 0) ? 'Resend' : Math.floor(resendTimer / 60) + 'm' + ' ' + resendTimer % 60 + 's'}
                    </button>

                    <button onClick={submitOtp} disabled={isLoading || otp.length < 6} className='bg-primary_red text-white font-figtree font-medium px-6 py-3 rounded text-base hover:bg-opacity-85 duration-200 cursor-pointer disabled:bg-opacity-80 disabled:cursor-not-allowed flex flex-row gap-x-1 items-center'>
                        {isLoading && <ImSpinner2 className="text-xl text-white animate-spin mr-1.5" />}
                        <p>Verify</p>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default VerifyOtpForm;