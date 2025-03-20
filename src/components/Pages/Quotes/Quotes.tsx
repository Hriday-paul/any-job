"use client"
import ErrorComponent from '@/components/Shared/ErrorComponent';
import { useQuotesByJobQuery } from '@/redux/api/jobsApi';
import React from 'react';
import { ImSpinner8 } from 'react-icons/im';
import QuotesView from '@/components/Pages/QuotesView/QuotesView';
import { useSearchParams } from 'next/navigation';
import moment from 'moment';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';


const Quotes = () => {

    const token = useSearchParams().get("t");

    const { isLoading, isSuccess, isError, data: quotes } = useQuotesByJobQuery({ token: token || '' });

    return (
        <div>
            {
                isLoading ?
                    <div>
                        <div className='min-h-40 flex items-center justify-center'>
                            <ImSpinner8 className="text-4xl text-primary_red animate-spin" />
                        </div>
                    </div>
                    :
                    isSuccess ?
                        <div>

                            <div className='container'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8 lg:my-10'>
                                    {
                                        quotes?.data?.map(item => {
                                            return <div key={item?.id} className=" bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.1)] p-6 font-figtree">
                                                <div className="space-y-4">

                                                    <div className="flex items-baseline gap-2">
                                                        <span className="text-base font-figtree font-medium text-gray-900">Job Title :</span>
                                                        <span className="text-base font-figtree text-gray-900">{item?.job?.title}</span>
                                                    </div>


                                                    <Link href={`/profile/${item?.userId}`} className="flex gap-3">
                                                        <Image
                                                            src={item?.user?.profilePicture || '/empty-profile-photo.jpg'}
                                                            alt="Profile picture"
                                                            width={500}
                                                            height={500}
                                                            className="rounded-md h-20 w-20 object-cover"
                                                        />
                                                        <div>
                                                            <h2 className="text-lg font-figtree font-medium text-gray-900">{item?.user?.firstName + " " + item?.user?.lastName}</h2>
                                                            <div className="flex items-center gap-1.5">
                                                                <span className="text-base font-medium text-gray-900 font-figtree">Rating:</span>
                                                                <div className="flex items-center gap-1">
                                                                    <span className="text-base font-figtree text-gray-900">{item?.user?.rating}</span>
                                                                    <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                                                                </div>
                                                            </div>
                                                            <span className="text-base font-figtree text-gray-500">({item?.user?.reviewCount} Reviews)</span>
                                                        </div>
                                                    </Link>

                                                    <div className="space-y-3">
                                                        <div className="flex items-baseline gap-2">
                                                            <span className="text-base font-medium font-figtree text-gray-900">Quoted Price:</span>
                                                            <span className="text-base text-gray-900 font-bold">${item?.price}</span>
                                                        </div>

                                                        <div className="space-y-1">
                                                            <span className="text-base font-medium font-figtree text-gray-900">Scheduled Date & Time:</span>
                                                            <div className="text-base font-figtree text-gray-500">{moment(item?.scheduleDateTime).format("MMM Do YYYY, h:mm a")}</div>
                                                        </div>

                                                        <div className="flex items-baseline gap-2">
                                                            <span className="text-base font-figtree font-medium text-gray-900">Availability:</span>
                                                            <span className="text-base font-figtree text-gray-900">{item?.availability}</span>
                                                        </div>

                                                    </div>

                                                    <QuotesView quotes={item} clicker={<button className="w-full bg-primary_red hover:bg-opacity-80 text-white font-medium px-4 py-2.5 rounded-lg transition-colors">
                                                        Accept or more details
                                                    </button>} />

                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div> : isError ? <ErrorComponent /> : <></>
            }
        </div>
    );
};

export default Quotes;