'use client'
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover"
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { format } from "date-fns"
import { DateRange } from "react-day-picker"

const JobFilter = () => {

    const [date, setDate] = React.useState<DateRange | undefined>(undefined)


    return (
        <div className='max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center py-8'>
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
                <PopoverContent className="p-0 bg-form">
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
        </div>
    );
};

export default JobFilter;