"use client"
import React from 'react';
import CountDown from './CountDown';
import img from '../../../../../public/home/count-image.png'
import Image from 'next/image';
import { motion } from "motion/react"
import { FaArrowLeft } from 'react-icons/fa6';
import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';

const lists = [
    {
        id: 1,
        title: "Get More Clients"
    },
    {
        id: 2,
        title: "Instant Job Alerts"
    },
    {
        id: 3,
        title: "Flexible Work Schedule"
    },
    {
        id: 4,
        title: "Easy Quoting System"
    },
    {
        id: 5,
        title: "Build Your Reputation"
    },
]

const Section3 = () => {
    return (
        <div className='bg-[#f6f6f6]'>
            <div className='container py-8 md:py-8 lg:py-12 xl:py-16 md:px-10 lg:px-16 xl:px-20'>

                {/* ----------------counting section------------------ */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-8 md:gap-y-0 items-center py-5'>
                    <div className='w-2/3 md:w-full xl:w-3/4 mx-auto'>
                        <h3 className='text-center text-3xl lg:text-4xl font-figtree font-extrabold text-[#0f3732] pb-3'><CountDown count={5} duration={3} /> Million+</h3>
                        <p className='text-center text-[#000000b3] text-sm font-figtree font-medium'>Verified Contractors across various industries, ready to work.</p>
                    </div>
                    <div className='w-2/3 md:w-full xl:w-3/4 mx-auto'>
                        <h3 className='text-center text-3xl lg:text-4xl font-figtree font-extrabold text-[#0f3732] pb-3'>$<CountDown count={200} duration={3} /> Million+</h3>
                        <p className='text-center text-[#000000b3] text-sm font-figtree font-medium'>Earned by Contractors through our platform, helping businesses grow.</p>
                    </div>
                    <div className='w-2/3 md:w-full xl:w-3/4 mx-auto'>
                        <h3 className='text-center text-3xl lg:text-4xl font-figtree font-extrabold text-[#0f3732] pb-3'><CountDown count={10} duration={3} />-<CountDown count={15} duration={3} /> Minutes</h3>
                        <p className='text-center text-[#000000b3] text-sm font-figtree font-medium'>To Receive First Quote – Get responses from top-rated professionals fast.</p>
                    </div>
                </div>

                {/* --------------grid section---------------- */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-8'>
                    <div className='ronded-l-2xl relative'>
                        <Image src={img} className='w-full h-full object-cover ronded-l-2xl' placeholder='blur' alt='any job image' />
                        <div className='absolute -bottom-16 left-0 w-80 h-32 bg-white rounded-xl flex flex-row gap-x-4 items-center p-4'>

                            <div>
                                <span className='bg-[#b0ef8f] h-10 w-10 flex items-center justify-center rounded-full'>
                                    <motion.svg
                                        width="41"
                                        height="38"
                                        viewBox="0 0 41 38"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <motion.path
                                            d="M13.0516 37.8395L12.8277 37.458C9.40766 31.631 0.319457 19.2652 0.227657 19.141L0.0965576 18.9629L3.19286 15.9029L12.9941 22.7468C19.1652 14.7389 24.9224 9.23867 28.6778 6.02677C32.7859 2.51327 35.46 0.895772 35.487 0.880272L35.5478 0.843872H40.8L40.2983 1.29067C27.3954 12.7833 13.41 37.2097 13.2707 37.4551L13.0516 37.8395Z"
                                            variants={{
                                                hidden: {
                                                    pathLength: 0,
                                                    fill: "rgba(0, 144, 69, 0)" // Start with transparent fill
                                                },
                                                visible: {
                                                    pathLength: 1,
                                                    fill: "rgba(0, 144, 69, 1)", // End with full color
                                                    transition: {
                                                        pathLength: {
                                                            duration: 0.8,
                                                            ease: "easeInOut"
                                                        },
                                                        fill: {
                                                            duration: 0.5,
                                                            delay: 0.8 // Start filling after path is drawn
                                                        }
                                                    }
                                                }
                                            }}
                                            stroke="#009045"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.3 }}
                                        />
                                    </motion.svg>
                                </span>
                            </div>
                            <div>
                                <h3 className='font-figtree text-xl leading-5 text-black font-medium pb-1.5'>Save up to 50% in Yearly plan.</h3>
                                <Link href={'/'} className='text-primary_red font-figtree font-medium flex flex-row gap-x-3 items-center group'>
                                    Join Now
                                    <HiArrowUpRight className='text-xl rotate-45 mt-0.5 group-hover:rotate-0 duration-300' />
                                    <span className='-ml-[37px] h-8 w-8 bg-[#ffe3e5] rounded-full mt-0.5'></span>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className='bg-[#fce9ea87] px-8 py-5'>
                        <p className='font-figtree text-base text-black font-normal'>Grow your business</p>
                        <h3 className='font-figtree text-2xl lg:text-4xl text-black font-extrabold leading-tight pt-3 lg:pt-4 xl:pt-6'>Trusted by Over 1 Million Businesses—From Small Startups to Industry Leaders!</h3>

                        <ul className='space-y-3 xl:space-y-4 pt-6 md:pt-4 lg:pt-8'>
                            {
                                lists?.map((item, indx) => {
                                    return <motion.li
                                        initial={{ y: 24, opacity: 0 }}
                                        whileInView={{
                                            y: 0,
                                            opacity: 1,
                                            transition: {
                                                duration: 0.4,
                                                delay: 0.1 * indx
                                            }
                                        }} viewport={{ once: true }}
                                        key={item?.id} className='flex flex-row gap-x-4 items-center'>
                                        <span className='bg-primary_red h-8 w-8 rounded-full flex justify-center items-center'>
                                            <FaArrowLeft className='ttext-sm lg:text-base xl:text-lg text-white rotate-180' />
                                        </span>
                                        <p className='text-[#333333] font-figtree text-sm lg:text-base'>{item?.title}</p>
                                    </motion.li>
                                })
                            }
                        </ul>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Section3;