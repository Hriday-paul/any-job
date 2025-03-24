"use client"
import ErrorComponent from '@/components/Shared/ErrorComponent';
import PricingCardSkeloton from '@/components/Skeletons/PricingCardSkeloton';
import { useCurrentSubscriptionQuery } from '@/redux/api/SubscriptionApi';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { HiArrowUpRight } from 'react-icons/hi2';

const MySubscription = () => {
    const { isLoading, isError, isSuccess, data } = useCurrentSubscriptionQuery();

    console.log(data?.data)

    return (
        <div className='container'>

            <div className='max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto -mt-12 md:-mt-14 xl:-mt-16 mb-10 bg-white rounded-xl'>
                <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-3xl text-center font-figtree font-extrabold py-8'>Your Current Subscription Plan</h2>
                {
                    isLoading ?
                        <div className='flex justify-center items-center mx-auto'>
                            <PricingCardSkeloton />
                        </div>
                        :
                        isSuccess ?
                            data?.data == null ? <h3 className='text-base md:text-lg  lg:text-xl text-center font-figtree font-semibold py-8 text-primary_red'>You have not any running subscription</h3> : <div className=''> {
                                <div className="bg-white rounded-2xl shadow-lg p-8 w-full font-figtree border border-stroke max-w-lg mx-auto">
                                    {/* Header */}
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-semibold text-primary_red text-center">{data?.data?.package?.name}</h2>
                                        {/* <p className="text-gray-400 mt-1 text-center">{data?.data?.package?.description}</p> */}
                                    </div>

                                    {/* Price */}
                                    <div className="bg-red-50/50 shadow rounded-xl p-4 text-center mb-8">
                                        <span className="text-primary_red text-3xl font-bold font-figtree">${data?.data?.package?.price || 0}</span>
                                        <span className="text-primary_red font-figtree">/{data?.data?.package?.interval}</span>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-primary_red rounded-full p-1.5 flex items-center justify-center font-figtree">
                                                <FaArrowLeft className='text-sm lg:text-base xl:text-base text-white rotate-180' />
                                            </div>
                                            <span className="text-gray-700">Expiry Date: {moment(data?.data?.renewalDate).format("MMMM Do YYYY, h:mm a")}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="bg-primary_red rounded-full p-1.5 flex items-center justify-center font-figtree">
                                                <FaArrowLeft className='text-sm lg:text-base xl:text-base text-white rotate-180' />
                                            </div>
                                            <span className="text-gray-700">Remaining Days: {moment(data?.data?.renewalDate).diff(moment(), 'days')} Days Left</span>
                                        </div>
                                    </div>

                                    {/* Subscribe Button */}
                                    <center>
                                        <Link href={'/pricing'} className='text-primary_red font-figtree flex flex-row gap-x-3 items-center justify-center group'>
                                            Renew Now
                                            <HiArrowUpRight className='text-xl rotate-45 mt-0.5 group-hover:rotate-0 duration-300' />
                                            <span className='-ml-[37px] h-8 w-8 bg-[#ffe3e5] rounded-full mt-0.5'></span>
                                        </Link>
                                    </center>

                                    {/* <SignUpPopup open={open} setOpen={setOpen} /> */}
                                </div>

                            }
                            </div> : isError ? <ErrorComponent /> : <></>
                }
            </div>

        </div>
    );
};

export default MySubscription;