import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';

const NavProfile = ({ isLoading, user }: { isLoading: boolean, user: any }) => {

    return (
        <>
            {isLoading ? <Skeleton className="h-8 w-20 rounded-sm" /> : (user?.firstName) ? <Link href={`/contructor`} className="flex flex-row gap-x-1.5 items-center border border-red-400 px-2.5 py-1.5 rounded-full">
                {
                    user?.profilePicture ? <Image src={user?.profilePicture} height={50} width={50} className='h-4 w-4 object-cover rounded-full' alt='user image' /> : <FaRegCircleUser className="text-xl text-primary_red" />
                }
                <p className="font-figtree text-primary_red text-sm font-medium capitalize">{user?.firstName}</p>
            </Link> : <></>
            }
        </>
    );
};
export default NavProfile;