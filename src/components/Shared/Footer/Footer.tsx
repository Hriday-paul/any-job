import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    const links = [
        {
            id: 1,
            name: "Home",
            rout: "/"
        },
        {
            id: 2,
            name: "Service",
            rout: "/service"
        },
        {
            id: 3,
            name: "Contact us",
            rout: "/contact"
        },
        {
            id: 4,
            name: "Terms of use",
            rout: "/terms"
        },
        {
            id: 5,
            name: "About us",
            rout: "/about"
        },
    ]
    return (
        <div className='bg-[#f6f6f6]'>
            <div className='container py-10 md:py-16 px-10'>
                <div className='bg-white rounded-3xl p-8'>
                    <h3 className="text-3xl lg:text-3xl xl:text-4xl font-extrabold font-figtree text-primary_red select-none cursor-pointer text-center mb-3 md:mb-5">
                        <Link href='/'>Any Job</Link>
                    </h3>
                    <p className='text-center font-figtree text-zinc-700 text-sm md:text-base'>AnyJob is a trusted job marketplace designed to connect clients (job posters) with skilled contractors across various industries. Whether you need a plumber, electrician, carpenter, personal trainer, or digital expert, AnyJob makes hiring fast, simple, and secure.</p>

                    <h2 className="flex flex-row flex-nowrap items-center w-4/5 md:w-2/3 mx-auto md:py-3">
                        <span className="flex-grow block border-t border-stroke"></span>
                        <div className="flex-none block lg:mx-2 lg:px-2 py-2 text-xl rounded leading-none font-medium black">
                            <div className="px-3 md:px-4 my-4 flex">
                                <Link href='/' className="inline-flex items-center justify-center h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 border border-stroke hover:border-primary_red rounded-full mr-2 md:mr-3 hover:bg-secondary hover:text-white hover:bg-primary_red duration-300">
                                    <FaFacebookF className='h-3 md:h-4 lg:h-5 w-3 md:w-4 lg:w-5' />
                                </Link>
                                <Link href='/' className="inline-flex items-center justify-center h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 border border-stroke hover:border-primary_red rounded-full mr-2 md:mr-3 hover:bg-secondary hover:text-white hover:bg-primary_red duration-300">
                                    <FaInstagram className='h-3 md:h-4 lg:h-5 w-3 md:w-4 lg:w-5' />
                                </Link>
                                <Link href='/' className="inline-flex items-center justify-center h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 border border-stroke hover:border-primary_red rounded-full mr-2 md:mr-3 hover:bg-secondary hover:text-white hover:bg-primary_red duration-300">
                                    <FaXTwitter className='h-3 md:h-4 lg:h-5 w-3 md:w-4 lg:w-5' />
                                </Link>
                                <Link href='/' className="inline-flex items-center justify-center h-6 md:h-8 lg:h-10 w-6 md:w-8 lg:w-10 border border-stroke hover:border-primary_red rounded-full mr-2 md:mr-3 hover:bg-secondary hover:text-white hover:bg-primary_red duration-300">
                                    <FaLinkedinIn className='h-3 md:h-4 lg:h-5 w-3 md:w-4 lg:w-5' />
                                </Link>
                            </div>
                        </div>
                        <span className="flex-grow block border-t border-stroke"></span>
                    </h2>

                    <hr />

                    <div className='flex flex-col md:flex-row gap-y-2 md:gap-y-0 gap-x-5 items-center justify-between pt-3'>
                        <p className='text-sm font-figtree text-zinc-800'>Copyright © {new Date().getFullYear()} AnyJob. All rights reserved.</p>
                        <ul className='flex flex-row gap-x-2.5 md:gap-x-3 gap-y-1.5 items-center flex-wrap'>
                            {
                                links?.map(item => {
                                    return <li key={item?.id} className='font-figtree text-sm text-zinc-800 font-medium'>
                                        <Link href={item?.rout}>{item?.name}</Link>
                                    </li>
                                })
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;