import { Bell } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const notifications = [
    {
        id: 1,
        title: "You've received a new quote for Pet Grooming! Contractor Rakibul Hasan has quoted €50. View & accept the best offer here :",
        link: '/quotes/1',
        time: 'Fri, 12:30pm'
    },
    {
        id: 2,
        title: "You've received a new quote for Plumbing! Contractor Hriday paul has quoted €20. View & accept the best offer here :",
        link: '/quotes/2',
        time: 'Saturday, 10:30am'
    },
    {
        id: 3,
        title: "You've received a new quote for Gardening! Contractor Rashed has quoted €40. View & accept the best offer here :",
        link: '/quotes/3',
        time: 'Wednesday, 4:00pm'
    },
    {
        id: 4,
        title: "You've received a new quote for Cooking! Contractor Rakibul Hasan has quoted €100. View & accept the best offer here :",
        link: '/quotes/4',
        time: 'Thursday, 2:30pm'
    },
    {
        id: 5,
        title: "You've received a new quote for Plumbing! Contractor Imrul has quoted €93. View & accept the best offer here :",
        link: '/quotes/5',
        time: 'Fri, 12:30pm'
    },
    {
        id: 6,
        title: "You've received a new quote for Gardening! Contractor Rakibul Hasan has quoted €5. View & accept the best offer here :",
        link: '/quotes/6',
        time: 'Sunday, 11:45am'
    },
]

const page = () => {
    return (
        <div className='container'>
            <div className='bg-[#e6e6e699] rounded-lg p-5 my-5 md:my-8 lg:my-10 space-y-3'>
                {notifications.map(item => <div key={item?.id} className="w-full rounded-lg border bg-background p-4 shadow-sm bg-white">
                    <div className="flex items-start gap-4">
                        <div className="rounded-md bg-red-600 p-3">
                            <Bell className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 space-y-1">
                            <p className="text-base lg:text-lg font-figtree font-medium">
                                {item?.title} {" "}
                                <Link href={item?.link} className="text-blue-400 underline">
                                    visit
                                </Link>
                            </p>
                            <p className="text-sm text-zinc-500 font-figtree">{item?.time}</p>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default page;