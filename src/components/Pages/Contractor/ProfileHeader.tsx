import Image from 'next/image';
import React from 'react';
import userImage from '../../../../public/quotes/user.jpeg'
import { Clock, Mail, MapPin, Phone, Star } from 'lucide-react';
import Link from 'next/link';

const ProfileHeader = ({ isEditable = false }: { isEditable?: boolean }) => {
    return (
        <div>
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

                    {
                        isEditable && <Link href='/contructor/edit-profile' className='bg-primary_red py-2 font-figtree text-secondary rounded-md w-full mt-5 hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white'>
                            Edit Profile
                        </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;