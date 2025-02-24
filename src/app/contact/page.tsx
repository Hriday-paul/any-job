import ContactForm from '@/components/Contact/ContactForm';
import React from 'react';

const page = () => {
    return (
        <div className='container py-5'>
            {/* --------------contact section--------------- */}
            <div className='my-5'>
                <h2 className='text-3xl md:text-4xl xl:text-5xl text-black font-figtree font-semibold text-center mb-3 md:mb-4 lg:mb-5'>Contact</h2>
                <p className='text-lg md:text-xl text-black font-figtree text-center my-2 md:my-3 lg:my-4'>We are available 24/7, 7 days a week.</p>
                <p className='text-lg md:text-xl text-black font-poppins text-center my-2 md:my-3 lg:my-4'>Phone: <a href="tel:+8801611112222">+8801611112222</a></p>
            </div>
            <div className=' mb-10 bg-[#fefbfb] p-5 md:p-6 lg:p-8 xl:p-10 rounded-lg shadow-md'>
                <h3 className='text-2xl lg:text-3xl xl:text-4xl text-black font-figtree font-semibold text-center'>Send a Message</h3>
                <ContactForm />
            </div>
        </div>
    );
};

export default page;