"use client"
import Image from 'next/image';
import React from 'react';
import userImage from '../../../../public/quotes/user.jpeg'
import { Check, Clock, Mail, MapPin, Phone, Star } from 'lucide-react';
import GiveReview from '@/components/Pages/Contractor/GiveReview';
import Reviews from '@/components/Pages/Contractor/Reviews';
import ServiceImages from '@/components/Pages/Contractor/ServiceImages';

const page = () => {
    return (
        <div className='container'>
            <div className="bg-white py-6 space-y-8">
                {/* Header Section */}
                <div className=" flex gap-3 md:gap-4">
                    <Image
                        src={userImage}
                        placeholder='blur'
                        alt="Profile picture"
                        width={2000}
                        height={2000}
                        className="rounded-md object-cover h-52 md:h-60 w-60"
                    />
                    <div className="space-y-2 md:space-y-3">
                        <h1 className="text-xl md:text-2xl font-bold text-gray-900 font-figtree">John OConner</h1>
                        <div>
                            <p className='text-gray-500 font-figtree font-medium text-sm md:text-base mb-0.5 md:mb-1'>Home Service</p>
                            <div className="flex items-center gap-1 font-figtree">
                                <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                                <span className="text-sm md:text-base font-medium font-figtree">4.8</span>
                                <span className="text-sm md:text-base text-gray-500 font-figtree">(170 Reviews)</span>
                            </div>
                        </div>
                        <div className="space-y-1.5 md:space-y-2">
                            <div className="flex items-center gap-2 text-base font-figtree font-medium text-gray-600">
                                <div className='rounded-full bg-primary_red p-1'>
                                    <Mail className="w-4 h-4 text-white" />
                                </div>
                                <span className='font-medium text-base'>johnsmith123@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-base font-figtree font-medium text-gray-600">
                                <div className='rounded-full bg-primary_red p-1'>
                                    <MapPin className="w-4 h-4 text-white" />
                                </div>
                                <span className='font-medium text-base'>Dublin, Ireland</span>
                            </div>
                            <div className="flex items-center gap-2 text-base font-figtree font-medium text-gray-600">
                                <div className='rounded-full bg-primary_red p-1'>
                                    <Phone className="w-4 h-4 text-white" />
                                </div>
                                <span className='font-medium text-base'>+8801892814892</span>
                            </div>
                            <div className="flex items-center gap-2 text-base font-figtree text-gray-600">
                                <div className='rounded-full bg-primary_red p-1'>
                                    <Clock className="w-4 h-4 text-white" />
                                </div>
                                <span className='font-medium text-base'>5+ Years of Experience</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Biography Section */}
                <div className="space-y-2">
                    <h2 className="text-xl font-bold font-figtree text-gray-900">Biography</h2>
                    <p className="text-base font-figtree font-medium text-gray-600 ">
                        John O Conner is dedicated home service contractor with over a decade of experience in maintaining residential
                        properties and electrical services. My goal is to ensure that every home receives the highest standard of care
                        and attention. I bring extensive knowledge of modern cleaning techniques to each project. Full punctuality and
                        expert maintenance to keep your home in its best shape possible. Whether you need a one-time deep clean,
                        recurring maintenance, or specialized cleaning services, I am here to help. I take pride in delivering
                        consistent, high-quality results that exceed expectations. My commitment to excellence and attention to detail
                        has earned me a strong reputation among my clients. No matter the size of the job, I am committed to providing
                        efficient, cost-effective, and long-lasting solutions tailored to your needs.
                    </p>
                </div>

                {/* Service Offer Section */}
                <div className="space-y-4">
                    <h2 className="text-xl font-figtree font-bold text-gray-900">Service Offer</h2>
                    <div className="flex flex-row flex-wrap gap-3">
                        {["Cleaning", "Repairing", "Technical Work", "General Home Repair"].map((service) => (
                            <span key={service} className="px-3.5 py-1.5 text-base font-figtree font-medium bg-red-50 text-primary_red rounded-full">
                                {service}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Pricing & Availability */}
                <div className="space-y-4">
                    <h2 className="text-xl font-figtree font-bold text-gray-900">Pricing & Availability</h2>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span className="text-base font-figtree font-medium text-gray-600">Hourly Rate: Starting from €50</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            <span className="text-base font-figtree font-medium text-gray-600">Availability: Open for bookings (Flexible schedule)</span>
                        </div>
                    </div>
                </div>

                {/* Work Photos */}
                <div className="space-y-4">
                    <h2 className="text-xl font-figtree font-bold text-gray-900">Work Photos</h2>
                    <ServiceImages />
                </div>

                {/* Why Choose Me */}
                <div className="space-y-4">
                    <h2 className="text-xl font-figtree font-bold text-gray-900">Why Choose Me?</h2>
                    <div className="space-y-2">
                        {["Serving 50+ happy homeowners", "Fast & Reliable Service", "Professional Satisfaction"].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-base font-figtree font-medium text-gray-600">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rating & Review */}
                <div className="space-y-4">
                    <h2 className="text-xl font-figtree font-bold text-gray-900">Rating & Review</h2>
                    <div className="flex items-center gap-5 md:gap-10 max-w-xl lg:max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl font-bold font-figtree text-gray-900">4.8</div>
                            <div className="text-base font-figtree font-medium text-gray-500">out of 5</div>
                            <div className="text-base font-figtree font-medium text-gray-500">23 Reviews</div>
                        </div>
                        <div className="flex-1 space-y-2">
                            {[5, 4, 3, 2, 1].map((rating) => (
                                <div key={rating} className="flex items-center gap-2">
                                    <div className=' flex flex-row gap-x-2 md:gap-x-3 items-center'>
                                        {
                                            Array.from({ length: rating }).map((_, index) => (
                                                <Star key={index} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                                            ))
                                        }

                                        {
                                            Array.from({ length: 5 - rating }).map((_, index) => (
                                                <Star key={index} className="w-4 h-4 fill-gray-200 stroke-gray-200" />
                                            ))
                                        }

                                    </div>
                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary_red rounded-full"
                                            style={{
                                                width: `${rating === 5 ? "90%" : rating === 4 ? "70%" : rating === 3 ? "50%" : rating === 2 ? "30%" : "10%"
                                                    }`,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <hr />

                <GiveReview />

                <Reviews />

            </div>
        </div>
    );
};

export default page;