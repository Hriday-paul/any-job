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
            rout: "/services"
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
        <div className='bg-white'>
            {/* <div className='container py-10 md:py-16 px-10'>
                <div className='bg-white rounded-3xl p-8'>
                    <h3 className="text-3xl lg:text-3xl xl:text-4xl font-extrabold font-figtree text-primary_red select-none cursor-pointer text-center mb-3 md:mb-5">
                        <Link href='/'>AnyJob</Link>
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
            </div> */}
            <div className="flex justify-center items-center">
                <footer className="text-gray-700">
                    <div className="container mx-auto px-6 py-8 pt-10 md:pt-12 lg:pt-14 xl:pt-16">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {/* <!-- Logo & Description --> */}
                            <div>
                                <h3 className="text-3xl lg:text-3xl xl:text-4xl font-extrabold font-figtree text-primary_red select-none cursor-pointer mb-3 md:mb-5">
                                    <Link href='/'>AnyJob</Link>
                                </h3>
                                <p className='font-figtree text-zinc-700 text-sm'>AnyJob is a trusted job marketplace designed to connect clients (job posters) with skilled contractors across various industries.</p>
                                <p className="mt-2 text-sm text-zinc-700">
                                    <span className="font-semibold font-figtree">(219) 555-0114</span>
                                </p>
                                {/* <!-- Social Icons --> */}
                                <div className="flex space-x-3 mt-3">
                                    <a href="#" className="text-blue-600"><i className="fab fa-facebook"></i></a>
                                    <a href="#" className="text-red-600"><i className="fab fa-reddit"></i></a>
                                    <a href="#" className="text-green-500"><i className="fab fa-whatsapp"></i></a>
                                    <a href="#" className="text-pink-600"><i className="fab fa-pinterest"></i></a>
                                </div>
                            </div>


                            <div>
                                <h3 className="font-semibold mb-2 text-black font-figtree">Discover</h3>
                                <ul className="text-base space-y-2 font-figtree">
                                    <li><Link href="/signup" className="hover:text-primary_red duration-200">Become a Tasker</Link></li>
                                    <li><Link href="/services" className="hover:text-primary_red duration-200">All Services</Link></li>
                                    <li><Link href="/contact" className="hover:text-primary_red duration-200">Support</Link></li>
                                    {/* <li><a href="#" className="hover:text-primary_red duration-200">Wishlist</a></li> */}
                                </ul>
                            </div>


                            <div>
                                <h3 className="font-semibold mb-2 text-black font-figtree">Company</h3>
                                <ul className="text-base space-y-2 font-figtree">
                                    <li><Link href="/about" className="hover:text-primary_red duration-200">About</Link></li>
                                    <li><Link href="/privacy" className="hover:text-primary_red duration-200">Privacy Policy</Link></li>
                                    <li><Link href="/terms" className="hover:text-primary_red duration-200">Terms & Condition</Link></li>
                                    {/* <li><a href="#" className="hover:text-primary_red duration-200">Privacy Policy</a></li> */}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2 text-black font-figtree">Pages</h3>
                                <ul className="text-base space-y-2 font-figtree">
                                    <li><Link href="/postjob" className="hover:text-primary_red duration-200">Post Job</Link></li>
                                    <li><Link href="/signup" className="hover:text-primary_red duration-200">Sign Up</Link></li>
                                    <li><Link href="/signin" className="hover:text-primary_red duration-200">Login</Link></li>
                                </ul>
                            </div>
                        </div>


                        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                            <div className="flex space-x-2">
                                <Link href={'#'}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v52tLnvL3FEjfxjPvZWbvUMYvVUtAm9R6A&s" alt="Google Play" className="h-10" />
                                </Link>
                                <Link href={'#'}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgk5tpxJC_1CAnsXwo2VvBGyQGI-o5c1PJw&s" alt="App Store" className="h-10" />
                                </Link>
                            </div>
                            <div className="flex mt-4 md:mt-0">
                                <Link href='/' className="inline-flex items-center justify-center h-8 w-8 border border-stroke hover:border-primary_red rounded-full mr-2 md:mr-3 hover:bg-secondary hover:text-white hover:bg-primary_red duration-300">
                                    <FaFacebookF className='h-4 w-4' />
                                </Link>
                                <Link href='/' className="inline-flex items-center justify-center h-8 w-8 border border-stroke hover:border-primary_red rounded-full mr-2 md:mr-3 hover:bg-secondary hover:text-white hover:bg-primary_red duration-300">
                                    <FaInstagram className='h-4 w-4' />
                                </Link>
                                <Link href='/' className="inline-flex items-center justify-center h-8 w-8 border border-stroke hover:border-primary_red rounded-full mr-2 md:mr-3 hover:bg-secondary hover:text-white hover:bg-primary_red duration-300">
                                    <FaXTwitter className='h-4 w-4' />
                                </Link>
                                <Link href='/' className="inline-flex items-center justify-center h-8 w-8 border border-stroke hover:border-primary_red rounded-full mr-2 md:mr-3 hover:bg-secondary hover:text-white hover:bg-primary_red duration-300">
                                    <FaLinkedinIn className='h-4 w-4' />
                                </Link>
                            </div>
                        </div>


                        <div className="text-center text-sm text-gray-700 mt-6 border-t pt-4 font-figtree">
                            AnyJob © {new Date()?.getFullYear()}. All Rights Reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;