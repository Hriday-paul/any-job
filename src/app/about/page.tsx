
import UseGetAbout from '@/Hooks/UseGetAbout';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "About us | AnyJob",
    description: "Find skilled people, professionals and contractors effortlessly.",
};

const page = async () => {
    const about = await UseGetAbout() as {
        "data": {
            "_id": string,
            "content": string,
        }
    };


    return (
        <div className='bg-white'>
            {/* <h2 className='font-poppins text-3xl text-black py-40 text-center'>This page content is dynamic</h2> */}
            <div className='container py-5 md:py-8 lg:py-10'>
                <div
                    dangerouslySetInnerHTML={{
                        __html: about?.data?.content || "",
                    }}
                    className="font-figtree"
                ></div>
            </div>
        </div>
    );
};

export default page;