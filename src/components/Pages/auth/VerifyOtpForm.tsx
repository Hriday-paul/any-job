"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import OTPInput from "react-otp-input";

const VerifyOtpForm = () => {
    const [otp, setOtp] = useState<string>('0');
    const nextRout = useSearchParams().get('next') || '/signin'

    const navig = useRouter();

    const isLoading = false;

    const submitOtp = async () => {
        navig.push('/reset-password')
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
                    <button className='bg-primary_red text-white font-figtree font-medium px-6 py-3 rounded text-base hover:bg-opacity-85 duration-200'>
                        Resend
                    </button>

                    <button onClick={submitOtp} disabled={isLoading || otp.length < 6} className='bg-primary_red text-white font-figtree font-medium px-6 py-3 rounded text-base hover:bg-opacity-85 duration-200 cursor-pointer disabled:bg-opacity-85 disabled:cursor-not-allowed flex flex-row gap-x-1 items-center'>
                        {isLoading && <ImSpinner2 className="text-xl text-white animate-spin mr-1.5" />}
                        <p>Verify</p>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default VerifyOtpForm;