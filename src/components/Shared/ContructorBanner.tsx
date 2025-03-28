"use client"
import { removeUser } from '@/redux/slices/userSlice';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useCookies } from 'react-cookie';
import { CiViewTimeline } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa6';
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from 'react-redux';

const contructorRouts = [
    {
        id: 1,
        name: "Profile & Subscription",
        icon: <FaRegUser className='text-sm md:text-base' />,
        rout: "/contructor"
    },
    {
        id: 2,
        name: "Live Jobs",
        icon: <CiViewTimeline className='text-sm md:text-base' />,
        rout: "/contructor/jobs"
    },
    {
        id: 3,
        name: "Quotes",
        icon: <CiViewTimeline className='text-sm md:text-base' />,
        rout: "/contructor/quotes"
    },
    {
        id: 5,
        name: "My Clients",
        icon: <CiViewTimeline className='text-sm md:text-base' />,
        rout: "/contructor/myjobs"
    },
    {
        id: 4,
        name: "Setting",
        icon: <IoMdSettings className='text-sm md:text-base' />,
        rout: "/contructor/setting"
    },
];

const ContructorBanner = () => {
    const path = usePathname();
    const dispatch = useDispatch();
    const navig = useRouter();

    const handleLogout = () => {
        dispatch(removeUser())
        navig.push("/signin")
    }

    return (
        <div className='bg-[url("/contructor_banner.jpeg")] min-h-80 md:min-h-[350px] lg:min-h-[400px] xl:min-h-[500px] bg-center bg-cover bg-no-repeat flex items-center'>
            <div className='container'>
                <div className='p-5 md:p-12 lg:p-16 xl:p-16 bg-black/5 backdrop-blur-md md:max-w-xl lg:max-w-2xl mx-auto rounded md:rounded-md'>

                    <div className='grid grid-cols-2 gap-3 md:gap-5 items-center'>
                        {
                            contructorRouts?.map(item => {
                                return <Link href={item?.rout} key={item?.id} className={`rounded-lg p-2.5 md:p-3.5 lg:p-4 ${path == item?.rout ? "bg-primary_red text-white" : "bg-white "}`}>
                                    <span className='flex flex-row gap-x-2 items-center font-figtree font-medium'>
                                        {item?.icon}
                                        <p className='font-figtree text-sm md:text-base'>{item?.name}</p>
                                    </span>
                                </Link>
                            })
                        }

                        {/* <div className='col-span-2 flex justify-center '> */}
                            <button onClick={handleLogout} className={`w-full rounded-lg p-2.5 md:p-3.5 lg:p-4 bg-white`}>
                                <span className='flex flex-row gap-x-2 items-center font-figtree font-medium'>
                                    <LuLogOut className='text-sm md:text-base rotate-180' />
                                    <p className='font-figtree text-sm md:text-base'>Logout</p>
                                </span>
                            </button>
                        {/* </div> */}


                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContructorBanner;