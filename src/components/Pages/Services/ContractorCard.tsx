import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';

import serviceImg1 from "../../../../public/works/img1.png"
import userImg from "../../../../public/quotes/user.jpeg"

const ContractorCard = () => {
    return (
        <div className='shadow-md bg-white rounded-lg p-5 group'>
            <Link href='/contructor/34' className="">
                <Image
                    src={serviceImg1}
                    placeholder='blur'
                    alt="Dogs being walked"
                    width={2000}
                    height={2000}
                    className="w-full h-48 object-cover rounded-md"
                />
            </Link>
            <div className="space-y-4">
                <div className="space-y-2.5">
                    <h2 className="text-base font-medium text-gray-900 line-clamp-2 font-figtree pt-2">
                        <Link href='/contructor/34'>
                            {"Hi, I'm John O'Conner, a dedicated home service contractor with over a decade of experience in maintaining residential properties and electrical services. My goal is to ensure that every home receives the highest standard of care."}
                        </Link>
                    </h2>
                    <div className="flex gap-2">
                        {["Cleaning", "Repairing"].map((service) => (
                            <span key={service} className="px-2 py-1 text-sm font-figtree font-medium bg-red-50 text-primary_red rounded-full">
                                {service}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between">

                    <Link href='/contructor/34'>
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

                    <Link href={'/'} className='text-primary_red font-figtree flex flex-row gap-x-3 items-center justify-center'>
                        <HiArrowUpRight className='text-xl rotate-45 mt-0.5 group-hover:rotate-0 duration-300' />
                        <span className='-ml-[37px] h-8 w-8 bg-[#ffe3e5] rounded-full mt-0.5'></span>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default ContractorCard;