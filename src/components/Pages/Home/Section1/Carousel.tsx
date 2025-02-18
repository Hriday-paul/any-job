"use client"
import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import image1 from '../../../../../public/home/carousel/image-1.jpg'
import image2 from '../../../../../public/home/carousel/image-2.jpg'
import image3 from '../../../../../public/home/carousel/image-3.jpg'
import image4 from '../../../../../public/home/carousel/image-4.jpg'
import image5 from '../../../../../public/home/carousel/image-5.jpg'
import Image from 'next/image';
import { motion } from "motion/react"


const images = [
    {
        id: 1,
        src: image1
    },
    {
        id: 2,
        src: image2
    },
    {
        id: 3,
        src: image3
    },
    {
        id: 4,
        src: image4
    },
    {
        id: 5,
        src: image5
    },

    {
        id: 6,
        src: image1
    },
    {
        id: 7,
        src: image2
    },
    {
        id: 8,
        src: image3
    },
    {
        id: 9,
        src: image4
    },
    {
        id: 10,
        src: image5
    },
]

const CarouselUi = () => {
    return (
        <div className='pb-5 md:pb-8 lg:pb-10 pt-2 md:pt-4 lg:pt-5 cursor-grab'>
            <Carousel>
                <CarouselContent>

                    {
                        images?.map((item, indx) => {
                            return <CarouselItem key={item?.id} className='basis-1/3 md:basis-1/4 lg:basis-1/5 pl-2 md:pl-4'>
                                <motion.div
                                    initial={{ y: 5, opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.4,
                                            delay: 0.1 * indx
                                        },
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <Image src={item?.src} alt="carousel image" className='rounded-2xl w-full h-44 md:h-56 lg:60 xl:h-72 object-cover' placeholder='blur'></Image>
                                </motion.div>
                            </CarouselItem>
                        })
                    }

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default CarouselUi;