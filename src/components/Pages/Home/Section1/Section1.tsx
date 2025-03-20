"use client"
import React from 'react';
import Avatars from './Avatars';
import Title, { HomeSearch, TrendingJobLink } from './Title';
import CarouselUi from './Carousel';
import { motion } from "motion/react"
import Link from 'next/link';

const Section1 = () => {

    return (
        <div>
            <div className='bg-gradient-to-b from-[#fffbfb] via-[#fdedee] to-[#fdf6f6]'>
                <div className='container'>

                    <Avatars />

                    <Title />

                    {/* ----------searches--------------- */}
                    <motion.div
                        initial={{ y: 15, opacity: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                delay: 0.3
                            }
                        }}
                        className={"max-w-full md:max-w-xl lg:max-w-2xl mx-auto flex md:flex-row gap-x-1.5 md:gap-x-3 lg:gap-x-5 items-center my-5 md:my-6 lg:my-8 xl:my-10"}>

                        <HomeSearch />

                        <Link href="/postjob" className="rounded-full px-2 md:px-2.5 lg:px-3 py-2 md:py-2.5 lg:py-3 m-1 overflow-hidden relative group cursor-pointer border font-medium border-red-200 bg-[#ffe5e5] shadow w-4/12 md:w-2/5 text-center ">
                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary_red top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span className="relative text-primary_red transition duration-300 group-hover:text-white ease text-sm md:text-sm lg:text-base font-figtree">Post Job & Get Quotes</span>
                        </Link>

                    </motion.div >

                    <TrendingJobLink />
                </div>
            </div>

            <div className='bg-gradient-to-b from-[#fdf6f6] to-[#ffffff]'>
                <div className='container'>
                    <CarouselUi />
                </div>
            </div>
        </div>
    );
};

export default Section1;