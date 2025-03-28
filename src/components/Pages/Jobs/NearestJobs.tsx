"use client"
import JobCard from '@/components/Shared/JobCard';
import { useMyNearestJobsQuery } from '@/redux/api/jobsApi';
import React, { useState } from 'react';
import JobFilter from '../Contractor/JobFilter';
import ErrorComponent from '@/components/Shared/ErrorComponent';
import { ImSpinner8 } from 'react-icons/im';
import { DateRange } from 'react-day-picker';
import { jobType } from '@/redux/types';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const NearestJobs = () => {

    const [date, setDate] = useState<DateRange | undefined>(undefined);

    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('')

    const query: { startDate?: Date, endDate?: Date, searchTerm?: string } = {};

    if (date) {
        query["startDate"] = date?.from;
        query["endDate"] = date?.to;
    }
    if (debouncedSearchTerm) {
        query["searchTerm"] = debouncedSearchTerm;
    }

    const { isLoading, isSuccess, data, isError } = useMyNearestJobsQuery(query);


    return (
        <div>
            <div>
                <JobFilter date={date} setDate={setDate} setDebouncedSearchTerm={setDebouncedSearchTerm} />
            </div>
            {
                isLoading ?
                    <div>
                        <div className='min-h-40 flex items-center justify-center'>
                            <ImSpinner8 className="text-4xl text-primary_red animate-spin" />
                        </div>
                    </div>
                    :
                    isSuccess ?
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5 max-w-5xl mx-auto'> {
                            data?.data?.map(item => {
                                return <JobCard job={item} key={item?.id} />
                            })
                        }
                        </div> : isError ? <ErrorComponent /> : <></>
            }
        </div>
    );
};

export default NearestJobs;


// const JobsTable = (data: jobType[]) => {
//     return (
//         <>
//             <Table className="-z-10 font-figtree">
//                 <TableHeader className="!bg-primary_red !text-white font-figtree !rounded-t-lg">
//                     <TableRow className="!rounded-t-lg">
//                         <TableHead className="p-5 !rounded-tl-lg font-medium font-figtree">Title</TableHead>
//                         <TableHead className="font-medium font-figtree">Phone</TableHead>
//                         <TableHead className="font-medium font-figtree">Email</TableHead>
//                         <TableHead className="font-medium font-figtree">Job date</TableHead>
//                         {/* <TableHead className="font-medium font-figtree">Job completed</TableHead> */}
//                         <TableHead className="font-medium font-figtree">Price</TableHead>
//                         <TableHead className="font-medium font-figtree min-w-32">Status</TableHead>
//                         <TableHead className="font-medium font-figtree">Payment</TableHead>
//                         <TableHead className="text-right !rounded-tr-lg font-figtree p-5">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody className="border border-stroke">
//                     {data?.map((job) => (

//                         <TableRow key={job?.id}>
//                             <TableCell className="font-medium p-5">{job?.title}</TableCell>
//                             <TableCell>{job?.job?.phoneNumber}</TableCell>
//                             <TableCell>{job?.job?.email}</TableCell>
//                             <TableCell>{moment(job?.job?.preferredJobDate).format("MMM Do YYYY")}</TableCell>
//                             {/* <TableCell>{job?.job?.createdAt}</TableCell> */}
//                             <TableCell>${job?.job?.budget}</TableCell>
//                             <TableCell>
//                                 {job?.status == 'COMPLETED' ? <span className="bg-success/20 text-success px-2.5 py-1 rounded-full">Accepted</span> : <span className="bg-black/20 text-black px-2.5 py-1 rounded-full text-sm">In pregress</span>}
//                             </TableCell>
//                             <TableCell>
//                                 {job?.paymentStatus == "UNPAID" ? <span className="text-primary_red">Unpaid</span> : <span className="text-success">Paid</span>}
//                             </TableCell>
//                             <TableCell className="text-right p-5">

//                                 <DropdownMenu>
//                                     <DropdownMenuTrigger asChild className="outline-none focus:outline-none">
//                                         <button className="border border-stroke p-1.5 rounded">
//                                             <HiOutlineDotsVertical className="text-lg" />
//                                         </button>
//                                     </DropdownMenuTrigger>
//                                     <DropdownMenuContent className="z-40 bg-white font-figtree" align="end">
//                                         {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                                         <DropdownMenuSeparator /> */}



//                                         <DropdownMenuItem asChild className="hover:bg-zinc-100 duration-150">
//                                             <JobDetailsModal
//                                                 clicker={
//                                                     <p className="text-sm font-figtree px-2 w-full">View Job</p>
//                                                 }
//                                                 job={job?.job}
//                                             />
//                                         </DropdownMenuItem>

//                                         <DropdownMenuItem asChild className="hover:bg-zinc-100 duration-150">
//                                             <QuotesPreview
//                                                 clicker={
//                                                     <p className="text-sm font-figtree px-2 w-full">Preview Quote</p>
//                                                 }
//                                                 quote={job}
//                                             />
//                                         </DropdownMenuItem>

//                                         {/* <DropdownMenuItem className="hover:bg-zinc-100 duration-150">Complete</DropdownMenuItem>
//                                         <DropdownMenuItem className="hover:bg-zinc-100 duration-150">Cencel</DropdownMenuItem>
//                                         <DropdownMenuItem className="hover:bg-zinc-100 duration-150">Paid</DropdownMenuItem> */}
//                                     </DropdownMenuContent>
//                                 </DropdownMenu>


//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>

//             </Table>
//             {
//                 data?.length <= 0 && <section className='min-h-[calc(25vh)] flex flex-col items-center justify-center'>
//                     <Image src={emptyDataImg} className='h-28 w-auto mx-auto' alt='empty data' />
//                     <h5 className='text-base font-figtree text-center'>Data is empty</h5>
//                 </section>

//             }

//         </>

//     )
// }