import { HomeSearch } from '@/components/Pages/Home/Section1/Title';
import ContractorCard from '@/components/Pages/Services/ContractorCard';
import FilterService from '@/components/Pages/Services/FilterService';
import React from 'react';
import { CgArrowsBreakeV } from "react-icons/cg";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { MdOutlineArrowBackIosNew } from 'react-icons/md';


const page = () => {
    return (
        <div className='container py-10'>

            <h3 className='text-3xl font-figtree font-semibold text-black text-center'>Focuses on finding the right service for your needs</h3>
            <div className={"max-w-full md:max-w-2xl lg:max-w-3xl mx-auto flex md:flex-row gap-x-1.5 md:gap-x-3 lg:gap-x-5 items-center my-5"}>

                <HomeSearch />

                <button className="rounded-full px-3 md:px-3.5 lg:px-5 py-2 md:py-2.5 lg:py-3 m-1 overflow-hidden relative group cursor-pointer border font-medium border-red-200 bg-[#ffe5e5] shadow text-center hover:bg-primary_red hover:text-white duration-300 flex flex-row gap-x-1 items-center text-primary_red">
                    Recommended
                    <CgArrowsBreakeV className='text-2xl' />
                </button>

            </div>


            {/* --------------services--------------- */}

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-5'>
                <div className='col-span-1 p-4'>

                    {/* -----------lg device----------------- */}
                    <div className='hidden lg:block shadow-md bg-white p-3 rounded-md'>
                        <button className='bg-primary_red rounded-lg text-white w-full px-2 py-2 xl:py-2.5 text-lg font-figtree font-semibold cursor-default'>
                            <p>Filters</p>
                        </button>
                        <FilterService />
                    </div>

                    {/* --------------medium device------------- */}
                    <div className='lg:hidden '>
                        <Popover >
                            <PopoverTrigger asChild>
                                <button className='bg-primary_red rounded text-white px-4 py-2.5 text-base font-figtree font-semibold cursor-default w-full flex flex-row gap-x-5 items-center justify-between'>
                                    <p>Filters</p>
                                    <MdOutlineArrowBackIosNew className='-rotate-90 text-lg' />
                                </button>
                            </PopoverTrigger>
                            <PopoverContent side='bottom' align='start'>
                                <FilterService />
                            </PopoverContent>
                        </Popover>
                    </div>

                </div>
                <div className='col-span-1 lg:col-span-2 grid-cols-1 grid md:grid-cols-2 gap-5'>
                    <ContractorCard />
                    <ContractorCard />
                    <ContractorCard />
                    <ContractorCard />
                    <ContractorCard />
                </div>
            </div>


        </div>
    );
};

export default page;