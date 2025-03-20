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
import { myjobsType } from '@/redux/types';
import moment from 'moment';

const QuotesPreview = ({ clicker, quote }: { clicker: React.ReactNode, quote: myjobsType }) => {
    return (
        <Dialog>
            <DialogTrigger className='w-full text-left py-1.5 hover:bg-zinc-100 duration-150'>
                {clicker}
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Quotes Preview</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>

                <div className="font-figtree">

                    {/* Job Information */}
                    <div className="px-4 py-4 space-y-2 bg-[#fce9ea80] rounded-md">


                        <div className="flex gap-1">
                            <span className="text-base font-medium">Date:</span>
                            <span className="text-base text-zinc-800">{moment(quote?.scheduleDateTime).format("MMM Do YYYY")}</span>
                        </div>

                        <div className="flex gap-1">
                            <span className="text-base font-medium">Budget:</span>
                            <span className="text-base text-zinc-800">${quote?.price}</span>
                        </div>

                        {/* <div className="flex gap-1 items-center">
                            <span className="text-base font-medium">Status:</span>
                            <span className="text-sm bg-blue-100 text-blue-600 px-2 py-0.5 rounded-lg">Completed</span>
                        </div> */}
                    </div>

                    {/* Additional Details Section */}
                    <div className="mt-5 px-4 py-4 space-y-2 bg-[#fce9ea80] rounded-md">
                        <div className="space-y-1">
                            <div className="text-base font-figtree">Message : </div>
                            <div className="text-base font-figtree">{quote?.message}</div>
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

export default QuotesPreview;