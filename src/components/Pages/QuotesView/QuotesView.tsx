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
import React, { useState } from "react";
import { myjobsType } from "@/redux/types";
import moment from "moment";
import { useAcceptQuoteMutation } from "@/redux/api/jobsApi";
import { ImSpinner2 } from "react-icons/im";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function QuotesView({ clicker, quotes }: { clicker: React.ReactNode, quotes: myjobsType }) {

    const [postAccept, { isLoading }] = useAcceptQuoteMutation();

    const [open, setOpen] = useState<boolean>(false);

    const router = useRouter();

    const clickConfirm = async () => {
        try {
            const res = await postAccept({ id: quotes?.id }).unwrap();

            router.push(res?.data);

        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong, try again');
        } finally {
            setOpen(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild onClick={() => setOpen(true)} >
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
                            <Link href={`/profile/${quotes?.userId}`} className="flex gap-3">
                                <Image
                                    src={quotes?.user?.profilePicture || '/empty-profile-photo.jpg'}
                                    alt="Profile picture"
                                    width={500}
                                    height={500}
                                    className="rounded-md h-20 w-20 object-cover"
                                />
                                <div>
                                    <h2 className="text-lg font-figtree font-medium text-gray-900">{quotes?.user?.firstName + " " + quotes?.user?.lastName}</h2>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-base font-medium text-gray-900 font-figtree">Rating:</span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-base font-figtree text-gray-900">{quotes?.user?.rating}</span>
                                            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                                        </div>
                                    </div>
                                    <span className="text-base font-figtree text-gray-500">({quotes?.user?.reviewCount} Reviews)</span>
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
                                <span className="text-base font-figtree text-gray-900 font-semibold">${quotes?.price}</span>
                            </div>
                        </div>

                        {/* Schedule */}
                        <div className="space-y-0.5">
                            <span className="text-base font-figtree font-medium text-gray-900">Scheduled Date & Time:</span>
                            <div className="text-base font-figtree text-gray-500">{moment(quotes?.scheduleDateTime).format("MMM Do YYYY, h:mm a")}</div>
                        </div>

                        {/* Message */}
                        <div className="space-y-0.5">
                            <span className="text-base font-figtree font-medium text-gray-900">Additional Message:</span>
                            <p className="text-base font-figtree text-gray-500">
                                {quotes?.message}
                            </p>
                        </div>

                        <div className="w-full grid grid-cols-2 gap-x-2 items-center">

                            <Link href={`/profile/${quotes?.userId}`}>
                                <button className="w-full bg-primary_red hover:bg-opacity-85 text-white font-medium px-4 py-2.5 rounded-md transition-colors font-figtree">
                                    View Profile
                                </button>
                            </Link>

                            <button onClick={clickConfirm} type='submit' disabled={isLoading} className='bg-primary_red py-2.5 font-figtree text-secondary rounded-md w-full hover:bg-opacity-80 duration-200 flex flex-row gap-x-2 items-center justify-center disabled:bg-opacity-60 text-white'>
                                {isLoading && <ImSpinner2 className="text-lg text-white animate-spin" />}
                                <span>{isLoading ? 'Loading...' : "Confirm"}</span>
                            </button>

                        </div>

                    </div>
                </div>

            </DialogContent>
        </Dialog>
    )
}


export default QuotesView;