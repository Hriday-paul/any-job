"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from "motion/react"
import Link from 'next/link';
import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { HiArrowUpRight } from 'react-icons/hi2';
import { useRouter } from 'next/navigation';
import { useServicesQuery } from '@/redux/api/serviceApi';
import { IoSearchOutline } from 'react-icons/io5';

const Title = () => {
    return (
        <div>
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.6
                    }
                }}
                className='text-primary_gray text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-figtree text-center leading-8 md:leading-tight -mt-1 capitalize lg:mb-6 xl:mb-8'>
                Find skilled people, professionals <br /> and <span className='text-primary_red'>contractors</span> effortlessly.
            </motion.h1>
            <motion.h2
                initial={{ y: 15, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        delay: 0.25
                    }
                }}
                className='text-base md:text-lg lg:text-xl xl:text-xl font-figtree text-center text-[#0000006b] my-2 md:my-4 leading-6 md:leading-7 lg:leading-8 font-medium'>
                {/* -------------md screen ------------- */}
                <span className='hidden md:block'>Get jobs done quickly within our active working community, with the lowest <br /> and best quotes nationwide! <Link href='/postjob' className='text-[#e1272899]'>Post Your Job.</Link></span>
                {/* -------------small screen ----------- */}
                <span className='md:hidden'>Get jobs done quickly within our active working community, with the lowest and best quotes nationwide! <Link href='/postjob' className='text-[#e1272899]'>Post Your Job.</Link></span>
            </motion.h2>
        </div>
    );
};

export default Title;

export const HomeSearch = () => {
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');

    const query: { searchTerm?: string } = {};

    if (debouncedSearchTerm) {
        query["searchTerm"] = debouncedSearchTerm;
    }

    const { data: services, isSuccess } = useServicesQuery(query);


    const [open, setOpen] = useState<boolean>(false);
    const searchRef = useRef<HTMLDivElement>(null);

    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='w-8/12 md:w-4/5 relative mx-auto' ref={searchRef}>
            <div className={`bg-white ${open ? "border-b rounded-t-3xl shadow-[0 -1px 3px 0 rgb(0 0 0 / 0.1)] border-x border-t" : "border rounded-full shadow"} border-stroke py-2.5 md:py-3 lg:py-4 pl-2 md:pl-4 pr-12 md:pr-14 flex flex-row justify-between gap-x-1 md:gap-x-3 items-center relative`}>
                <CiSearch className='text-2xl text-zinc-500' />
                <input
                    type="text"
                    onFocus={() => setOpen(true)}
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                    name='search'
                    className='border-none outline-none focus:border-none focus:outline-none font-figtree text-sm md:text-base w-full placeholder:font-figtree placeholder:text-zinc-400 bg-white'
                    placeholder="What do you need help with?"
                />
                <button type='submit' className='absolute top-0.5 md:top-0.5 lg:top-[3px] right-0 bg-primary_red hover:bg-opacity-90 duration-200 text-center px-2.5 py-2.5 rounded-full'>
                    <IoSearchOutline className='text-white text-xl md:text-2xl lg:text-3xl' />
                </button>

            </div>

            {/* -----------------Dropdown for recent searches---------------- */}
            {open && (
                <div className='absolute left-0 top-[46px] md:top-12 lg:top-[58px] w-full z-20'>
                    <div className='bg-white rounded-b-3xl shadow'>
                        <ul className='flex flex-col'>
                            {isSuccess && services?.data?.map(item => (
                                <li key={item?.id} className='py-2.5 font-figtree px-5 hover:bg-primary_red hover:text-white text-base font-medium select-none cursor-default w-full'>
                                    <Link href={`/postjob?service=${item?.name}`} className='w-full block'>
                                        {item?.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>



    );
};

export const TrendingJobLink = () => {
    return (
        <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    delay: 0.33
                }
            }}
            className='max-w-36 mx-auto group pb-5'>
            <Link href={'/services'} className='text-primary_red font-figtree flex flex-row gap-x-3 items-center justify-center'>
                Trending Jobs
                <HiArrowUpRight className='text-xl rotate-45 mt-0.5 group-hover:rotate-0 duration-300' />
                <span className='-ml-[37px] h-8 w-8 bg-[#ffe3e5] rounded-full mt-0.5'></span>
            </Link>
        </motion.div>
    )
}