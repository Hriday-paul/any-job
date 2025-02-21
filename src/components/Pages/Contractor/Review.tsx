import Image from 'next/image';
import React from 'react';
import userImage from '../../../../public/quotes/user.jpeg'
import { Rating, Star } from '@smastrom/react-rating';

const Review = () => {
    return (
        <div>
            <div className='flex flex-row gap-x-3 items-center'>
                <Image src={userImage} className='h-14 w-14 rounded-full object-cover' alt="user Image" />
                <section>
                    <p className='text-base font-figtree text-black'>Hriday paul</p>
                    <div className='flex flex-row gap-x-1.5 items-center'>
                        <Rating
                            value={4}
                            readOnly={true}
                            style={{ maxWidth: 80 }}
                            items={5}
                            transition="zoom"
                            itemStyles={{
                                itemShapes: Star,
                                activeFillColor: "#ffb700",
                                inactiveFillColor: "#e5e7eb",
                            }}
                        />
                        <p className='text-sm font-figtree text-black'>{"(4/5)"}</p>
                    </div>
                </section>
            </div>
            <p className="text-base font-figtree font-medium text-gray-600 mt-2">
                John O Conner is dedicated home service contractor with over a decade of experience in maintaining residential
                properties and electrical services. My goal is to ensure that every home receives the highest standard of care
                and attention. I bring extensive knowledge of modern cleaning techniques to each project. Full punctuality and
                expert maintenance to keep your home in its best shape possible. Whether you need a one-time deep clean,
                recurring maintenance, or specialized cleaning services, I am here to help. I take pride in delivering
                consistent, high-quality results that exceed expectations. My commitment to excellence and attention to detail.
            </p>
        </div>
    );
};

export default Review;