import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogClose,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import serviceImg from "../../../../public/works/img2.png"
import Image from 'next/image';

const JobDetailsModal = ({ clicker }: { clicker: React.ReactNode }) => {
    return (
        <Dialog>
            <DialogTrigger className='w-full text-left py-1.5 hover:bg-zinc-100 duration-150'>
                {clicker}
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Job Details</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>

                <div className="font-figtree">

                    {/* Job Information */}
                    <div className="px-4 py-4 space-y-2 bg-[#fce9ea80] rounded-md">
                        <div className="flex gap-1">
                            <span className="text-base font-medium">Job Title:</span>
                            <span className="text-base text-zinc-800">Pipe Repair in Kitchen</span>
                        </div>

                        <div className="flex gap-1">
                            <span className="text-base font-medium">Job Description:</span>
                            <span className="text-base text-zinc-800">Pipe Repair in Kitchen</span>
                        </div>

                        <div className="flex gap-1">
                            <span className="text-base font-medium">Category:</span>
                            <span className="text-base text-zinc-800">Home Service</span>
                        </div>

                        <div className="flex gap-1">
                            <span className="text-base font-medium">County:</span>
                            <span className="text-base text-zinc-800">Dublin</span>
                        </div>

                        <div className="flex gap-1">
                            <span className="text-base font-medium">Town:</span>
                            <span className="text-base text-zinc-800">Dublin</span>
                        </div>

                        <div className="flex gap-1">
                            <span className="text-base font-medium">Preferred Job Date:</span>
                            <span className="text-base text-zinc-800">Feb 10, 2025</span>
                        </div>

                        <div className="flex gap-1">
                            <span className="text-base font-medium">Time Preference:</span>
                            <span className="text-base text-zinc-800">8-12 AM</span>
                        </div>

                        <div className="flex gap-1">
                            <span className="text-base font-medium">Estimate Budget:</span>
                            <span className="text-base text-zinc-800">$140</span>
                        </div>

                        <div className="flex gap-1 items-center">
                            <span className="text-base font-medium">Status:</span>
                            <span className="text-sm bg-blue-100 text-blue-600 px-2 py-0.5 rounded-lg">Completed</span>
                        </div>
                    </div>

                    {/* Additional Details Section */}
                    <div className="mt-5 px-4 py-4 space-y-2 bg-[#fce9ea80] rounded-md">
                        <div className="flex items-center gap-1.5 mb-3">
                            <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path
                                    d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text-base font-figtree text-gray-600">Additional Details (Optional)</span>
                        </div>

                        <div className="rounded-lg overflow-hidden mb-3">
                            <Image src={serviceImg} height={1000} width={2000} alt="work banner" className="w-full h-48 object-cover" />
                        </div>

                        <div className="space-y-1">
                            <div className="text-base font-figtree">Special Instructions:</div>
                            <div className="text-base font-figtree">Urgent service. Please confirm availability.</div>
                        </div>
                    </div>


                </div>

                <DialogClose>
                    <button className="w-full bg-primary_red hover:opacity-80 text-white py-3 rounded-lg text-base font-medium duration-200">Close</button>
                </DialogClose>

            </DialogContent>
        </Dialog>
    )
}

export default JobDetailsModal;