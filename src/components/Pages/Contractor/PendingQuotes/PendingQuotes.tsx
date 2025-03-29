"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import moment from "moment";
import Image from "next/image";
import emptyDataImg from '../../../../../public/empty_data.jpg'
import Pagination from "@/components/ui/Pagination";
import { useMyJobsQuery } from "@/redux/api/jobsApi";
import { ImSpinner8 } from "react-icons/im";
import { myjobsType } from "@/redux/types";
import ErrorComponent from "@/components/Shared/ErrorComponent";
import { useState } from "react";
import SendQuote from "../../Jobs/SendQuote";


const PendingQuotes = () => {

    const [page, setPage] = useState<number>(1);

    const { isLoading, isSuccess, data, isError } = useMyJobsQuery({ status: "PENDING", page: page });

    return (
        <div className="pt-5 lg:pt-8">
            {
                isLoading ?
                    <div>
                        <div className='min-h-48 flex items-center justify-center'>
                            <ImSpinner8 className="text-4xl text-primary_red animate-spin" />
                        </div>
                    </div>
                    :
                    isSuccess ? <PendQuoteTable data={data?.data} totalPage={data?.meta?.totalPage} setPage={setPage} /> : isError ? <ErrorComponent /> : <></>
            }
        </div>
    );
};

export default PendingQuotes;


const PendQuoteTable = ({ data, totalPage, setPage }: { data: myjobsType[], totalPage: number, setPage: React.Dispatch<React.SetStateAction<number>> }) => {
    return (
        <div className="pb-8">
            <Table className="-z-10 font-figtree">
                <TableHeader className="!bg-primary_red !text-white font-figtree !rounded-t-lg">
                    <TableRow className="!rounded-t-lg">
                        <TableHead className="p-5 !rounded-tl-lg font-medium font-figtree">Name</TableHead>
                        <TableHead className="font-medium font-figtree">Phone</TableHead>
                        <TableHead className="font-medium font-figtree">Email</TableHead>
                        <TableHead className="font-medium font-figtree">Job date</TableHead>
                        {/* <TableHead className="font-medium font-figtree">Job completed</TableHead> */}
                        <TableHead className="font-medium font-figtree">Job Price</TableHead>
                        <TableHead className="font-medium font-figtree">Quote Price</TableHead>
                        <TableHead className="font-medium font-figtree min-w-32">Status</TableHead>
                        {/* <TableHead className="font-medium font-figtree">Payment</TableHead> */}
                        <TableHead className="text-right !rounded-tr-lg font-figtree p-5">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="border border-stroke">
                    {data?.map((job) => (

                        <TableRow key={job?.id}>
                            <TableCell className="font-medium p-5">{job?.job?.firstName + " " + job?.job?.lastName}</TableCell>
                            <TableCell>{job?.job?.phoneNumber}</TableCell>
                            <TableCell>{job?.job?.email}</TableCell>
                            <TableCell>{moment(job?.job?.preferredJobDate).format("MMM Do YYYY")}</TableCell>
                            {/* <TableCell>{job?.completeDate ? moment(job?.completeDate).format("MMM Do YYYY") : "N/A"}</TableCell> */}
                            <TableCell>${job?.job?.budget}</TableCell>
                            <TableCell>${job?.price}</TableCell>
                            <TableCell>
                                <span className="bg-black/20 text-black px-2.5 py-1 rounded-full text-sm">Pending</span>
                            </TableCell>

                            <TableCell className="text-right p-5">

                                <SendQuote clicker={<button className="bg-primary_red px-2 py-1.5 border border-primary_red text-white font-figtree rounded hover:bg-opacity-80 duration-200 text-xs">Requote</button>} id={job?.id}>

                                </SendQuote>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
            {
                data?.length <= 0 && <section className='min-h-[calc(25vh)] flex flex-col items-center justify-center'>
                    <Image src={emptyDataImg} className='h-28 w-auto mx-auto' alt='empty data' />
                    <h5 className='text-base font-figtree text-center'>Data is empty</h5>
                </section>
            }
            <div className="mt-3">
                <Pagination
                    totalPages={totalPage || 1}
                    initialPage={1}
                    onPageChange={(n) => setPage(n)}
                    maxDisplayedPages={5}
                />
            </div>
        </div >
    )
}