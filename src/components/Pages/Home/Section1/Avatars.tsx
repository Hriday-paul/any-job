"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"
import { MdOutlineStarPurple500 } from 'react-icons/md';

const MotionImg = motion.create(Image);

const Avatars = () => {
    const avaters = [
        {
            id: 0,
            url: "https://randomuser.me/api/portraits/men/29.jpg"
        },
        {
            id: 1,
            url: "https://randomuser.me/api/portraits/men/90.jpg"
        },
        {
            id: 2,
            url: "https://randomuser.me/api/portraits/men/75.jpg"
        },
        {
            id: 3,
            url: "https://randomuser.me/api/portraits/men/5.jpg"
        }
    ]

    return (
        <div className="flex items-center space-x-1 md:space-x-1.5 justify-center py-6 md:py-7 lg:py-10">
            <div className="flex flex-shrink-0 -space-x-1.5 md:-space-x-2">
                {
                    avaters?.map(item => {
                        return <MotionImg
                            initial={{ x: 10, opacity: 0 }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    type: 'spring',
                                    duration: 0.8,
                                    delay: 0.08 * item?.id
                                },
                            }}
                            key={item?.id} loading="lazy" width="400" height="400" decoding="async" alt='user image'
                            className="h-8 md:h-10 lg:h-12 w-8 md:w-10 lg:w-12 max-w-none rounded-full ring-4 ring-white"
                            src={item?.url} />
                    })
                }

            </div>
            <motion.section
                initial={{ x: 10, opacity: 0 }}
                animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                        type: 'spring',
                        duration: 0.8,
                        delay: 0.08 * 5
                    },
                }}
                className='flex flex-row gap-x-1 md:gap-x-1.5 items-center'>
                <span className="flex-shrink-0 text-sm lg:text-base font-medium leading-5 font-figtree">User</span>
                <motion.span animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: "linear"
                    }}>
                    <MdOutlineStarPurple500 className='text-yellow-400 text-lg md:text-xl lg:text-2xl' />
                </motion.span>
                <span className="flex-shrink-0 text-sm lg:text-base font-medium leading-5 font-figtree">25K+</span>
            </motion.section>

        </div>

    );
};

export default Avatars;