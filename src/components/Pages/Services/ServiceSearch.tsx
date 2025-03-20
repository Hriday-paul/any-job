"use client"
import React, { SetStateAction, useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoSearchOutline } from 'react-icons/io5';

const ServiceSearch = ({ setDebouncedSearchTerm }: { setDebouncedSearchTerm: React.Dispatch<SetStateAction<string>> }) => {

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    return (
        <div className='w-8/12 md:w-4/5 relative mx-auto'>
            <div className={`bg-white border rounded-full shadow border-stroke py-2.5 md:py-3 lg:py-4 pl-2 md:pl-4 pr-12 md:pr-14 flex flex-row justify-between gap-x-1 md:gap-x-3 items-center relative`}>
                <CiSearch className='text-2xl text-zinc-500' />
                <input
                    type="text"
                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                    name='search'
                    className='border-none outline-none focus:border-none focus:outline-none font-figtree text-sm md:text-base w-full placeholder:font-figtree placeholder:text-zinc-400 bg-white'
                    placeholder="Search Service"
                />
                <button type='submit' className='absolute top-0.5 md:top-0.5 lg:top-[3px] right-0 bg-primary_red hover:bg-opacity-90 duration-200 text-center px-2.5 py-2.5 rounded-full'>
                    <IoSearchOutline className='text-white text-xl md:text-2xl lg:text-3xl' />
                </button>

            </div>
        </div>
    );
};

export default ServiceSearch;