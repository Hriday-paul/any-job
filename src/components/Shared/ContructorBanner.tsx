"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CiViewTimeline } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa6';
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

const contructorRouts = [
    {
        id: 1,
        name: "Profile & Subscription",
        icon: <FaRegUser className='text-sm md:text-base'/>,
        rout: "/contructor"
    },
    {
        id: 2,
        name: "View My Job",
        icon: <CiViewTimeline className='text-sm md:text-base' />,
        rout: "/contructor/myjobs"
    },
    {
        id: 3,
        name: "Setting",
        icon: <IoMdSettings className='text-sm md:text-base' />,
        rout: "/contructor/setting"
    },
    {
        id: 4,
        name: "Logout",
        icon: <LuLogOut className='text-sm md:text-base rotate-180' />,
        rout: "/contructor/logout"
    },
];

const ContructorBanner = () => {
    const path = usePathname();
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
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContructorBanner;