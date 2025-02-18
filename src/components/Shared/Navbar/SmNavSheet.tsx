"use client"
import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import Link from 'next/link';
import { RiMenu3Fill } from 'react-icons/ri';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { motion } from "motion/react"
import { routes } from './Navbar';
// import Profile from './Profile';

//{ routs }: { routs: { id: number, name: string, rout: string }[] }
const SmNavSheet = () => {

    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <RiMenu3Fill className="text-2xl text-black" />
                </SheetTrigger>
                <SheetContent side={'left'}>
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription />

                        <div className=''>

                            <h1 className="text-2xl text-primary_red font-extrabold font-figtree text-secondary select-none cursor-pointer text-left -mt-1 mb-6">
                                <Link href='/'>Any Job</Link>
                            </h1>


                            {/* <Profile smScreen={true} user={user} isLoading={isLoading} /> */}


                            <ul className="my-3">
                                {
                                    routes?.map(item => {
                                        return <motion.li
                                            initial={{ opacity: 0, x: 15, y: 20 }}
                                            animate={{ opacity: 1, x: 0, y: 0 }}
                                            transition={{ duration: 0.2, delay: 0.1 * item?.id }}

                                            key={item?.id} className='text-base relative group my-2'>
                                            <Link href={item?.rout} className="border-b border-b-zinc-700 py-4 font-figtree text-sm text-black flex flex-row gap-x-1 items-center group duration-300 cursor-pointer">
                                                <SheetTrigger className="w-full flex flex-row gap-x-1 items-center">
                                                    <h6 className="text-secondary text-xl font-figtree">{item?.name}</h6>
                                                    <FaArrowLeftLong className="text-secondary block rotate-180 ml-1 group-hover:ml-2.5 duration-200" />
                                                </SheetTrigger>
                                            </Link>

                                        </motion.li>
                                    })
                                }
                            </ul>



                        </div>

                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    );
};


export default SmNavSheet;