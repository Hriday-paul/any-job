import Image from 'next/image';
import React from 'react';
import userImage from '../../../../public/quotes/user.jpeg'
import { Clock, Mail, MapPin, Phone, Star } from 'lucide-react';
import Link from 'next/link';
import { userResType } from '@/redux/types';
import { placeHolderBlurImg } from '../../../../utils/default';
import { FaArrowLeft } from 'react-icons/fa6';

const ProfileHeader = ({ isEditable = false, profileData, isPublic = true }: { isEditable?: boolean, profileData?: userResType, isPublic?: boolean }) => {
    return (
        <div>
            <div className=" flex flex-col md:flex-row gap-3 md:gap-4">
                <Image
                    src={profileData?.profilePicture || userImage}
                    placeholder='blur'
                    alt="Profile picture"
                    blurDataURL={placeHolderBlurImg}
                    width={2000}
                    height={2000}
                    className="rounded-md object-cover h-52 md:h-60 w-60"
                />
                <div className="space-y-2 md:space-y-3">
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900 font-figtree">{profileData?.fullname}</h1>
                    <div>
                        {/* <p className='text-gray-500 font-figtree font-medium text-sm md:text-base mb-0.5 md:mb-1'>Home Service</p> */}
                        <div className="flex items-center gap-1 font-figtree">

                            <span className="text-sm md:text-base font-medium font-figtree">Rating : {profileData?.rating}</span>
                            <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                        </div>
                        <span className="text-sm md:text-base text-gray-800 font-figtree">({profileData?.reviewCount} Reviews)</span>
                    </div>

                    <div className="space-y-1.5 md:space-y-2">
                        {isPublic && <div className="flex items-center gap-2 text-base font-figtree font-medium text-gray-600">
                            <div className='rounded-full bg-primary_red p-1'>
                                <Mail className="w-4 h-4 text-white" />
                            </div>
                            <span className='font-medium text-base'>{profileData?.email}</span>
                        </div>}
                        <div className="flex items-center gap-2 text-base font-figtree font-medium text-gray-600">
                            <div className='rounded-full bg-primary_red p-1'>
                                <MapPin className="w-4 h-4 text-white" />
                            </div>
                            <span className='font-medium text-base'>{profileData?.address || "-------"}</span>
                        </div>
                        {isPublic && <div className="flex items-center gap-2 text-base font-figtree font-medium text-gray-600">
                            <div className='rounded-full bg-primary_red p-1'>
                                <Phone className="w-4 h-4 text-white" />
                            </div>
                            <span className='font-medium text-base'>{profileData?.phoneNumber || '-------'}</span>
                        </div>}
                        {profileData?.experience && <div className="flex items-center gap-2 text-base font-figtree text-gray-600">
                            <div className='rounded-full bg-primary_red p-1'>
                                <Clock className="w-4 h-4 text-white" />
                            </div>
                            <span className='font-medium text-base'>{profileData?.experience}+ Years of Experience</span>
                        </div>}
                    </div>

                    {
                        isEditable && <Link href='/contructor/edit-profile' className='bg-primary_red py-2 font-figtree text-secondary rounded-md w-full mt-5 hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white max-w-48 md:max-w-full'>
                            Edit Profile
                        </Link>
                    }

                </div>

            </div>
            {
                isEditable && <Link href='/contructor/my-subscription' className='text-primary_red py-2 font-figtree text-secondary rounded-md w-full mt-5 hover:bg-opacity-90 duration-200 flex flex-row gap-x-2 items-center max-w-full'>
                    <span className='bg-red-100 h-8 w-8 rounded-full flex justify-center items-center'>
                        <FaArrowLeft className='ttext-sm lg:text-base xl:text-lg text-primary_red rotate-180' />
                    </span>
                    Manage Your Subscription
                </Link>
            }
        </div>
    );
};

export default ProfileHeader;