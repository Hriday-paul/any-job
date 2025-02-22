"use client"
import Link from 'next/link';
import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { VscLock } from 'react-icons/vsc';
import SmNavSheet from './SmNavSheet';
import { usePathname } from 'next/navigation';
import styles from './Rout.module.css'
import { motion } from "motion/react"

export const routes = [
    {
        id: 1,
        name: "Home",
        rout: "/"
    },
    {
        id: 2,
        name: "Services",
        rout: "/services"
    },
    {
        id: 3,
        name: "Pricing",
        rout: "/pricing"
    },
    {
        id: 4,
        name: "Get Quotes",
        rout: "/quotes"
    }
]

const Navbar = () => {
    const pathName = usePathname();
    return (
        <div>
            {/* ---------------------------section1------------------- */}
            <div className='bg-[#fffefe]'>
                <div className='container flex flex-col gap-y-2 md:gap-y-0 md:flex-row md:justify-between items-center py-3 md:py-4 font-figtree text-sm justify-center'>
                    <div>
                        <p className='text-black'><span className='text-neutral-600'>Hello!!</span> Welcome to AnyJob.</p>
                    </div>
                    <div className='flex flex-row gap-x-2 md:gap-x-5 items-center'>
                        <section className='flex flex-row gap-x-0.5 items-center'>
                            <HiOutlineMail className='text-neutral-600' />
                            <span>
                                <a href="mailto:bdcalling@sparktech.com">bdcalling@sparktech.com</a>
                            </span>
                        </section>
                        <section className='flex flex-row gap-x-0.5 items-center'>
                            <LiaPhoneVolumeSolid className='text-neutral-600' />
                            <span>
                                <a href="tel:+8801892814892">+8801892814892</a>
                            </span>
                        </section>
                    </div>
                </div>
            </div>
            {/* ---------------------------section2------------------- */}
            <div className='bg-white shadow-[0_4px_12px_0_rgba(163,161,161,0.09)] border-y border-zinc-100 sticky top-0 left-0 z-50'>
                <div className='container flex flex-row justify-between items-center py-4 font-figtree text-xs md:text-sm'>
                    <div className='flex flex-row gap-x-16 items-center'>
                        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold font-figtree text-primary_red select-none cursor-pointer">
                            <Link href='/'>Any Job</Link>
                        </h1>
                        <ul className='flex-row gap-6 items-center hidden lg:flex'>
                            {
                                routes?.map(rout => {
                                    return <li key={rout.id} className='text-base font-figtree text-black relative'>
                                        <Link href={rout?.rout}>{rout?.name}</Link>

                                        {pathName === rout?.rout && <motion.span layoutId="nav_anim" className={styles.nav_anim}>
                                        </motion.span>}

                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='flex flex-row gap-x-5 items-center'>
                        <button className='flex flex-row gap-x-1 items-center font-figtree'>
                            <VscLock className='text-neutral-600 text-sm md:text-lg' />
                            <Link href='/signin' className='text-sm md:text-base'>Login</Link>
                        </button>
                        {/* <button className='bg-[#fef1f1] border border-primary_red rounded-full px-4 md:px-6 py-1.5 md:py-2 text-primary_red font-figtree text-sm md:text-base'>
                            <Link href='/signup'>Sign Up</Link>
                        </button> */}

                        <Link href='/signup' className="relative inline-block font-figtree text-sm md:text-base group">
                            <span className="relative z-10 block px-4 md:px-6 py-1.5 md:py-2 overflow-hidden font-medium leading-tight transition-colors duration-300 ease-out border border-red-400 rounded-full group-hover:text-white text-primary_red">
                                <span className="absolute inset-0 w-full h-full px-4 md:px-6 py-1.5 md:py-2 rounded-lg bg-[#fef1f1]"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary_red group-hover:-rotate-180 ease"></span>
                                <span className="relative">Sign Up </span>
                            </span>
                        </Link>

                        <section className='lg:hidden'>
                            <SmNavSheet />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;






