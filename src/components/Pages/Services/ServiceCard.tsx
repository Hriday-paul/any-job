import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { servicesType } from '@/redux/types';
import { placeHolderBlurImg } from '../../../../utils/default';
import { HiArrowUpRight } from 'react-icons/hi2';

const ServiceCard = ({ service }: { service: servicesType }) => {
    return (
        <div className='shadow-md bg-white rounded-lg p-5 group'>
            <Link href={`/services/${service?.id}`} className="">
                <Image
                    src={service?.image || "/empty_work_image.jpeg"}
                    placeholder='blur'
                    blurDataURL={placeHolderBlurImg}
                    alt="service Image"
                    width={2000}
                    height={2000}
                    className="w-full h-52 object-cover rounded-md"
                />
            </Link>
            <div className="space-y-4">
                <div>
                    <Link href={`/services/${service?.id}`} className='flex justify-between items-center bg-red-50 py-2 px-4 mt-4 rounded-md'>
                        <h3 className='text-xl font-figtree font-semibold text-primary_red'>{service?.name}</h3>

                        <div className='text-primary_red font-figtree flex flex-row gap-x-3 items-center justify-center'>
                            <HiArrowUpRight className='text-xl rotate-45 mt-0.5 group-hover:rotate-0 duration-300' />
                            <span className='-ml-[37px] h-8 w-8 bg-[#ffe3e5] rounded-full mt-0.5'></span>
                        </div>
                    </Link>
                    {/* <article className="text-base font-medium text-gray-900 line-clamp-4 font-figtree">
                        <Link href={`/services/${service?.id}`}>
                            {service?.description}
                        </Link>
                    </article> */}
                    {/* <div className="flex gap-2">
                        {["Cleaning", "Repairing"].map((service) => (
                            <span key={service} className="px-2 py-1 text-sm font-figtree font-medium bg-red-50 text-primary_red rounded-full">
                                {service}
                            </span>
                        ))}
                    </div> */}
                </div>

                {/* <div className="flex items-center justify-between">

                    <Link href='/profile/32'>
                        <div className="flex items-center gap-3">
                            <Image src={userImg} placeholder='blur' alt="contructor profile picture" width={1000} height={1000} className="rounded-md h-10 w-10 object-cover" />
                            <div className="space-y-1">
                                <p className="text-sm text-gray-500 font-figtree">by <span className='text-black font-medium'>John OConner</span></p>
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                                    <span className="text-sm font-medium font-figtree">4.9</span>
                                    <span className="text-sm text-gray-500 font-figtree">(12 Reviews)</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                     */}


                {/* </div> */}


            </div>
        </div >
    );
};

export default ServiceCard;