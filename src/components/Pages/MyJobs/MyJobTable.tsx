import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { HiOutlineDotsVertical } from "react-icons/hi";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import JobDetailsModal from "./JobDetailsModal";
import { myjobsType } from "@/redux/types";
import QuotesPreview from "./QuotesPreview";
import moment from "moment";
import Image from "next/image";
import emptyDataImg from '../../../../public/empty_data.jpg'

function MyJobTable({ data }: { data: myjobsType[] }) {
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
                        <TableHead className="font-medium font-figtree">Price</TableHead>
                        <TableHead className="font-medium font-figtree min-w-32">Status</TableHead>
                        <TableHead className="font-medium font-figtree">Payment</TableHead>
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
                            {/* <TableCell>{job?.job?.createdAt}</TableCell> */}
                            <TableCell>${job?.job?.budget}</TableCell>
                            <TableCell>
                                {job?.status == 'COMPLETED' ? <span className="bg-success/20 text-success px-2.5 py-1 rounded-full">Accepted</span> : <span className="bg-black/20 text-black px-2.5 py-1 rounded-full text-sm">In pregress</span>}
                            </TableCell>
                            <TableCell>
                                {!job?.paymentStatus ? <span className="text-primary_red">Unpaid</span> : <span className="text-success">Paid</span>}
                            </TableCell>
                            <TableCell className="text-right p-5">

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild className="outline-none focus:outline-none">
                                        <button className="border border-stroke p-1.5 rounded">
                                            <HiOutlineDotsVertical className="text-lg" />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="z-40 bg-white font-figtree" align="end">
                                        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator /> */}



                                        <DropdownMenuItem asChild className="hover:bg-zinc-100 duration-150">
                                            <JobDetailsModal
                                                clicker={
                                                    <p className="text-sm font-figtree px-2 w-full">View Job</p>
                                                }
                                                job={job?.job}
                                            />
                                        </DropdownMenuItem>

                                        <DropdownMenuItem asChild className="hover:bg-zinc-100 duration-150">
                                            <QuotesPreview
                                                clicker={
                                                    <p className="text-sm font-figtree px-2 w-full">Preview Quote</p>
                                                }
                                                quote={job}
                                            />
                                        </DropdownMenuItem>

                                        {/* <DropdownMenuItem className="hover:bg-zinc-100 duration-150">Complete</DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-zinc-100 duration-150">Cencel</DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-zinc-100 duration-150">Paid</DropdownMenuItem> */}
                                    </DropdownMenuContent>
                                </DropdownMenu>


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
        </div >
    )
}


export default MyJobTable;