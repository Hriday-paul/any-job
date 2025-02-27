import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { HiOutlineDotsVertical } from "react-icons/hi";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import JobDetailsModal from "./JobDetailsModal";


const data = [
    {
        name: "Hriday Paul",
        phone: "+8801678678768",
        job_create_date : "Jan 10, 2025 - 09 AM",
        date: "Feb 10, 2025 - 10 AM",
        price: 250,
        status: "In pregress",
        isPaid: true,
    },
    {
        name: "Seanokane",
        phone: "+8801678678768",
        job_create_date : "Jan 10, 2025 - 09 AM",
        date: "Feb 10, 2025 - 10 AM",
        price: 180,
        status: "Complete",
        isPaid: false,
    },
    {
        name: "Hriday Paul",
        phone: "+8801678678768",
        job_create_date : "Jan 10, 2025 - 09 AM",
        date: "Feb 15, 2025 - 10 AM",
        price: 50,
        status: "Cancel",
        isPaid: true,
    },
    {
        name: "Hriday Paul",
        phone: "+8801678678768",
        job_create_date : "Jan 10, 2025 - 09 AM",
        date: "Feb 10, 2025 - 10 AM",
        price: 250,
        status: "In pregress",
        isPaid: true,
    },
    {
        name: "Seanokane",
        phone: "+8801678678768",
        job_create_date : "Jan 10, 2025 - 09 AM",
        date: "Feb 10, 2025 - 10 AM",
        price: 180,
        status: "Complete",
        isPaid: false,
    },
];

function MyJobTable() {
    return (
        <div className="pb-8">
            <Table className="-z-10 font-figtree">
                <TableHeader className="!bg-primary_red !text-white font-figtree !rounded-t-lg">
                    <TableRow className="!rounded-t-lg">
                        <TableHead className="p-5 !rounded-tl-lg font-medium font-figtree">Name</TableHead>
                        <TableHead className="font-medium font-figtree">Phone</TableHead>
                        <TableHead className="font-medium font-figtree">Job created</TableHead>
                        <TableHead className="font-medium font-figtree">Job completed</TableHead>
                        <TableHead className="font-medium font-figtree">Price</TableHead>
                        <TableHead className="font-medium font-figtree min-w-32">Status</TableHead>
                        <TableHead className="font-medium font-figtree">Payment</TableHead>
                        <TableHead className="text-right !rounded-tr-lg font-figtree p-5">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="border border-stroke">
                    {data.map((job) => (
                        <TableRow key={job?.name}>
                            <TableCell className="font-medium p-5">{job?.name}</TableCell>
                            <TableCell>{job?.phone}</TableCell>
                            <TableCell>{job?.job_create_date}</TableCell>
                            <TableCell>{job?.date}</TableCell>
                            <TableCell>${job?.price}</TableCell>
                            <TableCell>
                                {job?.status == 'Cancel' ? <span className="bg-primary_red/20 text-primary_red px-2.5 py-1 rounded-full">Cancel</span> : job?.status == 'Complete' ? <span className="bg-success/20 text-success px-2.5 py-1 rounded-full">Complete</span> : <span className="bg-black/20 text-black px-2.5 py-1 rounded-full text-sm">In pregress</span>}
                            </TableCell>
                            <TableCell>
                                {!job?.isPaid ? <span className="text-primary_red">Unpaid</span> : <span className="text-success">Paid</span>}
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
                                            />
                                        </DropdownMenuItem>

                                        <DropdownMenuItem className="hover:bg-zinc-100 duration-150">Complete</DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-zinc-100 duration-150">Cencel</DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-zinc-100 duration-150">Paid</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>


                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </div>
    )
}


export default MyJobTable;