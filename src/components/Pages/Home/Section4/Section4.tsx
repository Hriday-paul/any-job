import Link from 'next/link';
import React from 'react';

const Section4 = () => {
    return (
        <div className="bg-[url('/home/contact-banner.jpeg')] bg-center bg-cover bg-no-repeat px-12 py-8 xl:py-10">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-5">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold font-figtree text-white leading-tight mb-3">
                        Do you need help?
                    </h2>
                    <p className="text-[#E6E6E6] text-[15px] leading-tight">
                        Reach out to us anytime for assistance with job <br className='hidden md:block' /> postings, contractor inquiries, or technical support.
                    </p>
                </div>
                <Link href='/contact'>
                    <button
                        className="bg-white hover:bg-white/80 text-[#1A1A1A] rounded-full px-8 h-11 text-[15px] font-semibold font-figtree duration-200">
                        Contact Us
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Section4;