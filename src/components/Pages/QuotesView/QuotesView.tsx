"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogClose,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import userImg from '../../../../public/quotes/user.jpeg'
import Link from "next/link";
import Swal from "sweetalert2";

export function QuotesView({ clicker }: { clicker: React.ReactNode }) {

    const clickConfirm = () => {
        Swal.fire({
            title: "Before we proceed, please note that an additional 2% service charge will be applied to the total price for platform usage.",
            text: "Are you available to pay the additional 2% service charge",
            customClass: {
                title: "text-xl text-black font-medium font-figtree",
                container: "text-sm font-medium font-figtree text-zinc-800",
                cancelButton: "bg-primary_red text-white",
                confirmButton: "bg-primary_red text-white"
            },
            icon: 'warning',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Proceed with Payment",
            confirmButtonColor: "#38CB6E",
            cancelButtonText: "Cancel",
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Quotes accepted",
                    text: "Contructor quotes accepted",
                    icon: "success",
                    customClass: {
                        title: "text-xl text-black font-medium font-figtree",
                        container: "text-sm font-medium font-figtree text-zinc-800",
                        cancelButton: "bg-primary_red text-white",
                        confirmButton: "bg-primary_red text-white"
                    },
                    showCancelButton: true,
                    showConfirmButton: false,
                    cancelButtonText: "Close",
                });
            }
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {clicker}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Quotes View</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>

                <div className="px-4 py-2">
                    <div className="space-y-5">
                        {/* Header with profile info and close button */}
                        <div className="flex justify-between items-start">
                            <Link href='/contructor/45' className="flex gap-3">
                                <Image
                                    src={userImg}
                                    alt="Profile picture"
                                    width={56}
                                    height={56}
                                    className="rounded-md h-20 w-20 object-cover"
                                />
                                <div>
                                    <h2 className="text-lg font-figtree font-medium text-gray-900">John OConner</h2>
                                    <p className="text-gray-600 font-figtree">abc@gmail.com</p>
                                    <p className="text-gray-600 font-figtree">+35312345678</p>
                                </div>
                            </Link>
                            {/* <button aria-label="Close" className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                                        <X className="w-5 h-5 text-gray-400" />
                                    </button> */}
                        </div>

                        {/* Price and Rating */}
                        <div className="space-y-2">
                            <div className="flex items-baseline gap-1.5">
                                <span className="text-base font-medium font-figtree text-gray-900">Quoted Price:</span>
                                <span className="text-base font-figtree text-gray-900 font-semibold">$140</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <span className="text-base font-medium text-gray-900 font-figtree">Rating:</span>
                                <div className="flex items-center gap-1">
                                    <span className="text-base font-figtree text-gray-900">4.9</span>
                                    <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                                    <span className="text-base font-figtree text-gray-500">(12 Reviews)</span>
                                </div>
                            </div>
                        </div>

                        {/* Schedule */}
                        <div className="space-y-0.5">
                            <span className="text-base font-figtree font-medium text-gray-900">Scheduled Date & Time:</span>
                            <div className="text-base font-figtree text-gray-500">Sunday, February 28, 2025, at 10:01 AM</div>
                        </div>

                        {/* Message */}
                        <div className="space-y-0.5">
                            <span className="text-base font-figtree font-medium text-gray-900">Additional Message:</span>
                            <p className="text-base font-figtree text-gray-500">
                                Hey Dear, Im available for your job and can get it done quickly. Let me know!
                            </p>
                        </div>

                        {/* View Profile Button */}
                        <DialogClose className="w-full grid grid-cols-2 gap-x-2 items-center">
                            <button onClick={clickConfirm} className="w-full bg-primary_red hover:bg-opacity-85 text-white font-medium px-4 py-2.5 rounded-md transition-colors font-figtree">
                                Confirm
                            </button>
                            <Link href='/contructor/45'>
                                <button className="w-full bg-primary_red hover:bg-opacity-85 text-white font-medium px-4 py-2.5 rounded-md transition-colors font-figtree">
                                    View Profile
                                </button>
                            </Link>
                        </DialogClose>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    )
}


export default QuotesView;