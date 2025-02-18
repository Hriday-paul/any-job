"use client"
import React from 'react';
import handshakeImg from '../../../../../public/home/hand-shake.png'
import manImg from '../../../../../public/home/man.png'
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa6';
import Link from 'next/link';
import { motion } from "motion/react"

const lists = [
    {
        id: 1,
        title: "Post a Job"
    },
    {
        id: 2,
        title: "Receive Quotes from Contractors"
    },
    {
        id: 3,
        title: "Compare & Select the Best Contractor"
    },
    {
        id: 4,
        title: "Confirm & Schedule the Job"
    },
    {
        id: 5,
        title: "Job Completed & Reviewed"
    },
]

const Section2 = () => {

    return (
        <div className='container'>

            <div className='lg:px-16 xl:px-24'>

                <motion.section
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.4
                        }
                    }}
                    viewport={{ once: true }}
                    className='flex flex-row gap-x-2 items-center justify-center my-5'>
                    <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.25127 1.46046C4.2014 1.49997 4.16775 1.5564 4.15669 1.61906C4.14563 1.68172 4.15794 1.74627 4.19127 1.80047C5.42127 3.93046 5.68127 6.83046 4.00127 8.43047C3.3549 7.88727 2.84173 7.20307 2.50127 6.43045C1.88 6.77551 1.36512 7.28416 1.01253 7.90118C0.65995 8.5182 0.483128 9.22003 0.501271 9.93046C0.526628 10.5567 0.677002 11.1716 0.943535 11.7389C1.21008 12.3062 1.58739 12.8145 2.05329 13.2338C2.51918 13.6531 3.06424 13.975 3.65637 14.1805C4.24852 14.386 4.87578 14.471 5.50126 14.4305C8.72127 14.4305 10.3913 12.4305 10.5013 9.93046C10.6313 6.93046 8.50127 3.24046 4.65127 1.46046C4.59081 1.42434 4.5217 1.40527 4.45127 1.40527C4.38084 1.40527 4.31172 1.42434 4.25127 1.46046V1.46046Z" stroke="#E12728" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className='text-base font-figtree text-black font-medium'>How It Works</p>
                    <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.25127 1.46046C4.2014 1.49997 4.16775 1.5564 4.15669 1.61906C4.14563 1.68172 4.15794 1.74627 4.19127 1.80047C5.42127 3.93046 5.68127 6.83046 4.00127 8.43047C3.3549 7.88727 2.84173 7.20307 2.50127 6.43045C1.88 6.77551 1.36512 7.28416 1.01253 7.90118C0.65995 8.5182 0.483128 9.22003 0.501271 9.93046C0.526628 10.5567 0.677002 11.1716 0.943535 11.7389C1.21008 12.3062 1.58739 12.8145 2.05329 13.2338C2.51918 13.6531 3.06424 13.975 3.65637 14.1805C4.24852 14.386 4.87578 14.471 5.50126 14.4305C8.72127 14.4305 10.3913 12.4305 10.5013 9.93046C10.6313 6.93046 8.50127 3.24046 4.65127 1.46046C4.59081 1.42434 4.5217 1.40527 4.45127 1.40527C4.38084 1.40527 4.31172 1.42434 4.25127 1.46046V1.46046Z" stroke="#E12728" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.section>

                <motion.h3
                    initial={{ x: 24, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.4
                        }
                    }}
                    viewport={{ once: true }}
                    className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-figtree font-black text-[#0f3732] leading-tight my-2 md:my-5'>Find, Hire, and Get the Work Done – <br className='hidden md:block' /> Hassle-Free!</motion.h3>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0 gap-x-5 my-5 md:my-8 xl:my-10'>
                    <motion.div className='order-2 md:order-1'>
                        <ul className='space-y-3 xl:space-y-4'>
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
                        <div className='flex flex-row gap-x-4 items-center mt-5 md:mt-14 xl:mt-16'>
                            <Image src={manImg} className='h-20 w-36 lg:w-40 object-cover rounded-2xl' placeholder='blur' alt="any job man image" />
                            <section className='space-y-2'>
                                <p className='text-[#252525] font-figtree text-lg font-normal'>Simple & Fast </p>
                                <Link href="/" className='text-primary_red font-figtree font-extrabold text-base lg:text-lg xl:text-xl relative'>Get Started
                                    <motion.span
                                        initial={{ width: 0 }}
                                        whileInView={{
                                            width: "100%",
                                            transition: {
                                                duration: 0.4
                                            }
                                        }}
                                        viewport={{ once: true }}
                                        className='absolute left-0 -bottom-[1px] h-0.5 bg-primary_red'></motion.span>
                                </Link>
                            </section>
                        </div>
                    </motion.div>
                    <motion.div className='order-1 md:order-2'>
                        <Image src={handshakeImg} className='h-full w-full object-cover rounded-3xl' placeholder='blur' alt="any job hand shake image" />
                    </motion.div>
                </div>


            </div>

        </div>
    );
};

export default Section2;