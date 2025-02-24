'use client'
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover"
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { format } from "date-fns"
import { DateRange } from "react-day-picker"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const MyJobsFilter = () => {
    const [status, setStatus] = useState('')
    const [date, setDate] = React.useState<DateRange | undefined>(undefined)


    return (
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 items-center py-8'>
            <form className=' bg-[#fce9ea80] shadow-md border border-stroke py-2.5 md:py-3 pl-3 md:pl-4 pr-3 md:pr-4 flex flex-row justify-between gap-x-3 items-center rounded-lg'>
                <CiSearch className='text-2xl text-zinc-700' />
                <input type="text" name='search' className='border-none outline-none focus:border-none focus:outline-none font-figtree text-base w-full placeholder:font-poppins placeholder:text-zinc-600 bg-transparent' placeholder={'search...'} />
            </form>
            <Popover>
                <PopoverTrigger asChild>
                    <button className={`w-full rounded-md border-[1.5px] bg-[#fce9ea80] shadow-md py-2.5 px-4 outline-none transition disabled:cursor-default disabled:bg-whiter dark:bg-form-input font-figtree placeholder:font-figtree text-left border-stroke text-zinc-500 flex flex-row gap-x-2 items-center`}>
                        <CalendarIcon className='h-5 w-5' />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>MM/DD/YYYY - MM/DD/YYYY</span>
                        )}
                    </button>
                </PopoverTrigger>
                <PopoverContent className="p-0 bg-form z-20">
                    <Calendar
                        // initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>

            {/* ------------------------status------------------ */}
            <Select
                onValueChange={(v) => setStatus(v)}
            // defaultValue={field.value}
            >
                <SelectTrigger className={`!bg-[#fce9ea80] px-4 py-3 rounded-md  text-sm font-figtree w-full text-primary bg-secondary border shadow-[0_4px_18px_0_rgba(0,0,0,0.09)] border-stroke`}>
                    <SelectValue placeholder={"Status"} />
                </SelectTrigger>
                <SelectContent className="rounded-sm text-sm font-figtree bg-form">
                    {
                        ["In progress", "Complete", "Cancel"]?.map(item => {
                            return <SelectItem key={item} value={item} className="h-10 font-figtree text-base font-medium hover:!bg-white">{item}</SelectItem>
                        })
                    }
                </SelectContent>
            </Select>

        </div>
    );
};

export default MyJobsFilter;